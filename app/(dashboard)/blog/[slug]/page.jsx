import Image from 'next/image'
import {fetchBlog} from "@/app/utils/ContentfulAPI"
import styles from '../../../styles/projectPage.module.css'
import Link from 'next/link'
import BlogBody from "@/app/components/BlogBody";
import TableOfContents from "@/app/components/TableOfContents";

export const dynamicParams = true

export async function generateMetadata({ params }) {

	const blog  = await fetchBlog(params.slug)
	return {
		title: `zane wolf | ${blog?.fields.title || 'Blog not Found'}`
	}
}

export default async function BlogPage({params}) {

	const blog = await fetchBlog(params.slug)
	const accentColor='#c93d0a'

	return (
			<section className={styles.projectPage}>
				<div className={styles.projectHeroSection}>
					<Image
							src={'https:'+blog.fields.featuredImage.fields.file.url}
							alt={'hero image for '+blog.fields.name}
							fill
							className={'object-cover'}
					/>
				</div>
				<div className={styles.projectTitle}>
					<div className="flex flex-col justify-center items-center px-3">
						<h1 className=" text-center text-3xl md:text-5xl font-bold drop-shadow-lg text-primary">
							{blog.fields.title}
						</h1>
					</div>
				</div>
				<div className={styles.projectContent}>
					<div className={styles.projectSideMenus}>
						<div className={styles.projectTOC}>
							<TableOfContents post={blog.fields.body} accentColor={accentColor}/>
						</div>
					</div>
					<div className={styles.projectText}>
						<BlogBody content={blog.fields.body} accentColor={accentColor}/>
					</div>
				</div>


			</section>
	)
}
