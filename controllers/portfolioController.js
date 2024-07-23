// const nodemailer=require('nodemailer');
// const mailgunTransport = require('nodemailer-mailgun-transport');



// const transporter = nodemailer.createTransport(
//     mailgunTransport({
//       auth: {
//         api_key: process.env.API_MAILGUN,
//         domain: 'sandboxe4ff044e11bb4fd29b035dffebe35719.mailgun.org'  
//       }
//     })
//   );
  

// const sendEmailController = (req,res)=>{
   
//     try{
//         const {name,email,msg}=req.body

//         if(!name || !email || !msg){
//             return res.status(500).send({
//                 success:false,
//                 message:'Please Provide All Fields'
//             })
//         }

//         transporter.sendMail({
//             to:'muqadasqaimkhani@gmail.com',
//             from:'muqadasqaimkhani@gmail.com',
//             subject:'Regarding Mern Portfolio App',
//             html:`
//              <h5>Details</h5>
//              <ul>
//                <li><p>Name:${name}</p></li>
//                <li><p>Email:${email}</p></li>
//                <li><p>Message:${msg}</p></li>
//              </ul>
//             `
//         })

//         return res.status(200).send({
//             success:true,
//             message:'Your message send successfully',
            

//         })

//     }catch(error){
//         console.log(error)
//             return res.status(500).send({
//                 success:false,
//                 message:'Send Email API Error',
//                 error

//             })
//     }

// }

// module.exports= {sendEmailController};

