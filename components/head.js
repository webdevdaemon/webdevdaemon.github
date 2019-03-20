import Head from 'next/head'

export default ({title = 'Dev Portfolio: Charles Morgan', children}) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta content="initial-scale=1.0, width=device-width" name="viewport" />
    <link
      crossOrigin="anonymous"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      rel="stylesheet"
    />
    <link
      crossOrigin="anonymous"
      href="https://fonts.googleapis.com/css?family=Lato:100,200,400,700|Montserrat:400,700|Open-Sans:100,400,700|Croissant-One"
      rel="stylesheet"
    />
    {children}
  </Head>
)
