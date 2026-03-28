require('dotenv').config();
module.exports = {
    botName:            'Spiderweb',
    botOwner:           'Spider',
    ownerNumber:        process.env.OWNER_NUMBER || '27688259160',
    prefix:             '.',
    packname:           'Spiderweb',
    author:             '© spider',
    version:            '2.0.0',
    commandMode:        'public',
    storeWriteInterval: 10000,
    warnLimit:          3,
};
