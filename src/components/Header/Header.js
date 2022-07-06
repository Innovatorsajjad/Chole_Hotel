import React from 'react';
import { BsTwitter, BsGoogle, BsEnvelope} from  'react-icons/bs';
import {FaFacebookF} from  'react-icons/fa';

const Header = () => {
    return (
        <header className='sticky top-0 bg-white z-10 py-5'>
            <nav className='flex flex-col md:flex-row md:justify-between md:items-center md:max-w-5xl mx-auto justify-center items-center'>
                <a className='text-2xl font-bold' href="!#">
                    <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenQuzFtqYpqTvEn8wAao3hhTGvYE6UPujGA&usqp=CAU" alt="" />
                </a>
                <ul className='flex space-x-1 '>
                        <li>
                            <a className='w-12 h-12 inline-flex items-center justify-center bg-[#4267B2] rounded-full text-white' rel="noreferrer" target='_blank' href="https://facebook.com/innovatorsajjad">
                                <FaFacebookF/>
                            </a>
                        </li>
                        <li>
                            <a className='w-12 h-12 inline-flex items-center justify-center bg-[#00acee] rounded-full text-white' rel="noreferrer" target='_blank' href="https://facebook.com/innovatorsajjad">
                                <BsTwitter/>
                            </a>
                        </li>
                        <li>
                            <a className='w-12 h-12 inline-flex items-center justify-center bg-[#db4a39] rounded-full text-white' rel="noreferrer" target='_blank' href="https://facebook.com/innovatorsajjad">
                                <BsGoogle/>
                            </a>
                        </li>
                        <li>
                            <a className='w-12 h-12 inline-flex items-center justify-center bg-[#E7584D] rounded-full text-white' rel="noreferrer" target='_blank' href="https://facebook.com/innovatorsajjad">
                                <BsEnvelope/>
                            </a>
                        </li>
                    </ul>
            </nav>
        </header>
    );
};

export default Header;