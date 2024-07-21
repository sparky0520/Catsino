import DiamSdk from 'diamante-sdk-js'
import fs from 'fs'

// Returns a stream constantly running and looking for payments
// made or recieved
function paymentHistory(accountId) {
    var server = new DiamSdk.Horizon.Server("https://diamtestnet.diamcircle.io")

    // Create an API call to query payments
    var payments = server.payments().forAccount(accountId)

    // If some payments have already been handled, start results from the 
    // latest unhandled/unseen payment
    var lastToken = loadLastPagingToken()
    if (lastToken) {
        payments.cursor(lastToken)
    }

    // `stream` will send each recorded payment, one by one, then keep the
    // connection open and continue to send you new payments as they occur.
    payments.stream({
        onmessage: function (payment) {
            // Record paging token so we can start from here next time
            savePagingToken(payment.paging_token)

            // Only handling payments recieved my us
            if (payment.to !== accountId) {
                return
            }

            // Handling lumens and other currencies and printing them
            var asset
            if (payment.asset_type === "native") {
                asset = "diam"
            } else {
                asset = payment.asset_code + ':' + payment.asset_issuer
            }

            console.log(payment.amount + " " + asset + " from " + payment.from)
        },

        onerror: function (error) {
            console.error("Error in payment stream ", error)
        },
    })

    function savePagingToken(token) {
        // post to local database
        // Write token in 'Output.txt' .
        fs.writeFile('Output.txt', token, (err) => {
            if (err) throw err;
        })
    }

    function loadLastPagingToken() {
        // get to local database or file
        fs.readFile('Input.txt', (err, data) => {
            if (err) throw err;
            else return data
        });
    }
}

export default paymentHistory