import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import BookingModal from './components/common/BookingModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tests from './pages/Tests';
import Packages from './pages/Packages';
import Contact from './pages/Contact';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingItem, setBookingItem] = useState('');

  const handleOpenBooking = (item = '') => {
    setBookingItem(item);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ScrollToTop />
        <Navbar onOpenBooking={handleOpenBooking} />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
            <Route path="/services" element={<Services onOpenBooking={handleOpenBooking} />} />
            <Route path="/tests" element={<Tests onOpenBooking={handleOpenBooking} />} />
            <Route path="/packages" element={<Packages onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<Contact onOpenBooking={handleOpenBooking} />} />
            <Route path="*" element={<Home onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Quick Test/Package Booking Modal */}
        <BookingModal
          isOpen={bookingOpen}
          onClose={handleCloseBooking}
          initialItem={bookingItem}
        />
      </div>
    </BrowserRouter>
  );
}
