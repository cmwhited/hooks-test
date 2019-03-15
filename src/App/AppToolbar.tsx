import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

type AppToolbarProps = {
  color: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
};

const AppToolbar: React.FC<AppToolbarProps> = React.memo((props: AppToolbarProps) => {
  const { color } = props;
  return (
    <AppBar position="static" color={color}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Hooks Test App.
        </Typography>
      </Toolbar>
    </AppBar>
  );
});

export default AppToolbar;
