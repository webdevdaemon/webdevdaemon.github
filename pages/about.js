import Page from '../components/page'
import { fullPage } from '../styles'

const About = () => {
  return (
    <Page
      className="about"
      style={{ ...fullPage }}
      subTitleText="Who I am..."
      titleBGColor="dark"
      titleGradientColor="dark"
      titleSize="small"
      titleText="About CM"
      
    />
  )
}
export default About
