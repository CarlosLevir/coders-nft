import Head from "next/head";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { NFTCard } from "../components/NFTCard";

export default function Home() {
  const [search, setSearch] = useState('');

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const filteredNfts = useMemo(() => {
    return nfts.filter((nft) => search ? nft.name.toLowerCase().includes(search.toLowerCase()) : true)
  }, [search, nfts])

  return (
    <div className="h-full w-screen bg-[#1d1f2b] px-24">
      <Head>
        <title>Coders NFT</title>
      </Head>

      <div className="flex justify-between items-baseline">
        <h2 className="text-5xl font-bold mt-24">
          Discover
        </h2>

        <input placeholder="Search item" className="h-12 w-64 p-4 rounded-xl" onChange={handleSearch} value={search} />
      </div>

      <hr className="w-full border-[#242634] mt-12" />

      <div className="flex-col items-start gap-7 mt-12">
        <h2 className="text-5xl font-bold">
          Popular Bid
        </h2>

        <div className="flex flex-wrap items-start gap-7 mt-7 min-h-[50%]">
          {filteredNfts.map((nft) => (
            <NFTCard nft={nft} key={nft.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const nfts = [
  {
    id: '1',
    name: '#4473',
    price: '0.1',
    author: '0xE51B77159',
    image: 'https://img.seadn.io/files/7c3910ec2c3e8c54a8ecaca5ad206aac.png?fit=max&w=1000',
    description: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop'
  },
  {
    id: '2',
    name: '#4474',
    price: '0.1',
    author: '0xE51B77159',
    image: 'https://img.seadn.io/files/7f3ac60b8433746081e395bd5158fe4c.png?fit=max&w=1000',
    description: 'Descrição do NFT'
  },
  {
    id: '3',
    name: '#4475',
    price: '0.1',
    author: '0xE51B77159',
    image: 'https://img.seadn.io/files/45e5b8384841b475e7411dafd6c6291a.png?fit=max&w=1000',
    description: 'Descrição do NFT'
  },
  {
    id: '4',
    name: '#4476',
    price: '0.1',
    author: '0xE51B77159',
    image: 'https://img.seadn.io/files/b5072486d725ad11f5946897d7733eda.png?fit=max&w=1000',
    description: 'Descrição do NFT'
  },
]