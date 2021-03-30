import * as React from "react"
import { Admin, Resource } from 'react-admin'
import { UserList, UserEdit, UserCreate } from './pages/students'
import { CourseList, CourseEdit, CourseCreate  } from './pages/courses'
import { FeeList, FeeEdit, FeeCreate  } from './pages/fees'
import jsonServerProvider from 'ra-data-json-server'
import CourseIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import Dashboard from './pages/Dashboard'
import authProvider from './providers/authProvider'
import MyLayout from "./components/Layout"
import customRoutes from "./customRoutes"
import FeeIcon from '@material-ui/icons/DynamicFeed';

const App = () => (
    <Admin 
        customRoutes={customRoutes} 
        layout={MyLayout} 
        disableTelemetry 
        dashboard={Dashboard} 
        authProvider={authProvider} 
        dataProvider={jsonServerProvider('http://localhost:5000')} 
    >
	    <Resource name="cursos" options={{ label: 'Cursos' }} list={CourseList} edit={CourseEdit} create={CourseCreate} icon={CourseIcon} />
		<Resource name="alumnos" options={{ label: 'Alumnos' }} list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
        <Resource name="cuotas" options={{ label: 'Cuotas' }} list={FeeList} edit={FeeEdit} create={FeeCreate} icon={FeeIcon} />
    </Admin>
)

export default App