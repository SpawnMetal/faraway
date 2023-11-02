import {IPeople} from '@utils'

interface PeopleInterface {
  title: string
  edit?: boolean
}

interface PeopleModelInterface extends Record<keyof IPeople, PeopleInterface> {}

export const peopleModel: PeopleModelInterface = {
  name: {
    title: 'Name',
  },
  birth_year: {
    title: 'Birth year',
  },
  eye_color: {
    title: 'Eye color',
  },
  gender: {
    title: 'Gender',
  },
  hair_color: {
    title: 'Hair color',
  },
  height: {
    title: 'Height',
  },
  mass: {
    title: 'Mass',
  },
  skin_color: {
    title: 'Skin color',
  },
  homeworld: {
    title: 'Homeworld',
  },
  films: {
    title: 'Films',
  },
  species: {
    title: 'Species',
  },
  starships: {
    title: 'Starships',
  },
  vehicles: {
    title: 'Vehicles',
  },
  url: {
    title: null,
  },
  created: {
    title: 'Created',
    edit: false,
  },
  edited: {
    title: 'Edited',
    edit: false,
  },
}
