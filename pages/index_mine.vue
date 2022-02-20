<template>
<div class="login">
  <div>
    <button @click="login">googleアカウントでログイン</button>
  </div>
</div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().languageCode = "ja";
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.push("/confirm");
        })
        .catch(error => {
          alert("認証に失敗しました")
        });
    }
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
