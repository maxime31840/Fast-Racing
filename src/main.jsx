import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './index.css';
import Home from './Home.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Streaming from './Pages/streaming.jsx';
import Rapport from './Pages/rapport.jsx';
import SalleExposition from './Pages/SalleExposition.jsx';
import FastImport from './Pages/FastImport.jsx';
import FastCarbone from './Pages/FastCarbone.jsx';
import Contact from './Pages/contact.jsx';

// Layout component to wrap pages with Navbar and Footer
function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '20px', color: 'white' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/fast-import" element={<FastImport />} />
          <Route path="/fast-carbone" element={<FastCarbone />} />
          <Route path="/salle-exposition" element={<SalleExposition />} />
          <Route path="/streaming" element={<Streaming />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rapport" element={<Rapport />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
