import React from 'react';

function Footer() {
    return (
        <div className="my-3 px-1 p-8 flex flex-row md:flex-row justify-around items-center bg-gray-500 text-white gap-4">
            <a className='hover:scale-110' href="">
                <div className="flex items-center">
                    <svg className="w-8 stroke-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="5" width="20" height="14" rx="4" ry="4" stroke="white" strokeWidth="2" fill="none" />
                        <polygon points="10,8 10,16 16,12" fill="white" stroke="none" />
                    </svg>
                    <span className="text-sm font-semibold">YouTube</span>
                </div>
            </a>
            <div className='hover:scale-110'>
                <a href="https://www.instagram.com/pratitya.sce/" target='_blank'>
                    <svg className="w-7" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20" y="20" width="160" height="160" rx="40" ry="40" fill="none" stroke="white" strokeWidth="15" />
                        <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="15" />
                        <circle cx="150" cy="50" r="15" fill="white" />
                    </svg>
                </a>
            </div>
            <div className="font-serif flex items-center">
                <svg className="h-5 w-5 mr-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="10" />
                    <text x="60" y="135" fontFamily="Arial, sans-serif" fontSize="120" fill="white" fontWeight="bold">C</text>
                </svg>
                <span className="text-sm">Prathithya'25</span>
            </div>
            <a href="">
                <div className="font-bold text-sm text-center md:text-left ">
                    Contact Us
                </div>
            </a>
        </div>
    );
}

export default Footer;