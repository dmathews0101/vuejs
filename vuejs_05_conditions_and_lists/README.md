# vuejs_05_conditions_and_lists

1. Conditionally outputting some content in the template / DOM
2. Contionally add /show a certain html element, some text all the time, but only after some certain condition is met
3. rendering lists to the DOM, redering items in an array to a list in a web page
4. here show property is used as an indicator, if the first paragraph should be visible or not
5. a directive is an instruction VueJS finds in its template, and it will know what to do if it knows this instruction
6. v-if is a directive which ships with vuejs therefore it will know what to do, the name of the directive is if
7. we can add a directive to the first paragraph
8. v- to let vuejs know it's not a normal html attribute, vuejs should take care of it, if is the directive name, ="" is the value, which is condition which should determine whether we want to show something here or not
9. v-if removes item from the DOM depending on the condition.
10. v-show doesnt actually remove it from the DOM, it only changes the display to none.
11. v-for, <li v-for="person in persons">{{ person.name }}</li>
12. v-for, with index, <li v-for="(person, index) in persons">{{ person.name }} - {{ index }}</li>

