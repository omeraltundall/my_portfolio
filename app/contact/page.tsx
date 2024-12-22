"use client";
import { motion } from "motion/react";
import { useState, useTransition } from "react";
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
import { sendMessageWithEmail } from "@/lib/mail";


const ContactPage = () => {
  const [isPending, startTransition] = useTransition();
  const text = "Say Hello";


  const form = useForm<z.infer<typeof SendMailSchema>>({
    resolver: zodResolver(SendMailSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SendMailSchema>) => {
    const mes = `Mail From:${values.email} \nMessage: ${values.message}`
    console.log(mes)
    startTransition(() => {
      sendMessageWithEmail(values)
      form.reset()
    })
  };


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
        <div className="h-auto lg:h-full lg:w-4/6 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex flex-col pt-12">
                    <FormLabel className="font-extralight text-xl">
                      Your Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        {...field}
                        placeholder="Write your message here"
                        disabled= {isPending}
                      />
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
                    <FormLabel className="font-extralight text-xl">
                      Your Mail Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="false"
                        placeholder="johndoe@mail.com"
                        {...field}
                        disabled= {isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full bg-purple-200 rounded font-semibold text-gray-600 p-4"
                type="submit"
                disabled={isPending}
              >
                Send
              </Button>
            </form>
          </Form>
          <p>Regards</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
