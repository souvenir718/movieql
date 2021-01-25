import { people, getById, getMovies, deleteMovie, addMovie } from './db';

const resolvers = {
    // Query: {
    //     people: () => people,
    //     person: (_, { id }) => getById(id),
    // },
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id),
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { name }) => deleteMovie(name),
    },
};

export default resolvers;
