import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { IoMenu } from 'react-icons/io5/index.js'

export default function DropdownMenu() {
  return (
    <Menu as="div" className="relative lg:hidden inline-block text-left my-auto">
      <div className="flex">
        <Menu.Button className="inline-flex justify-center rounded-md border border-white my-auto" aria-label="menu">
          <IoMenu className="h-8 w-8"/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transfrom opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-white bg-primary">
            <div className="grid grid-cols-1 divide-y px-3 py-2 uppercase font-bold text-zinc-100">
              <a className="" href="/">Home</a>
              <a className="" href="#Services">Services</a>
              <a className="" href="#About">About Us</a>
              <a className="" href="#Contact">Contact</a>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
