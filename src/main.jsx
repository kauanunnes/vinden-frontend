import { render } from 'preact'
import App from './app.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Glacial Indifference', // Replace 'YourFontFamily' with the name of your project's font
      'Arial',
      'sans-serif',
    ].join(','),
  },
  // You can also customize other aspects of the theme here
});
render(<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>, document.getElementById('app'))
