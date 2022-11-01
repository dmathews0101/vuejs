new Vue({
    el: '#app',
    data: {
        clicks: 0
    },
    methods: {
        increment() {
            this.clicks++;
        }
    },
    computed: {
        counter() {
            return this.clicks * 2;
        }
    }
});