const address = require('address')
const opn = require('opn')


module.exports = (app) => {
    app.listen(3000, () => {
        let localhost = address.ip();
        let url = 'http://' + (localhost || 'localhost') + ':' + '3000';
        console.log('server is running at ', '\033[36;4m' + url + '\033[0m');
        opn(url);
    })
}
