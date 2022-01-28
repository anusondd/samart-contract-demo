const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("MyContract",()=> {
    it("shouldd return its name", async ()=>{
        const MyContract = await ethers.getContractFactory("MyContract");
        const myContract = await MyContract.deploy("My Contract");

        await myContract.deployed();
        expect(await myContract.getName()).to.equal("My Contract");
    })

    it("shouldd change its name when requested", async ()=>{
        const MyContract = await ethers.getContractFactory("MyContract");
        const myContract = await MyContract.deploy("MyContract");

        await myContract.changeName("Another Contract");
        expect(await myContract.getName()).to.equal("Another Contract");
    })
})