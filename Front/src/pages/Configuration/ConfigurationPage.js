import React from 'react';
import { Edit, TextInput, SimpleForm, required } from 'react-admin';

const ConfigurationEdit = ({ staticContext, ...props }) => {
    return (
        <Edit
            id=""
            resource="configuracion"
            basePath="/configuracion"
            title="Configuracion"
            redirect={false} // I don't need any redirection here, there's no list page
            {...props}
        >
            <SimpleForm>
                <TextInput source="nickname" validate={required()} />
            </SimpleForm>
        </Edit>
    );
};

export default ConfigurationEdit;