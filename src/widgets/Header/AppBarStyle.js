export const getAppBarStyles = (visible) => ({
    display: 'flex',
    flexDirection: 'row',
    transition: 'transform 0.3s ease-in-out',
    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
    backgroundColor: 'black',
    boxShadow: 'none'
});