import 'styled-components'

import { theme } from '@beryl-ui/react'

type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
