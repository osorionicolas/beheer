import * as React from "react"
import { cloneElement } from 'react'
import { CustomPagination, CustomUrlField } from './custom-components'
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled'
import {
    List as AdminList,
    Datagrid,
    TextField,
    Create,
    SimpleForm,
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
    ReferenceField,
    Button,
    Show,
    SimpleShowLayout,
    RichTextField,
    TabbedForm,
    FormTab,
    ReferenceManyField,
    NumberInput,
    BooleanInput,
    DateInput,
    DateField
} from 'react-admin'

const UserTitle = ({ record }) => <span>Alumno {record ? `"${record.a_apellido}"` : ''}</span>
const DeleteButton = props => <Button startIcon={<PersonAddDisabledIcon />} style={{color: "red"}} onClick={() => console.log("Soy un boton")} label="Dar de baja" />

const UserFilter = (props) => (
    <Filter {...props}>
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

export const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}>
        <TabbedForm>
            <FormTab label="General">
                <TextInput disabled source="a_legajo" label="Legajo" />
                <TextInput source="a_apellido" label="Apellido" />
                <TextInput source="a_email_factura" label="Email" />
                <TextInput source="a_domicilio"  label="Domicilio" />
                <TextInput source="phone" label="Teléfono" />
            </FormTab>
            <FormTab label="Facturación">
                <TextInput label="Password (if protected post)" source="password" type="password" />
                <DateInput label="Publication date" source="published_at" />
                <NumberInput source="average_note" />
                <BooleanInput label="Allow comments?" source="commentable" defaultValue />
                <TextInput disabled label="Nb views" source="views" />
            </FormTab>
            <FormTab label="Familia">
            </FormTab>
        </TabbedForm>
    </Edit>
)

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="a_apellido" />
            <TextInput source="username" />
            <TextInput source="a_email_factura" />
            <TextInput source="a_domicilio" />
            <TextInput source="phone" />
        </SimpleForm>
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