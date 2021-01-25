import { people, getById, getMovies, deleteMovie, addMovie } from './db';

const resolvers = {
    // Query: {
    //     people: () => people,
    //     person: (_, { id }) => getById(id),
    // },
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => deleteMovie(id),
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
    },
};

export default resolvers;
