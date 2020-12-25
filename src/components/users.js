import * as React from "react";
import { cloneElement, useState } from 'react';
import {
    List as AdminList,
    Datagrid,
    TextField,
    EmailField,
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
    Button,
    sanitizeListRestProps,
    ReferenceField
} from 'react-admin';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import GetAppIcon from '@material-ui/icons/GetApp';

const UserTitle = ({ record }) => {
    return <span>Alumno {record ? `"${record.name}"` : ''}</span>;
};

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <ReferenceInput label="Alumno" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const UserList = props => (
    <AdminList filters={<UserFilter />} actions={<ListActions />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="Nro de legajo" />
            <TextField source="username" label="Apellido" />
            <TextField source="name" label="Nombres" />
            <ReferenceField source="title" reference="posts" label="Curso" >
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="username" label="DNI" />
            <EmailField source="email" label="Email" />
            <TextField source="address.street" label="Domicilio" />
            <TextField source="phone" label="Teléfono" />
            <EditButton />
        </Datagrid>
    </AdminList>
);

export const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput type="email" source="email" />
            <TextInput source="address.street" />
            <TextInput source="phone" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="username" />
            <EmailField source="email" />
            <TextInput source="address.street" />
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
        currentSort,
        resource,
        displayedFilters,
        filterValues,
        basePath,
        showFilter,
        total,
    } = useListContext();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            {filters && cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button',
            })}
            <CreateButton basePath={basePath} label="Alta Alumno"/>
            <Button
                onClick={handleClick}
                label="Exportar"
            >
                <GetAppIcon />
            </Button>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <List component="nav">
                    <ListItem button>
                        <ListItemText primary="PDF" />
                    </ListItem>
                    <ListItem button>
                        <ExportButton
                            disabled={total === 0}
                            resource={resource}
                            sort={currentSort}
                            filterValues={filterValues}
                            maxResults={maxResults}
                            icon={false}
                            label="CSV"
                        />
                    </ListItem>
                    <ListItem button onClick={() => window.print()}>
                        <ListItemText primary="Imprimir" />
                    </ListItem>
                </List>
            </Popover>
        </TopToolbar>
    );
};