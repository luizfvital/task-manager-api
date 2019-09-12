const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'luizfvital@gmail.com',
        subject: 'Welcome to Task Manager App!',
        text: `Welcome to the app, ${name}! Hope you enjoy it.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'luizfvital@gmail.com',
        subject: 'Cancelation',
        text: `Hello ${name}. We are sorry to see you go.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}