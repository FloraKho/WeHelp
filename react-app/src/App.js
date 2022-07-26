import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import BusinessInfo from './components/BusinessInfo/BusinessInfo';
import User from './components/User';
import Category from './components/Category';
import { authenticate } from './store/session';
import AllBusinessesPage from './components/AllBusinessesPage'
import { getAllCategoryThunk } from './store/categories';
import { getAllBusinessesThunk } from './store/businesses';

import CreateBusinessPage from './components/CreateBusinessPage/CreateBusinessPage';
import UpdateBusinessPage from './components/UpdateBusinessPage/UpdateBusinessPage';
import ReviewForm from './components/Reviews/ReviewForm';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const categories = useSelector(state => state.categoryState)
  const businesses = useSelector(state => state.bizState)
  const reviews = useSelector(state => state.reviewState)

  useEffect(() => {
    dispatch(getAllCategoryThunk())
    dispatch(getAllBusinessesThunk())
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
      <NavBar loaded={loaded} businesses={businesses} />
      {loaded && (
        <Switch>
          <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm />
          </Route>
          <Route path='/category/:categoryId' exact={true}>
            <Category businesses={businesses} />
          </Route>
          <Route path='/businesses' exact={true} >
            <AllBusinessesPage businesses={businesses} />
          </Route>
          <ProtectedRoute path='/users' exact={true} >
            <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User />
          </ProtectedRoute>
          <ProtectedRoute path='/post-business' exact={true}>
            <CreateBusinessPage categories={categories} />
          </ProtectedRoute>
          <ProtectedRoute path='/businesses/:businessId/edit' exact={true}>
            <UpdateBusinessPage businesses={businesses} categories={categories} />
          </ProtectedRoute>
          <Route path='/businesses/:businessId' exact={true}>
            <BusinessInfo />
          </Route>
          <ProtectedRoute path='/businesses/:businessId/postReview' exact={true}>
            <ReviewForm />
          </ProtectedRoute>
          <Route path='/' exact={true} >
            <HomePage businesses={businesses} categories={categories}/>
          </Route>
        </Switch>
        )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
