/**
* @augments {Component<{  children:node,  isFullwidth:boolean,  bgColor:oneOf([...THEME_COLORS]),>}
*/
import PropTypes from 'prop-types'
import { Container } from 'bloomer/lib/layout/Container'
import { THEME_COLORS } from '../pt'

const Contain = ({ children, isFullwidth, bgColor }) => {
  return (
    <Container
      className={`${isFullwidth ? '' : 'is-fullhd'} has-background-${bgColor}`} isFluid={!isFullwidth}>
      {children}
    </Container>
  )
}

Contain.propTypes = {
  children: PropTypes.node,
  isFullwidth: PropTypes.bool,
  bgColor: PropTypes.oneOf([...THEME_COLORS]),
}

export default Container
