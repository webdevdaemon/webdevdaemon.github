import React from 'react'
import ReactDOM from 'react-dom'
import {githubLogo} from './static/Octocat.png'

const github = [{
    name: 'eslint docs',
    href: 'https://eslint.org/docs/rules/prefer-arrow-callback',
    img: githubLogo,
    info: 'I re-wrote the documentation entry for eslint\'s "prefer-arrow-callback" rule. This PR began as a rephrasing for a single section, but after supplying a sample of my technical writing ability, they permitted me to redo the entire entry.',
    repo: 'https://github.com/eslint/eslint',
    pullRequestUrl: '',
    fileName: 'prefer-arrow-callback&mdash;',
  }]

const widgets = []
const misc = []
const wp = []

export { apps, github, widgets, wp, misc }
