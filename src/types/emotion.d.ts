import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      lightGrey: string;
      darkGrey: string;
      white: string;
      active: string;
      inactive: string;
    };
  }
}
