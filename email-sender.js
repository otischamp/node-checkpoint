var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'test@gmail.com',
        pass: 'testpassword'
    },
})

var mailOptions = {
    from: 'test@gmail.com',
    to: 'test@gmail.com',
    subject: 'sending email via Node.js',
    text: 'that was easy!'

}

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.error(error);
    } else {
        console.log('Email Sent: ' + info.response);
    }
    
})