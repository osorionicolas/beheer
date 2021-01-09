import * as React from "react"
import { Admin, Resource } from 'react-admin'
import { UserList, UserEdit, UserCreate } from './pages/users'
import { CourseList, CourseEdit, CourseCreate  } from './pages/courses'
import jsonServerProvider from 'ra-data-json-server'
import CourseIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import Dashboard from './pages/Dashboard'
import authProvider from './providers/authProvider'
import MyLayout from "./components/Layout"
import customRoutes from "./customRoutes"

const dataProvider = jsonServerProvider('http://localhost:5000')

const App = () => (
    <Admin 
        customRoutes={customRoutes} 
        layout={MyLayout} 
        disableTelemetry 
        dashboard={Dashboard} 
        authProvider={authProvider} 
        dataProvider={dataProvider} 
    >
	    <Resource name="cursos" options={{ label: 'Cursos' }} list={CourseList} edit={CourseEdit} create={CourseCreate} icon={CourseIcon} />
		<Resource name="alumnos" options={{ label: 'Alumnos' }} list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    </Admin>
)

export default App