# vuejs_10_component_communication

1. here we have two components, input and message, and in input we have an input field where we output the message, which is bound via two way binding
2. and in the message component, we only have the message, but here we also implement the input component
3. First goal is to get the message that we are using here, into the input component, at the beginning
4. we can do this by setting up, the data property here using es6, which we can do in the webpack setup here, and here we will return an object where we store this message, and use string interpolation up in the template to output message.
5. the goal is to get this message into the input component, we can do this using the data binding syntax we also know from native elements, so for example, if we had an image, we could bind, to its source, by using :src
<img :src="" alt="">
6. we can do the same for our own components, we could say we want to bind to msg and we want to bind our message, referring to our message property.
<app-input :msg="message"></app-input>
7. the problem though is msg ofcourse is not known yet, its our own component, how would it know, that msg means that we are passing it the message.
8. we have to tell it, so we have to go to the input component, and tell it, by going to the javascript object, where we configure this component, and here we have this props property, props takes an array, and props stands for properties, it means which properties, should we be able to set on this component,
9. this is an array of known props, and this text here has to match the text used in Message.vue
props: ['msg']
10. props can be outputted like a normal data property, but now, set from outside
11. next, we can see this as a default message in the input field, which we could then change and propagate this change to our parent component where we output this message in the first place
12. <input type="text" :value="msg" @input="changeMessage" />
13. methods: {changeMessage(event) {
  this.message = event.target.value;
},},
14. the event object has the target of the event which is the input, and then the value
15. this is like a two way binding, but the key difference is that we are binding to two different properties, the input comes from outside, but from our prop here - msg, and the output goes to another property - the message property here
16. msg which sets the value of our input here, comes from outside, so its still constantly overrides this, so we are changing the message property here, but then again it gets immediately overwritten by msg from outside
17. we also need to inform our parent component that this changed, and for this we can use another function vuejs has built in, $emit, $ - indicates built in method, emit - allows us to emit our own event,
18. emit takes two arguments, first one - name of the event, second - the potential value we want to pass with this, or multiple values even
19. here we want to pass the changed message, that allows us to inform our parent that something changed here
20. now the goal is to go to the parent component, which is the message.vue file, which is the message component, we also have to pass in the property, but also have to listen to our own event with v-on or @messageChanged, because thats the name we have given to the event here
21. now we can listen to our own event, thrown by our own component, and we get some data passed here, and the data we are passing is the changed message. $event is the reserved word for the data we are passing with the event here, and we know this will be a string, which is the type expected here
<app-input :msg="message" @messageChanged="message = $event"></app-input>
22. now we are passing data in with props and we are passing data out / propagating any changes with our own custom events, with the emit function. there are also other ways of sharing data, across sibling components for example, using shared vue instance, which emits and then we could subscribe in another component. we also have the concepts of slots, where we can pass in some data, into a component







---

# vue-webpack

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
