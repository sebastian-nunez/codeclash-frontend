import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center mt-6 justify-center border-t">
      <a
        className="flex items-center justify-center gap-2 cursor-pointer"
        href="https://upe.cs.fiu.edu/sparkdev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <strong className="text-pink-500">SparkDev</strong> |
        Copyright &copy; 2022
      </a>
    </footer>
  );
};

export default Footer;
