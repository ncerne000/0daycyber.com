'use client';
import React, { useState, ReactNode } from "react";
import {
    TextInput,
    Textarea,
    SimpleGrid,
    Group,
    Title,
    Button
  } from "@mantine/core";
import { IconCircle, IconCheck, IconX } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { getCaptchaToken } from "../../lib/getToken";
import Toast from "../general/Toast";
  
  export default function ContactForm() {
    const [toastVisible, setToastVisible] = useState(false);
    const [toastTitle, setToastTitle] = useState('');
    const [toastMessage, setToastMessage] = useState('');
    const [toastIcon, setToastIcon] = useState<ReactNode>(null);
    const [toastColor, setToastColor] = useState('');
    const [toastLoading, setToastLoading] = useState(false);

    const showToast = (title: string, message: string, color: string, icon: ReactNode, loading: boolean, duration = 3000) => {
      setToastTitle(title);
      setToastMessage(message);
      setToastIcon(icon);
      setToastVisible(true);
      setToastColor(color);
      setToastLoading(loading);
  
      /* Hide the toast after `duration` milliseconds */
      setTimeout(() => {
        setToastVisible(false);
      }, duration);
    };
    
    const form = useForm({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      validate: {
        name: (value) => {
          if (!/^[a-zA-Z\s]+$/.test(value)) {
            return "Name can only contain letters";
          } else if (value.trim().length < 2) {
            return "Name is too short";
          } else if (value.trim().length > 50) {
            return "Name is too long (max 50 characters)";
          }
          return null;
        },
        email: (value) => {
          if (!/^\S+@\S+$/.test(value)) {
            return "Invalid email";
          }
          return null;
        },
        phone: (value) => {
          if (!/^\d+$/.test(value)) {
            return "Phone number can only contain numbers";
          } else if (value.trim().length === 0) {
            return "Phone is required";
          } else if (value.trim().length > 15) {
            return "Phone number is too long (max 15 digits)";
          }
          return null;
        },
        message: (value) => {
          if (value.trim().length === 0) {
            return "Message cannot be empty";
          } else if (value.trim().length > 500) {
            return "Message is too long (max 500 characters)";
          }
          return null;
        },
      },
    });

    const handleSubmit = async (values: typeof form.values) => {

      /* Show a toast notification when form submission starts */
      showToast('Submitting...', 'Your message is being sent.', 'blue', <IconCircle />, true);

      const token = await getCaptchaToken();
      /* Data to submit to our API */
      const data = {
        ...values,
        token
      };

      try {
        const response = await fetch("https://9sa9xaoon9.execute-api.us-east-1.amazonaws.com/prod/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        
        /* Update the toast based on the API response */
        console.log(response.status)
        if (response.ok) {
          showToast('Success', result.msg || 'Message received!', 'teal', <IconCheck/>, false);
        } else {
          showToast('Error', 'Failed to send the message.', 'red', <IconX/>, false);
        }
      } catch (error) {
        showToast('Error', 'Network error occurred', 'red', <IconX />, false);
      }
    }
  
    return (
      <>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Title
          order={2}
          size="h2"
          style={{textAlign: "center"}}
        >
          Contact Us
        </Title>
  
        <SimpleGrid cols={2} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>
  
        <TextInput
          label="Phone Number"
          placeholder="(540) 555-5555"
          mt="md"
          name="phone"
          variant="filled"
          {...form.getInputProps("phone")}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
        />
  
        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Send Message
          </Button>
        </Group>
      </form>
        {/* Conditionally render the Toast component */}
          {toastVisible && (
          <Toast
            title={toastTitle}
            message={toastMessage}
            onclose={() => setToastVisible(false)}
            icon={toastIcon}
            color={toastColor}
            loading={toastLoading}
          />
        )}
      </>
    );
  }
  