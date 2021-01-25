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

export const getById = (id) => {
    const filteredPeople = people.filter((person) => person.id === id);
    return filteredPeople[0];
};
