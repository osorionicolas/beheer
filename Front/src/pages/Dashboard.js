import * as React from "react"
import { Card, CardContent } from '@material-ui/core'
import { Title } from 'react-admin';
import logo from "../images/stclares_dark.png";
import Box from '@material-ui/core/Box';

const Dashboard = () => (
    <Card style={{height: '100%'}}>
        <Title title="St Clares Language Center" />
        <CardContent>
            <Box textAlign="center">
                <img src={logo} alt="" ></img>
            </Box>
        </CardContent>
    </Card>
)

export default Dashboard