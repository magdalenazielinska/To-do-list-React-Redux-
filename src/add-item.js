import React, { Component } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.taskName === undefined) {
            return;
        }
        if (this.state.taskName.length === 0) {
            alert('Type a task!');
            return;
        }
        this.props.addItem(this.state.taskName);
        this.setState({
            taskName: ''
        });
    }

    handleOnChange = event => {
        this.setState({
            taskName: event.target.value
        });
    };

    render() {
        return (
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <Box mt={3} mb={6} display="flex" alignItems="center">
                    <Box mr={2} width="100%">
                        <TextField id="standard-full-width" placeholder="Add a new task to the list" fullWidth onChange={this.handleOnChange} value={this.state.taskName}></TextField>
                        {/* <input placeholder="Add a new task to the list" ref={(element) => { this.input = element }} /> */}
                    </Box>
                    <Box ml="auto">
                        <Button variant="contained" color="primary" type="submit">
                            Add
                        </Button>
                    </Box>
                </Box>
            </form>
        );
    }
}

export default AddItem;