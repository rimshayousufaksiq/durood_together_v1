import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Stack,
  Box,
} from '@mantine/core';
import { GoogleButton } from '../../components/google.button';
import { AppleButton } from '../../components/apple.button';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function LoginPage(props) {
  const [isLoading, setIsLoading] = useState(false);

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

  const handleLogin = () => {
    if (form.isValid()) {
      setIsLoading(true);
      // Perform login logic here
      setTimeout(() => {
        setIsLoading(false);
        alert('Logged in successfully!');
      }, 2000);
    }
  };

  return (
    <div className="w-full flex min-h-screen overflow-hidden">
    <div className="w-1/2 flex justify-center items-center pr-40 pb-14">
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
              leftSection={<FaLock size={18} className="ml-3" />}
              placeholder="Enter your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password}
              radius="md"
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
          <Text
            color="green"
            component="span"
            weight={700}
            onClick={() => alert('Sign Up')}
            className="text-green-700 hover:text-blue-800 font-semibold underline cursor-pointer"
          >
            Sign up
          </Text>
        </Text>
      </Paper>
    </div>
    <div className="w-1/2">
      <img
        src="../src/assets/images/mosque.webp"
        alt="mosque"
        className="w-full h-screen object-cover"
      />
    </div>
  </div>
  
  );
}
