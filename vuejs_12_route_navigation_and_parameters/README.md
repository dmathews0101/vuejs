# vuejs_12_route_navigation_and_parameters

1. how we can use our router, our existing routes already set up and navigate to them using links and how we can also pass data and how we can pass parameters to our routes
2. <a href="/">Home</a> always reloads the page, because we are always sending a new request to the server and the server gives us back the index.html page, that is not what we would want to have, because it destroys our whole application state, every time we navigate around
3. it would be great, if it would never leave the running application, and just rerender the part of the DOM which should be rerendered, that is what we are building a single page application for in the end
4. we can do this, we have router-view to render or mark the place, where the component shall get rendered, we also have another great component we can use, router-link
5. router-link allows us to create a link which will be basically be handled in a way where there is no request sent to the server, instead the click is handled by the view-router and the component which shall be loaded is loaded
6. <router-link to="/">Home</router-link>, we can also bind 'to' with v-bind:to some variable holding the path here, since we are entering the full path here anyways, we dont need it, but we can make this more dynamic by binding to a property.
7. <router-link to="/users">Users</router-link>
8. now we can see, it also loads the appropriate component, but it never reloads the page, it never sends a fresh request, because it shouldn't and it doesnt. so this is a much nicer way of navigating around
11. now to pass some data, and to navigate without using links, because we might have some places in code, where we want to trigger a navigation action when some code is finished or when we executed some code and not when some user clicks somewhere.
12. we can send parameters by simply adding them to our url
13. <router-link to="/users/10">Users</router-link>
here we want to load the team with id 10, we can output this in the users template
14. in the main.js file where we configure the routes, we now have to tell vue router that a part of the url of the path will be dynamic / a variable .. we do this by adding a /, then : , which indicates that the following word or part is dynamic and then any name we like, for example :teamId
15. we will be able to extract the data by calling this property later on,
const routes = [
  { path: '/users/:teamId', component: Users },
  { path: '/', component: Home }
];
16. this tells the vue router that there is a dynamic path, in the app.vue file we are passing 10 in this position, so we want to extract that 10 later on,
17. the missing piece is now in the users.vue file, here we want to extract this, now we can do this by adding a script, and here export our default object, this vuejs object, now we can get that routing data here,
18. inside of the vue instance here we have access to this.$route.params, we have this $route property here available, and this is available because we added the vue router here, Vue.use(VueRouter); as a plugin, this gives us access to $route, we can also access this in our template .. <p> Team ID is {{ $route.params.teamId }}</p>
19. $route is made available by the vue router, and on the params, we know we called it teamId,.. this teamId here has to match the name we gave in the routes in main.js
20. now in output:
localhost:8080/users/12
Team ID is 12
21. but ...
when we add a life cycle hook, life cycle hooks are basically methods which are executed automatically on a vue instance when it is created and so on .. this method will be executed by vuejs whenever this component here is created,
22. created() {
  alert(this.$route.params.teamId);
}
23. we have to go to home and back to see the alert again, that is because vuejs manages the components very efficiently when using routing, it doesnt destroy them just because we are switching between 10 and 12 here.
24. it keeps the component, because it is the same component, why would it destroy and recreate it, that only costs performance, so therefore it is a clever behaviour that it doesnt destroy the component, instead it keeps it alive, and only rerenders the parts of the DOM which need to be rerendered
25. that is generally a good thing but it is bad if we have some methods depending on that like here where we execute some code in the created method
26. this is not executed everytime we switch the route
27. to make this work, we have to set up a watcher, so we have to add the watch property here, and in the object, we set up that we want to watch '$route', we need to enclose this in '' because $ is a special character, which is generally not allowed in property names
28. now we can watch this route property, we get the to and from parameter passed by vuejs, this basically just means to which route are we navigating and from which route are we coming
  watch: {
    $route(to, from) {
      alert(to.params.teamId);
    },
  },
29. the component here is not getting recreated but we are still getting informed
30. navigating from withing our code ... in the users.vue file, if we have a button, which executes code in goHome() method, we can access the vue router and there we can push a new route on that stack so to say, because we can think of it as a stack, because we can use the back button to remove the top level element and go back one page.
31. so we want to push a new page on that stack, and we decide which page by entering a path here - / - to go to just home.
goHome() {
  this.$router.push('/');
}
32. so we basically enter the same here as an argument to push as we enter here as an argument to our links ( to our to attribute -- to = "/" ) on App.vue file
33. now if we click on go home button, we go back to the home page, but now we navigated from inside the code
34. summary,.. how routing works, how we can setup routing and how we can navigate around
