import * as React from "react"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'
import {
    Create,
    TextInput,
    ReferenceInput,
    SelectInput,
    TabbedForm,
    FormTab,
    NumberInput,
    DateInput,
    required
} from 'react-admin'

const useStyles = makeStyles({
    accordion: {
        width: "100%",
        marginBottom: "2% !important"
    },
})


/*const CreateToolbar = props => (
    <Toolbar {...props}>
        <SaveButton label="ALTA" onClick={console.log("create")} />
    </Toolbar>
)*/

const UserCreate = props => {
    const classes = useStyles()

    return(
        <Create title="Alta de Alumno" {...props}>
            <TabbedForm >
                <FormTab label="General">
                    <Grid container spacing={2} style={{ width: "100%" }}>
                        <Grid item xs={4}>
                            <TextInput fullWidth={true} source="a_apellido" label="Apellido" validate={required("Requerido")}/>
                            <SelectInput fullWidth={true} source="a_tdoc" label="Tipo de Documento" validate={required("Requerido")} choices={[
                                { id: 'DNI', name: 'DNI' },
                                { id: 'CI', name: 'Cédula de Identidad' },
                                { id: 'P', name: 'Pasaporte' },
                                { id: 'LC', name: 'Libreta Cívica' }
                            ]} />
                            <TextInput fullWidth={true} source="a_domicilio" validate={required("Requerido")} label="Domicilio" />
                            <TextInput fullWidth={true} source="a_nacionalidad" validate={required("Requerido")} label="Nacionalidad" />
                            <DateInput fullWidth={true} source="a_nacimiento" validate={required("Requerido")} label="Fecha de Nacimiento" />
                            <TextInput fullWidth={true} source="a_colegio" label="Colegio" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextInput fullWidth={true} source="a_nombres" validate={required("Requerido")} label="Nombres" />
                            <TextInput fullWidth={true} source="a_dni" validate={required("Requerido")} label="DNI" />
                            <TextInput fullWidth={true} source="a_localidad" validate={required("Requerido")} label="Localidad" />
                            <ReferenceInput fullWidth={true} label="Curso" source="a_curso" reference="cursos" alwaysOn>
                                <SelectInput optionText="c_curso" />
                            </ReferenceInput>
                            <TextInput fullWidth={true} source="a_obra_social" label="Obra Social" />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectInput fullWidth={true} source="a_sexo" label="Sexo" validate={required("Requerido")} choices={[
                                { id: 'F', name: 'Femeino' },
                                { id: 'M', name: 'Masculino' },
                                { id: 'O', name: 'Otro' },
                                { id: 'PnD', name: 'Prefiero no decirlo' }
                            ]} />
                            <TextInput fullWidth={true} source="a_email_factura" validate={required("Requerido")} label="Email" />
                            <TextInput fullWidth={true} source="a_telefono" validate={required("Requerido")} label="Teléfono" />
                            <NumberInput fullWidth={true} source="a_cant_hnos" label="Cantidad de Hermanos" />
                            <TextInput fullWidth={true} source="a_nro_afiliado" label="Nro de Afiliado" />
                        </Grid>
                    </Grid>
                </FormTab>
                <FormTab label="Facturación">
                    <Grid container spacing={2} style={{ width: "100%" }}>
                        <Grid item xs={4}>
                            <TextInput fullWidth={true} label="Nombre" validate={required("Requerido")} source="a_nombrefactura" />
                            <TextInput fullWidth={true} label="Domicilio" validate={required("Requerido")} source="a_domicilio" />
                            <TextInput fullWidth={true} label="Tipo de Responsabilidad" validate={required("Requerido")} source="a_tiporesp" />
                            <NumberInput fullWidth={true} label="CUIT" validate={required("Requerido")} source="a_cuit" />
                            <TextInput fullWidth={true} label="Email" validate={required("Requerido")} source="a_email_factura" />
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
                        </Grid>
                    </Grid>
                </FormTab>
            </TabbedForm>
        </Create>
    )
}

export default UserCreate