import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <span className="text-white text-lg font-bold">My Portfolio</span>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              <a className="text-white hover:text-gray-300">About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="text-white hover:text-gray-300">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-white hover:text-gray-300">Contact Me</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
