import {makeAutoObservable} from 'mobx'
import {IPeople, Resource} from 'swapi-ts'

type RequestStatuses = 'loading' | 'success' | 'error' | null

export type PathTypes = 'app' | 'people' | 'films' | 'homeworld' | 'species' | 'starships' | 'vehicles'

interface RequestStatusInterface extends Record<PathTypes, RequestStatuses> {}

// Основное состояние приложения
class Sw {
  requestStatusLoading: RequestStatuses = 'loading' // Статус получения данных с сервера - загрузка
  requestStatusSuccess: RequestStatuses = 'success' // Статус получения данных с сервера - успех
  requestStatusError: RequestStatuses = 'error' // Статус получения данных с сервера - ошибка
  // Статус получения данных с сервера
  populateStatus: RequestStatusInterface = {
    app: null,
    people: null,
    films: null,
    homeworld: null,
    species: null,
    starships: null,
    vehicles: null,
  }
  peoples: {
    resources: Resource<IPeople>[]
    populateAll(path: string): Promise<any>
  }
  value: IPeople
  newValue: Partial<IPeople>

  constructor() {
    makeAutoObservable(this)
  }

  // Устанавливает статус получения данных с сервера - загрузка
  setRequestStatusLoading(path: PathTypes) {
    this.populateStatus[path] = this.requestStatusLoading
  }

  // Устанавливает статус получения данных с сервера - успех
  setRequestStatusSuccess(path: PathTypes) {
    this.populateStatus[path] = this.requestStatusSuccess
  }

  // Устанавливает статус получения данных с сервера - ошибка
  setRequestStatusError(path: PathTypes) {
    this.populateStatus[path] = this.requestStatusError
  }

  // Получает результат загрузки данных с сервера - загрузка
  isRequestStatusLoading(path: PathTypes) {
    return this.populateStatus[path] === this.requestStatusLoading
  }

  // Получает результат загрузки данных с сервера - успех
  isRequestStatusSuccess(path: PathTypes) {
    return this.populateStatus[path] === this.requestStatusSuccess
  }

  // Получает результат загрузки данных с сервера - ошибка
  isRequestStatusError(path: PathTypes) {
    return this.populateStatus[path] === this.requestStatusError
  }

  // Обновляет значения на новые
  updateValue() {
    for (const key in this.newValue) if (!this.newValue[key].length) this.newValue[key] = 'unknown'
    this.value = {...this.value, ...this.newValue}
  }
}

export const sw = new Sw()
