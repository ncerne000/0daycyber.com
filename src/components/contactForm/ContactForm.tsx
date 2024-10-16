'use client';
import React, { useState } from "react";
import {
    TextInput,
    Textarea,
    SimpleGrid,
    Group,
    Title,
    Button
  } from "@mantine/core";
import { useForm } from "@mantine/form";
import { getCaptchaToken } from "../../lib/getToken";
  
  export default function ContactForm() {
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
      const token = await getCaptchaToken();
      /* Data to submit to our API */
      const data = {
        ...values,
        token
      };
      console.log(token)

      const response = await fetch("https://9sa9xaoon9.execute-api.us-east-1.amazonaws.com/prod/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
    };
  
    return (
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
    );
  }
  