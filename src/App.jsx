import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Layout';
import MainStarwarsComponent from './components/StarWarsComponents/mainStarwarsComponent';
import MainCatsComponent from './components/CatsComponents/mainCatsComponent';
import MainCovidsComponent from './components/CovidComponents/mainCovidsComponent';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainStarwarsComponent />} />
          <Route path="cats" element={<MainCatsComponent />} />
          <Route path="covids" element={<MainCovidsComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
