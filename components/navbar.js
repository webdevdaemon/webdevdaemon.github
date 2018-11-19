import React from 'react'
import NavMenu from './nav-menu'

const NavbarBurger = ({hamClick, hamOn}) => {
  return (
    <span
      className={`navbar-burger burger ${hamOn && 'is-active'}`}
      data-target="navbarMenuHeroC"
      onClick={hamClick}
    >
      <span />
      <span />
      <span />
    </span>
  )
}

const NavbarBrand = ({brandText}) => {
  return (
    <div className="navbar-brand has-pad-r">
      <a className="navbar-item">
        <span className="is-size-1">{`${brandText}`}</span>
      </a>
      <NavbarBurger onClick={onCLick}/>
    </div>
  )
}

const NavbarMenu = () => {
  return (
    <div id="navbarMenuHeroC" className="navbar-menu">
      <div className="navbar-start">
        <NavMenu />
      </div>
      <div className="navbar-end has-pad-r">
        <span className="navbar-item">
          <a
            className="navbar-icon github icon has-text-white"
            href="http://github.com/webdevdaemon"
          >
            <i className="fab fa-github is-size-3" />
          </a>
        </span>
        <span className="navbar-item">
          <a
            className="navbar-icon github icon has-text-white"
            href="http://github.com/webdevdaemon"
          >
            <i className="fas fa-envelope is-size-3" />
          </a>
        </span>
      </div>
    </div>
  )
}

// const NavbarDropdown = () => {
//   return (
//     <div class="navbar-item has-dropdown">
//       <a class="navbar-link">Docs</a>

//       <div class="navbar-dropdown">
//         <a class="navbar-item">Overview</a>
//         <a class="navbar-item">Elements</a>
//         <a class="navbar-item">Components</a>
//         <hr class="navbar-divider" />

//         <div class="navbar-item">Version 0.7.2</div>
//       </div>
//     </div>
//   )
// }

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hamOn: false,
    }
  }

  render() {
    const {className, classNameBrand, classNameMenu, idSuffix, ...props} = this.props
    const {hamOn} = this.state
    
    hamClick = () => this.setState(({hamOn}) => ({hamOn: !hamOn}))

    return (
      <header className={`navbar ${className}`} id={`navbar-${idSuffix}`}>
        <NavbarBrand
          className={`${classNameBrand}`}
          hamClick={this.hamClick}
          brandText="cmDev"
          hamOn
        />
        <NavbarMenu
          classname={`${classNameMenu}`}
          hamOn
        />
      </header>
    )
  }
}

export default Navbar
