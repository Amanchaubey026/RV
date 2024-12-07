import React, { useState, FormEvent } from 'react';

export const FormWeb: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', 'ac1557cd-c425-43d6-810b-a666e60781f5'); // Replace with a valid key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      // Log HTTP errors if the response status is not OK
      if (!response.ok) {
        console.error('HTTP error:', response.status, response.statusText);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);

      if (data.success) {
        console.log('Message sent successfully!');
        // You can add success handling here (e.g., reset the form)
        event.currentTarget.reset();
      } else {
        console.log('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Network error or fetch failure:', error);
      // Optionally, display error in UI (you can replace with a more user-friendly message)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6 border border-blue-100/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Contact Us</h2>
          <p className="text-gray-500">We'd love to hear from you!</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
