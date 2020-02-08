import { createMuiTheme } from '@material-ui/core/styles';
// import { orange } from '@material-ui/core/colors';


const customBlue= '#0B7289';
const customOrange= '#FFBA60' 

const theme = createMuiTheme({
  palette: {
    common: {
      blue: `${customBlue}`,
      orange: `${customOrange}`,
    },
    primary: {
      main: `${customBlue}`
    },
    secondary: {
      main: `${customOrange}`
    }
  },
  typography: {
    tab:{
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '1rem',
    }
  }
});
export default theme;