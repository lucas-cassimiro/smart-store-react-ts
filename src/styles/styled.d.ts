import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string

    fontFamily: {
      fontLogo: string
      fontText: string
      fontLogo2: string
      fontBanner: string
    }
  }
}
