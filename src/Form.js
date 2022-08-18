import React from "react";

function Form({ userInput, handleSubmit, error, artistInput }) {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='artist'>ENTER AN ELECTRONIC DANCE ARTIST </label>
            <input type="text" id="artist"
                onChange={userInput}
                value={artistInput} />
            <button>Dance The Night Away</button>
            {/* perhaps add transition to opacity 0 after 2 seconds? */}
            {error ? <h4 className="fadeAway">{`${artistInput} is not an electronic dance music artist. Please enter a different artist (Some top EDM DJs include: Kygo, David Guetta, The Chainsmokers, Illenium, etc).`}</h4> : null}
        </form>
    )
}

export default Form;