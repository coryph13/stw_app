import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://graphql.stw.uz',
    documents: ['src/**/*.{ts,tsx}', 'src/graphql/**/*.graphql'],
    generates: {
        './src/gql/': {
            preset: 'client',
            config: {
                documentMode: 'string',
            },
        },
        './schema.json': {
            plugins: ['introspection'],
        },
    },
};

export default config;
