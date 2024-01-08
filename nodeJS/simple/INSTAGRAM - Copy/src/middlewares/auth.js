// const jwt = require('jsonwebtoken');
//  const config = require("../config/config")
// const secretKey = config.jwt.secret_key;

// const token = jwt.sign({ /* payload */ }, secretKey);
// console.log(token);

// // Example of verifying a token
//     const auth = () =>  jwt.verify(token, secretKey, (err, decoded) => {
//       if (err) {
//         console.error('Invalid signature:', err);
//       } else {
//         console.log('Token verified successfully:', decoded);
//       }
//     });
   

// // jwt.verify(token, secretKey, { algorithm: 'HS256' }, (err, decoded) => {

// // });

// // jwt.verify(token, secretKey, (err, decoded) => {
// //   if (err) {
// //     console.error('Token verification failed:', err.message);
// //   } else {
// //     if (decoded.exp && decoded.exp < Date.now() / 1000) {
// //       console.error('Token has expired');
// //     } else {
// //       console.log('Token verified successfully:', decoded);
// //     }
// //   }
// // });

// // jwt.verify(token, secretKey, (err, decoded) => {
// //   if (err) {
// //     console.error('Invalid signature:', err);
// //   } else {
// //     console.log('Token verified successfully:', decoded);
// //   }
// // });

// module.exports = auth;