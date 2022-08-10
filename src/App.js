import axios from 'axios';
import './App.css';
import { useState } from 'react';
import Form from './Form';

function App() {
  // user's input placed in state. Will be updated based on whatever is in setArtistInput. 
  const [artistInput, setArtistInput] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [eventName, setEventName] = useState('');
  const [globalData, setGlobalData] = useState([]);

  const fetchArtist = async () => {
    const url = new URL('https://calm-inlet-25920.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events?apikey=Ldp2NSXQg81izAeQDvbIm4gHfXgBPkdd&locale=*&classificationName=Music&genreId=KnvZfZ7vAvF');
    url.search = new URLSearchParams({
      apikey: 'Ldp2NSXQg81izAeQDvbIm4gHfXgBPkdd',
      keyword: artistInput
    });

    try {
      const response = await fetch(url);
      const data = await response.json();
      setGlobalData(data._embedded.events);
      console.log(data._embedded.events)
    } catch (err) {
      console.log(err);
    }
  }

  // place into separate components
  // const DisplayData = () => {
  // return globalData.map((item, i) => <div>{item.name}{item._embedded.venues.map((venue, i) => <div>{venue.city}</div>)}</div>)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchArtist();
  }

  const userInput = (e) => {
    setArtistInput(e.target.value)
  }


  return (
    <main className="wrapper">
      <h1>Concert Locator</h1>
      <Form
        userInput={userInput}
        handleSubmit={handleSubmit}
        artistInput={artistInput}
      />
      <DisplayData />
    </main>
  );
}

export default App;

  // axios({
  //   url: "https://app.ticketmaster.com/discovery/v2/events?apikey=Ldp2NSXQg81izAeQDvbIm4gHfXgBPkdd&locale=*&classificationName=Music&genreId=KnvZfZ7vAvF",
  //   method: "GET",
  //   dataResponse: "json",
  //   params: {
  //     keyword: artistInput
  //   }

  // })

