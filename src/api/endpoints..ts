enum Endpoints {
  Users = 'users',
}

export function getUsersEndpoint() {
  return Endpoints.Users
}
export function getUserDetailEndpoint(userId: string) {
  return `${Endpoints.Users}/${userId}`
}
