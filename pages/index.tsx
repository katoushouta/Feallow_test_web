
import { GetStaticProps } from 'next'
import { Proto } from '../api/protocol'
import { dummyHomeView } from '../mock/view/home'
import { Base } from '../parts/Base/base'
import { Title } from '../parts/title/title'
import styles from '../styles/Home.module.sass'
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
  const getHome = () => fetch("http://w-lu.net:18080/api/home")
    .then(r => {
      if (r.status >= 404) {
        const msg = r.text()
        throw {statusCode: r.status,message: msg }
      }
      if (r.ok) {
        return r.arrayBuffer()
      }
    })
  try {
    const data = await getHome()
    const decoded = Proto.HomeView.decode(new Uint8Array(data))
    const apiData = JSON.parse(JSON.stringify(decoded))
    return {
      props: {
        data: apiData,
        error: null
      }
    }
  } catch (e) {
    return {
      props: {
        data: null,
        error: {statusCode: 404}
      }
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