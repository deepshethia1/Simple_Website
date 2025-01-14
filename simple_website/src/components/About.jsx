import { motion } from 'framer-motion';

function About() {
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
          About Us
        </motion.h1>
        <motion.p
          className="text-base md:text-lg mb-4 font-light"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          Discover a world of opportunities where innovation meets simplicity. Our platform is designed to deliver seamless experiences and connect you to the services that matter most.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default About;
