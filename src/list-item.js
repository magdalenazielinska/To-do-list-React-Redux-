import React from 'react';
import { connect } from 'react-redux';

import { removeItem, toggleStatus } from './redux/actions';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleStatus: (id) => dispatch(toggleStatus(id)),
        onRemoveItem: (id) => dispatch(removeItem(id))
    }
}

const ListItem = ({ id, taskName, isDone, onToggleStatus, onRemoveItem }) => {
    
    return (
        <Box my={3} p={1} boxShadow={1} color="text.secondary" display="flex" alignItems="center">
            <Box mx={1} width="80%">
                <div style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{ taskName }</div>
            </Box>
            <Box display="flex" flexDirection="column" mx={1} ml="auto">
                <Button variant="outlined" color="primary" size="small" onClick={() => onToggleStatus(id)}>
                    { isDone ? 'Mark as undone' : 'Mark as done' }
                </Button>
                <Button variant="outlined" color="secondary" size="small" onClick={() => onRemoveItem(id)}>
                    Remove
                </Button>
            </Box>
        </Box>
    );
}

export default connect(null, mapDispatchToProps)(ListItem);