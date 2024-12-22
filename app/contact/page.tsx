"use client";
import { motion } from "motion/react";
// import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SendMailSchema } from "@/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// import emailjs from "@emailjs/browser";

const ContactPage = () => {
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState(false);
  const text = "Say Hello";

  // const form = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof SendMailSchema>>({
    resolver: zodResolver(SendMailSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setError(false);
  //   setSuccess(false);

  //   emailjs
  //     .sendForm(
  //       process.env.NEXT_PUBLIC_SERVICE_ID,
  //       process.env.NEXT_PUBLIC_TEMPLATE_ID,
  //       form.current,
  //       process.env.NEXT_PUBLIC_PUBLIC_KEY
  //     )
  //     .then(
  //       () => {
  //         setSuccess(true);
  //         form.current.reset();
  //       },
  //       () => {
  //         setError(true);
  //       }
  //     );
  // };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex lg:items-center lg:justify-center flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        {/* <form
          onSubmit={() => {}}
          // ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Omer,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form> */}
        <div className="h-auto lg:h-full lg:w-4/6 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(() => {})} className="space-y-8">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex flex-col pt-12">
                    <FormLabel className="font-extralight text-xl">Dear Ömer, </FormLabel>
                    <FormControl>
                      <Textarea rows={6} {...field} placeholder="Your message"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-extralight text-xl">My mail address is:</FormLabel>
                    <FormControl>
                      <Input autoComplete="false" placeholder="johndoe@mail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full bg-purple-200 rounded font-semibold text-gray-600 p-4" type="submit">Send</Button>
            </form>
          </Form>
          <p>Regards</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
