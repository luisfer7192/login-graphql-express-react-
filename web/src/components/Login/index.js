import React from 'react';
import { useMutation } from '@apollo/client'; // useQuery is here

import { ADD_USER } from './providers/AddUser'; // add the GET_USERS here if you want to get the users
import LoginForm from './LoginForm';
import { Layout, message } from 'antd';

import './styles.css';

const Login = () => {
  // if you want to check the response in the console of the mutation. you can check it like this const [addUser, { data: responseAddUser }]
  const [addUser] = useMutation(ADD_USER);

  // we are not going to show the list of users but you can use this way (example)
  // const { loading, error, data } = useQuery(GET_USERS);
  // console.log({loading, error, data});
  // if (loading) return <p>Loading ...</p>;

  const onRegister = ({username, date, email, password}) => {
    const data = {
      user_name: username,
      birth_date: date.format('YYYY-MM-DD'),
      email,
      password
    };

    addUser({ variables: data});
    message.success('Register complete');
  }

  return (
    <Layout className="container">
      <LoginForm onRegister={onRegister} />
    </Layout>
  );
}

export default Login;