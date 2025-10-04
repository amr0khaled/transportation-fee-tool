import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { FaGithub } from 'react-icons/fa6'
import { BiCoffeeTogo } from 'react-icons/bi'
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"


export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  useEffect(() => {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    if (isDark) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme !== 'dark')
  }, [theme])
  return (
    <header className='header'>
      <div className='flex gap-2 sm:gap-4 items-center'>
        <img className='size-12' alt='' src='/favicon.svg' />
        <span className='brand'>Ograt Mashro3</span>
      </div>
      <ul className='list-buttons'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => open('https://github.com/amr0khaled/transportation-fee-tool', '_blank')}
              aria-label="my Github account"
            >
              <FaGithub className='size-5 md:size-6' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            my Github account
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => open('https://buymeacoffee.com/amr0khaled0x', '_blank')}
              aria-label="Buy me a coffee"
              className='bg-amber-300 hover:bg-amber-400 focus:bg-amber-500'
            >
              <BiCoffeeTogo className='size-5 text-black' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Buy me a Coffee
          </TooltipContent>
        </Tooltip>
      </ul>
    </header>
  )
}
