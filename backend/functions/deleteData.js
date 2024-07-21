
function deleteData(sourceKeys, name) {
    var transaction;

    server
        .loadAccount(sourceKeys.publicKey())
        .then(function (sourceAccount) {
            // Start building the transaction.
            transaction = new DiamSdk.TransactionBuilder(sourceAccount, {
                fee: DiamSdk.BASE_FEE,
                networkPassphrase: "Diamante Testnet",
            })
                .addOperation(
                    DiamSdk.Operation.manageData({
                        name: name, // The name of the data entry
                        value: "", // Set value to an empty string to delete the data entry
                    })
                )
                .setTimeout(0)
                .build();
            // Sign the transaction to prove you are actually the person sending it.
            transaction.sign(sourceKeys);
            // And finally, send it off to Diamante!
            return server.submitTransaction(transaction);
        })
        .then(function (result) {
            console.log("Success! Results:", result);
        })
        .catch(function (error) {
            console.error("Something went wrong!", error);
        });
}