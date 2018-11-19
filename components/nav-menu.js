import React from 'react'
import Link from 'next/link'
import routes from '../routes'
import {withRouter} from 'next/router'
import isFn from '../helpers/isFn'

const NavMenu = props => {
  const {render, children, router, navClassName} = props
  const renderFn = render ? render : isFn(children) ? children : null
  return !renderFn ? (
    <React.Fragment>
      <ul className="navbar-menu">
        {routes.map(({name, navRoute}, index) => (
          <li
            key={`menu-item-${index+1}`}
            className={`navbar-item is-size-3 ${
              router.route === navRoute ? 'is-active' : ''
            } ${
              !index ? 'navbar-start' : (index === routes.length - 1 ? 'navbar-end' : '')
              }`}
          >
            <Link href={`${navRoute}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  ) : (
    renderFn({routes, ...props})
  )
}

export default withRouter(NavMenu)
