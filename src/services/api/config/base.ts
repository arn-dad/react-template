import { axios } from './axios'

export type Options = {
  url?: string
  baseURL?: string
  params?: any
  data?: any
}

interface IService {
  get(url: string, options: Options): Promise<any>
  post(url: string, options: Options): Promise<any>
  delete(url: string, options: Options): Promise<any>
  put(url: string, options: Options): Promise<any>
  patch(url: string, options: Options): Promise<any>
}

export class Service implements IService {
  get(url: string, opt: Options): Promise<any> {
    return axios({ method: 'GET', url, ...opt })
  }

  post(url: string, opt: Options): Promise<any> {
    return axios({ method: 'POST', url, ...opt })
  }

  delete(url: string, opt: Options): Promise<any> {
    return axios({ method: 'DELETE', url, ...opt })
  }

  put(url: string, opt: Options): Promise<any> {
    return axios({ method: 'PUT', url, ...opt })
  }

  patch(url: string, opt: Options): Promise<any> {
    return axios({ method: 'PATCH', url, ...opt })
  }
}