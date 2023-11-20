import styles from "../../styles/blogGallery.module.css"
import BlogCard from "@/app/components/cards/BlogCard";
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import {useSearchParams} from "next/navigation";


export default function BlogGallery({blogs}) {


	return (
			<section className={styles.blogLayout}>
				<div className={styles.blogCards}>
					{blogs.map((blog,i) => {
						return (
								<BlogCard key={i} blog={blog}/>
						)
					})}
				</div>
			</section>
	)
}
