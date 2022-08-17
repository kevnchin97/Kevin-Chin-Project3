// import { useParams, Link } from 'react-router-dom';
// import { useState } from 'react';

// const EventDetails = () => {
//     const { eventId } = useParams();
//     const [event, setEvent] = useState({})

//     // proxy required due to CORS.
//     const url = new URL(`https://calm-inlet-25920.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=Ldp2NSXQg81izAeQDvbIm4gHfXgBPkdd&locale=*`);

//     // search results based on certain parameters.
//     url.search = new URLSearchParams({
//         apikey: 'Ldp2NSXQg81izAeQDvbIm4gHfXgBPkdd',
//     });

//     // fetching data.
//     try {
//         const response = fetch(url);
//         const data = response.json();
//         setEvent(data);
//         console.log(data);
//     } catch (err) {
//     }

//     return (
//         <div className='Modal'>
//         </div>
//     )
// }

// export default EventDetails;

