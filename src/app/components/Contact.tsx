"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Contact({
  contact,
  openContact,
}: {
  contact: boolean;
  openContact: () => void;
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (contact) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
    };
  }, [contact]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    const _hp =
      (form.elements.namedItem("_hp") as HTMLInputElement)?.value || "";

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, firstName, message, _hp }),
    });

    setLoading(false);

    if (res.ok) {
      form.reset();
      openContact(); // close modal
      // (optional) toast success
    } else {
      // (optional) toast error
      console.error(await res.json());
    }
  }

  return (
    <section
      onClick={openContact}
      className={`fixed inset-0 z-[99999] bg-black/65 h-screen w-full backdrop-blur-3xl flex items-center justify-center transition-opacity duration-300
        ${
          contact
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        onClick={(e) => e.stopPropagation()} // <-- stops bubbling here
        className=" rounded-2xl max-w-4xl p-8 mx-auto shadow-xl border border-white/25 flex flex-col justify-center items-center"
      >
        <Image
          src="/featurelogo.png"
          alt="Feature Logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <h2 className="text-3xl text-white px-3 py-6 max-w-sm  text-center">
          Get in Touch.
        </h2>
        <p className="text-center text-[#cfcfcf] max-w-xl">
          We'd love to hear from you. Fill out the form and we'll be in touch.
        </p>
        <form
          onSubmit={onSubmit}
          className="mt-8 w-3/4 max-w-3xl   flex flex-col gap-y-4 "
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-2  placeholder:text-sm rounded-full border border-white/50  bg-transparent text-white placeholder-gray-400 focus:outline-none"
            required
          />{" "}
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="flex-1 px-4 py-2 placeholder:text-sm  rounded-full border border-white/50 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            required
          />{" "}
          <textarea
            name="message"
            rows={5}
            placeholder="Write your message..."
            className="w-full px-4 py-3 border border-white/50 rounded-xl 
             focus:outline-none focus:none
             focus:border-transparent resize-none text-gray-800
             placeholder-gray-400 shadow-sm"
          ></textarea>
          <input
            name="_hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: "absolute", left: "-9999px" }}
          />
          <button
            type="submit"
            disabled={loading}
            className=" px-4 py-2 z-50  text-sm mr-4 bg-[#2b2b2b] rounded-full hover:bg-[#FF5E00] text-white  transition-colors cursor-pointer duration-300"
          >
            {loading ? "Sending…" : "Contact"}
          </button>
        </form>
      </div>
    </section>
  );
}
