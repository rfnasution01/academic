import { SubMenuContentTemplate } from '@/features/template/subMenuContentTemplate'
import { DataTentangKampus } from '@/libs/consts/dummy/dataTentangKampus'
import { Outlet } from 'react-router-dom'

const TentangKampus = () => {
  return (
    <div className="flex h-[100%] flex-col gap-y-32">
      <img
        src="/img/akademi-konoha-3.jpg"
        alt="Naruto"
        className="h-[30vh] w-full rounded-xl"
      />
      <div className="flex flex-col gap-y-32 rounded-lg bg-white p-32">
        <SubMenuContentTemplate menu="tentang" data={DataTentangKampus} />
        <Outlet />
      </div>
    </div>
  )
}

export default TentangKampus
