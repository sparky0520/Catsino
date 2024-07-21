import DiamSdk from 'diamante-sdk-js'
import createChildAccount from './createChildAccount.js'
import getAccountDetails from './getAccountDetails.js'
import makePayment from './makePayment.js'
import paymentHistory from './paymentHistory.js'

const pair = DiamSdk.Keypair.random()

console.log("Public Key: ", pair.publicKey())
console.log("Private Key: ", pair.secret())

console.log("\n\n\n---------------Funding Parent Account with Friendly Bot with 10,000 Diams------------")
console.log("---------------Creating Child Account with Parent Account with 5 Diams------------\n\n")
const child1 = await createChildAccount(pair)   // returns child1 keypairs

// console.log("\n\n\n---------------Getting Account Details------------\n\n")
// const account = await getAccountDetails(childAccount)

// if (account) {
//     console.log("\n\n\n\n\n\nFull Account Details:", account)
// }

// Making another child account
const child2 = await createChildAccount(pair)

// Initialising stream to check for payments to child2
paymentHistory(child2.publicKey())

// Making transaction from child1 to child2 (1 Diam)
makePayment(child1,child2.publicKey(),'2')