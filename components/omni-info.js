import React from 'react'
import RPToggle from './rp-toggle'
import Position from './position'
import {Content} from 'bloomer/lib/elements/Content'
import {Button} from 'bloomer'

const OmniInfo = () => {
  return (
    <RPToggle>
      {({isOn, toggle}) => {
        return (
          <>
            <Position bottom="1rem" right="1rem" zIndex={100}>
              <Button
                className={`omni-toggle ${!isOn ? 'closed' : ''}`}
                isSize="small"
                onClick={toggle}
              >
                {isOn ? <u>close</u> : ''}
              </Button>
            </Position>
            <Position bottom={isOn ? 0 : '-100vh'} height="33vh" width="100vw">
              <Content className="omni-info-text pa1" isSize="1">
                <p>
                  <em>
                    For your viewing and pleasure (and for SEO...), this portfolio uses Next.js from
                    Zeit, to render React.js components on the server side.
                  </em>
                </p>
                <p>
                  The style/structure is bootstrapped with bloomer.js (a component lib built on the
                  Bulma css framework), then modified with a custom layer of SCSS. Wherever
                  encapsulation and re-usability were a priority, I used jsx inline styles to
                  guarantee consistent behaviors site-wide.
                </p>
                <p>
                  <strong color="white">A note to prospective employers:</strong> In an effort to
                  maximize this opportunity to demonstrate the breadth of my development skillset, I
                  chose to incorporate a variety of different patterns and libraries to bring this
                  site to life. Just a little food for thought as you view the source.
                </p>
                <p>Thanks for viewing 😉👍,</p>
                <p>
                  - <em>Charles Morgan</em>
                </p>
              </Content>
            </Position>
          </>
        )
      }}
    </RPToggle>
  )
}

export default OmniInfo
