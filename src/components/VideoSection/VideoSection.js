import React from 'react';

const VideoSection = () => {
    return (
        <div>
            <div className="mainBanner p-12 bg-green-100">
                <div className="text"><h3 className='text-4xl text-center text-blue-400 font-bold '>The Best Experience Ever</h3></div>
                <div className="video ">
                <iframe className='mx-auto border-8 border-gray-100 my-10' width="560" height="315" src="https://www.youtube.com/embed/BCuH9jTMK58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="reviewData">
                    <div className="bio text-center text-1xl text-blue-400"><p>"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo"</p></div>
                    <div className="personInfo text-center my-7">
                        <div className="images"> 
                        <img className='w-16 rounded-full inline-block' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4QidFaZYBUsAO_ostR0S-m5nyF3u55L4dvn09QKrcTv5gzTmx80sfa-Rz48qJrKmAF4&usqp=CAU" alt="" />
                        </div>
                        <div className="name">
                            <h5 className='text-xl my-2'>CHRIS JONES</h5>
                        </div>
                        <div className="tittle">
                         <p className='text-yellow-500'>Travel Blogger</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section ">
                    <div className="mainSection flex justify-between container mx-auto py-7 ">
                    <div className="text">
                    <h4 className='text-3xl text-white'>Savour Your Next Holiday</h4>
                    </div>
                    <div className="button">
                        <button className='text-2xl bg-yellow-400 rounded p-3 text-white'>Book A Room</button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default VideoSection;