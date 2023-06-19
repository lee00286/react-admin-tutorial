
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';

/**
 * Data Provider: Adapter that allows react-admin to talk to your API
 */
export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        
    </Admin>
);

    