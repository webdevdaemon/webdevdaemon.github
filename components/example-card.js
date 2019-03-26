import React from 'react'
import {Card, CardHeader, CardContent} from 'bloomer'
import {CardFooter} from 'bloomer/lib/components/Card/Footer/CardFooter'

const ExampleCard = ({name, href, img, info, repo, pullRequest, file}) => {
  return (
    <Card tag="a" href={href}>
      <CardHeader>{name}</CardHeader>
      <CardContent />
      <CardFooter />
    </Card>
  )
}

export default ExampleCard