import Page from '../components/page'
import Navbar from '../components/navbar'
import {Hero} from 'bloomer/lib/layout/Hero/Hero'
import {HeroBody} from 'bloomer/lib/layout/Hero/HeroBody'
import { HeroHeader } from 'bloomer/lib/layout/Hero/HeroHeader'
import { HeroFooter } from 'bloomer/lib/layout/Hero/HeroFooter'
import { useState } from 'react'
import TabContent from '../components/tab-content'
import ProjectTabs from '../components/project-tabs'

const Projects = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const tabHandler = i => setActiveIndex(i)

  const tabs = ['Apps', 'Widgets', 'Github', 'WP', 'Misc']
  
  const renderTab = ({ id, i }) =>
    <li className={`project-tab ${i === activeIndex ? 'is-active' : ''}`} key={id}>
      <a onClick={() => tabHandler(i)}>{id}</a>
    </li>

  
  const showContent = ProjectTabs[tabs[activeIndex]]

  return (
    <Page className="Projects"
      render={() => (
        <>
          <Hero
            id="project-hero"
            isBold
            isColor="black"
            isSize="small" 
            tag="section">
            <HeroHeader>
              <Navbar className="header" />
            </HeroHeader>
            <HeroBody>
              <h1 className="is-family-title is-size-4">{'Projects'}</h1>
            </HeroBody>
            <HeroFooter>
              <nav className="tabs is-centered is-full-width is-small">
                <div className="container">
                  <ul>
                    {tabs.map((id,i) => renderTab({id,i}))}
                  </ul>
                </div>
              </nav>
            </HeroFooter>
          </Hero>
          <TabContent>
            {showContent()}
          </TabContent>
        </>
      )}
      style={{
        overflow: 'scroll',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
      }}
    />
  )
}
export default Projects
