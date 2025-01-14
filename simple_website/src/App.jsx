import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="flex justify-between items-center py-4 border-b border-gray-300">
          <h1 className="text-2xl font-bold">Simple Website</h1>
          <div className="space-x-4">
            <Link to="/" className="text-blue-500 hover:underline">Home</Link>
            <Link to="/about" className="text-blue-500 hover:underline">About</Link>
            <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
          </div>
        </nav>
        <main className="my-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="flex justify-between items-center py-4 border-t border-gray-300">
          <p className="text-gray-600">© 2025 Simple Website</p>
          <div className="space-x-4">
            <Link to="/" className="text-blue-500 hover:underline">Home</Link>
            <Link to="/about" className="text-blue-500 hover:underline">About</Link>
            <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
