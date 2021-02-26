import * as React from 'react'
import { CustomPagination } from '../components/custom-components'
import { cloneElement } from 'react'
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
    sanitizeListRestProps,
    ReferenceField,
    ReferenceInput,
    SelectInput
} from 'react-admin'

const FeeTitle = ({ record }) => <span>Cuota de {record ? `"${record.cuota_legajo}"` : ''}</span>

const FeeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <ReferenceInput label="Alumno" source="cuota_a_registro" reference="alumnos" alwaysOn>
            <SelectInput optionText="a_apellido" />
        </ReferenceInput>
    </Filter>
)

export const FeeList = props => (
    <AdminList 
        title="Cuotas" 
        filters={<FeeFilter />} 
        actions={<ListActions />} 
        exporter={false} 
        pagination={<CustomPagination rowsPerPageOptions={[10, 20, 30]} />} 
        perPage={20} 
        {...props}
    >
        <Datagrid>
            <TextField source="cuota_legajo" label="Legajo" />
            <ReferenceField source="cuota_a_registro" reference="alumnos" label="Alumno" >
                <TextField source="a_apellido"/>
            </ReferenceField>
            <NumberField source="cuota_mes" label="Mes" />
            <NumberField source="cuota_ano" label="Año" />
            <EditButton label="Editar" />
        </Datagrid>
    </AdminList>
)

//TODO Poner autocomplete
export const FeeEdit = props => (
    <Edit title={<FeeTitle />} {...props}>
        <SimpleForm>
            <TextInput source="cuota_legajo" label="Legajo" />
            <ReferenceInput label="Alumno" source="cuota_a_registro" reference="alumnos" >
                <SelectInput optionText="a_apellido" />
            </ReferenceInput>            
            <NumberInput source="cuota_mes" label="Mes" min={0} max={15}/>
            <NumberInput source="cuota_ano" label="Año" min={2019} max={2030} />
        </SimpleForm>
    </Edit>
)

export const FeeCreate = props => (
    <Create title="Alta de Curso" {...props}>
        <SimpleForm>
            <TextInput source="cuota_legajo" label="Legajo" />
            <TextInput source="cuota_a_registro" label="Alumno" />
            <NumberInput source="cuota_mes" label="Mes" min={0} max={15}/>
            <NumberInput source="cuota_ano" label="Año" min={2019} max={2030} />
        </SimpleForm>
    </Create>
)

const ListActions = (props) => {
    const {
        className,
        filters,
        ...rest
    } = props;
    const {
        resource,
        displayedFilters,
        filterValues,
        basePath,
        showFilter,
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
            <CreateButton basePath={basePath} label='Generación de cuota'/>
        </TopToolbar>
    )
}