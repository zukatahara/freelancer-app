import Image from 'next/image'
import styles from './page.module.css'
import MenuComponent from '@/components/pages/Home/Menu'
import BannerComponent from '@/components/pages/Home/Banner'
import UsedByComponent from '@/components/pages/Home/UsedBy'
import CompleteWorkComponent from '@/components/pages/Home/CompleteWork'
import GoodWhat from '@/components/pages/Home/GoodWhat'
import LastSectionComponent from '@/components/pages/Home/LastSection'

export default function Home() {
  return (
    <>
      <MenuComponent />
      <BannerComponent />
      <UsedByComponent />
      <CompleteWorkComponent />
      <GoodWhat />
      <LastSectionComponent />
    </>

  )
}
