import * as React from "react"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'
import {
    TextInput,
    Edit,
    SelectInput,
    TabbedForm,
    FormTab,
    NumberInput,
    DateInput,
    required,
} from 'react-admin'

const useStyles = makeStyles({
    accordion: {
        width: "100%",
        marginBottom: "2% !important"
    },
})

const UserTitle = ({ record }) => <span>Alumno: {record ? record.a_apellido : ''}</span>

const UserEdit = props => {
    const classes = useStyles()
    return (
        <Edit title={<UserTitle />} {...props}>
            <TabbedForm>
                <FormTab label="General">
                    <Grid container spacing={2} style={{ width: "100%" }}>
                        <Grid item xs={4}>
                            <TextInput fullWidth={true} disabled={true} source="a_legajo" label="Legajo" />
                            <SelectInput fullWidth={true} source="a_tdoc" label="Tipo de Documento" choices={[
                                { id: 'DNI', name: 'DNI' },
                                { id: 'CI', name: 'CEDULA IDENTIDAD' },
                                { id: 'P', name: 'PASAPORTE' },
                                { id: 'LC', name: 'LIBRETA CÍVICA' }
                            ]} />
                            <TextInput fullWidth={true} source="a_domicilio"  label="Domicilio" />
                            <TextInput fullWidth={true} source="a_nacionalidad"  label="Nacionalidad" />
                            <DateInput fullWidth={true} source="a_nacimiento" label="Fecha de Nacimiento" />
                            <TextInput fullWidth={true} source="a_colegio" label="Colegio" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextInput fullWidth={true} source="a_apellido" label="Apellido" />
                            <TextInput fullWidth={true} source="a_dni" label="DNI" />
                            <TextInput fullWidth={true} source="a_localidad" label="Localidad" />
                            <SelectInput fullWidth={true} source="a_curso" label="Curso" validate={required("Requerido")} choices={[
                            ]} />
                            <TextInput fullWidth={true} source="a_obra_social" label="Obra Social" />
                            <DateInput fullWidth={true} source="a_fecha_inscripcion" label="Fecha de Inscripción" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextInput fullWidth={true} source="a_nombres" label="Nombres" />
                            <SelectInput fullWidth={true} source="a_sexo" label="Sexo" validate={required("Requerido")} choices={[
                                { id: 'F', name: 'Femeino' },
                                { id: 'M', name: 'Masculino' },
                                { id: 'O', name: 'Otro' },
                                { id: 'PnD', name: 'Prefiero no decirlo' }
                            ]} />
                            <TextInput fullWidth={true} source="a_email_factura" label="Email" />
                            <TextInput fullWidth={true} source="a_telefono" label="Teléfono" />
                            <TextInput fullWidth={true} source="a_nro_afiliado" label="Nro de Afiliado" />
                            <NumberInput fullWidth={true} source="a_cant_hnos" label="Cantidad de Hermanos" />
                        </Grid>
                    </Grid>
                </FormTab>
                <FormTab label="Facturación">
                    <Grid container spacing={2} style={{ width: "100%" }}>
                        <Grid item xs={4}>
                            <TextInput fullWidth={true} label="Nombre" source="a_nombrefactura" />
                            <TextInput fullWidth={true} label="Domicilio" source="a_domicilio" />
                            <TextInput fullWidth={true} label="Tipo de Responsabilidad" source="a_tiporesp" />
                            <TextInput fullWidth={true} label="CUIT" source="a_cuit" />
                            <TextInput fullWidth={true} label="Email" source="a_email_factura" />
                        </Grid>
                    </Grid>
                </FormTab>
                <FormTab label="Familia">
                    <Accordion className={classes.accordion} defaultExpanded={true}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Datos de la madre</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={2} style={{ width: "100%" }}>
                                <Grid item xs={4}>
                                    <TextInput fullWidth={true} source="a_mama" label="Apellido y Nombre" />
                                    <TextInput fullWidth={true} source="a_mama_domicilio"  label="Domicilio" />
                                    <TextInput fullWidth={true} source="a_mama_localidad" label="Localidad" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput fullWidth={true} source="a_telefono1"  label="Telefono Fijo" />
                                    <TextInput fullWidth={true} source="a_telefono2" label="Teléfono Celular" />
                                    <TextInput fullWidth={true} source="a_mail_mama" label="Email" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput fullWidth={true} source="a_mama_ocupacion" label="Ocupación" />
                                    <TextInput fullWidth={true} source="a_dni_mama" label="DNI" />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Datos del padre</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={2} style={{ width: "100%" }}>
                                <Grid item xs={4}>
                                    <TextInput fullWidth={true} source="a_papa" label="Nombre y Apellido" />
                                    <TextInput fullWidth={true} source="a_papa_domicilio"  label="Domicilio" />
                                    <TextInput fullWidth={true} source="a_papa_localidad" label="Localidad" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput fullWidth={true} source="a_telefono3"  label="Telefono Fijo" />
                                    <TextInput fullWidth={true} source="a_telefono4" label="Teléfono Celular" />
                                    <TextInput fullWidth={true} source="a_mail_papa" label="Email" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput fullWidth={true} source="a_papa_ocupacion" label="Ocupación" />
                                    <TextInput fullWidth={true} source="a_dni_papa" label="DNI" />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography className={classes.heading}>Datos de familiares</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={2} style={{ width: "100%" }}>
                                <Grid item xs={4}>
                                    <TextInput fullWidth={true} source="a_familiar" label="Familiar" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput fullWidth={true} source="a_telefono5"  label="Telefono Fijo" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput fullWidth={true} source="a_telefono6" label="Teléfono Celular" />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </FormTab>
                <FormTab label="Bonificaciones">
                    <Grid container spacing={2} style={{ width: "100%" }}>
                        <Grid item xs={4}>
                            <NumberInput fullWidth={true} source="a_dto_hno" label="Dto hno" />
                            <NumberInput fullWidth={true} source="a_dto_pago" label="Dto pago" />
                            <NumberInput fullWidth={true} source="a_beca" label="Beca" />
                        </Grid>
                    </Grid>
                </FormTab>
                <FormTab label="Observaciones">
                    <Grid container spacing={2} style={{ width: "100%" }}>
                        <Grid item xs={4}>
                            <TextInput fullWidth={true} multiline source="a_observaciones" label="Observaciones" />
                            <TextInput fullWidth={true} source="a_motivo_baja"  label="Motivo de Baja" />
                            <DateInput fullWidth={true} source="a_baja" label="Fecha de Baja" />
                        </Grid>
                    </Grid>
                </FormTab>
            </TabbedForm>
        </Edit>
    )
}

export default UserEdit