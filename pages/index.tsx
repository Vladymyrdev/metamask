import React, { useState } from 'react'
import s from '../styles/Home.module.css'
import Login from '../components/Login.tsx'


export default function Home() {
  const [openLogin, setOpenLogin] = useState(false);
  const [currentEth, setCurrentEth] = useState<string | null>(null);

  const closeLoginHandler = () => setOpenLogin(false);
  const openLoginHandler = () => setOpenLogin(true);

  const changeCurrETHHandle = (value: null | string) => setCurrentEth(value)

  return (
    <div className={s.container}>
      <div className={s.buttonPin}>
        <button onClick={openLoginHandler} className="text-2xl border-4 border-blue-800 rounded p-5 font-bold">
          Connect to Metamask
        </button>
        {
          currentEth && <p>{currentEth}</p>
        }
      </div>
      {
        openLogin && <Login onChangeCurrETH={changeCurrETHHandle} onCloseLogin={closeLoginHandler} />
      }
    </div>
  )
}
