import Image from "next/image";

const Logo = () => {
  return (
    <Image 
      width={130}
      height={130}
      alt="logo"
      src="/logo.svg"
      priority={true}
    />
  )
}

export default Logo;