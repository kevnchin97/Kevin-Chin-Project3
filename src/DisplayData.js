import React from "react";

function DisplayData(props) {
    const renderVenues = () => {
        return props.data._embedded.venues.map((venue) => (
            <div>
                <h2>{venue.name}</h2>
                <p>{`${venue.address.line1} -  ${venue.city.name}, ${venue.state.name}, ${venue.country.countryCode}`}</p>
            </div>
        ));
    };

    return (
        <div className="overall">
            <div className="imgContainer"><img src={`${props.data.images[0].url}`}></img>
            </div>
            <div className="displayRenderStyles">
                <h1>{props.data.name}</h1>
                {renderVenues()}
                <p>Starts on {props.data.dates.start.localDate} at {props.data.dates.start.localTime}</p>
            </div>
        </div>
    );
}

export default DisplayData;

