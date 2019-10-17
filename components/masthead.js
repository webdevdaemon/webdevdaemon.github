/**
 * @augments {Component<{subTitleText:string,titleGradientColor:oneOf([...THEME_COLORS]),  titleBGColor:oneOf([...THEME_COLORS]),titleSize:oneOf([...SIZE_NUM, ...SIZE_STR]),  titleText:string,>}
 */
import Navbar from './navbar'
import PageTitle from './page-title'
import { Hero } from 'bloomer/lib/layout/Hero/Hero'
import { HeroHeader } from 'bloomer/lib/layout/Hero/HeroHeader'
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody'

import PropTypes from 'prop-types'
import { THEME_COLORS, SIZE_NUM, SIZE_STR } from '../pt'

const Masthead = ({ titleText, subTitleText, titleGradientColor, titleBGColor, titleSize }) => (
  <Hero
    isBold={!!titleGradientColor}
    isColor={!!titleGradientColor ? titleGradientColor : titleBGColor}
    isFullHeight={!titleSize}
    isSize={titleSize}
  >
    <HeroHeader>
      <Navbar />
    </HeroHeader>
    <HeroBody>
      <PageTitle subTitle={subTitleText} title={titleText} />
    </HeroBody>
  </Hero>
)

Masthead.propTypes = {
  subTitleText: PropTypes.string,
  titleGradientColor: PropTypes.oneOf([...THEME_COLORS]),
  titleBGColor: PropTypes.oneOf([...THEME_COLORS]),
  titleSize: PropTypes.oneOf([...SIZE_NUM, ...SIZE_STR]),
  titleText: PropTypes.string,
}
Masthead.defaultProps = {}

export default Masthead
