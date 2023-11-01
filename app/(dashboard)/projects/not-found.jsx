"use client"
import React, {useEffect} from 'react';
import Link from 'next/link'
import {useRouter} from "next/navigation";

export default function NotFound() {
	const router = useRouter()

	useEffect(()=> {
		setTimeout(()=>{
			// router.go(-1)
			router.push('/')
		},4000)
	},[])

	return (
			<main className="text-center">
				<h2 className="text-3xl">
					Whoops!
				</h2>
				<p>We could not find the project you were looking for.</p>
				<p>Taking you back to <Link href={"/project"}>Projects</Link> in 3..2..1..</p>
			</main>
	)
}