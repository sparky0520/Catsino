import DiamSdk from "diamante-sdk-js"

// Issue loyalty tokens
function issueToken(receivingKeys, amount) {
    var server = new DiamSdk.Horizon.Server("https://diamtestnet.diamcircle.io/");

    // Keys for accounts to issue and receive the new asset
    var issuingKeys = DiamSdk.Keypair.fromSecret(
        "SCZANGBA5YHTNYVVV4C3U252E2B6P6F5T3U6MM63WBSBZATAQI3EBTQ4"
    );

    // Create an object to represent the new asset
    var MeowTokens = new DiamSdk.Asset("MeowTokens", issuingKeys.publicKey());

    // First, the receiving account must trust the asset
    server
        .loadAccount(receivingKeys.publicKey())
        .then(function (receiver) {
            var transaction = new DiamSdk.TransactionBuilder(receiver, {
                fee: 100,
                networkPassphrase: DiamSdk.Networks.TESTNET,
            })
                // The `changeTrust` operation creates (or alters) a trustline
                // The `limit` parameter below is optional
                .addOperation(
                    DiamSdk.Operation.changeTrust({
                        asset: MeowTokens,
                    })
                )
                // setTimeout is required for a transaction
                .setTimeout(100)
                .build();
            transaction.sign(receivingKeys);
            return server.submitTransaction(transaction);
        })
        .then(console.log)

        // Second, the issuing account actually sends a payment using the asset
        .then(function () {
            return server.loadAccount(issuingKeys.publicKey());
        })
        .then(function (issuer) {
            var transaction = new DiamSdk.TransactionBuilder(issuer, {
                fee: 100,
                networkPassphrase: DiamSdk.Networks.TESTNET,
            })
                .addOperation(
                    DiamSdk.Operation.payment({
                        destination: receivingKeys.publicKey(),
                        asset: MeowTokens,
                        amount: amount,
                    })
                )
                // setTimeout is required for a transaction
                .setTimeout(100)
                .build();
            transaction.sign(issuingKeys);
            return server.submitTransaction(transaction);
        })
        .then((result) => console.log("MeowTokens: ",result))
        .catch(function (error) {
            console.error("Error!", error);
        });
}

export default issueToken