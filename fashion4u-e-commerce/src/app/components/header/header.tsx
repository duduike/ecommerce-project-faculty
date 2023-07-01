import Image from 'next/image'
import Link from 'next/link'
import { User, ShoppingCart, Menu } from 'lucide-react'

export const Header = () => {
  return (
    <header className='text-purple-950 text-lg w-full h-24 flex items-center bg-teal-400 px-8'>
        <div>
            <Link href="/">
                <Image
                    className='rounded-full mr-7 object-cover h-[76px]' 
                    src="/../public/img/logo.png"
                    width={76}
                    height={76}
                    alt="Fashion 4U Logo"
                />
            </Link>
        </div>

        <nav>
            <ul className='ml-7 hidden lg:flex gap-3'>
                <li className='hover:scale-110 transition-all'>
                    <Link href="/">Home</Link>
                </li>
                <li className='hover:scale-110 transition-all'>
                    <Link href="/masculino">Masculino</Link>
                </li>
                <li className='hover:scale-110 transition-all'>
                    <Link href="/feminino">Feminino</Link>
                </li>
            </ul>
        </nav>
        
        <div className='flex align-middle ml-auto divide-x-4 divide-teal-400'>
            <button className='hover:scale-110 transition-all'>
                <User size={36}/>
            </button>
            <button className='text hover:scale-110 transition-all'>
                <ShoppingCart size={36}/>
            </button>
            <button className='hover:scale-110 transition-all lg:hidden ml-2'>
                <Menu size={50}/>
            </button>
        </div>

    </header>
  )
}
