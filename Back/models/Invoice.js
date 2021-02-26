class Invoice {
    recordQuantity
    salesPoint
    invoiceType
    concept
    documentType
    documentNumber
    initialInvoice
    lastInvoice
    invoiceDate
    totalAmount
    netAmountWithoutVAT
    netAmount
    vatExcemptAmount
    vatAmount
    taxesAmount
    currency = "PES"
    quote = 1
    cae
    caeExpirationDate

    toJson = () => {
        return {
            'CantReg' 	: this.recordQuantity,
            'PtoVta' 	: this.salesPoint,
            'CbteTipo' 	: this.invoiceType,
            'Concepto' 	: this.concept,
            'DocTipo' 	: this.documentType,
            'DocNro' 	: this.documentNumber,
            'CbteDesde' : this.initialInvoice,
            'CbteHasta' : this.lastInvoice,
            'CbteFch' 	: this.invoiceDate,
            'ImpTotal' 	: this.totalAmount,
            'ImpTotConc': this.netAmountWithoutVAT,
            'ImpNeto' 	: this.netAmount,
            'ImpOpEx' 	: this.vatExcemptAmount,
            'ImpIVA' 	: this.vatAmount,
            'ImpTrib' 	: this.taxesAmount,
            'MonId' 	: this.currency,
            'MonCotiz' 	: this.quote
        }
    }
}

/*
    'CantReg' 	: 1,        // Cantidad de comprobantes a registrar
    'PtoVta' 	: 1,        // Punto de venta
    'CbteTipo' 	: 11,       // Tipo de comprobante (ver tipos disponibles) 
    'Concepto' 	: 1,        // Concepto del Comprobante: (1)Productos, (2)Servicios, (3)Productos y Servicios
    'DocTipo' 	: 99,       // Tipo de documento del comprador (99 consumidor final, ver tipos disponibles)
    'DocNro' 	: 0,        // Número de documento del comprador (0 consumidor final)
    'CbteDesde' : 1,        // Número de comprobante o numero del primer comprobante en caso de ser mas de uno
    'CbteHasta' : 1,        // Número de comprobante o numero del último comprobante en caso de ser mas de uno
    'CbteFch' 	: parseInt(date.replace(/-/g, '')), // (Opcional) Fecha del comprobante (yyyymmdd) o fecha actual si es nulo
    'ImpTotal' 	: 100,      // Importe total del comprobante
    'ImpTotConc': 0,        // Importe neto no gravado
    'ImpNeto' 	: 100,      // Importe neto gravado
    'ImpOpEx' 	: 0,        // Importe exento de IVA
    'ImpIVA' 	: 0,        // Importe total de IVA
    'ImpTrib' 	: 0,        // Importe total de tributos
    'MonId' 	: 'PES',    // Tipo de moneda usada en el comprobante (ver tipos disponibles)('PES' para pesos argentinos) 
    'MonCotiz' 	: 1,        // Cotización de la moneda usada (1 para pesos argentinos)  */