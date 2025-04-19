export const getAppBarStyles = visible => ({
  display: 'flex',
  flexDirection: 'row',
  transition: 'transform 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out',
  transform: visible ? 'translateY(0)' : 'translateY(-100%)',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  boxShadow: 'none',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: 'none',
  color: 'white'
});
