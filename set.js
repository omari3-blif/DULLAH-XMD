const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || "DULLAH-MD;;;H4sIAAAAAAAAA61VaW+jSBD9L/0Vz5qjuSxF2ubyfWCDj6xWqwYam5tAg01G+e8r4kQTaXZmstLwCTX0q1dV71V9BXkR1WROOjD6CsoqajEl/SvtSgJGQGvCkFRgAAJMMRgBNH9sRFw8lvbST4aPU0+r9JKUkyU7OSmOpxC/YDBrPyuu/wBeBqBsvDTyfwJ43tncap7V7dxymnxRu9LTkQ5FcUi2l+FwVu+h0u1n7XhmKA/gpUfEURXlZ7O8kIxUOJ2TboOj6nP0O4shLLEuilxUsYcmc7eFEcNHh+NChYRPdnCoCY0ZXln4OfpO/Jw9jS/85QzZmD3Ews2sBZ2sDxJETBwFWjC5Mat1RfZv9OvonJNgGpCcRrT7dN2z9YJD9fOkY0gtNONodV6ipnQvq1WxyqexIBgRHdqoTS30OeLiXOe2mu7z4q4QYzdLz7pv5ldvKE1ldaFOzJDZO8ZqtjbgR+Kb6l0ryf+p+9Iycfj0yB3M5flAistUXu5Z+2oiJKbwEdnNPkiTzdN1YZmfo5+gA93D+HpD4nGJ5GdyreWwTTb6xj2o7mXI4ZyNJSt0Hf8bfUyb6mcsK3vJCWPheluKZZpVi0AeX5rMDINopSWMfRguqH283US+Gcek207l6RES3DnQ3ebTKRG4TL05HuWvG764cYgfX+35xX54zSgh3TQAI+5lACpyjmpaYRoVeX8mKgOAg3ZH/IrQ1+qC8Xo1lokuzI6ncskqSjkUnbXomhKnPk01Pp4GY5URdZnG7AMYgLIqfFLXJJhENS2qbknqGp9JDUZ/vTaqz7kiWUHJLArACPCiKEuswMmsxP5Z/3G9YFrjsvwjJxQMQFgV2ZKAEa0aMgCvF0xJ4SCyOEPhLIuFqmZABWoIGRqvQkPg+wyze1AnykhNcVaCESdDCCVeZIWXwe/hoRi8ZPKcxkOF1xRRUC3Z0BCvaxanGRxSfsED/jYeuoAsiZdVQedMVtGQIrGmDi1TlQ1RMoyf8+DU38XDYiGLZIWXRdHgTc3gJcs0FB7JKuIlpMi/5PH3AOTkRu+27sUocAMQRlVN3bwp0wIH755//4h9v2hyuutyX+9fSAVGH44JpVF+rvvMmhxX/iVqid7nAUYhTmvyMgABaSOf9HggWWYyEf7hdknnVQROoMsJ8blX9KXI77/IauArsiB88fkAf4Ecq35RiOd/CYjACaoEOU9SQV+O+0Tt7/zQ4KvTBKcys1tvyElNLOlir6yM41VmeHo16d2ZpCLBe5U97CdN6RQJyX+CO/QO+64jrXXydG2YlvvJuoC5iUWn+IB7dzwYff22xfQi6PE2luRMTvNH0Herj/OdGkby93rIcf8z8Eh+vUSU4oRUsiz18d6a0SMFhOIorcEI6CtdEjPWjpfHsr2eTlqE0Byhfn68N+99Rt6H0ORINuLMU6noUZFRtyhHRljs22C7bM+by8qeaUL8FKXKBP4XCBgBNSVJ82wvWOZ8tJIcb0nXlAJSwp05bmXladwuW5VlXT0yyeIkNqtEn88nC5YctfFUkp83j5Lb3VRrE9vO9sC7jDJZofNDH+0uoo/BKBzroXKN5OcIZfGe3zhn6SBvpViqC/dEYVIk3qlT56Zf05juhtdH4ZlckvFYrpiV2Uw3zr49cWQbrok6x7ubyuXd+Xqf3q/bI33b2tHbYL1LLozI6xJ868avmvZN/OzL4APE21b9gcC0LSfEzO4w9MhBJmHr2rMrEiTLE1xnAQ3ouLodQKkoQ40BL72ryxTTsKgyMAI4D6oiCsAApLim6Jt/vx8JUFEHIOtQWe4opu+2B6h/ZmwKXv4FFteGxDAKAAA=",
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "whittaker tech- v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "+255760317060-v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Whittaker tech v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME||null
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ||null
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'no',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
