const INITIAL_STATE = {
    1: { 
        title: "How to create great developers: The Skill Matrix",
        url: "https://danastroman.medium.com/how-to-create-great-developers-the-skill-matrix-a851b9b54153"
    },
    2: {
        title: "The next one I'm going to write",
        url: "https://danastroman.medium.com/"
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}