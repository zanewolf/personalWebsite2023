import Image from 'next/image'
import {fetchProject} from "@/app/utils/ContentfulAPI"
import styles from '../../../styles/projectPage.module.css'
import Link from 'next/link'
import BlogBody from "@/app/components/BlogBody";
import TableOfContents from "@/app/components/TableOfContents";

export const dynamicParams = true

export async function generateMetadata({ params }) {

	const project  = await fetchProject(params.slug)
	return {
		title: `zane wolf | ${project?.fields.name || 'Project not Found'}`
	}
}

const categoryColors={
	'Data Visualization':'secondary-200',
	'Website Development':'secondary-300',
	'Science':'secondary-400'
}

export default async function ProjectPage({ params }) {
	const project = await fetchProject(params.slug)
	const accentColor=categoryColors[project.fields.categories[0]]

	return (
			<section className={styles.projectPage}>
				<div className={styles.projectHeroSection}>
					<Image
							src={'https:'+project.fields.featuredImage.fields.file.url}
							alt={'hero image for '+project.fields.name}
							fill
							className={'object-cover'}
					/>
				</div>
				<div className={styles.projectTitle}>
					<div className="flex flex-col justify-center items-center px-3">
						<h1 className=" text-center text-3xl md:text-5xl font-bold drop-shadow-lg text-primary">
							{project.fields.name}
						</h1>
					</div>
				</div>
				<div className={styles.projectContent}>
					<div className={styles.projectSideMenus}>
						<div className={styles.projectInfo}>
							{(project.fields.link || project.fields.githubLink) &&
									<>
										<div className={styles.sideInfoHeader}>Links</div>
										<div className={styles.projectLinks}>
											{project.fields.link &&
												<Link href={project.fields.link} className={`text-${accentColor} underline`}>
													{project.fields.name}
												</Link>
											}
											{project.fields.githubLink &&
												<Link href={project.fields.githubLink} className={`underline text-${accentColor}`}>
												Github Repo
												</Link>
											}
										</div>
									</>
							}




								<div className={styles.sideInfoHeader}>Client</div>
								<div>{project.fields.client}</div>
								<div className={styles.sideInfoHeader}>Tools</div>
							  <ul>
									{project.fields.tools.map((tool,i)=>{
										return (<li key={i}>
											{tool}
										</li>)
									})
									}
								</ul>
								{project.fields.dataLinks &&
									<>
										<div className={styles.sideInfoHeader}>Data</div>
										{project.fields.dataLinks.dataLinks.map((link,i)=> {
											return (
													<Link key={i} href={link.link} className={`text-${accentColor} underline`}>
														{link.name}
													</Link>
											)
										})}
									</>
								}
						</div>
						<div className={styles.projectTOC}>
							<TableOfContents post={project.fields.description} accentColor={accentColor}/>
						</div>
					</div>
					<div className={styles.projectText}>
						<BlogBody content={project.fields.description} accentColor={accentColor}/>
					</div>
				</div>


			</section>
	)
}