import { AsideContentTemplate } from '@/features/template/asideContentTemplate'
import { DataListAbout } from '@/libs/consts/dummy/dataListAbout'

export default function Aboutpage() {
  return <AsideContentTemplate dataMapping={DataListAbout} />
}
