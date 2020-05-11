import Api from "./Api";

class AuthApi {
  authenticate({ email, password }) {
    return Api.post('/authenticate', { email, password });
  }

  register({ name, email, password }) {
    return Api.post('/register', { name, email, password });
  }

  /*getUserDetails(){
    return Api.get('/profile', {email})
  } */

  getUserDetails(){
    return Api.get('/profile')
  }

}

export default new AuthApi();