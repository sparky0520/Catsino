import DiamSdk from 'diamante-sdk-js'

// Add data to Diamante blockchain
function addData(sourceKeys, name, value) {
    var server = new DiamSdk.Horizon.Server("https://diamtestnet.diamcircle.io")

    var transaction

    server
        .loadAccount(sourceKeys.publicKey())
        .then(function (sourceAccount) {
            // Start building the transaction
            transaction = new DiamSdk.TransactionBuilder(sourceAccount, {
                fee: DiamSdk.BASE_FEE,
                networkPassphrase: "Diamante Testnet"
            })
                .addOperation(
                    DiamSdk.Operation.manageData({
                        name: name, // Max size: 64byte
                        value: value  // Max size: 64byte
                    })
                )
                .setTimeout(0)
                .build();
            
            // Sign the transaction to prove your identity
            transaction.sign(sourceKeys)
            // Sending it off to Diamante
            return server.submitTransaction(transaction)
        })
        .then(function(result){
            console.log("Success! Results: ",result)
        })
        .catch(function(error){
            console.error("Something went wrong! ",error)
        })
}

export default addData