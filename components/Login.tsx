import React, { useState } from 'react'
import s from '../styles/Login.module.css'
import Web3 from 'web3'

const Login = (props) => {

    async function getAccount() {
        //@ts-ignore
        if (typeof window.ethereum !== 'undefined') {
            //@ts-ignore
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            props.onCloseLogin();

            const web3 = await new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/3d56bc14f64b4952be1ffa12f337d24d"))
            web3.eth.getBalance(account, function(err, result) {
                if (err) {
                    console.log(" Errow with token ")
                } else {
                    props.onChangeCurrETH(web3.utils.fromWei(result, "ether") + " ETH")
                }
            })
        }else{
            throw console.error(" window.ethereum empty ");
        }
    }
    return (
        <div className={s.login}>
            <div className={s.fon} onClick={props.onCloseLogin}></div>
            <div className={s.cnt}>
                <h2>Login on MetaMask</h2>
                <button onClick={getAccount}>Login</button>
            </div>
        </div>
    )
}

export default Login
