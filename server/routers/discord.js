const express = require('express');
const client = require('../../client/app');

const router = express.Router();

router.get('/guild/:guildID', (req, res, next) => {

    const guild = client.guilds.get(req.params.guildID);
    if (!guild) {
        return res.status(404).json({
            status: res.statusCode,
            error: 'This guild does not exist or is inaccessible!'
        });
    }

    res.json({
        status: res.statusCode,
        guildName: guild.name,
        memberCount: guild.memberCount
    });
});

module.exports = router;