const { ethers } = require("hardhat")
async function main() {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy("MyContract");

    console.log("MyContract deployed to:", myContract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })