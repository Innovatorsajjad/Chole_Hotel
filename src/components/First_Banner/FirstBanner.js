import React from 'react';
import "../First_Banner/FirstBanner.css"

const FirstBanner = () => {
    return (
        <div>
            <div className="Banner relative">
                <div className="banner">
                    <img className='w-full ' src="https://cdn.webhotelier.net/photos/w=1920/blueseacre/L220524.jpg" alt="" />
                </div>
                <div className="section absolute bottom-0 w-full text-center">
                    <div className="mainSection flex justify-between container mx-auto md:py-7 py-3 md:flex-row flex-col">
                        <div className="text">
                            <h4 className=' text-2xl md:text-3xl text-white '>Your Dream Vacation is Here</h4>
                        </div>
                        <div className="button">
                            <button className='md:text-2xl text-xl bg-yellow-400 rounded md:p-3 p-1 text-white mt-1'>Book A Room</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstBanner;