import { Copyright, Instagram, YouTube } from '@mui/icons-material';
import React from 'react';

function Footer() {
    return (
        <div className="px-1 p-6 flex flex-row md:flex-row justify-around items-center bg-black/50 backdrop-blur-lg text-white">
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