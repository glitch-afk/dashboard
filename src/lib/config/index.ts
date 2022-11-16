export const GRAPHQL_API_URL =
  process.env.GRAPHQL_API_URL ?? 'http://localhost:5000';

const config = {
  baseUrl: GRAPHQL_API_URL,
  development: true,
};

export default config;
