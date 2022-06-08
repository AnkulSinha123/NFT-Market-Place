require("@nomiclabs/hardhat-ethers");
API_URL = ""
PRIVATE_KEY = ""
PUBLIC_KEY = ""
module.exports = {
   solidity: "0.8.4",
   defaultNetwork: "rinkeby",
   networks: {
     hardhat: {},
     rinkeby: {
       url: API_URL,
       accounts: [`${PRIVATE_KEY}`],
     },
   },
 };