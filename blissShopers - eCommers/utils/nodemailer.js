import { mailTransporter } from "../index.js";
const sendMailer = async (userEmail, mailSubject, mailTextContent) => {

   let mailDetails = {
      from: `${process.env.OTP_SENDING_EMAIL}`,
      to: `${userEmail}`,
      subject: mailSubject,
      text: mailTextContent
   };

   try {

      await mailTransporter.sendMail(mailDetails);
      return { success: true, msg: "Email sent." }
   }
   catch (err) {
      console.log(err);

      return { success: false, msg: "Error in sending email. Please try again ", err }
   }

}

export default sendMailer