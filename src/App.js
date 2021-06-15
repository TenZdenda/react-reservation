import logo from './logo.svg';

function App() {
  return (
    <div className="flex h-screen">
      <header className="m-auto">
        <img src={logo} className="h-56 w-56 mx-auto" alt="logo" />
        <p className="text-center">
          Edit <code>src/App.js</code> and save to reload. :)
        </p>
        <a
          className="bg-indigo-400 px-10 py-3 block rounded-md text-center font-bold text-white mt-10"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
