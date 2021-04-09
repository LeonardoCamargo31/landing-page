///* GraphQL */ Permitir que tenha uma sintaxe do GraphQL que o editor consiga entender
const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
    }
  }
`
export default GET_LANDING_PAGE
