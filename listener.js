const ip = require('ip')
const open = require('open')


module.exports = (app) => {
    app.listen(3000, () => {
        let localhost = ip.address();
        let url = 'http://' + (localhost || 'localhost') + ':' + '3000';
        console.log('server is running at ', '\033[36;4m' + url + '\033[0m');
        open(url);
    })
}
