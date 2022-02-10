
import Image from 'next/image'
import { Proto } from '../api/protocol'
import styles from '../styles/Home.module.css'

export default function Home() {
  const subtitle: Proto.ITitle = {
    description: "test",
    id: 1,
    name: "title1",
    thumbnailUrl: "https://via.placeholder.com/360"
  }
  return (
    <div className={styles.container} ><p>sss</p></div>
  )
}
