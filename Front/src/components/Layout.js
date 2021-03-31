import * as React from "react"
import { Layout } from 'react-admin'
import Menu from "./Menu"
import CustomAppBar from "./CustomAppBar"

const MyLayout = (props) => <Layout
    {...props}
    menu={Menu}
    appBar={CustomAppBar}
/>

export default MyLayout
