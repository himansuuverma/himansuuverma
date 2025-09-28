import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-primary-bg text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-text-primary font-mono mt-1">
          © {currentYear} Himanshu Verma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;