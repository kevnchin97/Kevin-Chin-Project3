
import './App.css';
import { useState } from 'react';
import Form from './Form';
import DisplayData from './DisplayData';
import Footer from './Footer';

function App() {
  // user's input placed in state. Will be updated based on whatever is in setArtistInput. 
  const [artistInput, setArtistInput] = useState('');
  // data fetched from API in an array
  const [globalData, setGlobalData] = useState([]);
  // default errors should be false and only changed when errors are encountered.
  const [errorHandling, setErrorHandling] = useState(false);


  // awaiting for user input prior to fetching data from API
  const fetchArtist = async () => {
    // proxy required due to CORS.
    const url = new URL('https://calm-inlet-25920.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events?apikey=Ldp2NSXQg81izAeQDvbIm4gHfXgBPkdd&locale=*');

    // search results based on certain parameters. 
    url.search = new URLSearchParams({
      apikey: 'Ldp2NSXQg81izAeQDvbIm4gHfXgBPkdd',
      keyword: artistInput,
      classificationName: 'Music',
      genreId: 'KnvZfZ7vAvF',

    });

    // fetching data.
    try {
      const response = await fetch(url);
      const data = await response.json();
      setGlobalData(data._embedded.events);
      setErrorHandling(false);
      // error handling.
    } catch (err) {
      setErrorHandling(true);
    }
  }


  // Stores user input into useState. 
  const userInput = (e) => {
    setArtistInput(e.target.value)
  }


  // upon submit, call API 
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchArtist();
  }


  // function that will map through each event and trigger DisplayData component. 
  const renderDisplayData = () => {
    return globalData.map((event) => <DisplayData data={event} key={event.id} />)
  }

  return (
    <main className="wrapper mainContent">
      <h1>SHOWZAM</h1>
      <div className='spacer'></div>
      <Form
        userInput={userInput}
        handleSubmit={handleSubmit}
        artistInput={artistInput}
        error={errorHandling}
      />
      <div className="displayRenders">
        {renderDisplayData()}
      </div>
      <p>"SHOWZAM" is a concert locator project created by Kevin Chin using vanilla Reactjs and the TicketMaster API. </p>
      <Footer />

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

