import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import About from './pages/About'; // Adjust the import path if necessary

function App() {
  const phoneNumber = '12345678900'; // Replace with your actual phone number
  const message = 'Hello, I would like to know more about VoterBot.'; // Customize your message
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center py-12 bg-gray-100">
          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                  <h1 className="text-2xl font-bold text-gray-800 mb-4 "><img src="/image.png" alt="" className='w-12 inline' /> Let's Chat on WhatsApp! </h1>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Click the button below to start a conversation with us on WhatsApp. We're here to help you with any questions you have about VoterBot.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                  >
                    Start Chatting
                  </a>
                </div>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
