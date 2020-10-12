const loaders = require ('./loaders');
const express = require('express');

const startServer = async () => {
    const app = express();
    await loaders.init({ expressApp : app});

    app.listen(process.env.PORT, err =>{
        if (err) {
            console.error(err);
            return;
        }
        console.log('Server Ready');
    });
};

startServer();