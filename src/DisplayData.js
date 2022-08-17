import React from "react";

function DisplayData(props) {
    const renderVenues = () => {
        // using data from app.js, navigate to venues and map through each venue to display each venue's name, address, city, etc. 
        return props.data._embedded.venues.map((venue) => (
            <div className="centerAlign" key={venue.id}>
                <h3>{venue.name}</h3>
                <p>{`${venue.address.line1} -  ${venue.city.name}, ${venue.country.countryCode}`}</p>
                {/* ${venue.state.name} */}
            </div>
        ));
    };
    const renderDate = () => {
        // conditional statement that returns date and time. if there is no time available - inform user. 
        return (
            <>
                <p className="centerAlign"> {`
                   ${props.data.dates.start.localDate} @
                    ${props.data.dates.start.localTime ? `${props.data.dates.start.localTime}` : "timing for this event has not been established as of yet."}
                `}

                </p>
                <button className="rightAlign">
                    < a href={`${props.data.url}`} target="_blank" rel="noreferrer">Find Tickets</a>
                </button>
            </>

        )
    }


    return (
        <div className="overall">
            {/* display images */}
            <div className="imgContainer"><img src={`${props.data.images[0].url}`}></img>
            </div>
            <div className="displayRenderStyles">
                <h2 className="leftAlign artistName">{props.data.name}</h2>
                {renderVenues()}
                {renderDate()}
            </div>
        </div>
    );
}

export default DisplayData;

