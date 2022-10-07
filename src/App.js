import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import Headers from './components/Headers';
import CollectionCard from './components/CollectionCard';
import {useState, useEffect} from 'react';
import axios from 'axios'
import PunkList from './components/PunkList';

function App() {
  const [punkListData, setPunkListData]= useState([]);
  
  const getMyNfts=async()=>{
    const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x5641D5D30d224E61e943864E8b935019DE56D344')
    if(punkListData.length>0){
      setPunkListData(openSeaData.data.assets)
      console.log(openSeaData.data.assets)
    }
  }
  
  useEffect(()=>{
    getMyNfts();
    jhdjbdj;
    iirji;
  },[])

  return (
    <div className='app'>
      <Headers/>
      {
        punkListData.length>0 && (
          <>
          <PunkList punkListData={punkListData} />
          </>
        )}
    </div>
  );
}

export default App;
