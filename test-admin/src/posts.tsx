import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const PostList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
);
