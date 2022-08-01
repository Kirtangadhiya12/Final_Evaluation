// const sdk = require("sdk");

// exports.transactions = async (req, res) => {
//   await sdk.getTransactions();
//   console.log("Transactions:", transactions);
// };

const { account } = sdk.state;
sdk.notifications$.subscribe(console.log);

await sdk
  .batchExecuteAccountTransaction({
    to: "0x0fd7508903376dab743a02743cadfdc2d92fceb8", // Destination Ethereum address
    value: 100, // This value is in wei
    data: null, // Optional contract data payload
  })
  .catch(console.error);

const estimationResponse = await sdk
  .estimateGatewayBatch()
  .catch(console.error);

console.log("Gas estimated at:", estimationResponse);
