import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { URLProvider } from './context/URLContext';  // import the context provider
import HomePage from './pages/HomePage';
import StatisticsPage from './pages/StatisticsPage';
import NotFound from './pages/NotFound';
// import { UrlAuthProvider } from './context/UrlAuthContext';

function App() {
  return (
    <URLProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/stats' element={<StatisticsPage />} />
          {/* other routes */}
        </Routes>
      </Router>
    </URLProvider>
  );
}

export default App;