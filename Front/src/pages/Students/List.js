import * as React from "react"
import { cloneElement } from 'react'
import { CustomPagination, CustomUrlField } from '../../components/custom-components'
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled'
import {
    List as AdminList,
    Datagrid,
    TextField,
    TextInput,
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
    RichTextField
} from 'react-admin'

const DeleteButton = props => <Button startIcon={<PersonAddDisabledIcon />} style={{color: "red"}} onClick={() => console.log("Soy un boton")} label="Dar de baja" />

const UserFilter = (props) => (
    <Filter label="Filtros" {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <ReferenceInput label="Curso" source="a_curso" reference="cursos" alwaysOn>
            <SelectInput optionText="c_curso" />
        </ReferenceInput>
    </Filter>
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
            <CreateButton basePath={basePath} label='Alta de alumno' />
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

const UserList = props => (
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

export default UserList