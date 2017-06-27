import Web3 from 'web3';

//TODO implement contract logic
class Reports {

    constructor() {
        var reportsContractAddress = "0x589656d72F19105c33dAA5a0C8Dd7Ed46605e49e";
        var etherBase = "0xB7D78677d886B35aF215CA6a6B54782c1B9d7b88";
        var abiArray = [ { "constant": false, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "setOwner", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "creator", "type": "address" }, { "name": "createTime", "type": "uint256" } ], "name": "createReport", "outputs": [ { "name": "", "type": "bool" } ], "payable": true, "type": "function" }, { "constant": true, "inputs": [], "name": "hammer", "outputs": [ { "name": "", "type": "address", "value": "0xb7d78677d886b35af215ca6a6b54782c1b9d7b88" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "employees", "outputs": [ { "name": "", "type": "address", "value": "0x93b95b24f56a2f951a697a647971ec43064f9f8b" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getEmployees", "outputs": [ { "name": "", "type": "address[]", "value": [ "0x93b95b24f56a2f951a697a647971ec43064f9f8b", "0xd4f52aa7c26b0169f942939d7ee6d72e2e16a4a1" ] } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "destroy", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0xb7d78677d886b35af215ca6a6b54782c1b9d7b88" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "goodPoints", "outputs": [ { "name": "", "type": "address", "value": "0x2952be73bfe45a9576fcfbde768c9f0bbc779912" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "time", "type": "uint256" } ], "name": "midnight", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_hammer", "type": "address" } ], "name": "setHammer", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getDayReports", "outputs": [ { "name": "", "type": "address[]", "value": [] } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "badPoints", "outputs": [ { "name": "", "type": "address", "value": "0x82efa94250ab65d0fc9d8bfa32a691e6c0ee82bf" } ], "payable": false, "type": "function" }, { "inputs": [ { "name": "_oracle", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;oracle", "template": "elements_input_address", "value": "0xb7d78677d886b35af215ca6a6b54782c1b9d7b88" }, { "name": "_employees", "type": "address[]", "index": 1, "typeShort": "address", "bits": "[]", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;employees", "template": "elements_input_json", "value": [ "0x93b95b24f56a2f951a697a647971ec43064f9f8b", "0xd4f52aa7c26b0169f942939d7ee6d72e2e16a4a1" ] }, { "name": "workDaysLeft", "type": "uint256", "index": 2, "typeShort": "uint", "bits": "256", "displayName": "work Days Left", "template": "elements_input_uint", "value": "10" } ], "payable": true, "type": "constructor" }, { "payable": true, "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "creator", "type": "address" }, { "indexed": false, "name": "time", "type": "uint256" } ], "name": "ReportCreatedOk", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "creator", "type": "address" }, { "indexed": false, "name": "time", "type": "uint256" } ], "name": "ReportCreateError", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "addresses", "type": "address[]" }, { "indexed": false, "name": "goodBalances", "type": "uint256[]" }, { "indexed": false, "name": "badBalances", "type": "uint256[]" } ], "name": "MonthReport", "type": "event" } ];

        var web3 = new Web3();
        web3.setProvider(new web3.providers.HttpProvider());
        web3.eth.defaultAccount = etherBase;
        var number = web3.eth.getTransactionCount(etherBase);
        var contract = web3.eth.contract(abiArray).at(reportsContractAddress);
        // var employeeAddress = web3.personal.newAccount("qwerty123");
        web3.personal.unlockAccount(etherBase, "qwerty123");

        // var hire = contract.hire("0x07685df3b23078e5469A9de740cC14b50F68Db29", 100);
        var createReport = contract.createReport("0xd4f52aa7c26b0169f942939d7ee6d72e2e16a4a1", 1498545234,
            {data: reportsContractAddress, gas: 2000000, from: etherBase});
        //
        // var emp = contract.getEmployees.call();
        var reportCreatedOk = contract.ReportCreatedOk();
        reportCreatedOk.watch(function (error, response) {
            if (error) {
                console.log(error);
            } else {
                alert(response.blockNumber);
                console.log('ReportCreatedOk: ' + response.blockNumber);
            }
        });
        // var goodPoints = contract.goodPoint(); //token address
        // var createReport = contract.createReport("0x07685df3b23078e5469A9de740cC14b50F68Db29", 1498484772);
        // var midnight = contract.midnight();
    }
}
export default Reports;