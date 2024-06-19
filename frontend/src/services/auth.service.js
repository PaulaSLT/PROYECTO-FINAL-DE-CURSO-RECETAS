import { api } from './config';

export async function signup(email, fullname, password) {
  try {
    const response = await api.post('/auth/signup', {
      email: email,
      name: fullname,
      password: password,
    });
    return response;
  } catch (error) {
    throw new Error('Something went wrong');
  }
}

export async function login(email, password) {
  try {
    const { data } = await api.post('/auth/login', {
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    throw new Error('User or password is incorrect');
  }
}

