function Form({ userInput, handleSubmit, artistInput }) {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='artist'>ENTER AN EDM ARTIST </label>
            <input type="text" id="artist" onChange={userInput} value={artistInput} />
            <button>Submit</button>
        </form>
    )
}

export default Form;