import React from 'react'
import {Card} from 'bloomer/lib/components/Card/Card'
import {CardContent} from 'bloomer/lib/components/Card/CardContent'
import {CardHeader} from 'bloomer/lib/components/Card/Header/CardHeader'
import {CardFooter} from 'bloomer/lib/components/Card/Footer/CardFooter'
import {Container} from 'bloomer/lib/layout/Container'
import PropTypes from 'prop-types'

const DynamicCard = ({
  contentObject,
  img = '../public/markus-spiske.jpg',
  link = '#',
  name = 'oops...',
  showLabels = false,
  tag = null,
}) => {
  const renderEntry = ({k, v, i}) => (
    <Container
      className={`dynamic-card-entry ${k}`}
      key={i}
      style={{backgroundColor: 'hsla(0,0,0,0.6)'}}
    >
      {showLabels ? <p isSize={2}>{k}</p> : <div />}
      <p isSize={1}>{v}</p>
    </Container>
  )

  const entries = Object.entries(contentObject)

  return (
    <Card
      className={`dynamic-card ${name}`}
      href={link}
      style={{backgroundImage: `url('${img}')`}}
      tag={tag}
    >
      <CardHeader>{name}</CardHeader>
      <CardContent>
        <div>{entries.map(([k, v], i) => renderEntry({k, v, i}))}</div>
      </CardContent>
      <CardFooter />
    </Card>
  )
}

DynamicCard.propTypes = {
  contentObject: PropTypes.object.isRequired,
  img: PropTypes.any,
  link: PropTypes.string,
  name: PropTypes.string.isRequired,
  showLabels: PropTypes.bool,
  tag: PropTypes.string,
}

export default DynamicCard
