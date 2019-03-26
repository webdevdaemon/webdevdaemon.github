import React from 'react'
import Link from 'next/link'
import { routes } from '../links'
import { NavbarItem } from 'bloomer/lib/components/Navbar/NavbarItem'
import { withRouter } from 'next/router'

const NavMenu = ({ router, ...props }) => {
  return (
    <>
      {routes.map(({ name, navRoute }, index) => (
        <Link href={navRoute} key={`${name}${index}`} passHref prefetch>
          <NavbarItem isActive={router.route === navRoute}>{name}</NavbarItem>
        </Link>
      ))}
    </>
  )
}

export default withRouter(NavMenu)
