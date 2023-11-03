import styles from "../../styles/blogGallery.module.css"
import BlogCard from "@/app/components/cards/BlogCard";
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import {useSearchParams} from "next/navigation";


export default function BlogGallery({blogs}) {
	// const [selectedCat,setSelectedCat]= useState('All')
	// const [displayContent, setDisplayContent] = useState(projects)


	//




	// useEffect(() => {
	// 	if (selectedCat == 'All') {
	// 		setDisplayContent(projects)
	// 	} else {
	// 		setDisplayContent(projects.filter(project => project.fields.categories == selectedCat))
	// 	}
	//
	// }, [selectedCat])

	// const handleSelect = (event) => {
	// 	// console.log(event)
	// 	setSelectedCat(event.target.value)
	// }

	// console.log('project gallery',projects[0])
	return (
			<section className={styles.blogLayout}>
				{/*<div className={styles.selectFormDiv}>*/}
				{/*	/!*<ThemeProvider theme={theme}>*!/*/}
				{/*	<FormControl sx={{m: 1, minWidth: 80}}>*/}
				{/*		<Select*/}
				{/*				labelId="demo-simple-select-autowidth-label"*/}
				{/*				id="demo-simple-select-autowidth"*/}
				{/*				value={selectedCat}*/}
				{/*				onChange={handleSelect}*/}
				{/*				autoWidth*/}
				{/*				// className={classes.select}*/}
				{/*				sx={{*/}
				{/*					boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 6px 0px, rgba(0, 0, 0, 0.15) 0px 4px 6px 1px;',*/}
				{/*					'.MuiOutlinedInput-notchedOutline': {*/}
				{/*						border: 0,*/}
				{/*						'&:after': {*/}
				{/*							borderColor: 'white',*/}
				{/*						},*/}
				{/*					} ,*/}
				{/*					fontSize:'2rem',*/}
				{/*					padding:'0px 0px 0px 7px'*/}
				{/*				}}*/}
				{/*				inputProps={{ 'aria-label': 'Without label' }}*/}

				{/*		>*/}
				{/*			{projectCategories.map((cat, i) => {*/}
				{/*				return (*/}
				{/*						<MenuItem*/}
				{/*								key={i}*/}
				{/*								value={cat.name}*/}
				{/*						>*/}
				{/*							{cat.name}*/}
				{/*						</MenuItem>*/}
				{/*				)*/}
				{/*			})}*/}
				{/*		</Select>*/}
				{/*	</FormControl>*/}
				{/*	/!*</ThemeProvider>*!/*/}
				{/*	<span className={'font-light '}>projects</span>*/}
				{/*</div>*/}
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
