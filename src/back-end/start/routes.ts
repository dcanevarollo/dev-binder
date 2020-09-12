/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.post('auth/login', 'AuthController.login');
Route.post('users', 'UsersController.store');

Route.group(() => {
  Route.delete('auth/logout', 'AuthController.logout');
  Route.get('users/:username', 'UsersController.show');
  Route.resource('posts', 'PostsController').apiOnly().except(['show']);
  Route.post('likes', 'LikesController.store');
  Route.delete('likes/:post_id', 'LikesController.destroy');
  Route.post('followers', 'FollowersController.store');
  Route.delete('followers/:user_id', 'FollowersController.destroy');
  Route.get('techs', 'TechsController.index');
  Route.post('techs/users', 'TechUserController.store');
  Route.delete('techs/users/:tech_id', 'TechUserController.destroy');
}).middleware(['auth']);
