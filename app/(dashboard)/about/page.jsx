"use client"
import React from 'react';
import {useState} from "react";
import Image from "next/image";
import profile from '../../../public/images/Profile_Hex.png';
import hex2 from '../../../public/images/Untitled.svg';
import Link from "next/link";
import styles from '../../styles/aboutMe.module.css'
// import timeline from '../../../public/images/Zaney_timeline_final_11.7.jpg'
// import Lightbox from "yet-another-react-lightbox";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/styles.css";


// const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
// const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

About.title= "About Me"
About.keywords = "about"


export default function About(){
	const [open, setOpen] = useState(false);

	//
	// function nextImageUrl(src, size) {
	// 	return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
	// }
	//
	// const images  =[timeline]
	//
	// const slides = images.map(({ src, width, height }) => ({
	// 	width,
	// 	height,
	// 	src: nextImageUrl(src, width),
	// 	srcSet: imageSizes
	// 			.concat(...deviceSizes)
	// 			.filter((size) => size <= width)
	// 			.map((size) => ({
	// 				src: nextImageUrl(src, size),
	// 				width: size,
	// 				height: Math.round((height / width) * size),
	// 			})),
	// }));


	return (
			<div>
				<div className={styles.aboutDiv}>
					<div className={styles.aboutHexContainer}>
						<div className={styles.auxHex}>
							<Link href={'/faq'}>
								<Image
										src={hex2}
										alt={'Hexagon svg with easter egg link to FAQ page'}
								/>
							</Link>
						</div >
						<div className={styles.profileHex}>
							<Image
									className={'aboutImage object-cover'}
									src={profile}
									sizes="50vw"
									alt={'profile picture of Zane Wolf'}
									priority={true}
									loading={'eager'}
							/>
						</div>
						<div className={styles.auxHex1}>
							<Link href={'https://scholar.google.com/citations?user=y16qFdcAAAAJ&hl=en'}>
								<Image
										src={hex2}
										alt={'Hexagon svg with easter egg link to google scholars'}
								/>
								{/*<polygon fill="lime" stroke="blue" stroke-width="10"*/}
								{/*				 points="850,75  958,137.5 958,262.5*/}
								{/*    850,325 742,262.6 742,137.5" />*/}
							</Link>
						</div>
					</div>
					<div className={styles.aboutContent}>
						<div className={styles.aboutText}>
							I am passionate about <span className={'font-bold text-secondary-500'}>sharing what I love and learn</span> with others, whether it's <span className={'font-bold text-secondary-400'}>teaching </span> science classes, <span className={'font-bold text-secondary-200'}>designing </span> data visualizations, <span className={'font-bold text-secondary-300'}>coding </span> useful websites and writing educational content, or even taking my friends rock climbing and throwing them off the cliff (they're tied to ropes, I promise).
						</div>
						{/*<div className={styles.docLinks}>*/}
						<div>I am currently open for work or collaborations.</div>
						<div>Check out my <Link href={'/Wolf_Resume_11.23.pdf'} className={'underline decoration-primary-200'}>Resume</Link>. </div>
						{/*</div>*/}

					</div>
				</div>
				<div className={'h-auto w-auto min-h-[20vh] max-w-[95vw] m-auto mb-10 justify-center text-center relative hover:cursor-zoom-in'}>
					<Image
							src={timeline}
							fill
							alt={'Hexagon svg with easter egg link to FAQ page'}
							className={'object-fill'}
							onClick={()=>setOpen(true)}
					/>
					{/*<Lightbox*/}
					{/*		open={open}*/}
					{/*		close={() => setOpen(false)}*/}
					{/*		slides={slides}*/}
					{/*		plugins={[Zoom]}*/}
					{/*/>*/}
				</div>
			</div>
	);
};

