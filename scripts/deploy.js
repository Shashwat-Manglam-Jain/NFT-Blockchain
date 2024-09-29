async function main() {
    const MyNFT = await ethers.getContractFactory("MyNifty");
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy();
    console.log("Contract deployed to address:", myNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  //0x2bbDb415865752faddb9DA19aF218ebEd28b8917