import { AuthProvider } from 'react-admin';

export const authProvider: AuthProvider = {
  // Called when the user attempts to log in
  login: ({ username }) => {
    localStorage.setItem('username', username);
    // Accept all username/password combinations
    return Promise.resolve();
  },
  // Called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('username');
    return Promise.resolve();
  },
  // Called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // Called when the user navigates to a new location,
  // to check for authentication
  checkAuth: () => {
    return localStorage.getItem('username')
      ? Promise.resolve()
      : Promise.reject();
  },
  // Called when the user navigates to a new location,
  // to check for permissions / roles
  getPermissions: () => Promise.resolve()
};
