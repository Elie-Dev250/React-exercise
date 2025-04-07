import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Layout from './Components/Layout';
import Page1 from './Pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Layout />}>
          <Route index element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
