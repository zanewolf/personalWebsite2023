import styles from '../../styles/blogGallery.module.css'
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({blog}) {
	let blurb = blog.fields.body.content[1].content[0].value.slice(0,200)
	return (
			<Link href={'/blog/'+blog.fields.slug}>
				<div className={styles.blogCard}>
					<div className={styles.blogImage}>
						<Image
								src={'https:' + blog.fields.featuredImage.fields.file.url}
								fill
								alt={'Card image for blog '+blog.fields.title}
								blurDataURL={`https://${blog.fields.featuredImage.fields.file.url}?q=${10}`}
								placeholder="blur"
								className={'object-cover'}
						/>
					</div>
					<div className={styles.blogInfo}>
						<div className={styles.blogDate}>{blog.fields.date}</div>
						<div className={styles.blogTitle}>{blog.fields.title}</div>
						<div className={styles.blogBlurb}>{blurb}...</div>
					</div>
				</div>
			</Link>

	)
}
