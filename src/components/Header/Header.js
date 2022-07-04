import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="FullNav py-3 bg-orange-300 ">
                <div className="inner_nav  mx-auto  justify-between container flex flex-col md:flex-row  ">
                <div className="Logo w-24 flex md:justify-center ">
                    <img  className='rounded-full ' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/31aebd40883975.5790c3474c6a6.jpg" alt="" />
                </div>
                <div className="Fab_icons my-auto flex justify-center">
                    <ul className='flex space-x-1 '>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;