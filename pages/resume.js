import Page from '../components/page'
import Navbar from '../components/navbar'
import {HeroBody} from 'bloomer/lib/layout/Hero/HeroBody'
import {HeroHeader} from 'bloomer/lib/layout/Hero/HeroHeader'
import { Hero } from 'bloomer/lib/layout/Hero/Hero'
import { pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Resume = () => {
  return (
    <Page
      className="Resume"
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
          <h1 className="title">{'Resume'}</h1>
        </HeroBody>
      </Hero>
    </Page>
  )
}
export default Resume