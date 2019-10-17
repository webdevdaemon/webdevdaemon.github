/**
 * @augments {Component<{    children:node,    render:Function,    subTitleText:string,    titleGradientColor:oneOf([...THEME_COLORS]),    titleBGColor:oneOf([...THEME_COLORS]),    titleSize:oneOf([...SIZE_NUM, ...SIZE_STR]),    titleText:string,  >}
 */
import Masthead from './masthead'
import { CTXBurgerMenu } from './providers'
import { THEME_COLORS, SIZE_NUM, SIZE_STR } from '../pt'
import OmniInfo from './omni-info'
import PropTypes from 'prop-types'

import '../styles.scss'

class Page extends React.Component {
  state = { burgerActive: false }
  static propTypes = {
    children: PropTypes.any,
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
    this.setState(prevState => ({ burgerActive: !prevState.burgerActive }))
  }
  render() {
    const { children, render } = this.props
    const { burgerActive } = this.state
    const burgerToggle = this.burgerToggle

    return (
      <CTXBurgerMenu.Provider value={{ burgerActive, burgerToggle }}>
        <main className="main">
          {render ? (
            <>
              {/* <Masthead {...this.props} /> */}
              {render(this.props)}
            </>
          ) : (
            <>
              <Masthead {...this.props} />
              {children}
            </>
          )}
          <>
            <OmniInfo />
          </>
        </main>
      </CTXBurgerMenu.Provider>
    )
  }
}

export default Page
