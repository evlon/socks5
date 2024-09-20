const socks5 = require('node-socks5-server');

let cfguser = process.env.SOCKS5_USER || "user"
let cfgpwd = process.env.SOCKS5_PWD || "a9aad5f30b5f291034f6709fb995e999"
let authUsers = {};

authUsers[cfguser] = cfgpwd;


const userPassAuthFn = (user, password) => {

    if (authUsers[user] === password) 
        return true;

    console.log(`Authentication failed for user ${user}`);
    return false;
};

const server = socks5.createServer({
    userPassAuthFn,
});
server.listen(8080);