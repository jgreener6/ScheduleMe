import axios from 'axios';

type UserData = {
    username: string;
    password: string;
    email: string;  
  }
  

  const registerUser = async (userData: UserData) => {
    try {
      const response = await axios.post('/auth/register', userData);
      console.log(response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }
  
  const loginUser = async (userData: UserData) => {
    try {
      const response = await axios.post('/auth/login', userData);
      const { token } = response.data;
      // Do something with the token...
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }
  