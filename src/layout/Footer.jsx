import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 text-center text-slate-500 text-sm border-t border-slate-900">
      <p>© {new Date().getFullYear()} Gülay ŞAHİN. Tüm hakları saklıdır.</p>
    </footer>
  );
};

export default Footer;
