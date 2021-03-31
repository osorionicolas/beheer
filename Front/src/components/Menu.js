import * as React from 'react'
import { useSelector } from 'react-redux'
import { useMediaQuery } from '@material-ui/core'
import { MenuItemLink, getResources } from 'react-admin'
import DefaultIcon from '@material-ui/icons/ViewList'
import DescriptionIcon from '@material-ui/icons/Description'
import DashboardIcon from '@material-ui/icons/Dashboard'
import Box from '@material-ui/core/Box'

const Menu = ({ onMenuClick, logout }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'))
    const open = useSelector(state => state.admin.ui.sidebarOpen)
    const resources = useSelector(getResources)
    return (
        <Box mt={2}>
            <MenuItemLink
                to="/"
                primaryText="Dashboard"
                leftIcon={<DashboardIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            {resources.map(resource => {
                if(resource.name == "configuracion") return
                return (
                    <MenuItemLink
                        key={resource.name}
                        to={`/${resource.name}`}
                        primaryText={
                            (resource.options && resource.options.label) ||
                            resource.name
                        }
                        leftIcon={
                            resource.icon ? <resource.icon /> : <DefaultIcon />
                        }
                        onClick={onMenuClick}
                        sidebarIsOpen={open}
                    />
                )}
            )}
            <MenuItemLink
                to="/facturacion"
                primaryText="Facturación"
                leftIcon={<DescriptionIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            {isXSmall && logout}
        </Box>
    )
}

export default Menu