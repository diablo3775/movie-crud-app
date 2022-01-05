const initialState = [
    {
        id: 0,
        name:'Spider Man',
        producer: "Andrew Garfield",
        actor:"Roger Corman",
        image:"https://image.tmdb.org/t/p/w500//4q2NNj4S5dG2RLF9CpXsej7yXl.jpg"
    },
    {
        id: 1,
        name:'Iron Man',
        producer: "Anthony Russo",
        actor:"Robert Downey Jr.",
        image:"https://image.tmdb.org/t/p/w500//zPDfxcdBSeLLXhdZKFhHe2de5Kz.jpg"
    },
    {
        id: 2,
        name:'AquaMan',
        producer: "Walt Disney",
        actor:"Henry Cavill",
        image:"https://image.tmdb.org/t/p/w500//xLPffWMhMj1l50ND3KchMjYoKmE.jpg"
    },
    {
        id: 3,
        name:'Matrix',
        producer: "Anthony Russo",
        actor:"Keanu Reeves",
        image:"https://image.tmdb.org/t/p/w500//8c4a8kE7PizaGQQnditMmI1xbRp.jpg"
    },
    {
        id: 4,
        name:'Harry Potter',
        producer: "Anthony Russo",
        actor:"Daniel Radcliffe",
        image:"https://image.tmdb.org/t/p/w500//34Xss3gwKdwvtomCDkeC2lW4PVB.jpg"
    },
    {
        id: 5,
        name:'Avengers Infinity War',
        producer: "Anthony Russo",
        actor:"Robert Downey Jr.",
        image:"https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
    },
    {
        id: 6,
        name:'Dead Pool',
        producer: "Walt Disney",
        actor:"Ryan Reynolds",
        image:"https://image.tmdb.org/t/p/w500//1SlhjVF0QYYd3c8fJehGDrFfrQI.jpg"
    },

]

const movieReducer = (state = initialState, action) => {
        switch(action.type){
            case 'ADD_MOVIE':
                state = [...state, action.payload]
                return state;
                case "DELETE_MOVIE":
                    return state.filter((movie) => movie.id !== action.payload)
                case "UPDATE_MOVIE":
                    const movieUpdate = state.map((movie) =>
                      movie.id === action.payload.id
                        ? action.payload
                        : movie
                    );
                    state = movieUpdate;
                    return state;

            default:
                return state
        }
}

export default movieReducer;