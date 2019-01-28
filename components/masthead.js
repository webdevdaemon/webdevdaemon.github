import Navbar from './navbar'
import PageTitle from './page-title'
import { Hero } from 'bloomer/lib/layout/Hero/Hero'
import { HeroHeader } from 'bloomer/lib/layout/Hero/HeroHeader'
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody'

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

export default Masthead
