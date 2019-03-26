/**
* @augments {Component<{  position:string,  zIndex:oneOf([string,number, ]),   left:oneOf([string,number, ]),   right:oneOf([string,number, ]),   top:oneOf([string,number, ]),   bottom:oneOf([string,number, ]), >}
*/
import React from 'react'
import PropTypes from 'prop-types'

const Position = ({ children, position, zIndex, left, right, top, bottom }) => {
  
  const style = { position, zIndex, left, right, top, bottom, }
  const transition = { transition: 'all 0.5s ease-out'}


  return (<div style={{...style, ...transition}}>{
    typeof children === 'function' ? children() : children
  }</div>)
}


Position.propTypes = {
  position: PropTypes.string,
  zIndex: PropTypes.oneOf([ PropTypes.string, PropTypes.number, ]), 
  left: PropTypes.oneOf([ PropTypes.string, PropTypes.number, ]), 
  right: PropTypes.oneOf([ PropTypes.string, PropTypes.number, ]), 
  top: PropTypes.oneOf([ PropTypes.string, PropTypes.number, ]), 
  bottom: PropTypes.oneOf([ PropTypes.string, PropTypes.number, ]), 
}

Position.defaultProps = {
  position: 'absolute',
  zIndex: 10,
  left: null,
  right: null,
  top: null,
  bottom: null,
}

export default Position