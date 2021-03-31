import React, { Component } from 'react'
import { UserMenu, MenuItemLink } from 'react-admin'
import SettingsIcon from '@material-ui/icons/Settings'

class CustomUserMenu extends Component {
    render() {
        const { crudGetOne, profile, ...props } = this.props

        return (
            <UserMenu label={profile ? profile.nickname : ''} {...props}>
                <MenuItemLink
                    to="/configuracion"
                    primaryText="Configuración"
                    leftIcon={<SettingsIcon />}
                />
            </UserMenu>
        )
    }
}


export default CustomUserMenu