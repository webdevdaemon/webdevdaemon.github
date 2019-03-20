import { createElement } from 'react'
import PropTypes from 'prop-types'

import { Section } from 'bloomer/lib/layout/Section'
import { fillSpace } from '../styles'

const TabContent = ({ children, render }) => {
  
  return (
    <Section style={fillSpace}>
      {render ? render() : children}
    </Section>
  )
}

TabContent.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func,
}

export default TabContent