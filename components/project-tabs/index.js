import React from 'react'
import Apps from './apps'
import Widgets from './widgets'
import Github from './github'
import Misc from './misc'
import WP from './wp'

const ProjectTabs = {
  Apps: props => <Apps {...props} />,
  Widgets: props => <Widgets {...props} />,
  Github: props => <Github {...props} />,
  WP: props => <WP {...props} />,
  Misc: props => <Misc {...props} />,
}

export default ProjectTabs