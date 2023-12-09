import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NavLink as Link } from 'react-router-dom';
import testtube from '../testtube.png';

function Navbar () {
    return (
        <div>
            <div className="flex items-center justify-between bg-[#121D28] w-full h-16 px-4">
                <Link to='/' className='flex items-center space-x-1'>
                    <img src={testtube} className='w-14 h-12'/>
                    <div className="text-white text-lg font-semibold">Fluidity</div>
                </Link>
                <div className='flex items-center bg-[#192531] text-[#C7F284] font-semibold text-md h-full px-8'>Automated Market Maker For NFTs</div>
                <div className="">
                    <ConnectButton chainStatus="icon" showBalance={false}/>
                </div>
            </div>
            <div className='flex items-center justify-center bg-[#192531] w-full h-20 border-b border-white/5 space-x-44 font-semibold text-lg text-[#C7F284]'>
                <Link to='/trade'className='flex items-center hover:border-b-[#C7F284] hover:border-b-2 h-full space-x-4 px-4'>
                    <div class="p-3 bg-cyan-50 bg-opacity-5 rounded-lg justify-center items-center gap-2.5 flex">
                    <div class="w-4 h-4 relative"><div class="group-hover:text-v2-primary fill-current"><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.17246 11.0054L7.49986 13.3336H1.66626V7.50005L3.99446 9.82744L11.6663 2.15485L12.8452 3.33375L5.17246 11.0054ZM18.3335 6.66645V12.5L16.0053 10.1726L8.33346 17.8452L7.15456 16.6663L14.8272 8.99455L12.4998 6.66635L18.3335 6.66645Z" fill="currentColor"></path></svg></div></div></div>
                    <div>Swap</div>
                </Link>
                <Link to='/liquidity' className='flex items-center hover:border-b-[#C7F284] hover:border-b-2 h-full space-x-4 px-4'>
                    <div class="p-3 bg-cyan-50 bg-opacity-5 rounded-lg justify-center items-center gap-2.5 flex"><div class="w-4 h-4 relative"><div class="group-hover:text-v2-primary fill-current text-v2-lily/[.75]"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.99998 12.3333H9.99998M4.39998 1.33325H11.6C11.9733 1.33325 12.16 1.33325 12.3026 1.40591C12.4281 1.46983 12.5301 1.57182 12.594 1.69726C12.6666 1.83987 12.6666 2.02655 12.6666 2.39992V3.78293C12.6666 4.10905 12.6666 4.27211 12.6298 4.42556C12.5971 4.56161 12.5433 4.69167 12.4702 4.81097C12.3877 4.94552 12.2724 5.06082 12.0418 5.29142L10.0876 7.24567C9.82355 7.50968 9.69154 7.64169 9.64208 7.79391C9.59858 7.9278 9.59858 8.07203 9.64208 8.20593C9.69154 8.35815 9.82355 8.49015 10.0876 8.75417L12.0418 10.7084C12.2724 10.939 12.3877 11.0543 12.4702 11.1889C12.5433 11.3082 12.5971 11.4382 12.6298 11.5743C12.6666 11.7277 12.6666 11.8908 12.6666 12.2169V13.5999C12.6666 13.9733 12.6666 14.16 12.594 14.3026C12.5301 14.428 12.4281 14.53 12.3026 14.5939C12.16 14.6666 11.9733 14.6666 11.6 14.6666H4.39998C4.02661 14.6666 3.83993 14.6666 3.69732 14.5939C3.57188 14.53 3.46989 14.428 3.40598 14.3026C3.33331 14.16 3.33331 13.9733 3.33331 13.5999V12.2169C3.33331 11.8908 3.33331 11.7277 3.37015 11.5743C3.40282 11.4382 3.45669 11.3082 3.52979 11.1889C3.61225 11.0543 3.72755 10.939 3.95815 10.7084L5.9124 8.75417C6.17641 8.49015 6.30842 8.35815 6.35787 8.20593C6.40138 8.07203 6.40138 7.9278 6.35787 7.79391C6.30842 7.64169 6.17641 7.50968 5.9124 7.24567L3.95815 5.29142C3.72755 5.06082 3.61225 4.94552 3.52979 4.81097C3.45669 4.69167 3.40282 4.56161 3.37015 4.42556C3.33331 4.27211 3.33331 4.10905 3.33331 3.78293V2.39992C3.33331 2.02655 3.33331 1.83987 3.40598 1.69726C3.46989 1.57182 3.57188 1.46983 3.69732 1.40591C3.83993 1.33325 4.02661 1.33325 4.39998 1.33325Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div></div>
                    <div>Liquidity</div>
                </Link>
                <Link to='/faucet' className='flex items-center hover:border-b-[#C7F284] hover:border-b-2 h-full space-x-4 px-4'>
                    <div class="p-3 bg-cyan-50 bg-opacity-5 rounded-lg justify-center items-center gap-2.5 flex"><div class="w-4 h-4 relative"><div class="group-hover:text-v2-primary fill-current text-v2-lily/[.75]"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_16765_48070)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.96514 2.57687C1.91375 2.59548 1.86937 2.62952 1.83807 2.67432C1.80677 2.71913 1.79008 2.77251 1.79029 2.82716V5.28087C1.79029 5.42716 1.90914 5.54602 2.05543 5.54602C3.08057 5.54602 3.91257 6.37802 3.91257 7.40316V9.17116C4.1652 8.99817 4.45227 8.88188 4.75408 8.83029C5.05588 8.77871 5.36528 8.79303 5.66103 8.87229C5.95677 8.95154 6.23187 9.09386 6.46743 9.28945C6.703 9.48505 6.89345 9.7293 7.02571 10.0054C7.07097 9.95625 7.09589 9.89172 7.09543 9.82487V7.4043C7.09543 6.91176 7.29109 6.43939 7.63937 6.0911C7.98765 5.74282 8.46003 5.54716 8.95257 5.54716C9.44512 5.54716 9.91749 5.74282 10.2658 6.0911C10.614 6.43939 10.8097 6.91176 10.8097 7.4043V9.82487C10.8094 9.8917 10.8343 9.95619 10.8794 10.0054C11.0116 9.72921 11.202 9.48485 11.4375 9.28913C11.673 9.09341 11.9481 8.95098 12.2438 8.87162C12.5396 8.79225 12.849 8.77782 13.1509 8.82933C13.4527 8.88084 13.7399 8.99706 13.9926 9.17002V7.4043C13.9926 6.37916 14.8246 5.54716 15.8497 5.54716C15.92 5.54716 15.9875 5.51923 16.0372 5.4695C16.0869 5.41978 16.1149 5.35234 16.1149 5.28202V2.82716C16.1148 2.7727 16.098 2.71957 16.0667 2.675C16.0355 2.63042 15.9912 2.59656 15.94 2.57802H15.9366L15.9297 2.57459L15.9046 2.56659C15.751 2.51551 15.5963 2.46787 15.4406 2.42373C14.9797 2.2933 14.5138 2.18121 14.044 2.08773C12.3674 1.75794 10.6624 1.59448 8.95371 1.59973C6.81086 1.59973 5.06914 1.84316 3.86 2.08545C3.25657 2.20773 2.78457 2.33002 2.46343 2.42145C2.3081 2.46561 2.15377 2.51324 2.00057 2.5643L1.97543 2.5723L1.96857 2.57459L1.96514 2.57573V2.57687ZM5.908 10.922C5.908 10.7109 5.82413 10.5084 5.67486 10.3592C5.52558 10.2099 5.32311 10.126 5.112 10.126C4.90089 10.126 4.69842 10.2099 4.54914 10.3592C4.39986 10.5084 4.316 10.7109 4.316 10.922C4.316 11.2203 4.19752 11.5063 3.98662 11.7172C3.77572 11.9281 3.48968 12.0466 3.19143 12.0466H2.71143C2.50032 12.0466 2.29785 12.1305 2.14857 12.2797C1.99929 12.429 1.91543 12.6315 1.91543 12.8426C1.91543 13.0537 1.99929 13.2562 2.14857 13.4054C2.29785 13.5547 2.50032 13.6386 2.71143 13.6386H3.19143C3.91257 13.6386 4.60286 13.3517 5.11257 12.8432C5.622 13.3524 6.31283 13.6385 7.03314 13.6385C7.75346 13.6385 8.44428 13.3524 8.95371 12.8432C9.46314 13.3524 10.154 13.6385 10.8743 13.6385C11.5946 13.6385 12.2854 13.3524 12.7949 12.8432C13.3046 13.3529 13.9949 13.6386 14.716 13.6386H15.1971C15.4083 13.6386 15.6107 13.5547 15.76 13.4054C15.9093 13.2562 15.9931 13.0537 15.9931 12.8426C15.9931 12.6315 15.9093 12.429 15.76 12.2797C15.6107 12.1305 15.4083 12.0466 15.1971 12.0466H14.716C14.4177 12.0466 14.1317 11.9281 13.9208 11.7172C13.7099 11.5063 13.5914 11.2203 13.5914 10.922C13.5914 10.7109 13.5076 10.5084 13.3583 10.3592C13.209 10.2099 13.0065 10.126 12.7954 10.126C12.5843 10.126 12.3818 10.2099 12.2326 10.3592C12.0833 10.5084 11.9994 10.7109 11.9994 10.922C11.9994 11.2204 11.8809 11.5066 11.6699 11.7176C11.4589 11.9286 11.1727 12.0472 10.8743 12.0472C10.5759 12.0472 10.2897 11.9286 10.0787 11.7176C9.86768 11.5066 9.74914 11.2204 9.74914 10.922C9.74914 10.7109 9.66528 10.5084 9.516 10.3592C9.36672 10.2099 9.16425 10.126 8.95314 10.126C8.74203 10.126 8.53956 10.2099 8.39028 10.3592C8.24101 10.5084 8.15714 10.7109 8.15714 10.922C8.15714 11.0698 8.12804 11.2161 8.0715 11.3526C8.01495 11.4891 7.93207 11.6131 7.82759 11.7176C7.72312 11.8221 7.59908 11.905 7.46257 11.9615C7.32606 12.0181 7.17975 12.0472 7.032 12.0472C6.88424 12.0472 6.73793 12.0181 6.60143 11.9615C6.46492 11.905 6.34088 11.8221 6.2364 11.7176C6.13192 11.6131 6.04905 11.4891 5.9925 11.3526C5.93596 11.2161 5.908 11.0698 5.908 10.922Z" fill="currentColor"></path></g><defs><clipPath id="clip0_16765_48070"><rect width="16" height="16" fill="white" transform="translate(0.951172)"></rect></clipPath></defs></svg></div></div></div>
                    <div>Faucet</div>
                </Link>
            </div> 
        </div>
    )
}

export default Navbar;