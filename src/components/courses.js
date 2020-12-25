import * as React from "react";
import {
    List as AdminList,
    Datagrid,
    TextField,
    EditButton,
    Edit,
	Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Filter,
    NumberField,
    NumberInput
} from 'react-admin';

const CourseTitle = ({ record }) => {
    return <span>Course {record ? `"${record.title}"` : ''}</span>;
};

const CourseFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);


export const CourseList = props => (
    <AdminList title="Cursos" filters={<CourseFilter />} exporter={false} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID" />
            <TextField source="title" label="Curso" />
            <TextField source="title" label="Horario" />
            <TextField source="title" label="Cuota" />
            <NumberField source="title" label="Matrícula" options={{ style: 'currency', currency: 'USD' }} />
            <NumberField source="title" label="Derecho Examen" options={{ style: 'currency', currency: 'USD' }} />
            <NumberField source="title" label="Examen Repetido" options={{ style: 'currency', currency: 'USD' }} />
            <NumberField source="title" label="Examen Libre" options={{ style: 'currency', currency: 'USD' }} />
            <EditButton />
        </Datagrid>
    </AdminList>
);

export const CourseEdit = props => (
    <Edit title={<CourseTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" label="ID" />
            <TextInput source="course" label="Curso" />
            <TextInput source="title" label="Horario" />
            <TextInput source="title" label="Cuota" />
            <NumberInput source="exam" label="Matrícula" min={0} />
            <NumberInput source="exam" label="Derecho Examen" min={0} />
            <NumberInput source="exam" label="Examen Repetido" min={0} />
            <NumberInput source="exam" label="Examen Libre" min={0} />
        </SimpleForm>
    </Edit>
);

export const CourseCreate = props => (
    <Create title="Alta Curso" {...props}>
        <SimpleForm>
            <TextInput source="course" label="Curso" />
            <TextInput source="title" label="Horario" />
            <TextInput source="title" label="Cuota" />
            <NumberInput source="exam" label="Matrícula" min={0} />
            <NumberInput source="exam" label="Derecho Examen" min={0} />
            <NumberInput source="exam" label="Examen Repetido" min={0} />
            <NumberInput source="exam" label="Examen Libre" min={0} />
        </SimpleForm>
    </Create>
);