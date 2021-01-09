import * as React from "react"
import { cloneElement } from 'react'
import { CustomPagination, CustomUrlField } from '../components/custom-components'
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    List as AdminList,
    Datagrid,
    TextField,
    Create,
    TextInput,
    Edit,
    EditButton,
    ReferenceInput,
    SelectInput,
    Filter,
    useListContext,
    TopToolbar,
    CreateButton,
    ExportButton,
    sanitizeListRestProps,
    Button,
    Show,
    SimpleShowLayout,
    RichTextField,
    TabbedForm,
    FormTab,
    NumberInput,
    DateInput
} from 'react-admin'

const useStyles = makeStyles({
    gridTitle: {
        margin: "1% 1% 0"
    },
    accordion: {
        width: "100%",
        marginBottom: "2% !important"
    },
  });
  

const UserTitle = ({ record }) => <span>Alumno {record ? `"${record.a_apellido}"` : ''}</span>
const DeleteButton = props => <Button startIcon={<PersonAddDisabledIcon />} style={{color: "red"}} onClick={() => console.log("Soy un boton")} label="Dar de baja" />

const UserFilter = (props) => (
    <Filter label="Filtros" {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <ReferenceInput label="Curso" source="a_curso" reference="cursos" allowEmpty>
            <SelectInput optionText="c_curso" />
        </ReferenceInput>
    </Filter>
)

const UserShow = props => (
    <Show
        {...props}
        /* disable the app title change when shown */
        title=" "
        actions={null}
    >
        <SimpleShowLayout>
            <RichTextField source="body" />
        </SimpleShowLayout>
    </Show>
)

export const UserList = props => (
    <AdminList 
        filters={<UserFilter />} 
        actions={<ListActions />} 
        bulkActionButtons={<DeleteButton />} 
        pagination={<CustomPagination rowsPerPageOptions={[15, 30, 45, 60]} />} 
        perPage={30}
        sort={{field: "a_legajo", order: "ASC"}}
        {...props}
    >
        <Datagrid expand={<UserShow />}>
            <TextField source="a_legajo" label="Legajo" />
            <TextField source="a_apellido" label="Apellido" />
            <TextField source="a_nombres" label="Nombres" />
            <TextField source="a_dni" label="DNI" />
            <CustomUrlField source="a_email_factura" label="Email" />
            <TextField source="a_domicilio" label="Domicilio" />
            <EditButton label="Editar" />
        </Datagrid>
    </AdminList>
)
/*
    <ReferenceField source="a_curso" reference="cursos" label="Curso" >
        <TextField source="c_curso"/>
    </ReferenceField>
*/

export const UserEdit = props => {
    const classes = useStyles()
    return (
        <Edit title={<UserTitle />} {...props}>
            <TabbedForm>
                <FormTab label="General">
                    <Grid container spacing={2} style={{ width: "100%" }}>
                        <Grid item xs={4}>
                            <TextInput fullWidth={true} disabled source="a_legajo" label="Legajo" />
                            <TextInput fullWidth={true} source="a_apellido" label="Apellido" />
                            <TextInput fullWidth={true} source="a_email_factura" label="Email" />
                            <TextInput fullWidth={true} source="a_domicilio"  label="Domicilio" />
                            <TextInput fullWidth={true} source="phone" label="Teléfono" />
                            <TextInput fullWidth={true} source="a_curso" label="Curso" />

                        </Grid>
                        <Grid item xs={4}>
                            <TextInput fullWidth={true} source="a_dni" label="DNI" />
                            <TextInput fullWidth={true} source="a_sexo"  label="Sexo" />
                            <TextInput fullWidth={true} source="a_nacimiento" label="Teléfono" />
                            <TextInput fullWidth={true} source="a_apellido" label="Apellido" />
                            <TextInput fullWidth={true} source="a_email_factura" label="Email" />

                        </Grid>
                        <Grid item xs={4}>
                            <TextInput fullWidth={true} source="a_domicilio"  label="Domicilio" />
                            <TextInput fullWidth={true} source="phone" label="Teléfono" />
                            <TextInput fullWidth={true} source="a_curso" label="Apellido" />
                            <TextInput fullWidth={true} source="a_dni" label="Email" />
                            <TextInput fullWidth={true} source="a_sexo"  label="Domicilio" />
                            <TextInput fullWidth={true} source="a_nacimiento" label="Teléfono" />
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
                            <TextInput fullWidth={true} source="a_observaciones" label="Observaciones" />
                            <TextInput fullWidth={true} source="a_motivo_baja"  label="Motivo de Baja" />
                            <DateInput fullWidth={true} source="a_baja" label="Fecha de Baja" />
                        </Grid>
                    </Grid>
                </FormTab>
            </TabbedForm>
        </Edit>
    )
}

export const UserCreate = props => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="General">
                <TextInput disabled source="a_legajo" label="Legajo" />
                <TextInput source="a_apellido" label="Apellido" />
                <TextInput source="a_email_factura" label="Email" />
                <TextInput source="a_domicilio"  label="Domicilio" />
                <TextInput source="phone" label="Teléfono" />
                <TextInput source="a_curso" label="Curso" />
                <TextInput source="a_dni" label="DNI" />
                <TextInput source="a_sexo"  label="Sexo" />
                <TextInput source="a_nacimiento" label="Teléfono" />
                <TextInput source="a_nacionalidad" label="Apellido" />
                <TextInput source="a_colegio" label="Email" />
                <TextInput source="a_cant_hnos"  label="Domicilio" />
                <TextInput source="a_obra_social" label="Teléfono" />
                <TextInput source="a_nro_afiliado" label="Apellido" />
                <TextInput source="a_localidad" label="Email" />
                <TextInput source="a_fecha_inscripcion"  label="Domicilio" />
            </FormTab>
            <FormTab label="Facturación">
                <TextInput label="Nombre" source="a_nombrefactura" />
                <TextInput label="Domicilio" source="a_domicilio" />
                <TextInput label="Tipo de Responsabilidad" source="a_tiporesp" />
                <TextInput label="CUIT" source="a_cuit" />
                <TextInput label="Email" source="a_email_factura" />
            </FormTab>
            <FormTab label="Familia">
                
                <TextInput source="a_mama" label="Nombre y Apellido" />
                <TextInput source="a_mama_ocupacion" label="Ocupación" />
                <TextInput source="a_mama_domicilio"  label="Domicilio" />
                <TextInput source="a_mama_localidad" label="Localidad" />
                <TextInput source="a_dni_mama" label="DNI" />
                <TextInput source="a_mail_mama" label="Email" />
                <TextInput source="a_telefono1"  label="Telefono" />
                <TextInput source="a_telefono2" label="Teléfono" />


                <TextInput source="a_papa" label="Nombre y Apellido" />
                <TextInput source="a_papa_ocupacion" label="Ocupación" />
                <TextInput source="a_papa_domicilio"  label="Domicilio" />
                <TextInput source="a_papa_localidad" label="Localidad" />
                <TextInput source="a_dni_papa" label="DNI" />
                <TextInput source="a_mail_papa" label="Email" />
                <TextInput source="a_telefono3"  label="Telefono" />
                <TextInput source="a_telefono4" label="Teléfono" />


                <TextInput source="a_familiar" label="Familiar" />
                <TextInput source="a_telefono5"  label="Tel familiar" />
                <TextInput source="a_telefono6" label="Tel familiar" />
            </FormTab>
            <FormTab label="Bonificaciones">
                <NumberInput source="a_dto_hno" label="Dto hno" />
                <NumberInput source="a_dto_pago" label="Dto pago" />
                <NumberInput source="a_beca" label="Beca" />
            </FormTab>
            <FormTab label="Observaciones">
                <TextInput source="a_observaciones" label="Observaciones" />
                <TextInput source="a_motivo_baja"  label="Motivo de Baja" />
                <DateInput source="a_baja" label="Fecha de Baja" />
            </FormTab>
        </TabbedForm>
    </Create>
)


const ListActions = (props) => {
    const {
        className,
        filters,
        maxResults,
        ...rest
    } = props;
    const {
        resource,
        displayedFilters,
        filterValues,
        basePath,
        showFilter,
        total,
        currentSort
    } = useListContext();

    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            {filters && cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button',
            })}
            <CreateButton basePath={basePath} label='Alta Alumno' />
            <ExportButton
                label='Exportar'
                disabled={total === 0}
                resource={resource}
                sort={currentSort}
                filterValues={filterValues}
                maxResults={maxResults}
            />
        </TopToolbar>
    )
}