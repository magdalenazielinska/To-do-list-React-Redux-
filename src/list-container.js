import React from 'react';
import { connect } from 'react-redux';

import ListItem from './list-item';
import AddItem from './add-item';
import { addItem, removeItem, toggleStatus } from './redux/actions';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (taskName) => dispatch(addItem(taskName)),
        onToggleStatus: (id) => dispatch(toggleStatus(id)),
        onRemoveItem: (id) => dispatch(removeItem(id))
    }
}

const ListContainer = ({ items=[], onAddItem, onToggleStatus, onRemoveItem }) =>  {

    let listItems = items.map(item => {
        return (
            <ListItem
                key={item.id}
                id={item.id}
                taskName={item.taskName}
                isDone={item.isDone}
                toggleStatus={onToggleStatus}
                removeItem={onRemoveItem}
            />
        );
    });

    return (
        <Container fixed>
            <AddItem addItem={onAddItem} />
            <Box>
                { listItems.length > 0 ? listItems : 'You don\'t have any tasks on your list!' }
            </Box>
        </Container>
    );
}

export default connect(null, mapDispatchToProps)(ListContainer);