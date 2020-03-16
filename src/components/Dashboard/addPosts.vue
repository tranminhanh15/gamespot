<template>
  <div class="dashboard_form">
    <h1>Add posts</h1>
    <form @submit.prevent="submitHandler">
        <div class="input_field">
          <input type="file" @change="changeImage">
          <img :src="formdata.img" alt="">
        </div>
        <div class="input_field" :class="{invalid: $v.formdata.game.$error}">
          <label for="">Game</label>
          <input 
          type="text"
          @blur="$v.formdata.game.$touch()"
          v-model="formdata.game"
          >
          <p class="error_label" v-if="$v.formdata.game.$error">
            this input is required
          </p>
        </div>
        <div class="input_field" :class="{invalid: $v.formdata.title.$error}">
          <label for="">Title</label>
          <input 
          type="text"
          @blur="$v.formdata.title.$touch()"
          v-model="formdata.title"
          >
          <p class="error_label" v-if="$v.formdata.title.$error">
            this input is required
          </p>
        </div>

        <div class="input_field" :class="{invalid: $v.formdata.description.$error}">
          <label for="">Description</label>
          <input 
          type="text"
          @blur="$v.formdata.description.$touch()"
          v-model="formdata.description"
          >
          <p class="error_label" v-if="$v.formdata.description.$error">
            this input is required
          </p>
          <p class="error_label" v-if="!$v.formdata.description.maxLength">
            Must not be greater than {{ $v.formdata.description.$params.maxLength.max }} characters
          </p>
        </div>

        <div class="input_field" :class="{invalid: $v.formdata.rating.$error}">
          <wysiwyg v-model="formdata.content"/>
        </div>

        <div class="input_field" :class="{invalid: $v.formdata.rating.$error}">
          <label for="">Rating</label>
          <select @blur="$v.formdata.rating.touch()" v-model="formdata.rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <p class="error_label" v-if="$v.formdata.rating.$error">
            You need to select at least on
          </p>
        </div>

        <button type="submit">Add post</button>
    </form>

    <md-dialog :md-active="dailog"> 
      <p>
        your post has no content, are you sure you want to post this ?
      </p>
      <md-dialog-action>
        <md-button class="md-primary">Oop, I want to add it</md-button>
        <md-button class="md-primary">Yes, I am sure</md-button>
      </md-dialog-action>
    </md-dialog>
  </div>
</template>

<script>
import {required, maxLength} from "vuelidate/lib/validators";

export default {
    data(){
      return{
        dialog: true,
        formdata: {
          img: '',
          game: '',
          title: '',
          description: '',
          content: '',
          rating: '',
        }
      }
    },
    validations: {
      formdata: {
        title: {
          required,
        },
        game: {
          required,
        },
        description: {
          required,
          maxLength: maxLength(5),
        },
        rating: {
          required
        }
      }
    },
    methods: {
      submitHandler(){
        if(!this.$v.$invalid){
          if(this.formdata.content === ''){
            alert('some thing wrong')
          } else{
            this.$store.commit("posts/addPost", {...this.formdata})
          }
        } else{
          alert('some thing wrong')
        }
      },
      changeImage(e){
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = e => {
        this.formdata.img = e.target.result
      }
      }
    }
}
</script>

<style scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";

  .input_field.invalid input ,
  .input_field.invalid select {
    border: 1px solid red;
  }
</style>
