/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'images.ctfassets.net',
			},
			{
				hostname: 'downloads.ctfassets.net',
			},
		],//['images.ctfassets.net','downloads.ctfassets.net'],
		deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	}
}

module.exports = nextConfig
