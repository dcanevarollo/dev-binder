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
| new UserNotFoundException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class UserNotFoundException extends Exception {
  constructor(username: string) {
    super(`Usuário ${username} não encontrado no GitHub`, 404);
  }
}
