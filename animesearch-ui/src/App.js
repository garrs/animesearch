import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [searchData, setSearchData] = useState()

  // useEffect(() => {
  //   axios.get('https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop')
  //   .then(response => {
  //     alert('searchData ' + JSON.stringify(response.data))
  //     if (response.data.length > 0) {
  //       setSearchData({...searchData, searchData: response.data})
  //       alert('searchData ' + JSON.stringify(response.data))
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }) // this second arg is a dependency array

  const handleSubmit = (e) => {
    // removed appended &send_at=${email.sendAt} on fetch
    alert('searchData ' + JSON.stringify(searchData));
    axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${JSON.stringify(searchData)}`)
      // `http://localhost:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}&send_at=${email.sendAt}`) //query string url
      .then(response => {
        alert('searchData ' + JSON.stringify(response.data))
        if (response.data.length > 0) {
          setSearchData({...searchData, searchData: response.data})
          alert('searchData ' + JSON.stringify(response.data))
        }
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input 
                type="text" 
                onChange={(e) => setSearchData({ ...searchData, searchData: e.target.value})}
          />
        <button onClick={handleSubmit}> Search Anime</button>
        {/* <button onClick={this.search}> Search </button> */}
        <a
          className="App-link"
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
