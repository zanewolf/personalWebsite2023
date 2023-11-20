import {fetchMedia} from "@/app/utils/ContentfulAPI";
import ProjectGallery from "@/app/(dashboard)/projects/ProjectGallery";
import {Suspense} from "react";
import Loading from '../Loading'


export default async function Projects() {
	const media = await fetchMedia({content_type: 'projects',order:'-fields.postDate'})
	const projects = media.props

	return (
			<>
				<Suspense fallback={<Loading />}>
					<ProjectGallery projects={projects}/>
				</Suspense>
			</>
	)
}
