<script>
export default {
  name: "VUserSearchForm",
  data() {
    return{
      username:''
    }
  }
}
</script>

<template>
  <div class="user-search-form">
    <form @submit.prevent="$emit('submitted', username)">
      <label>
        <input type="text" v-model="username"/>
      </label>
      <button type="submit">Find Github Profile</button>
    </form>
  </div>
</template>


<style scoped>
</style>
