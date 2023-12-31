import * as SWApi from '@utils'

export const getSw = async (searchString?: string) => {
  const method = searchString ? () => SWApi.People.findBySearch([searchString]) : SWApi.People.find
  return method()
}
