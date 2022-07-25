import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import BusinessInfo from './components/BusinessInfo/BusinessInfo';
import User from './components/User';
import { authenticate } from './store/session';
import { getAllCategoryThunk } from './store/categories';
import { getAllBusinessesThunk } from './store/businesses';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const categories = useSelector(state => state.categoryState)
  const businesses = useSelector(state => state.bizState)
  const reviews = useSelector(state => state.reviewState)

  useEffect(() => {
    dispatch(getAllCategoryThunk())
    // dispatch(getAllBusinessesThunk())
  },[])
  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <Route path='/businesses/:businessId' exact={true}>
          <BusinessInfo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
