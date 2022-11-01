# vuejs_11_routing_setup

1. working of routing in a vuejs application, different components can be loaded conditionally throgh routing
2. npm run dev
3. why use routing? why not use v-if to conditionally show certain components
4. routing is useful if we want to create a single page application, i.e, the only page ever getting served by our server is the index.html file, in this file we are loading the vuejs application, but in this application, we might want to recreate this application like feeling, this website feeling, where we do have, different routes,
5. here though, the routes though will not be handled by our server, we are not sending the request to the server, we are not getting back multiple pages, or views from the server, instead we are only getting back this index.html file, but we still want to handle different routes, and turns out we can with the vuejs router
6. this is a nice little package we can add, which allows us to parse that url, and load different components as pages depending on which url we are visiting
7. summary: how we can set up this router, how we can configure our basic routes and how we can go there, -- extra -- how we can navigate around and how we can pass data when switching the routes
8. we can install vue-router, which is an extra package, not included in the default vuejs package, using
npm install --save vue-router
this will pull down the router, and make it available for us to use in this project
9. with the router installed here we can go to the main.js file, which is our root entry food for our application, here we have to import the vue router,
import VueRouter from 'vue-router';
this will give us the router
10. but in order to be able to use it in this application, where we are using webpack to bundle everything, we have to take our Vue object which we are importing from Vue, so this root vue object, from the vue package, and execute the use method there.
11. this enables plugins, which we can use, and the router is such a plugin,.. so by calling Vue.use and passing the VueRouter, we are making sure that routing is now actually enabled, and will work.
12. that now gives us access to the router, but we havent got any routes to use to navigate to, we have the home and the users vue file, but to get there, we need to set up our router.
13. routes is basically an array of routes, how does one individual route look like, one route is just simply a javascript object, so we configure our route by adding a javascript object to this array, which will be use later
14. in order to set up a route here, we need to define a path, path refers to the part in our url, after our domain, here the domain is localhost:8080, and the path would then be for example /users
15. then we also need to specify which component should get loaded. here we can define which component we want to load, if the user navigates to localhost:8080/users
16. if that shall be the users component from the users.vue file, we need to import that, so import Users from './Users.vue', simply set it up as a component in component
17. we can also add a default path of / so we always load the home component, if we are just at localhost:8080, so for that,
import Home from './Home.vue';
..
{ path: '/', component: Home }
18. now we have 2 routes: users(/users) and home(/)
19. to get the routes into our application now, const router = new VueRouter({
  routes: routes
  // propertyname : name of the value / variable name which holds the value are equal
});
or
const router = new VueRouter({
  routes
});
20. this creates the router, and now we have to add this router to our root vue instance, by adding router: router or router
21. with that the routes are setup, the router is set up, the router is also added as a plugin to vuejs
22. now we need a place to load these components at because right now, we have /users and / registered as routes, but we dont have any place to load them,
23. so in App.vue file, in the template, we can define a place where vuejs should render the routes, where we are navigating to, that is done by adding <router-view></router-view>
24. router-view is just a reserved component, and it will be recognized by the vue router and then it will take this place in our template, and put the component which gets loaded conditionally in this place.
25. now if we run : npm run dev, the components are getting loaded, but we have this strange # in localhost:8080/#/users
26. this # here, which gets added automatically, is kindof the way we did routing a couple of years ago, it basically means, the part in front of the # tag - localhost:8080/- gets handled by the server, because this is important, every route or url we enter up here in the search bar and we hit enter, gets ofcourse sent to the server, thats how the internet works,
27. but here, our routes are set up in our vuejs application, which ofcourse runs in the browser, the server will not know there is a /users route in our client application, in our vue application, because of the # tag.
28. the part in front of the # , localhost:8080/ is sent to the server, and the server tries to find a fitting route, the part after the # tag, is ignored by the server, and instead handled by the client, by vuejs,
29. this is why , here we can enter
localhost:8080/#/users
and we do load this route, because the server loads this part localhost:8080/ here, gives us the index.html page, the vuejs application starts up, then this part here /users is sent to our front-end application, to javascript, and this is able to handle it because we registered this route
30. but now if we delete the /#/ and enter /users, it now puts the #/ after users, that is because, our test development server here is already configured in a certain way, where it will send all 404 errors, so every route it doesnt find on the server, automatically to the client,
31. that is a cool behaviour, which is common nowadays, and we want to configure our server in this way, because if we do it like this, if we ignore all not found 404 errors, on the server, we can always pass on unfound routes to the client and let the client handle it, which is what we want to do here.
32. our server has only one route, just the root route : localhost:8080, so it should not even bother with any other routes, so we dont need the #, we can tell it please always send all requests to the client
33. this development server is already configured in that way, the server we want to use for our application has to be configured in such a way, that it always sends back the index.html file, if that is the case, we can get rid of the # tag, by going to the main.js file, to the router, which we configure here, and adding the mode property, and here we want to add history. history basically is the shortcut for the history mode, that is just the name of the mode, where we basically, use just a /, where we dont use the #
34. now if we reload this, we see that now we dont have an # and if we now just enter /users, it stays at /users, but none the less, it loads our users component
35. so now we are using this nicer url mode, to load that
36. summary : how to install the router, how to add it to the application, how to set up routes, how to load these routes by entering them in the url, and how to change the mode to have nicer urls. -- extra -- how to navigate between our routes by using links and how we can pass data around.
