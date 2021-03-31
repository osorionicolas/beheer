import * as React from 'react'
import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    ReferenceInput,
    SelectInput
} from 'react-admin'


const FeeTitle = ({ record }) => <span>Cuota de {record ? `"${record.cuota_legajo}"` : ''}</span>

//TODO Poner autocomplete
const FeeEdit = props => (
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

export default FeeEdit