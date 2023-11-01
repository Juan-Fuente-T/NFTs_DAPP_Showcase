import { useState, useEffect } from 'react';
import '../styles/_app.css'
import abi from '../abi.json';
import { createPublicClient, http, createWalletClient } from 'viem';
//import { PrivateKeyToAccount, privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';

function MyApp() {
  
/*const [balance, setBalance] = useState('0');
const [blockNumber, setBlockNumber] = useState('0');*/

// Declaración de estados utilizando el hook useState para gestionar la información.  
const [results, setResults] = useState([]); // Se almacenan los resultados obtenidos.
const [nombresNFT, setNombresNFT] = useState([]); // Se almacenan los nombres de los NFT.
const [description, setDescription] = useState([]); // Se almacena la descripción de la colección.

// Creación de un cliente para interactuar con la blockchain usando el estándar Viem.
const client = createPublicClient({
  chain:sepolia,// Configuración de la cadena de bloques.
  transport: http(), // Configuración del método de transporte para la comunicación con la blockchain.
})
// Función asincrónica para obtener datos de la blockchain.
async function fetchData() {
  //let balance = await client.getBalance();
  //let blockNum  = await client.getBlockNumber();
  let results = []; // Se declara un array vacío donde se guardarán los resultados obtenidos.
  let nombresNFT = []; // Se declara un array vacío donde se guardarán los nombres de los NFT.
  let description; // Se declara una variable donde se guardarán la descripción de la coleccióne, vacía por defecto.

  // Bucle para obtener información de varios NFTs (del 1 al 12).
  for (let i = 1; i <= 12; i++){ //Bucle para obtener las URI de los 12 NFT
    try{
      const result = await client.readContract({ //Se establece un client para leer datos en el contrato que se de indica
        address:'0x97bfA6146059EE86283CED687D8e7f8D5e393D58',
        functionName:'tokenURI',
        abi: abi,
        args: [i.toString()]
      });
      if (result) {
        let parsedResult = JSON.parse(result); // Se analiza la cadena JSON devuelta 
        //console.log("Nombre:", parsedResult.name); log de depuracion
        description = parsedResult.description; //Se guarda la descripcion de la coleccion de NFT recibidos 
        results.push(parsedResult); //Se guardan los resultados recibidos en el array
        nombresNFT.push(parsedResult.name); //Se guardan los nombres de los NFT en el array
      }
  }catch(error){
    console.error(error);
  }
  //Se ordenan los nombres de los NFTs por orden numerico.
  nombresNFT.sort((a, b) => {
    const aNumber = parseInt(a.match(/\d+$/)[0]); //se extraen los carateres numericos a un elemento a
    const bNumber = parseInt(b.match(/\d+$/)[0]); //se extraen los carateres numericos a un elemento b
    return aNumber - bNumber; //se restan entre si para obtener su orden desde los mayores negativos a los mayores positivos
  });
}
  /*let balance = await client.readContract({
    address:'0x97c6f93ae8C03bFFc6262c9F4914c26F9Ef26f42',
    abi: abi,
    functionName:'balanceOf',
    args: ['0xe67F18c5064f12470Efc943798236edF45CF3Afb']
  });
 */
  /*console.log("ResultNombre", results.name);
  console.log("ResultTS0", results[0]);
  console.log("ResultTS", results);
  console.log("ResultTSDESCRIP", results.description);*/
  //console.log("Balance", balance);
  //console.log("BlockNumber", blockNumber);
  //console.log("Balance", balance);
  //setBlockNumber(blockNum.toString());
  //setBalance(balance.toString());
  
  // Establecer los estados con los datos obtenidos.
  setResults(results);
  setNombresNFT(nombresNFT);
  setDescription(description);
  }
  // Effect que se ejecuta al cargar el componente para obtener los datos de la blockchain.
  useEffect(() => {
    fetchData();//Se ejecuta la funcion para obtener los datos de la blockchain
  }, []);

  //Se muestran los NFT dentro de una estrctura HTML
  return (
  <div className='global_container'>
    <div>
      <h1>Colección de NFT FutureGarden</h1>
      <h2>{description}</h2>    
    </div>
    <div className='container'>

      <div className='photos_row'>
        <div className='nft_container'>
          <img className='photo' src="/imagenes/FutureGarden_1.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
          <p>{nombresNFT[0]}</p>
        </div>
      <div className='nft_container'>
          <img className='photo' src="/imagenes/FutureGarden_2.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
          <p>{nombresNFT[1]}</p>
        </div>
        <div className='nft_container'>
          <img className='photo' src="/imagenes/FutureGarden_3.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
          <p>{nombresNFT[2]}</p>
        </div>
        <div className='nft_container'>
          <img className='photo' src="/imagenes/FutureGarden_4.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
          <p>{nombresNFT[3]}</p>
        </div>
      </div> 
      <div className='photos_row'>
        <div className='nft_container'>
          <img className='photo' src="/imagenes/FutureGarden_5.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
          <p>{nombresNFT[4]}</p>
        </div>
      <div className='nft_container'>
          <img className='photo' src="/imagenes/FutureGarden_6.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
          <p>{nombresNFT[5]}</p>
        </div>
        <div className='nft_container'>
          <img className='photo' src="/imagenes/FutureGarden_7.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
          <p>{nombresNFT[6]}</p>
        </div>
        <div className='nft_container'>
          <img className='photo' src="/imagenes/FutureGarden_8.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
          <p>{nombresNFT[7]}</p>
        </div>
      </div> 
      <div className='photos_row'>
        <div className='nft_container'>
          <img className='photo' src="/imagenes/FutureGarden_9.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
          <p>{nombresNFT[8]}</p>
        </div>
      <div className='nft_container'>
          <img className='photo' src="/imagenes/FutureGarden_10.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
          <p>{nombresNFT[9]}</p>
        </div>
        <div className='nft_container'>
          <img className='photo' src="/imagenes/FutureGarden_11.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
          <p>{nombresNFT[10]}</p>
        </div>
        <div className='nft_container'>
          <img className='photo' src="/imagenes/FutureGarden_12.jpg" alt="Fotografía de un NFT de naturaleza tratada digitalmente"/>
          <p>{nombresNFT[11]}</p>
        </div>
      </div> 
    </div>
  </div>
  );
    
}
export default MyApp
