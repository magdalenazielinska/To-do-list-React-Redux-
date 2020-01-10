import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './redux/actions';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const AddItem = () => {
    
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();
    
    function handleSubmit(event) {
        event.preventDefault();
        if (taskName.length === 0) {
            alert('Type a task!');
            return;
        }
        dispatch(addItem(taskName));
        setTaskName('');
    }

    function handleOnChange(event) {
        setTaskName(event.target.value);
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Box mt={3} mb={6} display="flex" alignItems="center">
                <Box mr={2} width="100%">
                    <TextField id="standard-full-width" placeholder="Add a new task to the list" fullWidth onChange={handleOnChange} value={taskName}></TextField>
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

export default AddItem;