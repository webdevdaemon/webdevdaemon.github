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

export {routes, social}