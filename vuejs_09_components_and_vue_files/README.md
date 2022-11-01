# vuejs_09_components_and_vue_files

1. in message.vue file we are not exporting anything, we dont have a script tag where we export anything, it works none the less, because webpack or this vue-loader will do this behind the scenes for us
4. it transforms this template, into javascript code anyways and it will export it so we can import it from the Message.vue file : import Message from './Message.vue';
5. Now with the message imported, we can simply use the Vue.component(); method to set up a new component, on the vue instance, and we can give it any selector of our choice, like message.
Vue.component('app-message', Message);
Message object is given to us by vue-loader, by compiling this Message.vue file here. Now with that we have registed our component.
6. Now we can use <app-message></app-message> component in App.vue file.
7. Two-way-binding allows us to pass data in and out at the same time. The alternative is: v-bind:value="..." & v-on:input="..."
8. v-model simply bind the content we enter here to a data property, 
9. we need to export this object, export default {}, and this object here is now set up, like a vue instance kind of, here we set data as a method
data: function() {} or 
es6 shortcut: data() {}
10. webpack template will automatically convert es6 code to es5.
10. to use a component locally, only in Message.vue
import Input from "./Input.vue";

export default {
  components: {
    "app-input": Input,
  },
};
11. summary: using webpack setup, these .vue files to split up our code, to contain each component in its own file, which we then can import, and then setup globally and locally
