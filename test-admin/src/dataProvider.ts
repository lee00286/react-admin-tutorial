import jsonServerProvider from 'ra-data-json-server';

/**
 * JSONPlaceholder: A fake REST API designed for testing and prototyping,
 *                  as the data source for the application
 * JSONPlaceholder provides endpoints for users, posts, and comments.
 * JSONPlaceholder URL: https://jsonplaceholder.typicode.com
 */
export const dataProvider = jsonServerProvider(
    import.meta.env.VITE_JSON_SERVER_URL
);
