import React, {useState} from 'react'
import Position from './position'
import {Content} from 'bloomer/lib/elements/Content'
import {Button} from 'bloomer'

const OmniInfo = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <>
      <Position bottom="1rem" right="1rem" zIndex={100}>
        <Button
          className={`omni-toggle ${!isOn ? 'closed' : ''}`}
          isSize="small"
          onClick={() => setIsOn(!isOn)}
        >
          {isOn ? <u>close</u> : ''}
        </Button>
      </Position>
      <Position
        bottom={isOn ? 0 : '-200vh'}
        height="100vh"
        width="100vw"
        zIndex={50}
      />
      <Position
        bottom={isOn ? 0 : '-100vh'}
        height="33vh"
        width="100vw"
      >
        <Content className="omni-info-text pa1" isSize="1">
          <p>{'The uniquely robust flavor profile for this site was achieved hours before your arrival. slow-coded, double-linted, then compiled, pre-rendered, on the server-side, from '}
            <a href="https://bulma.io">Bulma</a>
            {'-seasoned cuts of prime '}
            <a href="https://react.js.org">{'React.js'}</a>
            {' code. Every Hand-crafted page , blazing-fast, SEO-friendly Served a la '}
            <a href="https://nextjs.org">{'Next.js'}</a>
            {'. via the simplified '}
            
            {'API to server-side rendering take full advantage of the speed, SEO, & '}
            
            <abbr title="Server-Side Rendering">SSR</abbr>
              capabilities to bring a component-based frontend to life
              on the server-side, as a lightweight, stable, and to life
              static website.`
              }
          </p>
          <p>
            The style/structure is bootstrapped with bloomer.js (a
            component lib built on the Bulma css framework), then
            modified with a custom layer of SCSS. Wherever encapsulation
            and re-usability were a priority, I used jsx inline styles
            to guarantee consistent behaviors site-wide.
          </p>
          <p>
            <strong color="white">
              A note to prospective employers:
            </strong>
            In an effort to demonstrate the full breadth of my web
            development skillset, the source code for this site
            showcases a variety of patterns, libraries, and to bring
            this site to life. Just a little food for thought as you
            view the source.
          </p>
          <p>Thanks for viewing 😉👍,</p>
          <p>
            - <em>Charles Morgan</em>
          </p>
        </Content>
      </Position>
    </>
  )
}

export default OmniInfo
