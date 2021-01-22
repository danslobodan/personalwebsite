const INITIAL_STATE = {
    1: { 
        id: 1,
        title: "How to create great developers: The Skill Matrix",
        url: "https://danastroman.medium.com/how-to-create-great-developers-the-skill-matrix-a851b9b54153",
        description: "With the technology skills flooding the learning landscape, it is becoming less obvious where to invest our learning time."
    },
    2: {
        id: 2,
        title: "The next one I'm going to write",
        url: "https://danastroman.medium.com/",
        description: "This blog is not yet written."
    }
}

const blogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default blogReducer;