import Link from "next/link";
import styles from '../styles/home.module.css'
import {fetchMedia} from "@/app/utils/ContentfulAPI";
import ProjectHexCard from "@/app/components/cards/ProjectHexCard";
import Image from "next/image";
import hex2 from "@/public/images/Untitled.svg";
import React from "react";
import hex from '../../public/images/Untitled.svg';


export default async function Home({content}) {
  const media = await fetchMedia({content_type:'projects','fields.selected':true})
  const projects = media.props


  const keywords = [
    {keyword: 'data designer', color: 'text-secondary-200',link:'/projects', query:'Data Visualization'},
    {keyword: 'scientist', color: 'text-secondary-400',link:'/projects', query:'Science'},
    {keyword: 'website developer', color: 'text-secondary-300',link:'/projects', query:'Website Development'},
    {keyword: 'photographer', color: 'text-secondary-600',link:'https://www.instagram.com/zaney_photography/'}
  ]

  return (
      <section className={styles.homePage}>
        <div className={styles.landingSection}>
          <div className={styles.auxHex}>
            <Link href={'https://www.youtube.com/watch?v=thOifuHs6eY'}>
              <Image
                  src={hex2}
                  alt={'Hexagon svg with easter egg link to Gallery of Whoops page'}
              />
            </Link>
          </div >
          <div  className={styles.titleContent}>
            <div className={styles.greeting}>
              <h1>hi. i'm zane and i'm a </h1>
            </div>
            <div className={styles.titleContentContainer}>
              <span className={styles.blinker}>[</span>
              <ul className={styles.titleContentContainerList}>
                {keywords.map((keyword,i)=>{
                  return (
                      <li className={`m-4 text-2xl md:text-4xl text-shadow ${keyword.color}`} key={i}>
                        <Link
                            href={{pathname:keyword.link,query:{keyword:keyword.query}}}
                            className={'cursor-pointer'}
                        >
                          {keyword.keyword}
                        </Link>
                      </li>
                  )
                })}
              </ul>
              <span className={styles.blinker}>]</span>
            </div>
          </div>
          <div className={styles.auxHex1}>
            <Link href={'/whoops'}>
              <Image
                  src={hex2}
                  alt={'Hexagon svg with easter egg link to Gallery of Whoops page'}
              />
            </Link>
          </div >
        </div>
        <div>
          <div className={styles.selectedProjects}>
            <h2 className={styles.sectionTitle}>selected projects</h2>
            <div className={styles.selectedProjectHexes}>
              {projects.map((d,i) =>{
                return (
                    <ProjectHexCard key={i} project={d.fields}/>
                )
              })}
            </div>
            <Link href={'/projects'} className={styles.projectButton}>
                  view all projects
            </Link>
          </div>
          {/*<div className={styles.auxHex2}>*/}
          {/*  <Link href={'/whoops'}>*/}
          {/*    <Image*/}
          {/*        src={hex2}*/}
          {/*        alt={'Hexagon svg with easter egg link to Gallery of Whoops page'}*/}
          {/*    />*/}
          {/*  </Link>*/}
          {/*</div >*/}
        </div>
      </section>

  )
}
