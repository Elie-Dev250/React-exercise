import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';


import Layout from './Components/Layout';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Fetching from './pages/Fetching';
import Exercise from './pages/Exercise';
import Counter from './pages/Counter';

import Formsub from './pages/Formsub';
import Fetch from './pages/Fetch';
import Newform from './pages/Newform';
import Fetch2 from './pages/Fetch2';
import Loginpage from './pages/Loginpage';
import Webpage from './pages/Webpage';
import Home from './pages/Home';
import Resources from './pages/Resources';

import Events from './pages/Events';
import Work from './pages/Work';
import Portifolio from './pages/Portifolio';

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
          <Route path="/counter-app" element={<Counter />} />
          <Route path="/forms" element={<Formsub />} />
          <Route path="/exer" element={<Exercise/>} />
          <Route path="/other" element={<Newform/>} />
          <Route path="/fetch" element={<Fetch/>} />
          <Route path="/fetch2" element={<Fetch2/>} />
          <Route path="/web" element={<Webpage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/resource" element={<Resources/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/event" element={<Events/>} />
          <Route path="/port" element={<Portifolio/>} />
          <Route path="/for" element={<Loginpage/>} />
          <Route path="/fetched" element={<Fetching />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
