"use client"
import {navItems} from "@/app/data/navItems";
import {useState} from "react";
import Link from "next/link";
import { Turn as Hamburger } from 'hamburger-react'


function NavLink({to, active, name}) {
	return <Link href={to} className={`${active? "active":""} nav__link mx-4 hover:scale-110 duration-70`}>
			{name}
		</Link>
}

// function MobileNav({open, setOpen}) {
// 	return (
// 			<div className={`mobileMenu ${open ? "-translate-x-0" : "-translate-x-full"} `}>
// 				<div className="mobileMenuHeader">
// 				<div className="logo">
// 					<Link href={'/'}>
// 						<span className={'font-extralight '}>zane</span><span className={'font-extrabold'}>wolf</span>
// 					</Link>
// 				</div>
// 				</div>
// 					<div className="flex flex-col justify-center mt-12">
// 						{navItems.map((navLink,i)=>{
// 							return (
// 									<Link key={i} href={navLink.path} className="text-4xl font-medium my-4 justify-center"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
// 											{navLink.name}
// 									</Link>
// 							)})}
// 					</div>
// 			</div>
// 	)
// }

export default function Navbar() {
	const [navActive, setNavActive] = useState(null);
	const [activeIdx, setActiveIdx] = useState(0);
	const [isOpen, setOpen]= useState(false)

	console.log(navActive, activeIdx)

	return (
			<header>
				<nav className={`nav`}>
					<Link href={"/"} onClick={()=>setActiveIdx(0)}>
							<h1 className="logo">
								<span className={'font-extralight '}>zane</span><span className={'font-extrabold'}>wolf</span>
							</h1>
					</Link>
					<div
							onClick={() => setNavActive(!navActive)}
							className={`nav__menu-bar`}
					>
						<Hamburger toggled={isOpen} toggle={setOpen} />
					</div>
					<div className={`${navActive ? "active" : ""} nav__menu-list`}>
						{navItems.map((menu, idx) => (
								<div
										onClick={() => {
											setActiveIdx(idx);
											setNavActive(false);
										}}
										key={idx}
								>
									<NavLink active={activeIdx === idx} to={menu.path} name={menu.name}/>
								</div>
						))}
					</div>
				</nav>
			</header>
	);
};

// export default function NavBar() {
//
// 	const [open, setOpen] = useState(false)
// 	const [activeLink, setActiveLink] = useState('home')
//
// 	const updateActiveLink = (pass) =>{
// 		setActiveLink(pass)
// 	}
//
// 	return (
// 			<nav>
// 				{open && <MobileNav open={open} setOpen={setOpen}/>}
//
// 				{!open &&
// 						<div className={'navbar'}>
// 							<div className="logo">
// 									<Link href={'/'}>
// 											<span className={'font-extralight '}>zane</span><span className={'font-extrabold'}>wolf</span>
// 									</Link>
// 							</div>
// 							<div className="menu">
// 								<div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center mt-2 mr-2 md:hidden text-lg" onClick={() => {
// 									setOpen(!open)
// 								}}>
// 									{/* hamburger button */}
// 									<span className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out bg-zinc-400 ${open && "rotate-45 translate-y-3.5"}`} />
// 									<span className={`h-1 w-full rounded-lg transition-all duration-300 ease-in-out bg-zinc-400 ${open ? "w-0 " : "w-full"}`} />
// 									<span className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out bg-zinc-400 ${open && "-rotate-45 -translate-y-3.5 b"}`} />
// 								</div>
//
// 								<div className="hidden md:flex text-lg md:text-2xl gap-8 z-10">
// 									{navItems.map((navLink,i)=>{
// 												return <NavLink to={navLink.path} key={i}>
// 													{navLink.name}
// 												</NavLink>
// 											}
// 									)}
// 								</div>
// 							</div>
// 						</div>
// 				}
// 				</nav>
// 	)
// }
