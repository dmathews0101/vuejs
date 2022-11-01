# vuejs_06_filters

1. transforming the data we output in the template, directly in the template with filters
2. example outputting a smaller case string as a upper case string
3. filters are little helpers we can use in vuejs, we have to create it on our own, there are no built in filters, there is only the capability to build our own filters
4. we build a filter by accessing the global vue object, the one we are instantiating here, we dont have to instantiate it, it also has some static functions
5. there we can access filter, this allows us to set up a global filter, which means, one which is application wide available
Vue.filter();
6. the alternative would be to set up a filters object in the vue instance to create local filters which are only available in this vue instance
filters: {}
7. Vue.filter('uppercase', function(value){})
This method then also takes a second function or argument, which is a function, this function will be executed by vuejs whenever this filter is applied to something
8. this function will automatically receive one input, one argument, and thats the value
9. vuejs will pass this value to this function automatically, and this will be the value on which we apply this filter later on
10. in here, we then have to return the filtered, which means transformed value
11. advantage is since we created here, filter with a name of uppercase, we can go into the template and pick the original title here, and add the filter by adding the pipe symbol and then the name of the filter
12. we can chain this to another filter by adding another pipe then lowercase
13. the advantage of filer is that we can now apply this to any value we want to output 
14. should always use computed properties whenever possible, because they offer us better performance, because vuejs is able to analyse on what this computed property depends and what it therefore needs to recalculate it