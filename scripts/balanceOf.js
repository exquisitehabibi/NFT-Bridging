const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const MyNFTCollection = await ethers.getContractFactory("MyCollection");
    const myNFTCollection = await MyNFTCollection.attach("CONTRACT_ADDRESS_AMOY"); //Address of Contract on Amoy testnet

    const balance = await myNFTCollection.balanceOf("<RECIPIENT_ADDRESS>"); //Address of recipient on Amoy Testnet
    console.log(`Balance of recipient: ${balance.toString()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
