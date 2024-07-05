const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const MyNFTCollection = await ethers.getContractFactory("MyCollection");
    const myNFTCollection = await MyNFTCollection.attach(process.env.CONTRACT_ADDR);

    const balance = await myNFTCollection.balanceOf("0xc365eDFC968cCb5eb19704337e6e7E3724fd1ddd");
    console.log(`Balance of recipient: ${balance.toString()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
