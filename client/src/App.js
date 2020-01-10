import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListContainer from './list-container';
import { requestTasks } from './redux/actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const App = () => {

  const itemsList = useSelector(state => state.todoList);
  const apiItemsList = useSelector(state => state.requestTasks);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(requestTasks());
  // });

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">To-Do List</Typography>
        </Toolbar>
      </AppBar>
      <ListContainer items={itemsList} itemsApi={apiItemsList} />
    </Fragment>
  );
}

export default App;
