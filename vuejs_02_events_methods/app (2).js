import { randomDog } from './apis.js'

let url = 'https://api.thedogapi.com/v1/images/search';

randomDog(url).then(function(result){
    console.log(result);
}).catch(function(err){
    console.log('Error is : ' + err);
})