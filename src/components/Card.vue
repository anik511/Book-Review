<template>
  <div class="card-columns">
    <div v-for="(review, index) in reviews" :key="index" class="card">
      <router-link tag="div" :to="{path:'/review/'+review.id}">
      <img
        class="card-img-top"
        :src="review.movie_poster"
        alt="Card image cap"
      />
      <div class="card-body">
        <h4 class="card-title">{{ review.movie_title }}</h4>
        <small>{{ review.genres }}</small>
        <h6>Director: {{ review.director }}</h6>
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis
          dicta doloremque, dolorum ea eos et excepturi explicabo facilis harum
          illo impedit incidunt laborum laudantium...
        </p>
      </div>
      </router-link>
      <div class="card-footer">
        <p class="card-text">
          <small class="text-muted">
            <i class="fas fa-eye"></i>1000
            <img
              class="rev-img"
              :src="review.reviewer_image"
              alt="reviewer_image"
              srcset=""
            />
            {{ review.reviewer }}<i class="fas fa-calendar-alt"></i>
            {{ review.review_date }}</small
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      reviews: [],
    };
  },
  mounted() {
    this.fetchReviews();
  },
  methods: {
    fetchReviews() {
      var self = this;
      axios.get("http://localhost:3000/reviews").then((response) => {
        console.log(response);
        self.reviews = response.data;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border: none;
  margin: 25px 15px 0px 0px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
}
.card a {
  color: initial;
}
.card a:hover {
  text-decoration: initial;
}
.card .text-muted i {
  margin: 0 10px;
}
.card-img-top {
  height: 220px !important;
}
.rev-img {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 0px 0px 5px 5px;
}
</style>
