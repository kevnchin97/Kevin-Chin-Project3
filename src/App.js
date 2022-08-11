
import './App.css';
import { useState } from 'react';
import Form from './Form';
import DisplayData from './DisplayData';

function App() {
  // user's input placed in state. Will be updated based on whatever is in setArtistInput. 
  const [artistInput, setArtistInput] = useState('');
  const [globalData, setGlobalData] = useState([]);

  const fetchArtist = async () => {
    const url = new URL('https://calm-inlet-25920.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events?apikey=Ldp2NSXQg81izAeQDvbIm4gHfXgBPkdd&locale=*');
    // &classificationName=Music&genreId=KnvZfZ7vAvF'
    url.search = new URLSearchParams({
      apikey: 'Ldp2NSXQg81izAeQDvbIm4gHfXgBPkdd',
      keyword: artistInput,
      classificationName: 'Music',
      genreId: 'KnvZfZ7vAvF',

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


  const handleSubmit = (e) => {
    e.preventDefault();
    fetchArtist();
  }

  const userInput = (e) => {
    setArtistInput(e.target.value)
  }

  const renderDisplayData = () => {
    return globalData.map((event, i) => <DisplayData data={event} />)
  }

  return (
    <main className="wrapper mainContent">
      <h1>SHOWZAM</h1>
      <Form
        userInput={userInput}
        handleSubmit={handleSubmit}
        artistInput={artistInput}
      />
      <p>"SHOWZAM" is a concert locator created by Kevin Chin using vanilla Reactjs and the TicketMaster API. </p>
      <div className="displayRenders">
        {renderDisplayData()}
      </div>
    </main>
  );
}

export default App;







{/* // axios({
  //   url: "https://app.ticketmaster.com/discovery/v2/events?apikey=Ldp2NSXQg81izAeQDvbIm4gHfXgBPkdd&locale=*&classificationName=Music&genreId=KnvZfZ7vAvF",
  //   method: "GET",
  //   dataResponse: "json",
  //   params: {
  //     keyword: artistInput
  //   }

  // }) */}

