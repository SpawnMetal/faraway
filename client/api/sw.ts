import * as SWApi from 'swapi-ts'
import {sw} from '@stores'

export const getSw = async () => {
  return SWApi.People.find().then(result => {
    sw.peoples = result
    // result.resources[].value
    console.log('result', result)
    // result.populateAll('films')
    // result.populateAll('homeworld')
    // result.populateAll('species')
    // result.populateAll('starships')
    // result.populateAll('vehicles')
  })
}
