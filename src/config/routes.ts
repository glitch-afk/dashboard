const routes = {
  home: '/',
};

export const BACKEND_URL = process.env.NODE_ENV === 'production' ? process.env.GRAPHQL_URL : "https://localhost:5000/graphql"
export const API_KEY = process.env.API_KEY ?? ""

export default routes;
