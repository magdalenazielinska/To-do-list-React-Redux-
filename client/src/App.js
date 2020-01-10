import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ListContainer from './list-container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const App = () => {

  const itemsList = useSelector(state => state);

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">To-Do List</Typography>
        </Toolbar>
      </AppBar>
      <ListContainer items={itemsList} />
    </Fragment>
  );
}

export default App;
