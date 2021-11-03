<template>
    <section>
        <b-field label="Username" Username:>
            <b-input value="johnsilver" maxlength="30" v-model="username" required>    </b-input>
        </b-field>
        <b-field label="Password" Password:>
            <b-input value="123" type="password" maxlength="30" v-model="password"></b-input>
        </b-field>
        <b-button label="Login"   @click.prevent="login" >Log in</b-button>
    </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let response = await this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
      if (response) {
        this.$router.replace("mobile");
      } 
    },
  },
};
</script>