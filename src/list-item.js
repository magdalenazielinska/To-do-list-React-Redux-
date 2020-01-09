import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, toggleStatus } from './redux/actions';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const ListItem = ({ id, taskName, isDone }) => {

    const dispatch = useDispatch();
    
    return (
        <Box my={3} p={1} boxShadow={1} color="text.secondary" display="flex" alignItems="center">
            <Box mx={1} width="80%" style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                { taskName }
            </Box>
            <Box display="flex" flexDirection="column" mx={1} ml="auto">
                <Button variant="outlined" color="primary" size="small" onClick={() => dispatch(toggleStatus(id))}>
                    { isDone ? 'Mark as undone' : 'Mark as done' }
                </Button>
                <Button variant="outlined" color="secondary" size="small" onClick={() => dispatch(removeItem(id))}>
                    Remove
                </Button>
            </Box>
        </Box>
    );
}

export default ListItem;