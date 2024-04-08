import {
  CalendarDays,
  CalendarRange,
  FileQuestion,
  FolderKanban,
  HeartHandshake,
  LibraryBig,
  MessageCircleQuestion,
  NotebookTabs,
  Scroll,
  Wallet,
} from 'lucide-react'

export const DataListAkademik = [
  { title: 'Program Studi', icon: <NotebookTabs /> },
  { title: 'Kurikulum', icon: <LibraryBig /> },
  { title: 'Jadwal Kuliah', icon: <CalendarDays /> },
  { title: 'Kalender Akademik', icon: <CalendarRange /> },
  { title: 'Program Internasional', icon: <HeartHandshake /> },
  { title: 'Proyek Penelitian', icon: <FolderKanban /> },
  { title: 'Sertifikasi', icon: <Scroll /> },
  { title: 'Beasiswa', icon: <Wallet /> },
  { title: 'Panduan Akademik', icon: <FileQuestion /> },
  { title: 'Pusat Bantuan', icon: <MessageCircleQuestion /> },
]
