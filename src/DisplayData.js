import React from "react";

function DisplayData(props) {
    const renderVenues = () => {
        return props.data._embedded.venues.map((venue) => (
            <div className="centerAlign" key={venue.id}>
                <h3>{venue.name}</h3>
                <p>{`${venue.address.line1} -  ${venue.city.name}, ${venue.country.countryCode}`}</p>
                {/* ${venue.state.name} */}
            </div>
        ));
    };
    const renderDate = () => {

        return (
            <>
                <p className="centerAlign"> {`
                   ${props.data.dates.start.localDate} @
                    ${props.data.dates.start.localTime ? `${props.data.dates.start.localTime}` : "timing for this event has not been established as of yet."}
                `}

                </p>

                <button className="rightAlign">
                    < a href={`${props.data.url}`} target="_blank">Find Tickets</a>
                </button>
            </>

        )
    }


    return (
        <div className="overall">
            <div className="imgContainer"><img src={`${props.data.images[0].url}`}></img>
            </div>
            <div className="displayRenderStyles">
                <h2 className="leftAlign artistName">{props.data.name}</h2>
                {renderVenues()}
                {renderDate()}
                {/* <p className="centerAlign">Starts on {props.data.dates.start.localDate} at {props.data.dates.start.localTime}</p>
                <button className="rightAlign">< a href={`${props.data.url}`} target="_blank">Find Tickets</a></button> */}
            </div>
        </div>
    );
}

export default DisplayData;

