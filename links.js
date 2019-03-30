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