<template>
  <div v-if="review" class="mt-5 row">
    <div class="col-sm-12">
      <p class="card-text">
        <small class="text-muted">
          <img
            class="profile-img"
            :src="review.reviewer_image"
            alt="reviewer_image"
            srcset=""
          />
          {{ review.reviewer }}</small
        >
      </p>
    </div>
    <div class=" mt-2 mb-3 col-sm-6">
      <img class="movie-poster" :src="review.movie_poster" alt="Photo" />
    </div>
    <div class="col-sm-6">
      <h3>{{ review.movie_title }}</h3>
      <h5>{{ review.genres }}</h5>
      <h6>Director: {{ review.director }}</h6>
      <p>{{ review.description }}</p>
    </div>
    <div class="card-footer col-sm-12">
      <p class="card-text">
        <small class="text-muted">
          <i class="fas fa-eye"></i>1000
          <i class="fas fa-calendar-alt"></i>
          {{ review.review_date }}</small
        >
      </p>
    </div>
  </div>
  <h3 v-else>Loading...</h3>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      review: null,
    };
  },
  mounted() {
    this.fetchReview();
  },
  methods: {
    fetchReview() {
      var self = this;
      axios
        .get("http://localhost:3000/review/" + self.$route.params.id)
        .then((response) => {
          console.log(response);
          self.review = response.data;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.movie-poster {
  width: 90%;
  height: 350px;
}
.text-muted i {
  margin-left: 10px;
}
.profile-img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 0px 5px 5px 5px;
}
</style>
