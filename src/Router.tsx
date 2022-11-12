import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './shared/Layout';
import Login from './login/Login';
import UserList from './user/screens/UserList';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './contexts/auth-context';
import RefreshProvider from './contexts/refresh-context';
import GlobalAlert from './components/GlobalAlert';

const UserListProtectedRoute = () => (
  <ProtectedRoute>
    <UserList />
  </ProtectedRoute>
);
function Router() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <RefreshProvider>
        <>
          <GlobalAlert/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<UserListProtectedRoute />} />
              <Route path="users">
                <Route index element={<UserListProtectedRoute />} />
              </Route>
            </Route>
          </Routes>
        </>
      </RefreshProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default Router;
