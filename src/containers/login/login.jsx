import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  Text,
  Paper,
  Stack,
  Button,
} from '@mantine/core';
import { FaEnvelope, FaLock, FaEyeSlash, FaEye } from 'react-icons/fa';
import { supabase } from '../../supabase'; // Import the Supabase client
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function LoginPage(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Please enter a valid email address'),
      password: (val) =>
        val.length < 6 ? 'Password must be at least 6 characters long' : null,
    },
  });

  const handleLogin = async () => {
    if (form.isValid()) {
      setIsLoading(true);
      const { email, password } = form.values;

      try {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          toast.error(`Error: ${error.message}`);
        }
        else {
          toast.success('Logged in successfully!')
          navigate("/");
          form.reset(); // Clear the form fields
        }
      } catch (error) {
        toast.error(`Login failed: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex overflow-hidden">
      <ToastContainer />
      <div className="w-1/2 flex justify-center items-center">
        <Paper
          radius="md"
          p="xl"
          withBorder
          {...props}
          className="w-[500px] p-8 bg-white shadow-lg shadow-green-100 border border-gray-200 rounded-lg transition-transform transform hover:scale-105"
        >
          <Text className="text-3xl font-bold text-green-900 mb-4" align="left">
            Login
          </Text>
          <Text className="" align="left">Please login to continue</Text>

          <form onSubmit={form.onSubmit(handleLogin)}>
            <Stack>
              <TextInput
                required
                className="pt-8"
                leftSection={<FaEnvelope size={18} className="ml-3" />}
                placeholder="Enter your email"
                value={form.values.email}
                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                error={form.errors.email}
                radius="md"
                classNames={{
                  input: 'h-10 border border-gray-300 rounded-full bg-gray-100 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-500',
                }}
              />

              <TextInput
                required
                className="pt-5"
                type={passwordVisible ? 'text' : 'password'}  // Toggle input type
                leftSection={<FaLock size={18} className="ml-3" />}
                placeholder="Enter your password"
                value={form.values.password}
                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                error={form.errors.password}
                radius="md"
                rightSection={
                  passwordVisible ?
                    <FaEyeSlash size={18} onClick={() => setPasswordVisible(!passwordVisible)} style={{ cursor: 'pointer' }} /> :
                    <FaEye size={18} onClick={() => setPasswordVisible(!passwordVisible)} style={{ cursor: 'pointer' }} />
                }
                classNames={{
                  input: 'h-10 border border-gray-300 rounded-full bg-gray-100 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-500',
                }}
              />
              <Text
                align="right"
                mt="sm"
                color="black"
                size="sm"
                onClick={() => alert('Forgot Password?')}
                className="text-gray-700 hover:text-blue-800 underline cursor-pointer mb-3 text-sm"
              >
                Forgot Password?
              </Text>

              <Button
                fullWidth
                mt="md"
                radius="xl"
                loading={isLoading}
                classNames={{
                  root: 'w-full bg-green-600 text-white text-center font-semibold rounded-full h-10 hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-md',
                }}
                type="submit"
              >
                Login
              </Button>
            </Stack>
          </form>

          <Text align="center" mt="md">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-green-700 hover:text-blue-800 font-semibold underline cursor-pointer"
            >
              Sign up
            </Link>
          </Text>;
        </Paper>
      </div>
      {/* Image section, hidden on small screens */}
      <div className="hidden md:block w-full md:w-1/2 h-screen overflow-hidden">
        <img
          src="../src/assets/images/religious_image2.jpeg"
          alt="mosque"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

  );
}
