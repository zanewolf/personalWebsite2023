import {fetchMedia} from "@/app/utils/ContentfulAPI";
import {Suspense} from "react";
import Loading from '../Loading'
import BlogGallery from "@/app/(dashboard)/blog/BlogGallery";


export default async function Blog() {
	const blogs = await fetchMedia({content_type: 'blogs',order:'-sys.createdAt'})

	return (
			<>
				<Suspense fallback={<Loading />}>
					<BlogGallery blogs={blogs}/>
				</Suspense>
			</>
	)
}