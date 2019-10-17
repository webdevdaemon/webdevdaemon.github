import React from 'react'
import { CTXBurgerMenu } from './providers'
import NavMenu from './nav-menu'

import { Button, Control, Field, Icon } from 'bloomer'
import { social } from '../links'
import { Navbar as Nav } from 'bloomer/lib/components/Navbar/Navbar'
import { NavbarBrand } from 'bloomer/lib/components/Navbar/NavbarBrand'
import { NavbarEnd } from 'bloomer/lib/components/Navbar/NavbarEnd'
import { NavbarItem } from 'bloomer/lib/components/Navbar/NavbarItem'
import { NavbarMenu } from 'bloomer/lib/components/Navbar/NavbarMenu'
import { NavbarStart } from 'bloomer/lib/components/Navbar/NavbarStart'
import { NavbarBurger } from 'bloomer/lib/components/Navbar/NavbarBurger'

const Navbar = props => (
  <CTXBurgerMenu.Consumer>
    {({ burgerActive, burgerToggle }) => (
      <Nav {...props}>
        <NavbarBrand>
          <NavbarItem className="brand" href="/" tag="a">
            <img className="brand-logo" src="./public/brand.png" />
          </NavbarItem>
          <NavbarBurger isActive={burgerActive} onClick={((e) => burgerToggle())} />
        </NavbarBrand>

        <NavbarMenu isActive={burgerActive} onClick={((e) => burgerToggle())}>
          <NavbarStart>
            <NavMenu />
          </NavbarStart>

          <NavbarEnd className="navbar-buttons">
            
            {
              social.map(({ href, iconClassName, linkName, linkAlt }) => {
                return (<NavbarItem alt={linkAlt} className={linkName} href={href} key={href}>
                  <Icon className={`${iconClassName} is-size-6 has-text-white ico`} />
                </NavbarItem>)
              })
            }

            <NavbarItem>
              <Field isGrouped>
                <Control>
                  <Button
                    className="has-pad-lx2 has-pad-rx2 is-success"
                    href="/contact"
                    target="_blank"
                  >
                    <Icon className="fas fa-handshake has-text-white" />
                    <span>Hire CM</span>
                  </Button>
                </Control>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Nav>
    )}
  </CTXBurgerMenu.Consumer>
)

export default Navbar
