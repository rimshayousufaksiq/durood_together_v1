import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  Text,
  Paper,
  Stack,
  Button,
  Select,
} from '@mantine/core';
import { FaEnvelope, FaLock, FaUser, FaCity, FaEyeSlash,FaEye } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { supabase } from '../../supabase'; // Import the Supabase client
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function SignupPage(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Please enter a valid email address'),
      password: (val) =>
        val.length < 6 ? 'Password must be at least 6 characters long' : null,
    },
  });

  // const handleSignup = async () => {
  //   setIsLoading(true); // Start loading
  //   const { email, password, name } = form.values;

  //   const { data, error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       data: {
  //         full_name: name,
  //       }
  //     }
  //   });

  //   setIsLoading(false); // End loading

  //   if (error) {
  //     if (error.code === "over_email_send_rate_limit") {
  //       toast.error("Too many signup attempts. Please try again later.");
  //     }
  //     else{ 
  //       toast.error(`Error: ${error.message}`);
  //     }
  //   } else {
  //     toast.success("Account successfully created!.");
  //     form.reset();
  //   }
  // };

  const handleSignup = () => {
    setIsLoading(true); // Start loading
    const { email, password, name } = form.values;

    supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        }
      }
    })
      .then(({ data, error }) => {
        if (error) {
          if (error.code === "over_email_send_rate_limit") {
            toast.error("Too many signup attempts. Please try again later.");
          } else {
            toast.error(`Error: ${error.message}`);
          }
        } else {
          toast.success('Account created successfully! Check your email for the verification link.', {
            onClose: () => {
              navigate("/home");
            }
          });
          form.reset(); // Clear the form fields
        }
      })
      .catch((error) => {
        toast.error(`Signup failed: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
            Sign up
          </Text>
          <Text className="" align="left">Please create your account to continue</Text>

          <form onSubmit={form.onSubmit(handleSignup)}>
            <Stack>
              <TextInput
                required
                className="pt-8"
                leftSection={<FaUser size={18} className="ml-3" />}
                placeholder="Enter your Name"
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                error={form.errors.name}
                radius="md"
                classNames={{
                  input: 'h-10 border border-gray-300 rounded-full bg-gray-100 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-500',
                }}
              />
              <TextInput
                required
                className="pt-5"
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
              {/* <Select
                mt="md"
                leftSection={<GiWorld size={18} className="ml-3" />}
                comboboxProps={{ withinPortal: true }}
                data={['Pakistan', 'India', 'UAE', 'London']}
                placeholder="Select Country"
                classNames={{
                  input: 'h-10 border border-gray-300 rounded-full bg-gray-100 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-500',
                }}
              />
              <Select
                mt="md"
                leftSection={<FaCity size={18} className="ml-3" />}
                comboboxProps={{ withinPortal: true }}
                data={['Karachi', 'Lucknow', 'ABC', 'XYZ']}
                placeholder="Select City"
                classNames={{
                  input: 'h-10 border border-gray-300 rounded-full bg-gray-100 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-500',
                }}
              /> */}
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
                Sign up
              </Button>
            </Stack>
          </form>

          <Text align="center" mt="md">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-green-700 hover:text-blue-800 font-semibold underline cursor-pointer"
            >
              Login
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
