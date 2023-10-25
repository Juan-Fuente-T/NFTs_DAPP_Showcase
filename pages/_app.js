import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
//import '../styles/globals.css'
import '../styles/_app.css'
import abi from '../abi.json';
import { createPublicClient, http, createWalletClient } from 'viem';
import { PrivateKeyToAccount, privateKeyToAccount } from 'viem/accounts';
import { mainnet } from 'viem/chains';
import { sepolia } from 'viem/chains';

function MyApp() {
  
//const [_deposit, setDeposit] = useState('0');
//const [balance, setBalance] = useState('0');
//const [blockNumber, setBlockNumber] = useState('0');
//const [estimateFeesPerGas, setEstimateFeesPerGas] = useState('0');
//const [price, setPrice] = useState('0');
const [results, setResults] = useState([]);
const [nombresNFT, setNombresNFT] = useState([]);

const client = createPublicClient({
  chain:sepolia,
  transport: http(),
})

async function fetchData() {
  //let balance = await client.getBalance();
  //let blockNum  = await client.getBlockNumber();
  //let estimateFees_Per_Gas = await client.getGasPrice();
  let results = [];
  let nombresNFT = []

 
  for (let i = 1; i <= 12; i++){
    try{
      const result = await client.readContract({
        address:'0x97bfA6146059EE86283CED687D8e7f8D5e393D58',
        functionName:'tokenURI',
        abi: abi,
        args: [i.toString()]
      });
      if (result) {
        let parsedResult = JSON.parse(result); // Analizar la cadena JSON
        console.log("Nombre:", parsedResult.name);
        console.log("Descripción:", parsedResult.description);
        results.push(parsedResult);
        nombresNFT.push(parsedResult.name); 
      }
  }catch(error){
    console.error(error);
  }
  
  console.log("Nomnbres", nombresNFT)
}
  /*let balance = await client.readContract({
    address:'0x97c6f93ae8C03bFFc6262c9F4914c26F9Ef26f42',
    abi: abi,
    functionName:'balanceOf',
    args: ['0xe67F18c5064f12470Efc943798236edF45CF3Afb']
  });
  try{
    let _deposit = await wallet.writeContract({
    address:'0x97c6f93ae8C03bFFc6262c9F4914c26F9Ef26f42',
    abi: abi,
    functionName:'deposit',
    args: ['0.000001']
  });
}catch (error){
  console.log(error)
}*/

  
  console.log("ResultNombre", results.name);
  console.log("ResultTS", results[0]);
  console.log("ResultTS", results);
  //let transactionCountlet = await client.getTransactionCount();
  console.log("Hola");
  //console.log("Balance", balance);
  //console.log("TransactionCount", transactionCount);
  //console.log("BlockNumber", blockNumber);
  //console.log("Balance", balance);
  //setBlockNumber(blockNum.toString());
  //setEstimateFeesPerGas(estimateFees_Per_Gas.toString());
  //setPrice(result.toString());
  //setBalance(balance.toString());
  //setDeposit(_deposit.toString());
  setResults(results);
  setNombresNFT(nombresNFT);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
  <div className='container'>

    <div className='photos_row'>
      <div className='nft_container'>
        <img className='photo' src="/imagenes/FutureGarden_1.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
        <p>{nombresNFT[0]}</p>
      </div>
     <div>
        <img className='photo' src="/imagenes/FutureGarden_2.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
        <p>{nombresNFT[1]}</p>
      </div>
      <div>
        <img className='photo' src="/imagenes/FutureGarden_3.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
        <p>{nombresNFT[2]}</p>
      </div>
      <div>
        <img className='photo' src="/imagenes/FutureGarden_4.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
        <p>{nombresNFT[3]}</p>
      </div>
    </div> 
    <div className='photos_row'>
      <div className='nft_container'>
        <img className='photo' src="/imagenes/FutureGarden_5.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
        <p>{nombresNFT[4]}</p>
      </div>
     <div>
        <img className='photo' src="/imagenes/FutureGarden_6.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
        <p>{nombresNFT[5]}</p>
      </div>
      <div>
        <img className='photo' src="/imagenes/FutureGarden_7.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
        <p>{nombresNFT[6]}</p>
      </div>
      <div>
        <img className='photo' src="/imagenes/FutureGarden_8.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
        <p>{nombresNFT[7]}</p>
      </div>
    </div> 
    <div className='photos_row'>
      <div className='nft_container'>
        <img className='photo' src="/imagenes/FutureGarden_9.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
        <p>{nombresNFT[8]}</p>
      </div>
     <div>
        <img className='photo' src="/imagenes/FutureGarden_10.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
        <p>{nombresNFT[9]}</p>
      </div>
      <div>
        <img className='photo' src="/imagenes/FutureGarden_11.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
        <p>{nombresNFT[10]}</p>
      </div>
      <div>
        <img className='photo' src="/imagenes/FutureGarden_12.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
        <p>{nombresNFT[11]}</p>
      </div>
    </div> 
    
  </div>
  );
    
}
/*
  async function fetchData() {
    let result = await client.readContract({
      address:'0x97bfA6146059EE86283CED687D8e7f8D5e393D58',
      functionName:'tokenURI',
      abi: abi,
      args: ['1']
    });

    setResult(result);
  }

  useEffect(() => {
    fetchData();
  }, []);
*/ 
export default MyApp
