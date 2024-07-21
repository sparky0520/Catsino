import DiamSdk from 'diamante-sdk-js'

// Accept both keys of source and publicKey() of destination
function makePayment(sourceKeys, destinationId, amount) {
    var server = new DiamSdk.Horizon.Server("https://diamtestnet.diamcircle.io")

    var transaction;

    server
        .loadAccount(destinationId)

        // Checking if error (if any) occured due to non-existent destination
        .catch(err => {
            if (err instanceof DiamSdk.NotFoundError) {
                throw new Error("The destination account doesn't exist!")
            } else {
                return err
            }
        })

        // If there was no error, load up-to-date information on your account
        .then(() => {
            return server.loadAccount(sourceKeys.publicKey())
        })
        // sourceAccount recieved from above .then block
        .then((sourceAccount) => {
            // Start building transaction
            transaction = new DiamSdk.TransactionBuilder(sourceAccount, {
                fee: DiamSdk.BASE_FEE,
                networkPassphrase: DiamSdk.Networks.TESTNET,
            })

                .addOperation(
                    DiamSdk.Operation.payment({
                        destination: destinationId,
                        // Diamante accepts payments in many currency
                        // native() stands represents Lumens.
                        asset: DiamSdk.Asset.native(),
                        amount: amount,
                    })
                )
                .setTimeout(180)
                .build()
            // Sign the transaction to prove that you own source account
            transaction.sign(sourceKeys)

            return server.submitTransaction(transaction)
        })

        .then((result) => {
            return result
        })
        .catch(err => {
            console.error("Something went wrong!",err)
        })
}

export default makePayment