const wait = require('util').promisify(setTimeout);

(async () => {
    
    await require('./client/app');
    await wait(2000);
    await require('./server/app');
    
})();
