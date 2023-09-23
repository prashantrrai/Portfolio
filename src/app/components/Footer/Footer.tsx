// components/Footer.js

import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="text-white text-sm p-4 text-center">
      <p>&copy; Copyright {year} - Developed by Prashant Rai. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
