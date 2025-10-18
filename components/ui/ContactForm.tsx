"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    gdprConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* First and Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
            Meno *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--header-primary)] focus:border-transparent transition-all"
            placeholder="Vaše meno"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
            Priezvisko *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--header-primary)] focus:border-transparent transition-all"
            placeholder="Vaše priezvisko"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--header-primary)] focus:border-transparent transition-all"
          placeholder="vas@email.sk"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Správa *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--header-primary)] focus:border-transparent transition-all resize-none"
          placeholder="Napíšte nám vašu správu..."
        />
      </div>

      {/* GDPR Consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="gdprConsent"
          name="gdprConsent"
          checked={formData.gdprConsent}
          onChange={handleChange}
          required
          className="mt-1 w-5 h-5 rounded border-white/20 bg-white/5 text-[var(--header-primary)] focus:ring-2 focus:ring-[var(--header-primary)] focus:ring-offset-0 transition-all cursor-pointer"
        />
        <label htmlFor="gdprConsent" className="text-sm text-gray-300 cursor-pointer">
          Súhlasím so spracovaním osobných údajov podľa GDPR a pravidiel ochrany súkromia.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 bg-[var(--header-primary)] hover:bg-[var(--header-primary-600)] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--header-primary)]/30"
      >
        Odoslať správu
      </button>
    </form>
  );
}
