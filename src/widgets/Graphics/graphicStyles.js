export const Graph = {
  width: 230,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(8px)',
  boxShadow: 'none',
  borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  color: 'white',
  userSelect: 'none',
  height: 'auto',
  top: 80,
  left: '1600px',
  position: 'absolute'
};

export const tableCellStyles = {
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontWeight: 'bold',
    padding: '12px 16px',
    textAlign: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    fontSize: '1rem'
  },
  body: {
    color: 'white',
    padding: '12px 16px',
    backgroundColor: 'transparent',
    transition: 'background-color 0.3s ease'
  }
};
