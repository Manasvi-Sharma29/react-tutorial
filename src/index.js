import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Logo from './Components/logo'
import Input from './Components/input'
import SearchButton from './Components/searchButton';
import LuckyButton from './Components/LuckyButton';
import LanguageNote from './Components/LanguageNote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Logo />
    <Input/>
    <SearchButton/>
    <LuckyButton/>
    <LanguageNote/>
  </React.StrictMode>
);

