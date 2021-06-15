import React from 'react'

function Card({data}) {
    return (
        <div className="w-full bg-gray-50 h-auto p-5 rounded shadow-sm space-y-8">
            <div className="flex justify-between items-center">
                <div className="flex space-x-5 items-center">
                    <img src={data.strArtistThumb} className="h-16 w-16 rounded-xl" alt="Test" />
                    <div>
                        <p className="font-bold text-gray-600 text-xl">{data.strArtist}</p>
                        <p className="text-gray-400">{data.strCountry}</p>
                    </div>
                </div>
                <div>
                    <button className="text-gray-400 hover:text-gray-700 transition duration-300 font-medium p-3 rounded">
                        <div className="flex space-x-3">
                            <p>More info</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <div className="flex space-x-5">
                    { data.strFacebook ? 
                    <a href={data.strFacebook} className="text-gray-500 hover:text-blue-700 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="h-5 w-5"><path className="fill-current" d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"/></svg>
                    </a> : null }
                    
                    { data.strTwitter ? 
                    <a href={data.strTwitter} className="text-gray-500 hover:text-blue-400 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="h-5 w-5"><path className="fill-current" d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/></svg>
                    </a> : null }
                    
                    { data.strWebsite ?
                    <a href={data.strWebsite} className="text-gray-500 hover:text-purple-600 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5"><path className="fill-current" d="M21.41,8.64s0,0,0-.05a10,10,0,0,0-18.78,0s0,0,0,.05a9.86,9.86,0,0,0,0,6.72s0,0,0,.05a10,10,0,0,0,18.78,0s0,0,0-.05a9.86,9.86,0,0,0,0-6.72ZM4.26,14a7.82,7.82,0,0,1,0-4H6.12a16.73,16.73,0,0,0,0,4Zm.82,2h1.4a12.15,12.15,0,0,0,1,2.57A8,8,0,0,1,5.08,16Zm1.4-8H5.08A8,8,0,0,1,7.45,5.43,12.15,12.15,0,0,0,6.48,8ZM11,19.7A6.34,6.34,0,0,1,8.57,16H11ZM11,14H8.14a14.36,14.36,0,0,1,0-4H11Zm0-6H8.57A6.34,6.34,0,0,1,11,4.3Zm7.92,0h-1.4a12.15,12.15,0,0,0-1-2.57A8,8,0,0,1,18.92,8ZM13,4.3A6.34,6.34,0,0,1,15.43,8H13Zm0,15.4V16h2.43A6.34,6.34,0,0,1,13,19.7ZM15.86,14H13V10h2.86a14.36,14.36,0,0,1,0,4Zm.69,4.57a12.15,12.15,0,0,0,1-2.57h1.4A8,8,0,0,1,16.55,18.57ZM19.74,14H17.88A16.16,16.16,0,0,0,18,12a16.28,16.28,0,0,0-.12-2h1.86a7.82,7.82,0,0,1,0,4Z"/></svg>
                    </a> : null}
                    
                </div>
            </div>
        </div>
    )
}

export default Card
