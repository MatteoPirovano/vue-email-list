var email = new Vue ({
  el:'#root',
  data: {
    mails: []
  },
  methods: {},
  mounted: function() {
    const self = this
    for (var i = 0; i <=9; i++) {
      axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function (response) {
        self.mails.push(response.data.response)
      })
    }
  }
});
