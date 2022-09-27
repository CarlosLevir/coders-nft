import Head from "next/head";
import { useRouter } from "next/router";
import { nfts } from "..";
import { NFTCard } from "../../components/NFTCard";

export default function NFTDetails() {

  const router = useRouter();

  const nft = nfts.find((nft) => nft.id === router.query.id);

  return (
    <div className="px-24">
      <Head>
        <title>{nft?.name} NFT - Details Page</title>
      </Head>

      <div className="mt-24 flex justify-between">
        <img className="rounded-[1.25rem] w-[45%] h-auto" src={nft?.image} alt={nft?.name} />

        <div className="ml-10 w-[45%]">
          <h1 className="text-5xl font-bold">{nft?.name}</h1>
          <p className="text-[#93989A] mt-4">
            {nft?.description}
          </p>

          <hr className="w-full border-[#242634] mt-8 mb-4" />

          <div>
            <p className="text-[#93989A]">Creator</p>
            <p>{nft?.author}</p>
          </div>

          <hr className="w-full border-[#242634] mt-8 mb-4" />

          <div>
            <button className="bg-[#ff2748] py-[1rem] px-6 rounded-xl hover:scale-105 active:scale-95">
              Place a Bid
            </button>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-4xl mt-24">More Works</h2>
        <div className="flex flex-wrap items-start gap-16 mt-7">
          {
            nfts.filter((_nft, index) => index < 4).map((nft) => (
              <NFTCard nft={nft} key={nft.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
