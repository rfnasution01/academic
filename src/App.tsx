import { Link, Outlet } from 'react-router-dom'
import {
  ButtonGroup,
  ButtonGroupMobile,
  HeaderNavigation,
} from './features/layout'
import { Input } from './components/ui/input'
import { Bell, ChevronDown, List, Search, Settings } from 'lucide-react'
import { useState } from 'react'
import { debounce } from 'lodash'
import { DialogHelpers } from './components/ui/dialog'
import { capitalizeFirstLetterFromLowercase } from './libs/helpers/formatText'

export default function RootLayout() {
  const [search, setSearch] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleSearch = debounce((searchValue: string) => {
    setSearch(searchValue)
  }, 300)

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    handleSearch(value)
  }

  const token = localStorage.getItem('token')
  const username = localStorage.getItem('username')

  console.log(search)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* ----- Header ----- */}
      <div className="flex h-[7.6rem] flex-row items-center gap-x-96 bg-primary-shade-500 px-32 text-white phones:justify-between">
        <Link to="/" className="text-[3.2rem] text-secondary">
          Aca<span className="text-primary-shade-200">Demy</span>
        </Link>
        <div className="block flex-1 phones:hidden">
          <div className="flex flex-row items-center gap-x-96 ">
            <HeaderNavigation />
            <Input
              className="flex-1 text-secondary-shade-100"
              placeholder="Search"
              prefix={<Search size={18} />}
              onChange={onSearch}
            />
            <ButtonGroup />
          </div>
        </div>
        <div className="hidden phones:block" onClick={() => setIsOpen(true)}>
          <div className="flex flex-row items-center gap-x-32">
            {token && (
              <div className="flex items-center gap-x-32">
                <span>
                  <Settings size={16} />
                </span>
                <span>
                  <Bell size={16} />
                </span>
                <div className="flex items-center gap-x-8">
                  <img
                    src="/img/logo.png"
                    alt="Profile"
                    width={18}
                    className="rounded-full"
                  />
                  <span className="text-[2rem]">
                    {capitalizeFirstLetterFromLowercase(username ?? '')}
                  </span>
                  <span>
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            )}
            <List size={24} color="#fff" />
          </div>
        </div>
      </div>
      {/* ----- Content ----- */}
      <div className="scrollbar h-[calc(100vh_-_7.6rem)] overflow-y-auto">
        <Outlet />
      </div>
      <DialogHelpers
        title={
          <h3 className="flex h-[7.6rem] items-center bg-primary-shade-500 px-24 text-[3.2rem] text-secondary">
            Aca<span className="text-primary-shade-200">Demy</span>
          </h3>
        }
        open={isOpen}
        setOpen={setIsOpen}
        noPadding
        customComponent={
          <div className="flex flex-col items-center gap-y-32">
            <HeaderNavigation close={() => setIsOpen(false)} />
            <ButtonGroupMobile />
          </div>
        }
      />
    </div>
  )
}
