export default function Banner() {
	return (
		<section className="w-full bg-gradient-to-r from-pink-200 via-green-100 to-yellow-100 py-12 md:py-20 px-2 sm:px-4 relative flex flex-col items-center justify-center min-h-[220px] md:min-h-[320px]">
			<div className="max-w-3xl mx-auto text-center">
				<h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-3 md:mb-4" style={{textShadow:'0 2px 8px rgba(0,0,0,0.08)'}}>Create Beautiful Resin Art</h1>
				<p className="text-base xs:text-lg md:text-xl text-black mb-6 md:mb-8">Premium quality resin supplies for artists and DIY enthusiasts</p>
				<button className="bg-white text-gray-800 font-semibold rounded-full px-6 py-2.5 sm:px-8 sm:py-3 shadow hover:bg-gray-100 transition text-base sm:text-lg">Shop Now</button>
			</div>
			<div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize:'32px 32px'}}></div>
		</section>
	);
}