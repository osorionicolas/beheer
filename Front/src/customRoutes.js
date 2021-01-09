import * as React from "react"
import { Route } from 'react-router-dom'
import BillingPage from "./pages/BillingPage"

export default [
    <Route exact path="/facturacion" component={BillingPage} />,
    <Route exact path="/baz" component={null} noLayout />,
]