import {Config} from './Config'

export class Endpoint{

    static logIn = `${Config.api}/api/auth/login`;
    static signUp = `${Config.api}/api/auth/signup`;
}