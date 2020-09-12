/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger';
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger);
  }

  public async handle(error: any, ctx: HttpContextContract) {
    let message: string = '';

    switch (error.status) {
      case 400: {
        if (error.code === 'E_INVALID_AUTH_PASSWORD') {
          message = 'Invalid credentials. Try again!';

          return ctx.response.status(400).json({ message });
        } else message = 'Fill in error.';

        break;
      }
      case 401: {
        message = 'You must be logged in to access this resource.';
        break;
      }
      case 403: {
        message = error.message || 'You do not have access to this resource.';
        break;
      }
      case 404: {
        message = error.message || 'Resource not found.';
        break;
      }
      case 422: {
        message = 'Validation error.';

        if (error.code === 'E_VALIDATION_FAILURE') {
          const { errors } = error.messages;

          return ctx.response.status(422).json({ message, errors });
        }

        break;
      }
      default:
        message = 'Internal error. Please, contact an admin.';
        break;
    }

    return ctx.response.status(error.status).json({ message });
  }
}
