import Page from '../components/page'
import Navbar from '../components/navbar'
import NavMenu from '../components/nav-menu'

import Link from 'next/link'

const HomeHead = ({children}) => <div className="hero-head">{children}</div>

const HomeBody = ({children, title, subtitle}) => {
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title is-size-1">{title}</h1>
        <h2 className="subtitle">{subtitle()}</h2>
      </div>
    </div>
  )
}

const HomeFoot = ({children, render}) => {
  return (
    <div className="hero-foot">
      
    </div>
  )
}


/*
  <<<|> Export Page <|>>>
*/


export default () => {
  return (
    <Page className='' style={{
      overflow: 'hidden',
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
    }}>
      <section className="hero is-success is-fullheight" id="hero-bg" style={{
        backgroundColor: '#000099',
        backgroundImage: 'url("../static/markus-spiske-771011-unsplash.jpg")',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
      }}>
        <HomeHead>
          <Navbar idSuffix='home'/>
        </HomeHead>

        <HomeBody
          title={'Charles Morgan'}
          subtitle={() => (
            <div>
              <span className={'is-size-3'}>
                Javascript Enthusiast & <br/>Web Developer Extraordinaire
              </span>
            </div>
          )}
        />
        <HomeFoot/>
      </section>
    </Page>
  )
}
