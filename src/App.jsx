import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import Routers from './routes';
import '@mantine/core/styles/global.css';
import '@mantine/core/styles/ScrollArea.css';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/VisuallyHidden.css';
import '@mantine/core/styles/Paper.css';
import '@mantine/core/styles/Popover.css';
import '@mantine/core/styles/CloseButton.css';
import '@mantine/core/styles/Group.css';
import '@mantine/core/styles/Loader.css';
import '@mantine/core/styles/Overlay.css';
import '@mantine/core/styles/ModalBase.css';
import '@mantine/core/styles/Input.css';
import '@mantine/core/styles/InlineInput.css';
import '@mantine/core/styles/Flex.css';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from './supabase';

function App() {
  const theme = createTheme({});
  const navigate = useNavigate(); // Initialize navigate
  const location = useLocation(); // Get current location (URL)

  async function checkUserSession() {
    const { data, error } = await supabase.auth.getSession();

     // If the current path is "/signup", do not redirect
     if (location.pathname === '/signup') {
      return;
    }

    if (data?.session) {
      console.log("Successfully login.")
      navigate('/home');
    } else {
      navigate('/login');
    }
  }

useEffect(() =>{
  checkUserSession()
},[]);

  return (
    <MantineProvider theme={theme}>
      <Routers />
    </MantineProvider>
  );
}

export default App;
