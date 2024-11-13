import { use } from '@maticnetwork/maticjs';
import { Web3ClientPlugin } from '@maticnetwork/maticjs-ethers';

// Install the ethers plugin
use(Web3ClientPlugin);

document.addEventListener('DOMContentLoaded', function () {
  const data = {
    InviteNow: 'brine@c0e8',
    App: 'https://play.google.com/store/apps/details?id=usdt.mining.cloud.mining.usdtcloudmining.cloudmining.usdtmining&referrer=brine@c0e8',
    Mining: 86400,
    CurrentBalance: 0.000000,
    EarningRate: (0.000005 / 0.000001 / 86400) * 1200,
    IncreaseSpeed: 0.000001,
    IncreaseTime: 1200,
    MiningSpeed: ((0.000005 / 0.000001 / 86400) * 1200) / 0.000001,
    MiningTime: 1200 + 1200,
    RedeemPoint: 'your_matic_address',
    CurrentUSDT: 0.000000,
    Network: 'module'
  };

  function logValues(propertyName) {
    if (data.hasOwnProperty(propertyName)) {
      console.log(`${propertyName}:`, data[propertyName]);
    } else {
      console.warn(`No data found for property: ${propertyName}`);
    }
  }

  const buttonIds = [
    'InviteNow', 'App', 'Mining', 'CurrentBalance', 'EarningRate',
    'IncreaseSpeed', 'IncreaseTime', 'MiningSpeed', 'MiningTime',
    'RedeemPoint', 'CurrentUSDT', 'Network'
  ];

  buttonIds.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => logValues(buttonId));
    } else {
      console.error(`Button with ID "${buttonId}" not found.`);
    }
  });
});
