const LoaderStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px'
  },
  loader: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    display: 'block',
    margin: '15px auto',
    position: 'relative',
    color: '#FFF',
    left: '-100px',
    boxSizing: 'border-box',
    animation: 'shadowRolling 2s linear infinite'
  },
  '@keyframes shadowRolling': {
    '0%': {
      boxShadow: '0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0)'
    },
    '12%': {
      boxShadow: '100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0)'
    },
    '25%': {
      boxShadow: '110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0)'
    },
    '36%': {
      boxShadow: '120px 0 white, 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0)'
    },
    '50%': {
      boxShadow: '130px 0 white, 120px 0 white, 110px 0 white, 100px 0 white'
    },
    '62%': {
      boxShadow: '200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white, 110px 0 white'
    },
    '75%': {
      boxShadow: '200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white'
    },
    '87%': {
      boxShadow: '200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white'
    },
    '100%': {
      boxShadow: '200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0)'
    }
  }
};
export default LoaderStyles;
