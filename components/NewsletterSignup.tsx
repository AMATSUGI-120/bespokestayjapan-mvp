'use client';

// TODO: Replace this placeholder with the beehiiv embed code.
// Keep the wrapper styles so the layout remains consistent.
// To use the beehiiv embed: set NEXT_PUBLIC_BEEHIIV_FORM_EMBED_URL in your Vercel env vars,
// then replace the form below with an <iframe src={embedUrl} /> inside the wrapper div.

import { useState } from 'react';

const embedUrl = process.env.NEXT_PUBLIC_BEEHIIV_FORM_EMBED_URL;

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (embedUrl) {
    return (
      <div className="w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
        <iframe
          src={embedUrl}
          width="100%"
          height="320"
          style={{ border: 'none' }}
          title="Newsletter signup"
        />
      </div>
    );
  }

  return (
    <div className="bg-teal-50 border border-teal-100 rounded-2xl px-6 py-8 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-2">Get early access when we launch.</h3>
      <p className="text-gray-500 text-sm mb-6">
        We are building verified lists for each category. Be the first to know.
      </p>
      {submitted ? (
        <p className="text-teal-700 font-semibold">
          Thanks! We will be in touch soon.
          {/* TODO: Replace with actual beehiiv confirmation flow */}
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: Replace this with beehiiv embed or API submission.
            setSubmitted(true);
          }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
          >
            Notify me
          </button>
        </form>
      )}
    </div>
  );
}
