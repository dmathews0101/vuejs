# vuejs_03_html_attributes

1. dynamically binding attributes of elements 
2. adding additional functionality to events
3. in javascript, whenever the input event get fired, or any event gets fired, we get a default event object, passed to the event listener
4. this default event object we get, for example for input  and many other events, the target of this event, - (on which element was this event executed), 
5. for example the target of an input element would be the input element, where we type something in

---

8. we need access to this target to get access to the value of this input element, for that we need access to this default event object
9. in vuejs we can access this data, which is passed through an event, like this default event object we get automatically, by accessing $event between the "" in the v-on directive.
(--here we are passing the default input event, which exists in javascript and in the DOM, we are passing this event as an argument to the v-on directive --)
10. $event is a local variable created by vuejs which gives us access to whichever data our event gives us automatically.
11. this data we get happens to be the event object in this case, but .. we can also create custom events in vuejs
12. in such a case we can pass our own data, and we will still access this own data through the $event variable here.
13. $event really only refers to the data passed by the event to which we are listening, here it happens to be the built in event object
14. and therefore we can access the target of this event 
15. target is a property the default javascript event object has ,
16. and then the value of the target
17. value is a property an input element has in javascript
18. so normal dom property of an input element and we know that the event target is an input element
19. this gives me access to this value
20. now if we type something in the input field, we see it appear down there inside the <p> tag.

---

21. the data property is named cssClass because this will be used to style the paragraph dynamically, to allow us to input the css class which we want to attach this paragraph
22. inside of the css attribute "{{ }}" doesnt work, must not use {{}} when accessing a normal attribute,
23. when accessing something else other than plain text, we instead need to bind this class property or attribute here dynamically, we can do so by passing it as an argument to a directive vuejs knows
(--to pass the class attribute to another directive, v-bind:class, :class , --)
24. here we are telling vuejs that we want to bind some attribute dynamically, on this paragraph item, and the attribute we want to bind dynamically is class
33. this allows us to simply output the name of the property, the value to which we want to bind between the "", which refers to the cssClass property in the vue instance.