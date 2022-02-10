
import { dummyHomeView } from '../mock/view/home'
import { Base } from '../parts/Base/base'
import { Footer } from '../parts/Footer/footer'
import { Header } from '../parts/Header/header'
import { Title } from '../parts/Title/title'
import styles from '../styles/Home.module.sass'

export default function Home() {
  const apiData = dummyHomeView
  return (
    <Base>
      <div className={styles.container} >
        {apiData.titlesByTag.map((v, i) => {
          return (
            <div className={styles.tagSection} key={i} >
              <p className={styles.tagName}>{v.tag.name}</p>
              <div className={styles.titles}>
                {v.titles.map((t, i) => (
                  <Title {...t} key={i} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Base>
  )
}