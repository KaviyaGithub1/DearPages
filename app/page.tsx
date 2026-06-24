import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "Custom Design",
      description: "We tailor every detail to match your unique vision and style.",
      icon: "✨",
    },
    {
      title: "Premium Materials",
      description: "Only the highest quality papers and materials for a lasting impression.",
      icon: "💎",
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality.",
      icon: "🚀",
    },
    {
      title: "Bulk Orders",
      description: "Special pricing and dedicated support for large scale orders.",
      icon: "📦",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* 1. Hero Section */}
      {/* Animated Full-Page Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#3a0005]/10 dark:bg-[#3a0005]/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-fly"></div>
        <div className="absolute top-1/2 right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#E8A5B1]/10 dark:bg-[#E8A5B1]/15 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-fly delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#9A1E34]/10 dark:bg-[#9A1E34]/15 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-fly delay-4000"></div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBFB]/80 to-[#FDFBFB]/50 dark:from-zinc-950/80 dark:to-zinc-950/50 z-0"></div>

        <div className="relative z-10 flex flex-col items-center gap-8 text-center px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3a0005]/5 dark:bg-white/5 border border-[#3a0005]/10 dark:border-white/10 backdrop-blur-md text-[#3a0005] dark:text-zinc-300 text-sm font-medium animate-fade-in-up opacity-0">
            <span className="flex h-2 w-2 rounded-full bg-[#3a0005] dark:bg-[#E8A5B1] animate-pulse"></span>
            New collections available now
          </div>
          <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white animate-fade-in-up opacity-0 delay-100">
            Art that speaks <br />
            <span className="bg-gradient-to-r from-[#3a0005] to-[#9A1E34] dark:from-[#E8A5B1] dark:to-[#3a0005] bg-clip-text text-transparent">to your soul.</span>
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed animate-fade-in-up opacity-0 delay-200">
            Discover our exclusive collection of magazines, posters, and polaraids. Bring your walls to life with DearPages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in-up opacity-0 delay-300">
            <a href="#collections" className="px-8 py-4 rounded-full bg-[#3a0005] text-white font-bold text-lg hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-[#3a0005]/20">
              Explore Collections
            </a>
            <a href="#about" className="px-8 py-4 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-md border border-[#3a0005]/20 dark:border-white/10 text-[#3a0005] dark:text-white font-bold text-lg hover:bg-white/80 dark:hover:bg-white/20 transition-colors">
              Our Story
            </a>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="w-full py-[100px] bg-white/70 dark:bg-zinc-900/70 backdrop-blur-3xl relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6 animate-fade-in-up opacity-0 delay-100">
              <h2 className="text-sm font-bold tracking-widest text-[#3a0005] dark:text-[#E8A5B1] uppercase">Customized Magazines</h2>
              <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                Turning your special moments into timeless stories.
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We craft beautiful, customized magazines that make the perfect heartfelt gift for friends, partners, family, and colleagues. It is more than just a magazine; it is a celebration of the love and friendship that bonds you together.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Whether you are celebrating a birthday, a marriage, unforgettable trip memories, or the start of a new chapter in life, we are here to help you memorialize your journey. Let us craft the best memories of your life into a keepsake you will cherish forever.
              </p>
            </div>
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] sm:aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 animate-float">
              <Image
                src="/logo.jpeg"
                alt="DearPages Logo"
                fill
                className="object-cover transition-transform hover:scale-110 duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-[100px] bg-[#FDFBFB]/70 dark:bg-zinc-950/70 backdrop-blur-3xl border-t border-[#3a0005]/10 dark:border-zinc-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in-up opacity-0 delay-100">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              We offer a range of premium services to bring your ideas to life. Add more services easily in the code!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-[#3a0005]/10 dark:border-zinc-800 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3a0005]/10 dark:hover:shadow-[#E8A5B1]/5 animate-fade-in-up opacity-0" style={{ animationDelay: `${(index + 2) * 100}ms` }}>
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#3a0005]/5 dark:bg-[#E8A5B1]/10 text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">{service.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Collections Section */}
      <section id="collections" className="w-full py-[100px] bg-white/70 dark:bg-zinc-900/70 backdrop-blur-3xl border-t border-[#3a0005]/10 dark:border-zinc-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4">
              Our Collections
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              <strong>Everything we make is 100% customized for you.</strong> Browse through our meticulously crafted categories to find the perfect piece for your collection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom Magazines */}
            <div id="magazines" className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-[#3a0005]/10 dark:border-zinc-800 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[3/4] bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                <Image src="/collections/img1.jpeg" alt="Custom Magazines" fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 pointer-events-none"></div>
              </div>
              <div className="p-6 relative bg-white dark:bg-zinc-900">
                <h3 className="text-2xl font-bold text-[#3a0005] dark:text-zinc-50 mb-2">Custom Magazines</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">Curated visual stories and editorial brilliance.</p>
                <div className="flex flex-col gap-1 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>10 Pages</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1] font-bold bg-[#3a0005]/5 dark:bg-[#E8A5B1]/10 border border-[#3a0005]/20 dark:border-[#E8A5B1]/20 px-2.5 py-0.5 rounded-md shadow-sm">₹249</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>15+ Pages</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1] font-bold bg-[#3a0005]/5 dark:bg-[#E8A5B1]/10 border border-[#3a0005]/20 dark:border-[#E8A5B1]/20 px-2.5 py-0.5 rounded-md shadow-sm">₹499</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Movie Magazines */}
            <div id="movie-magazines" className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-[#3a0005]/10 dark:border-zinc-800 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[3/4] bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                <Image src="/collections/img2-movie.jpeg" alt="Movie Magazines" fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 pointer-events-none"></div>
              </div>
              <div className="p-6 relative bg-white dark:bg-zinc-900">
                <h3 className="text-2xl font-bold text-[#3a0005] dark:text-zinc-50 mb-2">Movie Magazines</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">Star in your own cinematic story. Fully customized.</p>
                <div className="flex flex-col gap-1 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>All Languages</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1] font-bold bg-[#3a0005]/5 dark:bg-[#E8A5B1]/10 border border-[#3a0005]/20 dark:border-[#E8A5B1]/20 px-2.5 py-0.5 rounded-md shadow-sm">₹249</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>Marvel (Special Offer)</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1] font-bold bg-[#3a0005]/5 dark:bg-[#E8A5B1]/10 border border-[#3a0005]/20 dark:border-[#E8A5B1]/20 px-2.5 py-0.5 rounded-md shadow-sm">₹199</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Posters */}
            <div id="posters" className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-[#3a0005]/10 dark:border-zinc-800 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[3/4] bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                <Image src="/collections/img3-spiderman.jpeg" alt="Posters" fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 pointer-events-none"></div>
              </div>
              <div className="p-6 relative bg-white dark:bg-zinc-900">
                <h3 className="text-2xl font-bold text-[#3a0005] dark:text-zinc-50 mb-2">Posters</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">High-impact art prints for bold statements.</p>
                <div className="flex flex-col gap-1 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>Each Poster</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1] font-bold bg-[#3a0005]/5 dark:bg-[#E8A5B1]/10 border border-[#3a0005]/20 dark:border-[#E8A5B1]/20 px-2.5 py-0.5 rounded-md shadow-sm">₹49</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Polaraids */}
            <div id="polaraids" className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-[#3a0005]/10 dark:border-zinc-800 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[3/4] bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                <Image src="/collections/img4-polaroids.jpeg" alt="Polaraids" fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 pointer-events-none"></div>
              </div>
              <div className="p-6 relative bg-white dark:bg-zinc-900">
                <h3 className="text-2xl font-bold text-[#3a0005] dark:text-zinc-50 mb-2">Polaraids</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">Nostalgic snapshots capturing fleeting moments.</p>
                <div className="flex flex-col gap-1 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>Each Polaroid</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1] font-bold bg-[#3a0005]/5 dark:bg-[#E8A5B1]/10 border border-[#3a0005]/20 dark:border-[#E8A5B1]/20 px-2.5 py-0.5 rounded-md shadow-sm">₹19</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wall Posters */}
            <div id="wall-posters" className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-[#3a0005]/10 dark:border-zinc-800 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[3/4] bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                <Image src="/collections/img5-wallposters.jpeg" alt="Wall Posters" fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 pointer-events-none"></div>
              </div>
              <div className="p-6 relative bg-white dark:bg-zinc-900">
                <h3 className="text-2xl font-bold text-[#3a0005] dark:text-zinc-50 mb-2">Wall Posters</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">Large format prints to transform entire rooms.</p>
                <div className="flex flex-col gap-1 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>4.5 x 5 Size</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1] font-bold bg-[#3a0005]/5 dark:bg-[#E8A5B1]/10 border border-[#3a0005]/20 dark:border-[#E8A5B1]/20 px-2.5 py-0.5 rounded-md shadow-sm">₹39</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>6 x 8 Size</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1] font-bold bg-[#3a0005]/5 dark:bg-[#E8A5B1]/10 border border-[#3a0005]/20 dark:border-[#E8A5B1]/20 px-2.5 py-0.5 rounded-md shadow-sm">₹45</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>A4 Size</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1] font-bold bg-[#3a0005]/5 dark:bg-[#E8A5B1]/10 border border-[#3a0005]/20 dark:border-[#E8A5B1]/20 px-2.5 py-0.5 rounded-md shadow-sm">₹49</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>12 x 18 Size</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1] font-bold bg-[#3a0005]/5 dark:bg-[#E8A5B1]/10 border border-[#3a0005]/20 dark:border-[#E8A5B1]/20 px-2.5 py-0.5 rounded-md shadow-sm">₹149</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Keychains */}
            <div id="keychains" className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-[#3a0005]/10 dark:border-zinc-800 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[3/4] bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                <Image src="/collections/img6-keychains.jpeg" alt="Picture Keychains" fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 pointer-events-none"></div>
              </div>
              <div className="p-6 relative bg-white dark:bg-zinc-900">
                <h3 className="text-2xl font-bold text-[#3a0005] dark:text-zinc-50 mb-2">Picture Keychains</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">Carry your favorite memories wherever you go.</p>
                <div className="flex flex-col gap-1 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>Each Keychain</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1] font-bold bg-[#3a0005]/5 dark:bg-[#E8A5B1]/10 border border-[#3a0005]/20 dark:border-[#E8A5B1]/20 px-2.5 py-0.5 rounded-md shadow-sm">₹49</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5. Customer Reviews Section */}
      <section id="reviews" className="w-full py-[100px] bg-[#FDFBFB]/70 dark:bg-zinc-950/70 backdrop-blur-3xl border-t border-[#3a0005]/10 dark:border-zinc-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up opacity-0 delay-100">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4">
              Loved by Our Clients
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here is what people are saying about our custom creations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Basilea Lincy", text: "The custom magazine exceeded all my expectations! The paper quality is premium and the aesthetic is just perfect.", stars: 5 },
              { name: "Nikitha", text: "I ordered a Marvel movie magazine for my brother's birthday. Best gift ever. He absolutely loved the personalization!", stars: 5 },
              { name: "Tharun", text: "The polaroids came out so cute. The packaging was beautiful and delivery was super fast in Chennai. Highly recommend!", stars: 5 }
            ].map((review, i) => (
              <div key={i} className="flex flex-col bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-8 rounded-3xl border border-[#3a0005]/10 dark:border-zinc-800 shadow-xl animate-fade-in-up opacity-0" style={{ animationDelay: `${(i + 2) * 100}ms` }}>
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(review.stars)].map((_, j) => (
                    <svg key={j} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 italic flex-1 mb-6">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3a0005] to-[#E8A5B1] flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant Instagram Promo Section */}
      <section className="w-full py-[100px] bg-[#FDFBFB]/70 dark:bg-zinc-950/70 backdrop-blur-3xl relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="https://www.instagram.com/dearpages_art"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 transition-all duration-700 shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(232,165,177,0.3)] dark:hover:shadow-[0_20px_60px_-15px_rgba(58,0,5,0.6)] hover:-translate-y-2"
          >
            <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-12 p-4 opacity-[0.04] dark:opacity-10 group-hover:opacity-15 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-1000 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-[pulse_4s_ease-in-out_infinite]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
              <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[3px] shadow-lg group-hover:scale-105 transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center relative z-10 overflow-hidden">
                  <Image src="/logo.jpeg" alt="DearPages Logo" fill className="object-cover" sizes="(max-width: 768px) 96px, 112px" />
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm font-bold tracking-widest text-[#3a0005] dark:text-[#E8A5B1] uppercase mb-2 group-hover:text-purple-600 dark:group-hover:text-yellow-400 transition-colors duration-500">Join Our Community</p>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mb-3 group-hover:translate-x-2 transition-transform duration-500">@DearPages_art</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 group-hover:translate-x-2 transition-transform duration-500 delay-75">
                  Do follow our Instagram page! <br className="hidden sm:block" />
                  <span className="font-semibold text-zinc-900 dark:text-white bg-gradient-to-r from-purple-600 to-red-500 bg-[length:0%_2px] bg-no-repeat bg-bottom group-hover:bg-[length:100%_2px] transition-all duration-700">Like, Share, Follow, and Order!</span>
                </p>
              </div>

              <div className="hidden sm:flex flex-shrink-0 items-center justify-center w-14 h-14 rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:to-purple-600 text-zinc-400 group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section id="faq" className="w-full py-[100px] bg-white/70 dark:bg-zinc-900/70 backdrop-blur-3xl border-t border-[#3a0005]/10 dark:border-zinc-800 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up opacity-0 delay-100">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Everything you need to know about our custom creations and ordering process.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { q: "How do I place an order for a custom magazine?", a: "Once you select the size and number of pages, simply click on the 'WhatsApp Us' button below. We will guide you on how to share your high-quality photos and text securely." },
              { q: "How long does shipping take?", a: "Because every item is fully customized, it takes about 3-5 days for design and printing. Delivery within Chennai takes an additional 1-2 days." },
              { q: "Do you deliver outside of Chennai?", a: "Currently, we only offer delivery within Chennai to ensure our premium products arrive in pristine condition. Shipping charges apply based on your exact location." },
              { q: "Can I review the magazine before it gets printed?", a: "Yes! We want you to absolutely love your custom piece. We will send a digital preview of the layout for your approval before it goes to print." },
            ].map((faq, i) => (
              <details key={i} className="group bg-[#FDFBFB]/80 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl border border-[#3a0005]/10 dark:border-zinc-800 [&_summary::-webkit-details-marker]:hidden animate-fade-in-up opacity-0 shadow-sm" style={{ animationDelay: `${(i + 2) * 100}ms` }}>
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-medium text-zinc-900 dark:text-zinc-100">
                  <h3 className="text-lg">{faq.q}</h3>
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180 bg-[#3a0005]/10 dark:bg-[#E8A5B1]/20 p-2 rounded-full text-[#3a0005] dark:text-[#E8A5B1]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-[#3a0005]/5 dark:border-zinc-800 pt-4 mt-2">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Order / Contact Section */}
      <section id="contact" className="w-full py-[100px] bg-white/70 dark:bg-zinc-900/70 backdrop-blur-3xl relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up opacity-0 delay-200">
          <div className="bg-[#FDFBFB] dark:bg-zinc-950 rounded-[3rem] p-8 sm:p-16 border border-[#3a0005]/10 dark:border-zinc-800 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-6">
              Ready to Order?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
              Whether you want to place a custom order or have questions about our existing collections, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919345708986" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#3a0005] text-[#FDFBFB] font-bold text-lg hover:bg-[#1a0002] transition-colors shadow-lg shadow-[#3a0005]/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                WhatsApp Us
              </a>
              <a href="tel:+919345708986" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-zinc-800 text-[#3a0005] dark:text-white border border-[#3a0005]/20 dark:border-zinc-700 font-bold text-lg hover:bg-[#FDFBFB] dark:hover:bg-zinc-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Call: 9345708986
              </a>
            </div>

            <div className="mt-10">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3a0005]/5 dark:bg-white/5 border border-[#3a0005]/10 dark:border-white/10 text-[#3a0005] dark:text-zinc-300 text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-[#3a0005] dark:bg-[#E8A5B1]"></span>
                📍 Delivery only in Chennai (+ Shipping Charges Apply)
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
