import React from 'react'
import Image from 'next/image'
import LogoImage from '@/assets/Logo.svg'
const Logo = () => {
  return (
    <div>
      <Image src={LogoImage} alt="logo" />
    </div>
  );
}

export default Logo