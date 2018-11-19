import Head from 'next/head'

import '../styles.scss'

const Page = ({ children, title = 'Charles Morgan: Web Developer' }) => (
  <React.Fragment>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossorigin="anonymous"
      />
    </Head>
    {children}
  </React.Fragment>
)

export default Page