const BigNumber = require('bignumber.js')
const Ballot = artifacts.require("Ballot");

Ballot.numberFormat = 'BigNumber';

contract("Ballot (Basic)", accounts =>{
  const contractCreator = accounts[0]
  const dummyAccount = accounts[2]

  let contract

  before(async () => {
    contract = await Ballot.deployed()
  })

  it("should have initial supply equals to 10 * 10 ** 18", async () => {
    const initialSupply = await contract.totalSupply.call()
    assert.isTrue(initialSupply.isEqualTo(new BigNumber(10000 * 10 ** 18)))
  })
})
