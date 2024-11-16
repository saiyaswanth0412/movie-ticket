import {Config} from './Config'

export class Endpoint{

    static logIn = `${Config.api}/api/auth/login`;
    static signUp = `${Config.api}/api/auth/signup`;
    static getScreen = `${Config.api}/api/theatre/getScreens`;
    static getScreenSeatsInfo = `${Config.api}/api/screen/getScreenSeatsInfo`;
}   