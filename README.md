# React Native Web3.js example

Example on how to run web3js with Expo tool chain. There is not much at the moment beside being able to import `web3` and display accounts available on the links page

# To Know

* It use the pure JavaScript implementation of Web3, see reference in `services/web3/VERSION`.
* Web3 require btoa method to be available globally, I add the implementation in `global.js` and import it at the top of `App.js`.
* `bn.js` and `indexof` are needed too.
