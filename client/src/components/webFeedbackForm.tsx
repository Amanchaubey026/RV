import React, { useState, FormEvent } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Mail, User, SendHorizontal } from 'lucide-react';

export const FormWeb: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', 'ac1557cd-c425-43d6-810b-a666e60781f5');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.success) {
        toast.success('Message sent successfully!', {
          duration: 4000,
          position: 'top-right',
          style: {
            background: '#22c55e',
            color: 'white',
            fontWeight: 'bold',
          },
        });
        event.currentTarget.reset();
      } else {
        toast.error('Failed to send message. Please try again.', {
          duration: 4000,
          position: 'top-right',
        });
      }
    } catch (error) {
      toast.error('Network error. Please check your connection.', {
        duration: 4000,
        position: 'top-right',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 py-12">
      <Toaster />
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6 border border-blue-100/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Contact Us</h2>
          <p className="text-gray-500">We'd love to hear from you!</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400"
              size={20}
            />
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400"
              size={20}
            />
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
            <SendHorizontal size={20} />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
