export const GET_PROVIDERS = `
query Provider($id: ID!) {
  providers(id: $id) {
    id
    name
  }
}
`;

export const CREATE_PROVIDER = `
mutation CreateUser($data: ProviderCreateInput!) {
    createProvider(provider: $data) {
        id
        delimiter
        owner
        dataSource
        apiKey
    }
}
`;
