import { SubMenuContentTemplate } from '@/features/template/subMenuContentTemplate'
import { Outlet } from 'react-router-dom'

const TentangKampus = () => {
  return (
    <div className="flex h-[100%] flex-col gap-y-32">
      <img
        src="/img/akademi-konoha-3.jpg"
        alt="Naruto"
        className="h-[30vh] w-full rounded-xl"
      />
      <div className="flex flex-col gap-y-32 rounded-lg  p-32">
        <SubMenuContentTemplate />
        <Outlet />
      </div>
    </div>
  )
}

export default TentangKampus
