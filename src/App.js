import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './components/users';
import { CourseList, CourseEdit, CourseCreate  } from './components/courses';
import jsonServerProvider from 'ra-data-json-server';
import CourseIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './components/Dashboard';
import authProvider from './providers/authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
	    <Resource name="posts" options={{ label: 'Cursos' }} list={CourseList} edit={CourseEdit} create={CourseCreate} icon={CourseIcon} />
		<Resource name="users" options={{ label: 'Alumnos' }} list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    </Admin>
);

export default App;