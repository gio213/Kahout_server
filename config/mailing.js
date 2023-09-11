import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.gmailmail,
      pass: process.env.gmailpass,
    },
  });
  
  const mailOptions = {
    from: "azizabaccouri@gmail.com",
    to: "azizabaccouri@gmail.com", 
    subject: "new user registered",
    text: "new user registered", 
  };

  export{transporter, mailOptions} ;