import React from 'react';
import "../First_Banner/FirstBanner.css"

const FirstBanner = () => {
    return (
        <div>
            <div className="Banner">
                <div className="banner ">
                    <img className='w-full ' src="https://cdn.webhotelier.net/photos/w=1920/blueseacre/L220524.jpg" alt="" />
                </div>
                <div className="section ">
                    <div className="mainSection flex justify-between container mx-auto">
                    <div className="text">
                    <h4 className='text-3xl'>Your Dream Vacation is Here</h4>
                    </div>
                    <div className="button">
                        <button className='text-2xl bg-yellow-300 rounded-xl'>Book A Room</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstBanner;