import { Datagrid, EmailField, List, SimpleList, TextField } from 'react-admin';
import { useMediaQuery } from '@mui/material';

/**
 * <List>: reads the query params from the URL,
 *         calls the API based on these params,
 *         and puts the result in a React context
 *         (only does the data fetching part)
 * <Datagrid>: Delegates the rendering of the actual list to its child
 * <SimpleList>: Uses Material UI's <List> and <ListItem> components
 */
export const UserList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="address.street" />
          <TextField source="phone" />
          <TextField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};
