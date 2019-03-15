import React from 'react';
import { makeStyles, install } from '@material-ui/styles';
import { blueGrey, deepOrange, red } from '@material-ui/core/colors';
import { CssBaseline, Theme, AppBar, Toolbar, Typography, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

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

export type AppProps = {
  isAuthenticated: boolean;
};

const initialAppState: AppProps = {
  isAuthenticated: false
};

const App: React.FC<AppProps> = React.memo(() => {
  const classes = AppStyles();
  const [auth, setAuth] = React.useState(initialAppState);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <main className={classes.root}>
        <AppToolbar color="primary" className={classes.mainToolbar} />
      </main>
    </MuiThemeProvider>
  );
});

export default App;
