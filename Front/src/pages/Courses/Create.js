import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import {
	Create,
    SimpleForm,
    TextInput,
    NumberInput
} from 'react-admin'

const CourseCreate = props => (
    <Create title="Alta de Curso" {...props}>
        <SimpleForm>
            <Grid container spacing={2} style={{ width: "100%" }}>
                <Grid item xs={4}>
                    <TextInput fullWidth={true} source="c_curso" label="Curso" />
                    <TextInput fullWidth={true} source="c_horario" label="Horario" />
                </Grid>
                <Grid item xs={4}>
                    <NumberInput fullWidth={true} source="c_cuota" label="Cuota" />
                    <NumberInput fullWidth={true} source="c_matricula" label="Matrícula" min={0} />
                </Grid>
                <Grid item xs={4}>
                    <NumberInput fullWidth={true} source="c_derecho_examen" label="Derecho Examen" min={0} />
                    <NumberInput fullWidth={true} source="c_examen_repetido" label="Examen Repetido" min={0} />
                    <NumberInput fullWidth={true} source="c_examen_libre" label="Examen Libre" min={0} />
                </Grid>
            </Grid>
        </SimpleForm>
    </Create>
)

export default CourseCreate