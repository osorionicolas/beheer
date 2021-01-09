import * as React from "react";
import { cloneElement } from 'react';
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
    Pagination
} from 'react-admin';
import CustomUrlField from "./CustomUrlField";

const UserTitle = ({ record }) => <span>Alumno {record ? `"${record.name}"` : ''}</span>;

const CustomPagination = props => <Pagination rowsPerPageOptions={[15, 30, 45, 60]} {...props} />

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <ReferenceInput label="Alumno" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const UserList = props => (
    <AdminList filters={<UserFilter />} actions={<ListActions />} pagination={<CustomPagination />} perPage={30} {...props}>
        <Datagrid>
            <TextField source="id" label="ID" />
            <TextField source="a_legajo" label="Legajo" />
            <TextField source="a_apellido" label="Apellido" />
            <TextField source="a_nombres" label="Nombres" />
            <TextField source="a_dni" label="DNI" />
            <CustomUrlField source="a_email_factura" label="Email" />
            <TextField source="a_domicilio" label="Domicilio" />
            <EditButton />
        </Datagrid>
    </AdminList>
);
/*
    <ReferenceField source="a_curso" reference="cursos" label="Curso" >
        <TextField source="c_curso"/>
    </ReferenceField>
*/

export const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="a_apellido" />
            <TextInput source="username" />
            <TextInput source="a_email_factura" />
            <TextInput source="a_domicilio" />
            <TextInput source="phone" />
        </SimpleForm>
    </Edit>
);

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
);


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
            <CreateButton basePath={basePath} title='Alta Alumno'/>
            <ExportButton
                label='Exportar'
                disabled={total === 0}
                resource={resource}
                sort={currentSort}
                filterValues={filterValues}
                maxResults={maxResults}
            />
        </TopToolbar>
    );
};