import React, {useState} from 'react'

const Search = (props) => {

    const handleChange = (string) => {
        props.setSearchString(string)
    }

    return (
        <div className="flex space-x-2">
            <input type="text" value={searchString} onChange={(e) => handleChange(e.value)} className="w-full bg-gray-100 text-gray-500 font-semibold py-4 px-5 focus:outline-none rounded" placeholder="Search something..." />
            <button className="bg-purple-400 hover:bg-purple-600 transition duration-300 text-white font-bold px-5 rounded">Search</button>
        </div>
    )
}

export default Search
