import * as SWApi from 'swapi-ts'
import {PathTypes, sw} from '@stores'

export const getSw = async (searchString?: string) => {
  const method = searchString ? () => SWApi.People.findBySearch([searchString]) : SWApi.People.find

  return method().then(result => {
    sw.peoples = result
    sw.peoples.resources.sort((a, b) => a.value.name.localeCompare(b.value.name))
  })
}

export const populate = async (path: PathTypes, index: number) => {
  sw.setRequestStatusLoading(path)
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
