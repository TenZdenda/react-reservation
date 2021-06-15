import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Card from './components/Card';
import Search from './components/Search'

function App() {
  //const [initialData, searchString] = useState([]);
  const [searchString, setSearchString] = useState("")
  const [data, setData] = useState([]);

  const seachProps = {
    searchString,
    setSearchString
  }

  useEffect(() => {
    console.log(searchString)
  }, [searchString])

  return (
    <div className="">
      <div className="p-4 max-w-2xl mx-auto">
        <img src={logo} className="h-56 w-56 mx-auto" alt="logo" />
        <div className="mt-10 mb-10">
          <Search props={seachProps} />
        </div>
        
        <div className="space-y-5">
          <Card data="test" />
        </div>
      </div>
    </div>
  );
}

export default App;
