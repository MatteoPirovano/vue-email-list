var email = new Vue ({
  el:'#root',
  data: {
    message:'Hello World'
  },
  mounted: {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function (response) {
      console.log(response.data;)
    });
  }

});
