import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1 className="star-wars-title">A Long Time Ago in a Galaxy Far, Far Away...</h1>
      <div className="crawl">
        <p>Julius Bakšinskas</p>
        <p>Developer | Jedi Knight | Star Wars Enthusiast</p>
      </div>
    </div>
  );
};

export default Header;
