enum SwapiEndpoints {
  Films = 'films',
}

export function getFilmsEndpoint() {
  return SwapiEndpoints.Films
}
export function getFilmDetailEndpoint(filmId: number) {
  return `${SwapiEndpoints.Films}/${filmId}`
}
