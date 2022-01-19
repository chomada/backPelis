import {getTest} from './controllers/test.controller.js';
import {getMovie, addToMovie,removeFromMovie,updateMovie,getMovieId} from './controllers/movie.controller.js';
import { addUser,getUser } from './controllers/user.controller.js';
import { validateCredentials } from './controllers/login.controller.js';

export const routes= (app)=>{
  app.route('/api/test').get(getTest)
  app.route('/api/movie').get(getMovie).post(addToMovie).delete(removeFromMovie).put(updateMovie)
  app.route('/api/login')
  .post(validateCredentials);
  app.route('/api/movie/api').get(getMovieId);
  app.route('/api/user').get(getUser).post(addUser)


}

