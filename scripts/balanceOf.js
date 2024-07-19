const { ethers } = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyCollection.sol/MyCollection.json");
const contractAddress = "CONTRACT_ADDRESS_AMOY";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "<RECIPIENT_ADDRESS>";

async function main() {
    // Get the provider and signer
    const provider = ethers.getDefaultProvider(process.env.AMOY_URL); // Ensure this is the correct network

    // Attach the contract
    const myNFTCollection = new ethers.Contract(contractAddress, tokenABI, provider);

    // Call the balanceOf function
    const balance = await myNFTCollection.balanceOf(walletAddress);
    console.log(`Balance of recipient: ${balance.toString()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
