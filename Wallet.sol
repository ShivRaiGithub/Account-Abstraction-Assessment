//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract Wallet {
    constructor() payable {}

    mapping(address => uint256) key;
    mapping(address => uint256) balances;
    mapping(address => string) recovery;

    modifier onlyPositive(uint256 _amount) {
        require(_amount > 0, "Must send positive value");
        _;
    }

    modifier enoughFunds(uint256 _amount) {
        require(balances[msg.sender] >= _amount, "Not enough funds");
        _;
    }

    modifier newUser() {
        require(key[msg.sender] == 0, "You already have an account");
        _;
    }

    modifier validKey(uint256 _key) {
        require(_key / 100000 > 0, "Enter a 6 digit key");
        _;
    }

    modifier correctKey(uint256 _key) {
        require(key[msg.sender] == _key, "Enter the correct key");
        _;
    }

    modifier correctPhrase(string memory _phrase) {
        require(keccak256(bytes(recovery[msg.sender])) == keccak256(bytes(_phrase)), "Incorrect Recovery Phrase");
        _;
    }

    modifier sameKey(uint256 _key, uint256 _keyAgain) {
        require(_key == _keyAgain, "Unequal keys");
        _;
    }

    function createWallet(uint256 _key, string memory _phrase) public newUser validKey(_key) {
        key[msg.sender] = _key;
        recovery[msg.sender] = _phrase;
    }

    function deposit(uint256 _amount, uint256 _key) public payable onlyPositive(_amount) correctKey(_key) {
        balances[msg.sender] += _amount;
    }

    function transfer(address payable _to, uint256 _amount, uint256 _key)
        public
        enoughFunds(_amount)
        correctKey(_key)
    {
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }

    function getBalance(uint256 _key) public view correctKey(_key) returns (uint256) {
        return balances[msg.sender];
    }

    function changeKey(string memory _phrase, uint256 _key, uint256 _keyAgain)
        public
        correctPhrase(_phrase)
        sameKey(_key, _keyAgain)
    {
        delete key[msg.sender];
        key[msg.sender] = _key;
    }
}
