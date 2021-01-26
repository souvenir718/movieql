import { people, getById, getMovies, deleteMovie, addMovie } from './db';
import { getAPIMovies } from './api_wrap_db';
// const resolvers = {
//     // Query: {
//     //     people: () => people,
//     //     person: (_, { id }) => getById(id),
//     // },
//     Query: {
//         movies: () => getMovies(),
//         movie: (_, { id }) => getById(id),
//     },
//     Mutation: {
//         addMovie: (_, { name, score }) => addMovie(name, score),
//         deleteMovie: (_, { name }) => deleteMovie(name),
//     },
// };

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getAPIMovies(limit, rating),
    },
};

export default resolvers;
