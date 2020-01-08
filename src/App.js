import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import ListContainer from './list-container';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const mapStateToProps = (state) => {
  return {
    itemsList: state
  }
}

class App extends Component {

  render() {
    const { itemsList } = this.props;

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
}

export default connect(mapStateToProps)(App);
