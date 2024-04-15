import { SubMenuContentTemplate } from '@/features/template/subMenuContentTemplate'
import { DataFasilitas } from '@/libs/consts/dummy/dataFasilitas'
import { Outlet } from 'react-router-dom'

const Fasilitas = () => {
  return (
    <div className="flex h-[100%] flex-col gap-y-32">
      <img
        src="/img/akademi-konoha-3.jpg"
        alt="Naruto"
        className="h-[30vh] w-full rounded-xl"
      />
      <div className="flex flex-col gap-y-32 rounded-lg bg-white p-32">
        <SubMenuContentTemplate menu="fasilitas" data={DataFasilitas} />
        <Outlet />
      </div>
    </div>
  )
}

export default Fasilitas
