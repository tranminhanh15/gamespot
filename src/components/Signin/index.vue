<template>
  <div class="container">
    <div class="signin_container">
        <h1>Sign in</h1>
        <form @submit.prevent="onSubmit">
            <div class="input_field" :class="{invalid: $v.formdata.email.$error}">
              <label for="">Email</label>
              <input type="text" v-model="formdata.email" @blur="$v.formdata.email.$touch()">
              <div v-if="$v.formdata.email.$error">
                <p class="error_label" v-if="!$v.formdata.email.required">
                  This field is required
                </p>
                <p class="error_label" v-if="!$v.formdata.email.email">
                  Please enter a valid email
                </p>
              </div>
            </div>

            <div class="input_field" :class="{invalid: $v.formdata.password.$error}">
              <label for="">Password</label>
              <input type="password" v-model="formdata.password" @blur="$v.formdata.password.$touch()">
              <div v-if="$v.formdata.password.$error">
                <p class="error_label" v-if="!$v.formdata.password.required">
                  This field is required
                </p>
                <p class="error_label" v-if="!$v.formdata.password.minLength">
                  At least 4 character
                </p>
              </div>
            </div>
            <div>
              <input type="checkbox" v-model="formdata.check" >
              <label for=""> remember password</label>
            </div>

            <button type="submit">
              Sign in
            </button>

            <p class="error_label" v-if="error">something is wrong</p>
            <p class="error_label" v-if="authFailed">Please check email or password</p>
        </form>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import { required, minLength, between, email } from 'vuelidate/lib/validators';

export default {
  data(){
    return {
      error:false,
      formdata: {
        email: 'anh1@gmail.com',
        password: 'anh123',
        check: false
      }
    }
  },
  computed: {
    authFailed() {
      return this.$store.state.admin.authFailed;
    }
  },
  validations: {
      formdata: {
        email : {
          required,
          email
        },
        password: {
            required,
            minLength: minLength(4)
        }
      }
  },
  methods: {
    onSubmit(){
      if(!this.$v.$invalid){
        this.$store.dispatch('admin/signIn', this.formdata)
      } else{
        this.error = true;
        setTimeout(()=> {
          this.error = false;
        }, 2000)
      }
 
    }
  }
}
</script>

<style scoped>
  .input_field.invalid input ,
  .input_field.invalid select {
    border: 1px solid red;
  }
</style>
