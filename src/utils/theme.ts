const BASELINE = 16;
const BORDER_RADIUS = '4px';

const SCALES = {
  XSMALL: 0.5,
  SMALL: 0.75,
  MEDIUM: 1,
  LARGE: 1.5,
  XLARGE: 2,
};

export default {
  colors: {
    white: "#FFF",
    primary: '#1C40FB',
    primaryMuted: '#4a67ff',
    background: '#FAFAFA',
    border: '#E5E4E2',
  },
  font: {
    family: {
      display: `sans-serif`
    },
    colors: {
      heading: '#000000',
      text: '#2f3037',
      textMuted: '#484952',
      alt: '#A8A8A8'
    },
    size: {
      xsmall: `${SCALES.XSMALL + 0.2}rem`,
      small: `${SCALES.SMALL + 0.2}rem`,
      regular: `${SCALES.MEDIUM}rem`,
      h1: `${SCALES.XLARGE}rem`,
      h2: `${SCALES.LARGE}rem`,
      h3: `${SCALES.MEDIUM + 0.25}rem`
    }
  },
  spacing: {
    xsmall: `${SCALES.XSMALL * BASELINE}px`,
    small: `${SCALES.SMALL * BASELINE}px`,
    medium: `${SCALES.MEDIUM * BASELINE}px`,
    large: `${SCALES.LARGE * BASELINE}px`,
    xlarge: `${SCALES.XLARGE * BASELINE}px`
  },
  BORDER_RADIUS
};
