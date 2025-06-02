import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'https://graphql.stw.uz';

export function createGraphQLClient(locale: string) {
    return new GraphQLClient(endpoint, {
        headers: {
            'Accept-Language': locale,
            'Content-Type': 'application/json',
        }
    });
};
