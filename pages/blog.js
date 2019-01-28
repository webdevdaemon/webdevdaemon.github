import Page from '../components/page'
import Navbar from '../components/navbar'
import {HeroBody} from 'bloomer/lib/layout/Hero/HeroBody'
import {HeroHeader} from 'bloomer/lib/layout/Hero/HeroHeader'
import {Hero} from 'bloomer/lib/layout/Hero/Hero'

const Blog = () => {
  return (
    <Page
      className="blog"
      style={{
          overflow: 'scroll',
          height: '100vh',
          width: '100vw',
          margin: 0,
          padding: 0,
      }}
    >
      <Hero isBold isColor="dark" isSize="medium">
        <HeroHeader>
          <Navbar className="header" />
        </HeroHeader>
        <HeroBody>
          <h1 className="title">{'The cmDevBlog'}</h1>
        </HeroBody>
      </Hero>
    </Page>
  )
}
export default Blog