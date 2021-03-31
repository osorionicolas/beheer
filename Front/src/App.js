import * as React from "react"
import { Admin, Resource } from 'react-admin'
import student from './pages/Students/index'
import course from './pages/Courses/index'
import fee from './pages/Fees/index'
import jsonServerProvider from 'ra-data-json-server'
import CourseIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import Dashboard from './pages/Dashboard/Dashboard'
import authProvider from './providers/authProvider'
import MyLayout from "./components/Layout"
import customRoutes from "./customRoutes"
import FeeIcon from '@material-ui/icons/DynamicFeed';
import ConfigurationEdit from "./pages/Configuration/ConfigurationPage"

const App = () => (
    <Admin 
        customRoutes={customRoutes} 
        layout={MyLayout} 
        disableTelemetry 
        dashboard={Dashboard} 
        authProvider={authProvider} 
        dataProvider={jsonServerProvider('http://localhost:5000')} 
    >
	    <Resource name="cursos" options={{ label: 'Cursos' }} list={course.list} edit={course.edit} create={course.create} icon={CourseIcon} />
		<Resource name="alumnos" options={{ label: 'Alumnos' }} list={student.list} edit={student.edit} create={student.create} icon={UserIcon} />
        <Resource name="cuotas" options={{ label: 'Cuotas' }} list={fee.list} edit={fee.edit} create={fee.create} icon={FeeIcon} />
        <Resource name="configuracion" edit={ConfigurationEdit} />
    </Admin>
)

export default App