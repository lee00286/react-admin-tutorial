import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser
} from 'react-admin';
import { dataProvider } from './dataProvider';
import { UserList } from './users';
import { PostList } from './posts';

/**
 * Data Provider: Adapter that allows react-admin to talk to your API
 * <Resource>: Defines the React components to use for each CRUD operation
 * list={ListGuesser}: Tells react-admin to use <ListGuesser> component
 *                     to display the list of users (not used in production)
 */
export const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* <Resource name="users" list={ListGuesser} /> */}
    <Resource name="users" list={UserList} recordRepresentation={'name'} />
    <Resource name="posts" list={PostList} />
  </Admin>
);
