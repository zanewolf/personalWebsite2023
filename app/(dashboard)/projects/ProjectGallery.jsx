 "use client"
import {useState,useEffect} from "react";
import {projectCategories} from "@/app/data/projectCategories";
import styles from "../../styles/projectGallery.module.css"
import ProjectCard from "@/app/components/cards/ProjectCard";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
 import {useSearchParams} from "next/navigation";

 const categorieColors={
	 'All':'rgba(119,119,119,0.5)',
	 'Data Visualization':'rgba(10,181,185,0.5)',
	 'Website Development':'rgba(185,93,250,0.5)',
	 'Science':'rgba(64,206,3,0.5)'
 }


 export default function ProjectGallery({projects}) {
	 const [selectedCat,setSelectedCat]= useState('All')
	 const [displayContent, setDisplayContent] = useState(projects)

	 const searchParams = useSearchParams()
	 useEffect(()=>{
		 console.log(searchParams.get('keyword'))
		 let filter = searchParams.get('keyword') != null ?  searchParams.get('keyword') : 'All'
		 setSelectedCat(filter)
	 },[searchParams])

	useEffect(() => {
		if (selectedCat == 'All') {
			setDisplayContent(projects)
		} else {
			setDisplayContent(projects.filter(project => project.fields.categories == selectedCat))
		}

	}, [selectedCat])

	const handleSelect = (event) => {
		// console.log(event)
		setSelectedCat(event.target.value)
	}

	console.log(selectedCat,categorieColors[selectedCat])
	return (
			<section className={styles.galleryLayout}>
				<div className={styles.selectFormDiv}>
					{/*<ThemeProvider theme={theme}>*/}
						<FormControl sx={{m: 1, minWidth: 80}}>
							<Select
									labelId="demo-simple-select-autowidth-label"
									id="demo-simple-select-autowidth"
									value={selectedCat}
									onChange={handleSelect}
									autoWidth
									className={styles.selectText}
									sx={{
										boxShadow: `${categorieColors[selectedCat]} 0px 4px 6px 0px, ${categorieColors[selectedCat]} 0px 4px 6px 0px;`,
										'.MuiOutlinedInput-notchedOutline': {
											border: 0,
											'&:after': {
												outline: 'none',
											},
											'&:focus-visible': {
												outline: 'none',
											},
										} ,
										"& .Mui-focused .MuiOutlinedInput-notchedOutline": {
											border: "1px solid #484850",
											borderRadius: "5px 5px 0 0"
										},
										fontSize: '1.75rem',
										fontWeight:'bold',
										padding:'0px 0px 0px 7px'
									}}
									inputProps={{ 'aria-label': 'Without label' }}

							>
								{projectCategories.map((cat, i) => {
									return (
											<MenuItem
													key={i}
													value={cat.name}
											>
												{cat.name}
											</MenuItem>
									)
								})}
							</Select>
						</FormControl>
					{/*</ThemeProvider>*/}
					<span className={'font-light '}>projects</span>
				</div>
				<div className={styles.galleryCards}>
					{displayContent.map((project,i) => {
						return (
							<ProjectCard key={i} project={project}/>
						)
					})}
				</div>
			</section>
	)
}
