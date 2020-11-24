<template>
  <div>
    <!--menu-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" :to="{ path: '/' }">
        Book Review</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li>
            <form @submit.prevent="search" class="form-inline mt-2">
              <input
                v-model="keyword"
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link menu-text" id="navbarDropdown" role="button">
              <i class="far fa-list-alt fa-lg"></i> Categories
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Fiction</a>
              <a class="dropdown-item" href="#">Non-Fiction</a>
              <a class="dropdown-item" href="#">Language</a>
              <a class="dropdown-item" href="#">Writers</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link
              :to="{ path: '/' }"
              class="nav-link menu-text"
              id="navbarDropdown"
              role="button"
            >
              <i class="far fa-comment-dots fa-lg"></i> Reviews
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link menu-text" id="navbarDropdown" role="button">
              <i class="far fa-user fa-lg"></i>profile
            </a>
          </li>
          <li class="nav-item dropdown">
            <router-link
              :to="{ path: '/dashbord' }"
              class="nav-link menu-text"
              id="navbarDropdown"
              role="button"
            >
              <i class="far fa-list-alt fa-lg"></i>
              Dashbord
            </router-link>
          </li>

          <li class="nav-item dropdown">
            <router-link
              :to="{ path: '/login/' }"
              class="nav-link menu-text"
              id="navbarDropdown"
              role="button"
            >
              <i class="fas fa-sign-in-alt fa-lg"></i>
              Login
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    };
  },

  methods: {
    search() {},
  },
};
</script>

<style>
/*menu................................*/
.navbar {
  background: #222222;
}
.nav-item::after {
  content: "";
  display: block;
  width: 0px;
  height: 2px;
  background: #fec400;
  transition: 0.2s;
}
.nav-item:hover::after {
  width: 100%;
}
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover {
  color: #fec400;
}
.nav-link {
  padding: 15px 5px;
  transition: 0.2s;
}
.dropdown-item.active,
.dropdown-item:active {
  color: #212529;
}
.dropdown-item:focus,
.dropdown-item:hover {
  color: #fec400;
}
/* .dropdown-menu{
    background-color: #0077e2 !important;
} */

.dropdown-item:hover,
.dropdown-item:focus {
  color: #fff !important;
  text-decoration: none;
  background-color: #ff6d00;
}
a {
  color: black !important;
  text-decoration: none !important;
}
a:visited {
  text-decoration: none !important;
}

a:active {
  text-decoration: underline !important;
}

.border-or {
  border-color: #e65100;
  /*    background-color:  #E65100;*/
}
.border-or :hover {
  border-color: #e65100;
}
.dropdown:hover > .dropdown-menu {
  display: block;
}
.dropdown-width {
  width: 300px;
}

.text-1 {
  text-align: center !important;
  margin: 0px 0px 0px 122px;
}
.menu-text {
  font-size: 15px;
}
.btn-orange {
  color: #fff;
  background-color: #ff6d00;
  border-color: #fb8c00;
  width: 100% !important;
  margin: 0px 0px 0px 12px;
}
.btn-black {
  margin: 0px 0px 0px 12px;
}
.btn-orange :hover {
  color: #fff;
  background-color: #ff6f00;
  border-color: #fb8c00;
}
.faf {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
}
.fag i {
  padding: 9px 4px 4px 4px;
  font-size: 23px;
  width: 40px;
  text-align: center;
  text-decoration: none;
  margin-bottom: -5px;
  background-color: #e64a19;
  border-radius: 15%;
  color: white;
}
.new-ul {
  list-style: none;
  font-size: 12px;
}

.new-ul li::before {
  content: "\2022";
  color: lavender;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
.fag :hover {
  background-color: #bf360c;
  color: white;
}
.text-2 {
  font-family: "Roboto Mono", monospace;
}
.i-color {
  color: #fb8c00;
}
.fv-circle {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #dae0e5;
  float: right;
  margin: 2px 0px 0px 4px;
  font-size: 12px;
  text-align: center;
}
.learnMore {
  color: #fb8c00;
}

@media screen and (max-width: 990px) {
  .marginForsmallScreen {
    margin-top: 10px !important;
  }
  .mr-auto {
    margin: 10px 0px 10px 0px;
  }
}
/*menu............................ end*/
</style>
