import * as React from 'react'
import { CustomPagination } from '../../components/custom-components'
import { cloneElement } from 'react'
import {
    List as AdminList,
    Datagrid,
    TextField,
    EditButton,
    TextInput,
    Filter,
    NumberField,
    useListContext,
    TopToolbar,
    CreateButton,
    sanitizeListRestProps,
    ReferenceField,
    ReferenceInput,
    SelectInput
} from 'react-admin'

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

const FeeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <ReferenceInput label="Alumno" source="cuota_a_registro" reference="alumnos" alwaysOn>
            <SelectInput optionText="a_apellido" />
        </ReferenceInput>
    </Filter>
)

const FeeList = props => (
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

export default FeeList