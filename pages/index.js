import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/logo2.svg'

export default function Home() {
  return (
<>
<div className=" w-36  p-4 fill-red-300 color">
<Image src={Logo} className='fill-red-500' />
</div>
</>
  )
}
