const userInfo = require('./information.js');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${userInfo.user.firstname} from ${userInfo.user.campus} campus`,
    e : "oO",
    T : "U "
}));