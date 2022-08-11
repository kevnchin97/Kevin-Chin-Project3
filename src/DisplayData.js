import React from "react";

function DisplayData(props) {
    const renderVenues = () => {
        return props.data._embedded.venues.map((venue) => (
            <div>
                <h3>{venue.name}</h3>
                <p>{`${venue.address.line1} -  ${venue.city.name}, ${venue.state.name}, ${venue.country.countryCode}`}</p>
            </div>
        ));
    };

    return (
        <div className="overall">
            <div className="imgContainer"><img src={`${props.data.images[0].url}`}></img>
            </div>
            <div className="displayRenderStyles">
                <h2>{props.data.name}</h2>
                {renderVenues()}
                <p>Starts on {props.data.dates.start.localDate} at {props.data.dates.start.localTime}</p>
                <p>{props.data.url}</p>
            </div>
        </div>
    );
}

export default DisplayData;

