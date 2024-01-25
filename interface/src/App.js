import logo from './logo.svg';
import './App.css';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Faucet from './pages/Faucet';
import Home from './pages/Home';
import Liquidity from './pages/Liquidity';
import Trade from './pages/Trade';

export const arkham = {
  id: 9_193_196,
  name: 'Arkham',
  network: 'Arkham',
  iconUrl: 'https://raw.githubusercontent.com/dymensionxyz/rollapp-registry/main/devnet/arkham_9193196-1/logos/arkham_9193196-1.jpeg',
  nativeCurrency: {
    decimals: 18,
    name: 'ARK',
    symbol: 'ARK',
  },
  rpcUrls: {
    public: { http: ['https://froopyland.dymension.xyz/13/arkham_9193196-1/evmrpc'] },
    default: { http: ['https://froopyland.dymension.xyz/13/arkham_9193196-1/evmrpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: '' },
    default: { name: 'SnowTrace', url: '' },
  },
} 

export const umbros = {
  id: 1_188_624,
  name: 'Umbros',
  network: 'Umbros',
  iconUrl: 'https://raw.githubusercontent.com/dymensionxyz/rollapp-registry/main/devnet/umbros_1188624-1/logos/umbros_1188624-1.svg',
  nativeCurrency: {
    decimals: 18,
    name: 'UMB',
    symbol: 'UMB',
  },
  rpcUrls: {
    public: { http: ['https://froopyland.dymension.xyz/14/umbros_1188624-1/evmrpc'] },
    default: { http: ['https://froopyland.dymension.xyz/14/umbros_1188624-1/evmrpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: '' },
    default: { name: 'SnowTrace', url: '' },
  },
} 

const { chains, publicClient } = configureChains(
  [arkham, umbros],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Fluidity',
  projectId: '6160c615f05244c0838315aec9610295',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="bg-[#1d2839] w-screen h-screen">
          <Router>
            <Navbar/>  
            <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/faucet' exact element={<Faucet/>}/>
              <Route path='/liquidity' exact element={<Liquidity/>}/>
              <Route path='/trade' exact element={<Trade/>}/>
            </Routes>
          </Router>
        </div>  
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
