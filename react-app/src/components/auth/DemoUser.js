import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
const  DemoUserLogin = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const email = "demo@aa.io"
  const password = "password"
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) { 
      setErrors(data);
    }
  };


  return (
      <div>
        <form onSubmit={onLogin}>
            <input
            hidden="true"
            type="text"
            value={email}
            required
            />
            <input
            hidden="true"
            type="password"
            value={password}
            required
            />
        <button className="demo-user-btn" type="submit">Demo User</button>
        </form>
      </div>
  );
}

export default DemoUserLogin

