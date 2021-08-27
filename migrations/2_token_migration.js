const BSWToken = artifacts.require("BSWToken");
const MasterChef = artifacts.require("MasterChef");

const devaddr = "0x5ea2c9Df156A7422D9C16387991D1960F19F563D"
const refaddr = "0x2dFbdeD5f59F9f8DBB30d22D44206FC085fE692e"
const safuaddr = "0x0c49b5CAD0b1EABa9c90126Adae4EdDDd4f57ce9"

module.exports = async function(deployer) {
	//deploy Token
	await deployer.deploy(BSWToken)

	//assign token into variable to get it's address
	const token = await BSWToken.deployed()
	
  //pass token address for masterchef contract(for future minting)
  // console.log('token-----------',token)
	await deployer.deploy(MasterChef, 
		token.address,
		devaddr,
		refaddr,
		safuaddr,
		10,
		10,
		2,
		2,
		2,
		2
		)

	//assign dBank contract into variable to get it's address
	const master_chef = await MasterChef.deployed()

	//change token's owner/minter from deployer to masterchef
	await token.addMinter(master_chef.address)
};