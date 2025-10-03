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
      <span className='brand'>Ograt Mashro3</span>
      <ul className='list-buttons'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => open('https://github.com/amr0khaled', '_blank')}
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
              aria-label="Buy me coffee"
            >
              <BiCoffeeTogo className='size-5' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Buy me Coffee
          </TooltipContent>
        </Tooltip>
      </ul>
    </header>
  )
}
