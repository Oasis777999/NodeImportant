const nodemailder = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailder.createTestAccount();

  //   Created a SMTP server
  let transport = await nodemailder.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "annamae.okeefe@ethereal.email",
      pass: "41W4mWCDYpg5fQAbAh",
    },
  });

  let info = await transport.sendMail({
    from: '"Rushikesh Tekale" <nelson55@ethereal.email>',
    to: "rushikeshtekale918@gmail.com",
    subject: "Hello Rushikesh",
    text: "This is only the text message",
    html: "<h1>Hellow World</h1>",
  });
  console.log("Message sent : %s", info.messageId);

  res.send(info.messageId);
};

module.exports = sendMail;
