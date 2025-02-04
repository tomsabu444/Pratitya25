import React from 'react';

function Footer() {
    return (
        <div className="my-3 px-1 py-2 flex flex-row md:flex-row justify-between items-center bg-gray-400 text-white gap-4">
            <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" rx="15" ry="15" width="180" height="80" fill="white" />
                    <polygon points="85,35 85,65 115,50" fill="black" />
                </svg>
                <span className="text-sm font-semibold">YouTube</span>
            </div>
            <div>
                <svg className="h-5 w-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="160" height="160" rx="40" ry="40" fill="none" stroke="white" strokeWidth="10" />
                    <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="10" />
                    <circle cx="150" cy="50" r="15" fill="white" />
                </svg>
            </div>
            <div className="font-serif flex items-center">
                <svg className="h-5 w-5 mr-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="10" />
                    <text x="60" y="135" fontFamily="Arial, sans-serif" fontSize="120" fill="white" fontWeight="bold">C</text>
                </svg>
                <span className="text-sm">Prathithya'25</span>
            </div>
            <div className="text-sm text-center md:text-left">
                Privacy Policy
            </div>
            <div className="font-bold text-sm text-center md:text-left ">
                Contact Us
            </div>
        </div>
    );
}

export default Footer;
