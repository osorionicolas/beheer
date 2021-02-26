import * as React from 'react'
import { CustomPagination } from '../components/custom-components'
import {
    List as AdminList,
    Datagrid,
    TextField,
    EditButton,
    Edit,
	Create,
    SimpleForm,
    TextInput,
    Filter,
    NumberField,
    NumberInput,
    useListContext,
    TopToolbar,
    CreateButton,
    sanitizeListRestProps
} from 'react-admin'

const CourseTitle = ({ record }) => <span>Curso {record ? `"${record.c_curso}"` : ''}</span>

const CourseFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
    </Filter>
)

//TODO Revisar los currency
export const CourseList = props => (
    <AdminList 
        title="Cursos" 
        filters={<CourseFilter />} 
        actions={<ListActions />} 
        exporter={false} 
        pagination={<CustomPagination rowsPerPageOptions={[10, 20, 30]} />} 
        perPage={20} 
        {...props}
    >
        <Datagrid>
            <TextField source="c_curso" label="Curso" />
            <TextField source="c_horario" label="Horario" />
            <TextField source="c_cuota" label="Cuota" />
            <NumberField source="c_matricula" label="Matrícula" options={{ style: 'currency', currency: 'USD' }} />
            <NumberField source="c_derecho_examen" label="Derecho Examen" options={{ style: 'currency', currency: 'USD' }} />
            <NumberField source="c_examen_repetido" label="Examen Repetido" options={{ style: 'currency', currency: 'USD' }} />
            <NumberField source="c_examen_libre" label="Examen Libre" options={{ style: 'currency', currency: 'USD' }} />
            <EditButton label="Editar" />
        </Datagrid>
    </AdminList>
)

export const CourseEdit = props => (
    <Edit title={<CourseTitle />} {...props}>
        <SimpleForm>
            <TextInput source="c_curso" label="Curso" />
            <TextInput source="c_horario" label="Horario" />
            <TextInput source="c_cuota" label="Cuota" />
            <NumberInput source="c_matricula" label="Matrícula" min={0} />
            <NumberInput source="c_derecho_examen" label="Derecho Examen" min={0} />
            <NumberInput source="c_examen_repetido" label="Examen Repetido" min={0} />
            <NumberInput source="c_examen_libre" label="Examen Libre" min={0} />
        </SimpleForm>
    </Edit>
)

export const CourseCreate = props => (
    <Create title="Alta de Curso" {...props}>
        <SimpleForm>
            <TextInput source="c_curso" label="Curso" />
            <TextInput source="c_horario" label="Horario" />
            <TextInput source="c_cuota" label="Cuota" />
            <NumberInput source="c_matricula" label="Matrícula" min={0} />
            <NumberInput source="c_derecho_examen" label="Derecho Examen" min={0} />
            <NumberInput source="c_examen_repetido" label="Examen Repetido" min={0} />
            <NumberInput source="c_examen_libre" label="Examen Libre" min={0} />
        </SimpleForm>
    </Create>
)

const ListActions = (props) => {
    const {
        className,
        ...rest
    } = props;
    const {
        basePath
    } = useListContext();

    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            <CreateButton basePath={basePath} label='Alta de curso'/>
        </TopToolbar>
    )
}