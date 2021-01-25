export const people = [
    {
        id: '0',
        name: 'Subin',
        age: 28,
        gender: 'male',
    },
    {
        id: '1',
        name: 'Souvenir',
        age: 38,
        gender: 'female',
    },
    {
        id: '2',
        name: 'Kim',
        age: 18,
        gender: 'male',
    },
    {
        id: '3',
        name: 'Bin',
        age: 48,
        gender: 'male',
    },
];

let movies = [
    {
        id: 0,
        name: '소울',
        score: 9.42,
    },
    {
        id: 1,
        name: '커넥트',
        score: 8.33,
    },
    {
        id: 2,
        name: '원더ㅏ우먼 1984',
        score: 7.53,
    },
    {
        id: 3,
        name: '라라랜드',
        score: 8.91,
    },
    {
        id: 4,
        name: '크루아상',
        score: 9.83,
    },
];

export const getById = (id) => {
    const filteredPeople = people.filter((person) => person.id === String(id));
    return filteredPeople[0];
};

export const getMovies = () => movies;

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter((movie) => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const movieObj = {
        id: movies.length + 1,
        name,
        score,
    };
    movies.push(movieObj);
    return movieObj;
};
