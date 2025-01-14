import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmissionStatus('Form submitted successfully!');
        setSubmissionSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else if (response.status === 400) {
        setSubmissionStatus(data.message); // Email already exists
        setSubmissionSuccess(false);
      } else {
        setSubmissionStatus('Form submission failed. Please try again.');
        setSubmissionSuccess(false);
      }
    } catch (error) {
      setSubmissionStatus('Form submission failed. Please try again.');
      setSubmissionSuccess(false);
    }

    setTimeout(() => {
      setSubmissionStatus('');
      setSubmissionSuccess(false);
    }, 3000);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1920')", // Stunning nature background
      }}
    >
      <motion.div
        className="p-6 md:p-10 text-center bg-opacity-80 bg-black rounded-3xl shadow-2xl border-4 border-white max-w-4xl"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-400"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut", delay: 0.3 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-base md:text-lg mb-4 font-light"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
          <motion.input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-300 text-black"
            required
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-pink-300 text-black"
            required
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-red-300 text-black"
            required
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          <motion.button 
            type="submit" 
            className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Submit
          </motion.button>
        </form>
        {submissionStatus && (
          <p className={`mt-6 text-center ${submissionSuccess ? 'text-green-500' : 'text-red-500'}`}>
            {submissionStatus}
          </p>
        )}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Contact;
