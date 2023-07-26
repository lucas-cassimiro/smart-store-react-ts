import { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

export const theme: DefaultTheme = {
  fontFamily: {
    fontLogo: ['Lobster', 'cursive', 'sans-serif'].join(','),
    fontText: ['Inter', 'sans-serif'].join(','),
    fontLogo2: ['Lobster Two', 'cursive', 'sans-serif'].join(','),
    fontBanner: ['Itim', 'cursive', 'sans-serif'].join(','),
  },
}

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
