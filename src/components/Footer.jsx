import { Copyright, Instagram, YouTube } from '@mui/icons-material';
import React from 'react';

function Footer() {
    return (
        <div className="my-3 px-1 p-8 flex flex-row md:flex-row justify-around items-center bg-gray-500 text-white gap-4">
            <a className='hover:scale-110' href="">
                <div className="flex items-center">
                    <YouTube />
                    <span className="text-sm font-semibold">YouTube</span>
                </div>
            </a>
            <div className='hover:scale-110'>
                <a href="https://www.instagram.com/pratitya.sce/" target='_blank'>
                    <Instagram />
                </a>
            </div>
            <div className="font-serif flex items-center">
                <Copyright />
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