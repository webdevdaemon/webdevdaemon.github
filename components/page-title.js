const PageTitle = ({ title, subTitle, bgHue }) => (
  <>
    <h1 className={'title is-res-size-1 has-text-centered'} style={{ color: `hsla(${bgHue}, 100%, 20%, 1)` }}>
      {title}
    </h1>
    <h2 className={'subtitle is-res-size-4 has-text-centered'}>{subTitle}</h2>
  </>
)

export default PageTitle
