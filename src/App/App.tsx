import React from 'react';
import { makeStyles } from '@material-ui/styles';

import AppToolbar from './AppToolbar';

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
    <main className={classes.root}>
      <AppToolbar isAuthenticated={false} className={classes.mainToolbar} />
    </main>
  );
});

export default App;
