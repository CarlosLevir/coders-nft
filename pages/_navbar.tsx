import { useRouter } from "next/router";
import { useCallback } from "react";
import Logo from "../assets/Logo";

export default function Navbar() {
  const router = useRouter();

  const handleLogoClick = useCallback(() => {
    router.push('/');
  }, []);

  return (
    <div>
      <div className="h-2 px-24 py-10 flex items-center cursor-pointer" onClick={handleLogoClick}>
        <Logo />
        <p className="ml-3 font-semibold">Coders NFT</p>
      </div>
      <hr className="w-full border-[#242634]" />
    </div>
  )
}