export const breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
}

export const screens = {
  tablet: '640px',
  laptop: '1024px',
  desktop: '1280px'
}

export const mediaQuery = {
  minXs: `(min-width: ${breakpoints.xs})`,
  maxXs: `(max-width: ${breakpoints.xs})`,
  minSm: `(max-width: ${breakpoints.sm})`,
  maxSm: `(max-width: ${breakpoints.sm})`,
  minMd: `(max-width: ${breakpoints.md})`,
  maxMd: `(max-width: ${breakpoints.md})`,
  minLg: `(max-width: ${breakpoints.lg})`,
  maxLg: `(max-width: ${breakpoints.lg})`,
  minXl: `(max-width: ${breakpoints.xl})`,
  maxXl: `(max-width: ${breakpoints.xl})`
}