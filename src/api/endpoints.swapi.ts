enum SwapiEndpoints {
  Films = 'films',
  People = 'people',
}

export function getFilmsEndpoint() {
  return SwapiEndpoints.Films
}
export function getFilmDetailEndpoint(filmId: number) {
  return `${SwapiEndpoints.Films}/${filmId}`
}
export function getPeopleEndpoint() {
  return SwapiEndpoints.People
}
export function getPeopleDetailEndpoint(id: number) {
  return `${SwapiEndpoints.People}/${id}`
}
