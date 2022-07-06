import React from 'react';

const HomeItems = () => {
    return (
        <div>
            <div className="allitems container mx-auto my-20 md:max-w-4xl">

                <div className="firstitem flex md:flex-row md:justify-between gap-5 my-5 flex-col-reverse">

                    <div className="texts m-auto  px-4 basis-6/12" >
                    <h3 className='text-3xl my-3 text-lime-800 font-bold'>Enjoy Some You-Time</h3>
                    <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <div className="button my-3">
                        <button className='text-2xl bg-yellow-400 rounded p-3  text-white'>Book A Room</button>
                    </div>

                    </div>
                    <div className="image drop-shadow-sm basis-4/12 ">
                        <img className='w-full m-auto border-8 border-gray-200 ' src="https://www.ballarddesigns.com/howtodecorate/wp-content/uploads/2016/08/BDD57689P.jpg" alt="" />
                    </div>
                </div>
                
                
                <div className="seconditem flex md:flex-row flex-col gap-5 my-16 px-4">

                <div className="image drop-shadow-sm basis-4/12">
                        <img className='w-full m-auto border-8 border-gray-200 ' src="https://upload.wikimedia.org/wikipedia/commons/d/df/Town_and_Country_fh000023.jpg" alt="" />
                    </div>


                    <div className="texts m-auto basis-6/12">
                    <h3 className='text-3xl my-3 text-lime-800 font-bold'>The Perfect Surrounding</h3>
                    <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <div className="button my-3">
                        <button className='text-2xl bg-yellow-400 rounded p-3 text-white'>Book A Room</button>
                    </div>

                    </div>



                </div>
                <div className="thirditem flex md:flex-row gap-5 my-5 px-4 flex-col-reverse">

                        <div className="texts m-auto basis-6/12">
                    <h3 className='text-3xl my-3 text-lime-800 font-bold'>Fine Food Cuisine</h3>
                    <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <div className="button my-3">
                        <button className='text-2xl bg-yellow-400 rounded p-3 text-white'>Book A Room</button>
                    </div>

                    </div>
                    <div className="image drop-shadow-sm basis-4/12">
                        <img className='w-full m-auto border-8 border-gray-200 ' src="https://media.istockphoto.com/photos/decorated-dining-tablet-on-christmas-eve-picture-id863577920?k=20&m=863577920&s=612x612&w=0&h=QsCVONiJ7Oc2EzJ2qOWjTFhlOZg8wJRnQXLT8PePQQs=" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeItems;