
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage(
      "Thanks for your interest! Newsletter delivery will be available soon."
    );
    setEmail("");
  }

  return (
    <section className="bg-[#e8e4d8] py-20 sm:py-24">
      <div className="container-luxury">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">A little inspiration, delivered</p>

          <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
            Your next journey
            <br />
            <span className="italic text-[#a78b5e]">
              starts in your inbox.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#777b73]">
            Get thoughtful travel ideas, beautiful destinations
            and curated experiences delivered to you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl gap-2 border-b border-[#183b2d]/40 pb-3"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-1 text-sm outline-none placeholder:text-[#777b73]"
            />

            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="flex items-center gap-2 text-sm font-medium text-[#183b2d] hover:text-[#a78b5e]"
            >
              Subscribe
              <ArrowRight size={17} />
            </button>
          </form>

          {message && (
            <p role="status" className="mt-4 text-sm text-[#183b2d]">
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
