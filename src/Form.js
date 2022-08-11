import React from "react";

function Form({ userInput, handleSubmit, artistInput }) {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='artist'>ENTER AN ELECTRONIC DANCE ARTIST </label>
            <input type="text" id="artist" onChange={userInput} value={artistInput} />
            <button>Dance The Night Away</button>
            {/* <select defaultValue='sort'>
                <option disabled value="sort">Sort By</option>
                <option value="upcoming">Upcoming</option>
                <option value="further">Further On</option>
            </select> */}
        </form>
    )
}

export default Form;