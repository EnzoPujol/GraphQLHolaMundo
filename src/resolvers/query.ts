import {IResolvers} from 'graphql-tools';

const query : IResolvers = {
    Query: {
        hola(): string{
            return 'Hola Mundo!';
        },
        holaConNombre(__: void, { nombre } ): string{
            return `Hola Mundo, y hola ${nombre }`;
        },
        holaAlCursoGraphQL(): string{
            return 'HolaMundo, estamos laburando con GraphQL';
        }
    }
}

export default query;