const BigNumber = require('bignumber.js');
var Ballot = artifacts.require("Ballot");

module.exports = async function(deployer, networkId, accounts) {

  const proposalNames = ['A', 'B'];
  await deployer.deploy(Ballot, proposalNames);
  const BallotDeployment = await Ballot.deployed();

  const amount = web3.utils.toBN(new BigNumber(10000 * 10 ** 18));
  await BallotDeployment.mint(accounts[0], amount);
}
