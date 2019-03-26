import {svg as svgBarbackerWhite} from './static/barbacker-logo-white.svg'
import {svg as svgBarbackerBlack} from './static/barbacker-logo-black.svg'
import {pomoScreenShot} from './static/pomojs.png'


const routes = [
  {navRoute: '/', name: 'Home'},
  {navRoute: '/about', name: 'About'},
  {navRoute: '/projects', name: 'Projects'},
  {navRoute: '/contact', name: 'Contact'},
  {navRoute: '/resume', name: 'Resume'},
  {navRoute: '/links', name: 'Links'},
]
const social = [
  {
    href: 'http://github.com/webdevdaemon',
    iconClassName: 'fab fa-github',
    linkName: 'github',
    linkAlt: 'my github',
  },
  {
    href: 'mailto:cmorganwebdev@gmail.com',
    iconClassName: 'fas fa-envelope',
    linkName: 'email',
    linkAlt: 'email',
  },
  {
    href: 'https://linkedin.com/in/cmorganwebdev',
    iconClassName: 'fab fa-linkedin',
    linkName: 'linkedin',
    linkAlt: 'my linkedin page',
  },
]
export {routes, social}

class Example {
  constructor({name, href, img, info}) {
    this.name = name
    this.href = href
    this.img = img
    this.info = info
  }
}
class Github extends Example {
  constructor({repo, pullRequestUrl, fileName}) {
    this.repo = repo
    this.fileName = fileName
    this.pullRequestUrl = pullRequestUrl
  }
}
class Codepen extends Example {
  constructor({embed, slug}) {
    this.embed = embed
    this.slug = slug
  }
}

export {Example, Github, Codepen}

const apps = [
  {name: 'Barbacker', href: 'https://barbacker.herokuapp.com', img: svgBarbackerBlack, info: ''},
  {name: 'PomoJS', href: 'https://pomo-js.herokuapp.com', img: pomoScreenShot, info: ''},
]

const github = [{ name: 'eslint docs', href: 'https://eslint.org/docs/rules/prefer-arrow-callback', img: '', info: '', repo: 'https://github.com/eslint/eslint', pullRequestUrl: '', fileName: 'prefer-arrow-callback&mdash;'}]

const widgets = []
const misc = []
const wp = []

const PROJECTS = {apps, github, widgets, wp, misc}

export {PROJECTS}
