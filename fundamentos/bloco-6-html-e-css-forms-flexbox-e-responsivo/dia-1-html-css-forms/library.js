let moment = require("moment");

let brasilTetra = moment('24031985', 'DDMMYYYY');
let fromNow = brasilTetra.fromNow(); 
console.log('Sua idade atual é: ' + fromNow);
