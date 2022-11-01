# vuejs_07_components

1. components are a key concept that we can use in vuejs which allows us to build our application, widget, etc from a couple or from a pool of reusable pieces of components
2. we can build these components on our own and each component holds a template and the business logic belonging to the template and to the component there
3. here the 3 parts are outputed after the v-for iterates through the users, and each part is like a contained piece in the application, it has it's own template, the div, and its own logic / data here
4. in the vue instance, we could populate lot of methods and data fields with data and methods only related to this part of the template, this div here
5. it is better to outsource this into its own piece piece of code, we can do that with vue js, we can create a new component for that
6. we can create a new component for that, we do this by accessing the global vue object, then accessing component. Vue.component(); . This will create a global component, which means we can use it at any vue instance application wide. 
7. First argument is the selector, which is the custom HTML tag, and we would usually prefix this with a unique prefix to make sure we are not overriding some existing html element or something like that. 
8. here we are prefixing it with app-,  
9. then the second argument is an object, vue component basically just extends our vue instance, so this means this object has the same fields as our vue instance, with one major difference
10. the data property here is no longer an object, is now a function. It is a function which now returns an object. And this object again will now hold our data. So we now have this extra step of having a function here, and 
11. we need this because of the fact of it extending our vue instance, and maybe having multiple components, or at least using this component multiple times, they would all share this same object, 
12. and therefore we need to make sure, that this is an instance, where we make sure that the object which holds our data, which should belong to a single component, is not shared across all components, which use this selector here
13. therefore, here we could then simply copy our users, the user property here, and insert (it components data function) it in the object
14. so now the users object is now in the newly created component, which is like a vue instance, with this extra data thing here, to make sure we are not sharing data across the same components
15. this now allows us to do is to get rid of the div with the class of user and v-for, but before that,
16. for us to be able to get rid of that, we need to set up a template. we can add a template by adding the template property, 
17. that would have also been available for the other vue instance here, but there we didn't need it because we automatically fetch our template here with the el property, 
18. fetch the element from the DOM, and use that as an element, but we could have overwritten it with the template 
19. here, for the component, we definetely do have to override it because we dont have any other template, we are not fetching anything, and we cant
20. so here, we can simply place our template which is a string, which contains the html div element with class user with the v-for attribute. we have to make sure to put it in one line here because the string doesnt supply or support multi line code. 
21. we could use, if we were using an environment where we can work with es6 code, we could use template literals with the back tiks, to support multi line strings 
22. but here we are using single quote to create an inline string.
23. there is a restriction for the template. in the template of any component we must only have one root element 
24. now here we have a working component where we outsource this user related code
25. another great thing about components is that we can simply reuse them
26. here the only restriction is the ugly inline string template, vue components and their templates 
27. summary - seting up components, working with components, and their main advantages - containing our code in a single reusable piece or part that we can then use whereever we need it, and we dont have to crowd our main vue instance with all that logic. 
28. Important Annotation : We can also set up components locally, by adding the components property to the vue instance, then having the selector as the property name, and then as a value here the object, which we pass here as an argument, to our vue component method. 
29. Thats the alternative, if we know that we want to use that component, only locally in that vue instance here, then we could set it up locally, otherwise we can do it globally like here to make sure, we can use it in any instance or in any component we have in our application