    const request = require('request');
    const dotenv = require('dotenv');
    dotenv.config();
    
    const url_line_notification = "https://notify-api.line.me/api/notify";
    
    request({
        method: 'POST',
        uri: url_line_notification,
        header: {
            'Content-Type': 'multipart/form-data',
        },
        auth: {
            bearer: process.env.TOKEN,
        },
        form: {
            message: 'อีก 1 นาทีเครื่องจะทำงานเสร็จครับ'
        },
    }, (err, httpResponse, body) => {
        if (err) {
            console.log(err)
        } else {
            console.log(body)
        }
    });



