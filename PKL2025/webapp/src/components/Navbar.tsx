"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-gray-800">
                            YayasanJS
                        </Link>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
                        <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
                        <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
                        <Link href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</Link>
                        <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Home</Link>
                        <Link href="#about" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">About</Link>
                        <Link href="#services" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Services</Link>
                        <Link href="#projects" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Projects</Link>
                        <Link href="#contact" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
