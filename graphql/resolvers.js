const subin = {
    name: 'Subin',
    age: 28,
    gender: 'male',
};

const resolvers = {
    Query: {
        person: () => subin,
    },
};

export default resolvers;
