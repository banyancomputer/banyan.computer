import Container from '../components/container'
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'

export default function Home() {
  return (
    <Container>
      <div className="rounded-xl p-8 flex justify-between flex-col text-white relative drop-shadow-lg bg-blend-darken mb-32" style={{ background: "rgba(0,0,0,0.25) url('/banyan.jpg') center/cover" }}>
        <p className="text-6xl mb-12 flex-shrink-0 z-20">Permanent storage, <span className="underline decoration-purple">unchained</span>.</p>
        <p className="text-xl mt-64 max-w-prose z-20">An on-chain broker that stores files to the distributed cloud from any chain you want, under incentives to <span className="text-purple">make them last forever</span>.</p>
      </div>
      <h2>Fund the preservation of files  , alone or with others.</h2>
      <div className="flex flex-col lg:flex-row justify-between mt-16 mb-32">
        <p className="w-full pb-8 lg:pb-0 lg:pr-12 text-justify">Place assets into a Banyan DAO-controlled trust contract for that file and provide a copy of the files.</p>
        <p className="w-full pb-8 lg:pb-0 lg:pr-12 text-justify">Banyan DAO puts extra assets under management, in a combination of yield-bearing stablecoin strategies for low-risk returns and FIL/BTC perpetuals to hedge against large crypto market moves. This gets the most storage for your money.</p>
        <p className="w-full text-justify">Banyan DAO posts (and annually renews) staked time-release bounty piñata contracts. By doing this, we incentivize upload by third parties to reputable Filecoin service providers and IPFS pinning services. Don't fret about your storage as long as the trust has money.</p>
      </div>
      <img src="/diagram2.png"/>
      <h2>Current solutions...</h2>
      <div className="flex flex-col lg:flex-row justify-between mt-16 mb-32">
        <p className="w-full pb-8 lg:pb-0 lg:pr-12 text-justify"><b>Expire</b>, and require regular interaction for renewal, without adapting long-term storage funding strategies to the latest market conditions.</p>
        <p className="w-full pb-8 lg:pb-0 lg:pr-12 text-justify"><b>Are hard to verify</b> or contractually interact with from other chains.</p>
        <p className="w-full text-justify"><b>Are expensive</b>, and promise things they can't necessarily provide. We use Filecoin service providers to provide strong storage deal guarantees in the short-term (one year) with active market management to provide for the long-term.</p>
      </div>
      <h2>Investors and partnerships</h2>
      <p className="text-center">Building on...</p>
      <div className="flex row justify-between my-16 mx-auto w-full max-w-prose">
        <img className="max-h-24" src="/filecoin.svg" height="96" width="96"/>
        <img className="max-h-24" src="/compound.svg" height="96" width="96"/>
        <img className="max-h-24" src="/yfi.svg" height="96" width="96"/>
      </div>
      <div className="flex row justify-between my-16 mx-auto w-full max-w-prose">

        <img className="max-h-24" src="/compound.svg"height="96" width="96"/>
        <img className="max-h-24" src="/dydx.svg" height="96" width="96"/>
        <img className="max-h-24" src="/chainlink.svg" height="96" width="96"/>
      </div>
      <div className="flex row justify-around items-center my-16">
        <p className="text-2xl font-bold">Interested in investing or partnering with Banyan?</p>
        <button className="inline-block text-2xl font-bold px-8 my-16 border-2 p-4 border-green rounded-xl hover:bg-green transition">Get in touch</button>
      </div>
      <div className="text-center">
        <a href="https://twitter.com/BanyanComputer"><i class="la-2x lab la-twitter hover:text-green"></i></a>
        <a href="https://github.com/saintceliac/banyan.computer"><i class="la-2x lab la-github hover:text-green"></i></a>
      </div>
      </Container>
  )
}
