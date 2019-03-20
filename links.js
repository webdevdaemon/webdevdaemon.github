const routes = [
  {navRoute: '/', name: 'Home'},
  {navRoute: '/about', name: 'About'},
  {navRoute: '/code', name: 'Code'},
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
    size: 3,
  }, {
    href: 'mailto:cmorganwebdev@gmail.com',
    iconClassName: 'fas fa-envelope',
    linkName: 'email',
    linkAlt: 'email',
    size: 3,
  }
]

class Example {
  constructor({ name, href, img, info }) {
    this.name = name
    this.href = href
    this.img  = img
    this.info = info
  }
}

class OpenSource extends Example {
  constructor ({repo, pullRequest, file}) {
    this.repo = repo
    this.file = file
    this.pullRequest = pullRequest
  }
}

class Pen extends Example {
  constructor() {
    
  }
}



const examples = [
  {name: 'Barbacker', href: 'https://barbacker.herokuapp.com',  img: '', info: ''},
  {name: 'PomoJS',    href: 'https://pomo-js.herokuapp.com',    img: '', info: ''},
]

const openSource = [
  {name:'', href: '', img: '', info: ''}
]

const projects = {}

export {routes, social}