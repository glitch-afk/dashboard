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

export const CREATE_USER = `
mutation CreateUser($data: UserCreateInput!) {
    createUser(user: $data) {
        id
        apiKey
        email
        emailVerified
    }
}
`;

export const GET_USER = `
query GetUser($email: String!) {
  users(where: {email:$email}) {
    id
    apiKey
    email
    emailVerified
  }
}
`;