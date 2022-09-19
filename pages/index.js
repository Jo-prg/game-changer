import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tick from '../public/tick.png'
import line_chart from '../public/line-chart.png'
import user from '../public/user.png'

export default function Home() {
  return (
    <div className={styles.dashboard_content}>
      <h1 className={styles.title}>Overview</h1>

      <div className={styles.buttons}>
        <div className={styles.btn_div}>
          <svg width="20px" fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21.5 9.757-5.278 4.354 1.649 7.389L12 17.278 6.129 21.5l1.649-7.389L2.5 9.757l6.333-.924L12 2.5l3.167 6.333z" /></svg>
          <button className={styles.btn}>INDIVIDUAL</button>
        </div>
        <div className={styles.btn_div}>
          <svg width="20px" fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21.5 9.757-5.278 4.354 1.649 7.389L12 17.278 6.129 21.5l1.649-7.389L2.5 9.757l6.333-.924L12 2.5l3.167 6.333z" /></svg>
          <button className={styles.btn}>SINGLE MARKET OVERVIEW</button>
        </div>
        <div className={styles.btn_div}>
          <svg width="20px" fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21.5 9.757-5.278 4.354 1.649 7.389L12 17.278 6.129 21.5l1.649-7.389L2.5 9.757l6.333-.924L12 2.5l3.167 6.333z" /></svg>
          <button className={styles.btn}>GLOBAL MARKET OVERVIEW</button>
        </div>
      </div>

      <div className={styles.tabs_div}>
        <div className={styles.tabs}>
          <div className={styles.tab_top_div}>
            <h4>Proficiencies Shown</h4>
          </div>

          <div className={styles.tab_bottom_div}>
            <div className={styles.img_div}>
              <Image
                src={tick}
                alt="Tick image"
                layout="fixed"
                width={20}
                height={20}
              />
              {/* <a href="https://www.flaticon.com/free-icons/tick" title="tick icons">Tick icons created by Freepik - Flaticon</a> */}
            </div>

            <div className={styles.percent_div}>
              <h3>33%</h3>
              <p>of ideal proficiencies have been demonstrated.</p>
            </div>
          </div>
        </div>

        <div className={styles.tabs}>
          <div className={styles.tab_top_div}>
            <h4>Proficiencies Requiring Development</h4>
          </div>

          <div className={styles.tab_bottom_div}>
            <div className={styles.img_div}>
              <Image
                src={line_chart}
                alt="Line chart"
                layout="fixed"
                width={20}
                height={20}
              />
              {/* <a href="https://www.flaticon.com/free-icons/chart" title="chart icons">Chart icons created by Kiranshastry - Flaticon</a> */}
            </div>
            <div className={styles.percent_div}>
              <h3>33%</h3>
              <p>of the proficiencies tested could benefit from further development.</p>
            </div>
          </div>
        </div>

        <div className={styles.tabs}>
          <div className={styles.tab_top_div}>
            <h4>Behaviours Shown</h4>
          </div>

          <div className={styles.tab_bottom_div}>
            <div className={styles.img_div}>
              <Image
                src={user}
                alt="User image"
                layout="fixed"
                width={20}
                height={20}
              />
              {/* <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a> */}
            </div>

            <div className={styles.percent_div}>
              <h3>50%</h3>
              <p>of the ideal behaviours have been demonstrated.</p>
            </div>
          </div>
        </div>

        <div className={styles.tabs}>
          <div className={styles.tab_top_div}>
            <h4>Behaviours Requiring Development</h4>
          </div>

          <div className={styles.tab_bottom_div}>
            <div className={styles.img_div}>
              <Image
                src={line_chart}
                alt="Line chart image"
                layout="fixed"
                width={20}
                height={20}
              />
              {/* <a href="https://www.flaticon.com/free-icons/chart" title="chart icons">Chart icons created by Kiranshastry - Flaticon</a> */}
            </div>

            <div className={styles.percent_div}>
              <h3>50%</h3>
              <p>of the behaviours tested could benefit from further development.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.graphs}>
        <div className={styles.graph_tab}>
          <h5>Proficiencies</h5>
        </div>
        <div className={styles.graph_tab}>
          <h5>Behaviours</h5>
        </div>
      </div>

    </div>
  )
}
