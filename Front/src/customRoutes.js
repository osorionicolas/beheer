import * as React from "react"
import { Route } from 'react-router-dom'
import BillingPage from "./pages/Billing/BillingPage"
import ConfigurationPage from "./pages/Configuration/ConfigurationPage"

export default [
    <Route exact path="/facturacion" component={BillingPage} />,
    <Route exact path="/configuracion" component={ConfigurationPage} />,
]