import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {

  return (
    <footer className='footer'>
      {props.children}
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer