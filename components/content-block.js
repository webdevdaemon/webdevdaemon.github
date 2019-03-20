import { Content } from 'bloomer/lib/elements/Content'

const ContentBlock = ({children}) => {
  return (
    <Content className="content-block" tag="section">
      {children}
    </Content>
  )
}

export default ContentBlock