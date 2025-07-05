"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! You can wire this to Formspree or backend.");
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6 text-center">Contact Me</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="w-full border p-3 rounded"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </section>
  );
}

export default Contact;
