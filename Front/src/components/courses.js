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
        <Datagrid>
            <TextField source="id" optionValue="c_registro" label="ID" />
            <TextField source="c_curso" label="Curso" />
            <TextField source="c_horario" label="Horario" />
            <TextField source="c_cuota" label="Cuota" />
            <NumberField source="c_matricula" label="Matrícula" options={{ style: 'currency', currency: 'USD' }} />
            <NumberField source="c_derecho_examen" label="Derecho Examen" options={{ style: 'currency', currency: 'USD' }} />
            <NumberField source="c_examen_repetido" label="Examen Repetido" options={{ style: 'currency', currency: 'USD' }} />
            <NumberField source="c_examen_libre" label="Examen Libre" options={{ style: 'currency', currency: 'USD' }} />
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