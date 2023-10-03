import * as SWApi from 'swapi-ts'

export const getSw = () => {
  // Внёс правки в node_modules\swapi-ts\dist\SWApi.js, передаю obj[path] без replace, чтобы исключить ошибку с получившимся httpss вследствие бага в пакете
  SWApi.People.find().then(result => {
    // result.resources[].value
    console.log(result)
    result.populateAll('films')
    result.populateAll('homeworld')
    result.populateAll('species')
    result.populateAll('starships')
    result.populateAll('vehicles')
  })
}
