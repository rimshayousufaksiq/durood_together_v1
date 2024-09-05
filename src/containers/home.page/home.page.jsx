import { Button } from '@mantine/core'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase';

export default function HomePage() {
  const navigate = useNavigate(); // Initialize navigate

  async function logoutUser() {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      console.log('Error logging out:', error.message);
    } else {
      console.log('User successfully logged out');
      navigate('/login')
    }
  }
  return (
    <div>
      <b>Welcome To Dashboard! Durood_Together</b>
      <br></br>
      <Button
        fullWidth
        mt="md"
        radius="xl"
        onClick={logoutUser}
        //loading={isLoading}
        classNames={{
          root: 'w-40 bg-red-600 text-white text-center font-semibold rounded-full h-8 hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-md',
        }}
        type="submit"
      >
        Logout
      </Button>
      {/* <Link to="/login">login</Link> */}
    </div>
  )
}
