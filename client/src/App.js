import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListContainer from './list-container';
import { requestTasks } from './redux/actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const App = () => {

  const itemsList = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTasks());
  }, []);

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">To-Do List</Typography>
        </Toolbar>
      </AppBar>
      <ListContainer items={itemsList}/>
    </Fragment>
  );
}

export default App;
