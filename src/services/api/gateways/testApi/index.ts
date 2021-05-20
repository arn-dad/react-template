import { Service, Options } from '../../config'

export class TestApi extends Service {
  public endpoint = 'account'

  private routes = {
    test: '',
  }

  public test(options: Options): Promise<any> {
    return this.post(this.routes.test, options)
  }
  
}