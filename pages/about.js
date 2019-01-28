import Page from '../components/page'
import Navbar from '../components/navbar'
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody'
import { HeroHeader } from 'bloomer/lib/layout/Hero/HeroHeader'
import { Hero } from 'bloomer/lib/layout/Hero/Hero'
import { fullPage } from '../styles'

const About = () => {
  return (
    <Page
      className="about"
      style={fullPage}
    >
      <Hero>
        <HeroHeader>
          <Navbar className="header" />
        </HeroHeader>
        <HeroBody>
          <h1 className="title">{'About CM'}</h1>
        </HeroBody>
      </Hero>
    </Page>
  )
}
export default About
