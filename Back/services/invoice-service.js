'use strict'

const Afip = require('@afipsdk/afip.js');
const { randomInt } = require('crypto');
const afip = new Afip({ CUIT: 20392078380 })
const ejs = require("ejs");
const pdf = require("html-pdf");
const path = require("path");

const InvoiceService = {

    async createInvoice(invoice) {
        const date = new Date(Date.now() - ((new Date()).getTimezoneOffset() * 60000)).toISOString().split('T')[0];

        let data = invoice.toJson()
        
        const res = await afip.ElectronicBilling.createVoucher(data, true);
        
        res['CAE']; //CAE asignado el comprobante
        res['CAEFchVto']; //Fecha de vencimiento del CAE (yyyy-mm-dd)
        console.log(res)
        return res
    },

    async getLastInvoice() {
        //Devuelve el número del último comprobante creado para el punto de venta 1 y el tipo de comprobante 6 (Factura B)
        const lastInvoice = await afip.ElectronicBilling.getLastVoucher(1,11)
        console.log(lastInvoice)
        return lastInvoice
    },

    async getServerStatus() {
        return await afip.ElectronicBilling.getServerStatus()
    },

    async getInvoiceInfo() {
        //Devuelve la información del comprobante 1 para el punto de venta 1 y el tipo de comprobante 6 (Factura B)
        const invoiceInfo = await afip.ElectronicBilling.getVoucherInfo(1,1,11) 

        if(invoiceInfo === null){
            console.log('El comprobante no existe')
        }
        else{
            console.log('Esta es la información del comprobante:')
            console.log(invoiceInfo)
        }
        return invoiceInfo
    },
    
    //Error: (602) Sin Resultados: - Metodo FEParamGetPtosVenta
    async salesPoints() {     
        return await afip.ElectronicBilling.getSalesPoints()
    },

    generateBarcode(value) {
        const JsBarcode = require('jsbarcode')
        const { createCanvas } = require("canvas")
        const canvas = createCanvas()
        const barcode = JsBarcode(canvas, value)
        console.log(barcode)
        return barcode
    },

    generatePDFInvoice(invoice){
        let barcode = `${afip.CUIT}${invoice.invoiceType}${invoice.salesPoint}${invoice.cae}${invoice.caeExpirationDate}`
        barcode += this.getIdentifierDigit(barcode)
        console.log(barcode)
        thisgenerateBarcode(barcode)

        ejs.renderFile(path.join(__dirname, '../templates/pages', "invoice.ejs"), {}, (err, data) => {
            if (err) {
                return err
            } 
            else {
                const options = {
                    "height": "7.1in",
                    "width": "4.9in"
                }             
                pdf.create(data, options).toFile(`report_${randomInt(100)}.pdf`, function (err, data) {
                    if (err) {
                        return err
                    } else {
                        return "File created successfully"
                    }
                });
            }
        })
    },

    getIdentifierDigit(value){
        let result
        let identifierDigit = 0
        result = Array.from(value).reduce(getReducer(1), 0)
        result *= 3
        result += Array.from(value).reduce(getReducer(0), 0)
        while((result + identifierDigit) % 10 !== 0){
            identifierDigit++
        }
        return identifierDigit
    },

    getReducer(value){
        return (accumulator, currentValue, index) => {
            if((index + 1) % 2 === value) return accumulator + Number(currentValue)
            return accumulator
        }
    }
}

module.exports = InvoiceService