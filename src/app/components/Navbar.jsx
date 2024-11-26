import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';

function Navbar() {
  return (
    <div className='flex w-[100%] shadow-md border-[1px] items-center justify-between rounded-lg p-5 bg-white text-black'>
        <Link href="/" className='text-2xl font-semibold hover:bg-slate-200 p-2 rounded-md duration-150'>BOSS</Link>

        <div className="flex xl:gap-10 lg:gap-6 md:gap-2 items-center">
            <Link href="/" className='text-xl font-semibold hover:bg-slate-200 p-2 rounded-md duration-150'>Home</Link>
            <Link href="/product" className='text-xl font-semibold hover:bg-slate-200 p-2 rounded-md duration-150'>Products</Link>
            <Link href="/cart" className='hover:bg-slate-200 p-2 rounded-md duration-150'><Icon path={mdiCartOutline} size={1.25} /></Link>
        </div>
    </div>
  )
}

export default Navbar