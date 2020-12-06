<template>
<div  class="cont">
  <b-container>
    <b-row align-h="start">
      <span class="title">{{title}}</span>
    </b-row>
    <b-row align-h="start">
      <b-rating inline no-border readonly  v-model="stars" color="gold"></b-rating>
    </b-row>
    <b-row align-h="start">
      <span class="msg">{{message}}</span>
    </b-row>
    <b-row align-h="start" >
      <span class="usr-date">{{username}} ({{date}})</span>
    </b-row>
  </b-container>
</div>
</template>


<script>
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

  b-row{

  }

  .title {
    line-height: 33px;
    margin-left: 10px;
    font-size: 14px;
    color: #005baa;
    font-weight: 800;
  }

    .msg {
    line-height: 33px;
    margin-left: 10px;
    font-size: 14px;
    color: #005baa;
  }

  .usr-date{
    line-height: 33px;
    margin-left: 10px;
    font-size: 14px;
    color: #565657;
  }

</style>
