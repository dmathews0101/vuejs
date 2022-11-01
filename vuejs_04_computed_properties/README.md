# vuejs_04_computed_properties

1. Computed property is used when we have one property which depends on another one
2. here counter depends on the clicks property
3. therefore we can add a computed property,.. computed property is a method, we write is like a method, but output it like a property in the template
4. VueJS simple takes the value this method returns and take it as a value for this counter property, which is created behind the scene by VueJS
5. we have to return something in a computed property
6. in the increment method, only click is updated, but since we have defined couter as a computed property, vuejs knows that counter depends on clicks and vuejs reruns the counter method in computed property to ensure that it's value is updated in the right place at the right time.