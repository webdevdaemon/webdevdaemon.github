import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'

import Head from '../components/head'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = { }
    if (Component.getInitialProps) { pageProps = await Component.getInitialProps(ctx) }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head />
        <PageTransition classNames="page-transition" id="wrapper" timeout={200}>
          <Component { ...pageProps } />
        </PageTransition>
      </Container>
    )
  }
}
