# vuejs_01_starter

Library for creating reactive components
Used in modern web interfaces
Can control parts of the DOM using vuejs to dynamically output data
Can listen and react to user events
Brings mobile app feeling to desktop apps
Replaces some functionality of jQuery

---

Vuejs gives us access to the DOM
Makes outputting data to DOM easy
Great at controlling DOM
Can build single page applications

---

# To use vuejs
create a vue instance 
instantiate vue object
pass an object to vue instance to configure it and use it
in this object there are lot of different properties and methods we can use 

# Properties

# el (string)
used to tell vue js which element in the HTML DOM we want to control through vuejs
That element becomes the template of this vue instance, then this template is then rendered to the DOM by vuejs

# data (object)
used to store all the data we want to work with in this vue instance

# {{ }}
can interpolate data in between {{}}, output data

# summary
dynamically output title in data through string interpolation with {{ }}, in the div with id app
vuejs works by taking control of a part of the DOM, work with the data, listen to events