
import { GetStaticProps } from 'next'
import { getApi } from '../api/getApi'
import { Proto } from '../api/protocol'
import { dummyHomeView } from '../mock/view/home'
import { Base } from '../parts/Base/base'
import { Title } from '../parts/title/title'
import styles from '../styles/pages/Home.module.sass'
import { Switcher } from './search'
export const getStaticProps: GetStaticProps = async (context) => {
  const dummy = false
  if (dummy) {
    return {
      props: {
        data: dummyHomeView,
        error: null
      }
    }
  }
  const apiData = await getApi("home", Proto.HomeView.decode)
  return {
    props: { ...apiData }
  }
}

export default function Home(props: {
  data: Proto.IHomeView
}) {
  return (
    <Base>
      <div className={styles.container} >
        <Switcher />
        {props.data?.titlesByTag.map((v, i) => {
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