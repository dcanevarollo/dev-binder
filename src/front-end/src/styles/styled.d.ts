/* eslint-disable @typescript-eslint/no-empty-interface */

import 'styled-components';

import { styledTheme } from './theme';

export type Theme = typeof styledTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
