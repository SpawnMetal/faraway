import {IPeople} from 'swapi-ts'

interface PeopleInterface {
  title: string
  visible: boolean
  edit: boolean
}

interface PeopleModelInterface extends Record<keyof IPeople, PeopleInterface> {}

export const peopleModel: PeopleModelInterface = {
  name: {
    title: 'Name',
    visible: true,
    edit: true,
  },
  birth_year: {
    title: 'Birth year',
    visible: true,
    edit: true,
  },
  eye_color: {
    title: 'Eye color',
    visible: true,
    edit: true,
  },
  gender: {
    title: 'Gender',
    visible: true,
    edit: true,
  },
  hair_color: {
    title: 'Hair color',
    visible: true,
    edit: true,
  },
  height: {
    title: 'Height',
    visible: true,
    edit: true,
  },
  mass: {
    title: 'Mass',
    visible: true,
    edit: true,
  },
  skin_color: {
    title: 'Skin color',
    visible: true,
    edit: true,
  },
  homeworld: {
    title: 'Homeworld',
    visible: true,
    edit: true,
  },
  films: {
    title: 'Films',
    visible: true,
    edit: true,
  },
  species: {
    title: 'An array of species resource URLs that this person belongs to.',
    visible: true,
    edit: true,
  },
  starships: {
    title: 'Starships',
    visible: true,
    edit: true,
  },
  vehicles: {
    title: 'Vehicles',
    visible: true,
    edit: true,
  },
  url: {
    title: null,
    visible: true,
    edit: true,
  },
  created: {
    title: 'Created',
    visible: true,
    edit: true,
  },
  edited: {
    title: 'Edited',
    visible: true,
    edit: true,
  },
}
