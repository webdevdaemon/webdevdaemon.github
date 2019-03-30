import React from 'react'
import {Content} from 'bloomer/lib/elements/Content'

const barbackerLogoWhite = './static/barbacker-logo.png'
const pomoScreenShot = './static/pomojs.png'
const apps = {
  Barbacker: {
    href: 'https://barbacker.herokuapp.com',
    img: barbackerLogoWhite,
    info: 'blah blah blah blah blah blah blah blah blah blah blah blah',
  },
  PomoJS: {
    href: 'https://pomo-js.herokuapp.com',
    img: pomoScreenShot,
    info: 'blah blah blah blah blah blah blah blah blah blah blah blah',
  },
}

const Apps = () => {
  const names = Object.keys(apps) //?

  return (
    <Content>
      <h1>Apps</h1>
      {names.map((name, i) => (

        <a href={apps[name].href} key={i}>
          <li>{Object.entries(apps[name]).map(([label, content], i) => (
            <>
              <h3>{label}</h3>
              <p>{content}</p>
            </>
          ))}</li>
        </a>
      ))}
    </Content>
  )
}

Apps() //?

export default Apps
