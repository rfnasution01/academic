import { DataSocialMedia } from '@/libs/consts/dummy/dataSocialMedia'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-y-32 bg-primary-shade-500 p-64 text-white">
      <div className="flex items-center gap-x-32">
        {DataSocialMedia.map((item, idx) => (
          <Link to={item?.url} key={idx}>
            {item?.icon}
          </Link>
        ))}
      </div>
      <span className="text-[2rem] font-semibold">
        Copyright &copy;2024 | All Right Reserves
      </span>
    </footer>
  )
}
