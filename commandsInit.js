const barnaje = await Barnaje.deployed();
const accounts = await web3.eth.getAccounts();
const dao = accounts[1];
let account = accounts[0];
const users = async (user) => console.log(await barnaje.getUser(user));
const trees = async (user) => console.log(await barnaje.getTree(user));
const users_genesis = [{me:accounts[1], balance: 67350, sponsor: '0x0000000000000000000000000000000000000000'},{me:accounts[0], balance: 67350, sponsor: accounts[1]},{me:accounts[2], balance: 67350, sponsor: accounts[0]},{me:accounts[3], balance: 1850, sponsor: accounts[2]},{me:accounts[4], balance: 67350, sponsor: accounts[0]},{me:accounts[5], balance: 21350, sponsor: accounts[3]},{me:accounts[6], balance: 67350, sponsor: accounts[0]},{me:accounts[7], balance: 13850, sponsor: accounts[0]},{me:accounts[8], balance: 13850, sponsor: accounts[0]},{me:accounts[9], balance: 6050, sponsor: accounts[4]}];
await barnaje.initialize({from: dao});
await barnaje.completeGenesis({from: dao});
let user = users_genesis[0];
await barnaje.completeUser(user.me, user.balance, user.sponsor,{ from: dao, gas: 5000000 });