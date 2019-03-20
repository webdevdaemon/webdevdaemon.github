import PropTypes from 'prop-types'
import Masthead from './masthead'
import { CTXBurgerMenu } from './providers'
import { THEME_COLORS, SIZE_NUM, SIZE_STR } from '../pt'

import '../styles.scss'

class Page extends React.Component {
  state = { burgerActive: false }
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
    this.setState(prevState => ({
      burgerActive: !prevState.burgerActive
    }), () => console.log('mobile menu toggled'))
  }

  render() {
    const { children, render } = this.props
    const { burgerActive } = this.state
    const burgerToggle = this.burgerToggle

    return (
      <CTXBurgerMenu.Provider value={{ burgerActive, burgerToggle }}>
        {!render ? (
          <>
            <Masthead {...this.props} />
            {children}
          </>
        ) : (
          <>{render()}</>
        )}
      </CTXBurgerMenu.Provider>
    )
  }
}

export default Page
