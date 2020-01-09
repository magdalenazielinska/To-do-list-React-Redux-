import React from 'react';

import ListItem from './list-item';
import AddItem from './add-item';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const ListContainer = ({ items=[] }) =>  {

    let listItems = items.map(item => {
        return (
            <ListItem
                key={item.id}
                id={item.id}
                taskName={item.taskName}
                isDone={item.isDone}
            />
        );
    });

    return (
        <Container fixed>
            <AddItem />
            <Box>
                { listItems.length > 0 ? listItems : 'You don\'t have any tasks on your list!' }
            </Box>
        </Container>
    );
}

export default ListContainer;