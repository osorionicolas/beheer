import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import {
	Create,
    SimpleForm,
    TextInput,
    NumberInput
} from 'react-admin'

const FeeCreate = props => (
    <Create title="Alta de Curso" {...props}>
        <SimpleForm>
            <Grid container spacing={2} style={{ width: "100%" }}>
                <Grid item xs={4}>
                    <TextInput fullWidth={true} source="cuota_legajo" label="Legajo" />
                    <TextInput fullWidth={true} source="cuota_a_registro" label="Alumno" />
                </Grid>
                <Grid item xs={4}>
                    <NumberInput fullWidth={true} source="cuota_mes" label="Mes" min={0} max={15}/>
                    <NumberInput fullWidth={true} source="cuota_ano" label="Año" min={2019} max={2030} />
                </Grid>
            </Grid>
        </SimpleForm>
    </Create>
)

export default FeeCreate