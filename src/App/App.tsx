import React from 'react';
import { makeStyles, install, ThemeProvider } from '@material-ui/styles';
import { blueGrey, deepOrange, red } from '@material-ui/core/colors';
import { CssBaseline, Theme, createMuiTheme } from '@material-ui/core';

import AppToolbar from './AppToolbar';

install();

const theme: Theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: deepOrange,
    error: {
      light: red[700],
      main: red[900],
      dark: red[900]
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['"Nanum Gothic Coding"', 'sans-serif'].join(','),
    fontSize: 16
  }
});

const AppStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100vw',
    height: '100vh'
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  mainToolbar: {
    flex: ' 0 0 auto'
  }
});

const App: React.FC = React.memo(() => {
  const classes = AppStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className={classes.root}>
        <AppToolbar isAuthenticated={false} className={classes.mainToolbar} />
      </main>
    </ThemeProvider>
  );
});

export default App;
