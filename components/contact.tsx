"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}        <a className="underline" href="mailto:nipuni20ch@gmail.com">
          nipuni20ch@gmail.com
        </a>{" "}
        or through this form.
      </p>      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          try {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              // Fallback to mailto link if server action fails
              const email = formData.get("senderEmail") as string;
              const message = formData.get("message") as string;
              window.open(`mailto:nipuni20ch@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`);
              return;
            }

            toast.success("Email sent successfully!");
          } catch (error) {
            toast.error("Error sending email. Please use the email link above.");
            console.error("Contact form error:", error);
          }
        }}
        onSubmit={(e) => {
          // Client-side fallback in case the server action doesn't work
          const form = e.currentTarget;
          const email = form.senderEmail.value;
          const message = form.message.value;
          
          // Add a backup way to send email if the form submission fails
          const fallbackTimeout = setTimeout(() => {
            window.open(`mailto:nipuni20ch@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`);
          }, 2000);
          
          // Clear the timeout if the form submits successfully
          window.addEventListener('formSuccess', () => clearTimeout(fallbackTimeout), { once: true });
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
