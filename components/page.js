/**
* @augments {Component<{    children:node,    render:Function,    subTitleText:string,    titleGradientColor:oneOf([...THEME_COLORS]),    titleBGColor:oneOf([...THEME_COLORS]),    titleSize:oneOf([...SIZE_NUM, ...SIZE_STR]),    titleText:string,  >}
*/
import PropTypes from 'prop-types'
import Masthead from './masthead'
import {CTXBurgerMenu} from './providers'
import {THEME_COLORS, SIZE_NUM, SIZE_STR} from '../pt'
// import { infoImage } from '../static/skull-brackets.png'

import '../styles.scss'
import RPToggle from './rp-toggle'
import {Button, Content} from 'bloomer'
import Position from './position'
import OmniInfo from './omni-info'

class Page extends React.Component {
  state = {burgerActive: false}
  static propTypes = {
    children: PropTypes.node,
    render: PropTypes.func,
    subTitleText: PropTypes.string,
    titleGradientColor: PropTypes.oneOf([...THEME_COLORS]),
    titleBGColor: PropTypes.oneOf([...THEME_COLORS]),
    titleSize: PropTypes.oneOf([...SIZE_NUM, ...SIZE_STR]),
    titleText: PropTypes.string,
  }
  static defaultProps = {
    render: null,
    subTitleText: 'A Page with Content',
    titleGradientColor: 'dark',
    titleBGColor: 'dark',
    titleSize: null,
    titleText: 'Page',
  }
  burgerToggle = () => {
    this.setState(
      prevState => ({
        burgerActive: !prevState.burgerActive,
      }),
      () => console.log('mobile menu toggled'),
    )
  }

  render() {
    const {children, render} = this.props
    const {burgerActive} = this.state
    const burgerToggle = this.burgerToggle

    return (
      <CTXBurgerMenu.Provider value={{burgerActive, burgerToggle}}>
        {render ? (
          <>{render()}</>
        ) : (
          <>
            <Masthead {...this.props} />
            {children}
          </>
        )}
        <><OmniInfo /></>
      </CTXBurgerMenu.Provider>
    )
  }
}

export default Page

