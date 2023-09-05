<template>
  <!-- login example -->
  <section>
    <button
      v-if="!isUserLogged"
      @click="handleLoginClick"
      class="btn btnPrimary"
    >
      Login
    </button>
    <p v-else>
      logged user: <i>{{ user }}</i>
    </p>
  </section>

  <!-- users list -->
  <section>
    <h1>Только обычные пользователи:</h1>
    <ul>
      <li v-for="user in getUsers" :key="user.id">
        <p>{{ user.id }}</p>
        <p>{{ user.name }}</p>
        <p>{{ user.admin ? "Это админ" : "Обычный юзер" }}</p>
      </li>
    </ul>
  </section>

  <!-- single user -->
  <section>
    <input v-model="userId" type="number" />
    <p>{{ getUser }}</p>
  </section>

  <!-- count users -->
  <section>
    <p>{{ getUsersLength }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userId: 1,
    };
  },
  methods: {
    handleLoginClick() {
      this.$store.dispatch("setUser"); // т.к. написать this.$store.actions мы не можем (т.к. это не будет работать), то напишем dispatch(), который в свою очередь будет вызывать action
    },
  },
  computed: {
    isUserLogged() {
      return this.$store.getters.isUserLogged;
    },
    user() {
      return this.$store.getters.getUser;
    },
    getUser() {
      return this.$store.getters.getUserById(this.userId) || "user not found";
    },
    getUsers() {
      return this.$store.getters.getUsers;
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength;
    },
  },
};
</script>