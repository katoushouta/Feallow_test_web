
import { GetStaticProps } from 'next'
import { Proto } from '../api/protocol'
import { dummyHomeView } from '../mock/view/home'
import { Base } from '../parts/Base/base'
import { Title } from '../parts/title/title'
import styles from '../styles/Home.module.sass'
export const getStaticProps: GetStaticProps = async (context) => {
  const apiData = dummyHomeView
  return {
    props: {
      data: apiData
    }
  }
}

export default function Home(props: {
  data: Proto.IHomeView
}) {
  return (
    <Base>
      <div className={styles.container} >
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