import { Exception } from '@poppinss/utils';

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@poppinss/utils` allows defining
| a status code and error code for every exception.
|
| @example
| new NoPasswordException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class NoPasswordException extends Exception {
  constructor() {
    super('Your account was created with GitHub', 400);
  }
}
