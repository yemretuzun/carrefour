<template>
  <div class="container-fluid bg-light">
    <div class="row title">
      {{title}}
    </div>
    <div class="row">
      <Ratings :rating="starts"
                :color="'gold'"
                :bg_color="'bg-light'"
      />
    </div>
    <div class="row msg">
      <a>{{message}}</a>
    </div>
    <div class="row">
      <span class="usr-date">
         {{username}}
      </span>
      <span class="ml-2 usr-date">
        ({{date}})
      </span>
    </div>
  </div>
</template>


<script>
import Ratings from './Ratings'

export default {
  props: {
      title: String,
      message: String,
      stars: Number,
      date: Date,
      username: String
  },
    data() {
        return {

        }
    },
    methods:{

    },
    computed: {

    },
    watch:{

    }
}
</script>

<style scoped>

  *{
    font-family: 'Nunito',Helvetica,Arial,sans-serif;
    color: var(--carrefour-blue);
  }

  .cont{
    margin-top: 50px;
  }


  .title {
    line-height: 33px;
    font-size: 14px;
    color: #545558;
    font-weight: 800;
  }

  .msg {
    font-size: 14px;
    color: #35393b;
    font-weight: 600;

  }

  .usr-date{
    line-height: 33px;
    font-size: 14px;
    color: #565657;
  }

</style>
