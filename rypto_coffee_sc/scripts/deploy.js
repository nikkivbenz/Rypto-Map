async function main() {
    const [deployer] = await ethers.getSigners();
  
    const accountBalance = await deployer.provider.getBalance(deployer.address);
  
    console.log("Account balance:", (accountBalance.toString()));
  
    const Token = await ethers.getContractFactory("BEP20Token"); 
    const token = await Token.deploy();
  
    console.log("Token address:", token.address);

    const name = await deployer.provider.name(); 
    console.log("Name of Token: ",name); 
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  