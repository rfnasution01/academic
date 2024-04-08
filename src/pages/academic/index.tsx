import { AsideContentTemplate } from '@/features/template/asideContentTemplate'
import { DataListAkademik } from '@/libs/consts/dummy/dataListAkademik'

export default function Academicpage() {
  return <AsideContentTemplate dataMapping={DataListAkademik} />
}
