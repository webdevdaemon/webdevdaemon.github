/**
* @augments {Component<{  children:oneOf(func,node,]),>}
*/
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const RPToggle = ({ children }) => {

  const [isOn, setIsOn] = useState(false)
  const toggle = () => setIsOn(!isOn)

  return (
    <div>
      {typeof children === 'function' ? children({ isOn, setIsOn, toggle }) : children}
    </div>
  )
}

RPToggle.propTypes = {
  children: PropTypes.oneOf([PropTypes.func, PropTypes.node,]),
}

export default RPToggle                                                                                                                                                                                                                                                                                       