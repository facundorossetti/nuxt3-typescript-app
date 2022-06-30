interface api {
  message: string,
  number?: number,
  stringArray?: string[]
}

export default defineEventHandler((event): api => {
  return {
    message: 'works',
    number: 2,
    stringArray: []
  }
})