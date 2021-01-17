<template>
  <div class="" id="app">
    Hello! Click the button to get data from the API
    <button @click="getData">Get Data</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    async getData() {
      const res = await fetch('/api')

      if (res.status === 500) {
        return alert('The API server is not running!')
      }

      const data = await res.json()

      console.log(data)

      alert('Check the console!')
    },
  },
}
</script>
