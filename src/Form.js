import React from "react";

function Form({ userInput, handleSubmit, error, artistInput }) {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='artist'>ENTER AN ELECTRONIC DANCE ARTIST </label>
            <input type="text" id="artist" onChange={userInput} value={artistInput} />
            <button>Dance The Night Away</button>
            {error ? <h4>{`${artistInput} is not an electronic dance music artist. Please enter an different artist (Some top EDM DJs include: Martin Garrix, The Chainsmokers, Illenium, etc).`}</h4> : null}
            {/* <select defaultValue='sort'>
                <option disabled value="sort">Sort By</option>
                <option value="upcoming">Upcoming</option>
                <option value="further">Further On</option>
            </select> */}
        </form>
    )
}

export default Form;