import axios from 'axios';

type UserData = {
    username: string;
    password: string;
    email?: string;  // email might be optional and only needed for registration
  }
  

const registerUser = async (userData) => {
  try {
    const response = await axios.post('/auth/register', userData);
    console.log(response.data);
    // Handle success, maybe redirect user or show a message
  } catch (error) {
    console.error('Error registering user:', error);
    // Handle error, maybe show an error message to the user
  }
}
const loginUser = async (userData) => {
    try {
      const response = await axios.post('/auth/login', userData);
      const { token } = response.data;
      // Store the token, maybe in React state, localStorage, or Context
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }
  