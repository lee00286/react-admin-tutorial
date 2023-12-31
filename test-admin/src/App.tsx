import { Admin, Resource } from 'react-admin';
import { dataProvider } from './providers/dataProvider';
import { UserList } from './pages/users';
import { PostCreate, PostEdit, PostList } from './pages/posts';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import { Dashboard } from './pages/Dashboard';
import { authProvider } from './providers/authProvider';

/**
 * Data Provider: Adapter that allows react-admin to talk to your API
 * <Resource>: Defines the React components to use for each CRUD operation
 * list={ListGuesser}: Tells react-admin to use <ListGuesser> component
 *                     to display the list of users (not used in production)
 */
export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      icon={UserIcon}
      recordRepresentation={'name'}
    />
    {/* <Resource name="users" list={ListGuesser} /> */}
  </Admin>
);
