import {makeAutoObservable} from 'mobx'

type RequestStatuses = 'loading' | 'success' | 'error' | null

// Основное состояние приложения
class Sw {
  requestStatusLoading: RequestStatuses = 'loading' // Статус получения данных с сервера - загрузка
  requestStatusSuccess: RequestStatuses = 'success' // Статус получения данных с сервера - успех
  requestStatusError: RequestStatuses = 'error' // Статус получения данных с сервера - ошибка
  requestStatus: RequestStatuses = null // Статус получения данных с сервера

  constructor() {
    makeAutoObservable(this)
  }

  // Устанавливает статус получения данных с сервера - загрузка
  setRequestStatusLoading() {
    this.requestStatus = this.requestStatusLoading
  }

  // Устанавливает статус получения данных с сервера - успех
  setRequestStatusSuccess() {
    this.requestStatus = this.requestStatusSuccess
  }

  // Устанавливает статус получения данных с сервера - ошибка
  setRequestStatusError() {
    this.requestStatus = this.requestStatusError
  }

  // Получает результат загрузки данных с сервера - загрузка
  get isRequestStatusLoading() {
    return this.requestStatus === this.requestStatusLoading
  }

  // Получает результат загрузки данных с сервера - успех
  get isRequestStatusSuccess() {
    return this.requestStatus === this.requestStatusSuccess
  }

  // Получает результат загрузки данных с сервера - ошибка
  get isRequestStatusError() {
    return this.requestStatus === this.requestStatusError
  }
}

const sw = new Sw()
export default sw
