<template>
    <div class="container h-100">
    <div class="d-flex justify-content-center mrt h-100">
      <div class="user_card">
        <div class="d-flex justify-content-center">
          <div class="brand_logo_container">
            <img src="../assets/logo.png" class="brand_logo" alt="Logo" />
          </div>
        </div>
        <div class="d-flex justify-content-center form_container">
          <form @submit.prevent="login">
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control input_user"
                v-model="name"
                placeholder="Name"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control input_user"
                v-model="username"
                placeholder="user name"
              />
            </div>
            <div class="input-group mb-2">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input
                type="password"
                class="form-control input_pass"
                v-model="password"
                placeholder="password"
              />
            </div>
            <div class="input-group mb-2">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input
                type="password"
                class="form-control input_pass"
                v-model="C_password"
                placeholder="confirm password"
              />
            </div>
            <div class="d-flex justify-content-center mt-3 login_container">
              <button type="submit" name="button" class="btn login_btn mr-2">
                Registration
              </button>
              <router-link tag="div" :to="{ path: '/login' }">
                <button type="button" class="btn btn-outline-dark">
                  Login
                </button>
              </router-link>
            </div>
          </form>
        </div>

        <div class="mt-4">
          <div class="d-flex justify-content-center links">
            Don't have an account? <a href="#" class="ml-2">Sign Up</a>
          </div>
          <div class="d-flex justify-content-center links">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      username: null,
      password: null,
      C_password: null,
      
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* login/register */
.user_card {
    height: 50%;
    width: 50%;
    margin-top: auto;
    margin-bottom: 100px;
    background: #f39c12;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
  }
  .mrt {
    margin-top: 150px;
  }
  .brand_logo_container {
    position: absolute;
    height: 170px;
    width: 170px;
    top: -75px;
    border-radius: 50%;
    background: #ffffff;
    padding: 10px;
    text-align: center;
  }
  .brand_logo {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    /* border: 2px solid white; */
  }
  .form_container {
    margin-top: 100px;
  }
  .login_btn {
    width: 100%;
    background: #c0392b !important;
    color: white !important;
  }
  .login_btn:focus {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .login_container {
    padding: 0 2rem;
  }
  .input-group-text {
    background: #c0392b !important;
    color: white !important;
    border: 0 !important;
    border-radius: 0.25rem 0 0 0.25rem !important;
  }
  .input_user,
  .input_pass:focus {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
    background-color: #c0392b !important;
  }
  
  
</style>
