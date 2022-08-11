function Form({ userInput, handleSubmit, artistInput }) {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='artist'>ENTER A DANCE / ELECTRONIC ARTIST </label>
            <input type="text" id="artist" onChange={userInput} value={artistInput} />
            <button>Dance The Night Away</button>
        </form>
    )
}

export default Form;