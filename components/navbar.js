import React from 'react'
import { CTXBurgerMenu } from './providers'
import NavMenu from './nav-menu'

import { Button, Control, Field, Icon } from 'bloomer'

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
            <img className="brand-logo" src="./static/brand.png" />
          </NavbarItem>
          <NavbarBurger isActive={burgerActive} onClick={((e) => burgerToggle())} />
        </NavbarBrand>

        <NavbarMenu isActive={burgerActive} onClick={((e) => burgerToggle())}>
          <NavbarStart>
            <NavMenu />
          </NavbarStart>

          <NavbarEnd className="navbar-buttons">
            <NavbarItem href="https://github.com/webdevdaemon">
              <Icon className="fab fa-github is-size-6 has-text-white ico" />
            </NavbarItem>

            <NavbarItem href="mailto:cmorganwebdev@gmail.com">
              <Icon className="fas fa-envelope is-size-6 has-text-white ico" />
            </NavbarItem>

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
