const ip = require('ip')
const open = require('open')


module.exports = (app, port) => {

    app.listen(port, () => {
        let localhost = ip.address();
        let url = 'http://' + (localhost || 'localhost') + ':' + `${port}`;
        console.log('server is running at ', '\033[36;4m' + url + '\033[0m');
        // open(url);
    })
}
