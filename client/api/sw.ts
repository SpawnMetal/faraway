import * as SWApi from 'swapi-ts'
import {PathTypes, sw} from '@stores'

export const getSw = async () => {
  return SWApi.People.find().then(result => {
    sw.peoples = result
    sw.peoples.resources.sort((a, b) => a.value.name.localeCompare(b.value.name))
  })
}

export const populate = async (path: PathTypes, index: number) => {
  return sw.peoples.resources[index]
    .populate(path)
    .then(() => sw.setRequestStatusSuccess(path))
    .catch(() => sw.setRequestStatusError(path))
}

export const populateAll = async (index: number) => {
  populate('films', index)
  populate('homeworld', index)
  populate('species', index)
  populate('starships', index)
  populate('vehicles', index)
}
