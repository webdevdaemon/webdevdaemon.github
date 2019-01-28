import PropTypes from 'prop-types'
import Masthead from './masthead'
import { CTXBurgerMenu } from './providers'

import '../styles.scss'

const HERO_BG_PROPS = ['white', 'light', 'dark', 'black', 'primary', 'info', 'success', 'warning', 'danger']
const HERO_SIZE_PROPS = ['small', 'medium', 'large']

class Page extends React.Component {
  state = { burgerActive: false }

  static propTypes = {
    children: PropTypes.node,
    render: PropTypes.func,
    subTitleText: PropTypes.string,
    titleGradientColor: PropTypes.oneOf(HERO_BG_PROPS),
    titleBGColor: PropTypes.oneOf(HERO_BG_PROPS),
    titleSize: PropTypes.oneOf(HERO_SIZE_PROPS),
    titleText: PropTypes.string,
  }

  static defaultProps = {
    render: null,
    subTitleText: 'A Page with Content',
    titleGradientColor: 'dark',
    titleBGColor: 'dark',
    titleSize: 'medium',
    titleText: 'Page',
  }

  burgerToggle = () => {
    this.setState(prevState => ({ burgerActive: !prevState.burgerActive }), () => console.log('mobile menu toggled'))
  }

  render() {
    const { children, render, titleText, subTitleText, titleGradientColor, titleBGColor, titleSize } = this.props
    const { burgerActive } = this.state
    const burgerToggle = this.burgerToggle

    return (
      <CTXBurgerMenu.Provider value={{ burgerActive, burgerToggle }}>
        {!render ? (
          <>
            <Masthead
              isBold={!!titleGradientColor}
              isColor={!!titleGradientColor ? titleGradientColor : titleBGColor}
              isFullHeight={!titleSize}
              isSize={titleSize}
              subTitle={subTitleText}
              title={titleText}
            />
            {children}
          </>
        ) : (
          render()
        )}
      </CTXBurgerMenu.Provider>
    )
  }
}

export default Page
