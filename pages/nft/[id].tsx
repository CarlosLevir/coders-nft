import { useAddress, useContract, useListing, useListings, useNFT } from "@thirdweb-dev/react";
import { Marketplace } from "@thirdweb-dev/sdk";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { NFTCard } from "../../components/NFTCard";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function NFTDetails() {
  const [loadingPurchase, setLoadingPurchase] = useState(false);

  const router = useRouter();

  const marketplace = useContract<Marketplace>('0xeE057bA0eEE01De2De0d47750eaB43D82DBdD295');
  const { data: listings } = useListings(marketplace.contract);
  const listing = useListing(marketplace.contract, Number(router.query.id));

  const { contract } = useContract(listing.data?.assetContractAddress);
  const { data: nft } = useNFT(contract, listing.data?.asset.id);

  const walletAddress = useAddress();
  const userIsNFTOwner = walletAddress && walletAddress === nft?.owner;
  const shouldDisableBuyNFTButton = userIsNFTOwner || loadingPurchase || listing.data?.quantity.toString() === '0';

  const handleBuyNFT = useCallback(async () => {
    try {
      setLoadingPurchase(true);

      await marketplace.contract.direct.buyoutListing(listing.data?.id, 1)

      setLoadingPurchase(false);
      Notify.success('You have successfully bought this NFT!');
    } catch (error) {
      setLoadingPurchase(false);
      Notify.failure('Failed to buy this NFT!');
    }
  }, [listing]);

  return (
    <div className="px-[10%] min-h-[80vh]">
      <Head>
        <title>{listing.data?.asset.name} - Details Page</title>
      </Head>

      <div className="mt-24 flex justify-between flex-wrap gap-10">
        <img className="rounded-[1.25rem] w-full max-w-xl h-auto" src={listing.data?.asset.image} alt={listing.data?.asset.name.toString()} />

        <div className="ml-10 w-full max-w-xl">
          <h1 className="text-5xl font-bold">{listing.data?.asset.name}</h1>
          <p className="text-[#93989A] mt-4">
            {listing.data?.asset.description}
          </p>

          <hr className="w-full border-[#242634] mt-8 mb-4" />

          <div>
            <p className="text-[#93989A]">Owner</p>
            <p>{nft?.owner.slice(0, 6)} {userIsNFTOwner && ' (You)'}</p>
          </div>

          <hr className="w-full border-[#242634] mt-4 mb-8" />

          <div>
            <button
              disabled={shouldDisableBuyNFTButton}
              onClick={handleBuyNFT}
              className={`bg-[#ff2748] py-[1rem] px-6 rounded-xl ${shouldDisableBuyNFTButton ? 'opacity-50' : 'hover:scale-105 active:scale-95'}`}
            >
              {loadingPurchase ? 'Loading...' : 'Buy NFT'}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-4xl mt-24">More Works</h2>
        <div className="flex flex-wrap items-start gap-16 mt-7">
          {
            listings?.filter((_listing, index) => index < 4).map((listing) => (
              <NFTCard listing={listing} key={listing.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
