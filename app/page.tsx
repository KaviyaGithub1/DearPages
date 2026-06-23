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
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#FDFBFB] dark:bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3a0005]/10 via-transparent to-[#3a0005]/10 dark:from-[#3a0005]/20 dark:via-zinc-950 dark:to-[#3A0A12]/30 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3a0005]/10 dark:bg-[#3a0005]/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
        
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
      <section id="about" className="w-full py-[100px] bg-white dark:bg-zinc-900">
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
      <section id="services" className="w-full py-[100px] bg-[#FDFBFB] dark:bg-zinc-950 border-t border-[#3a0005]/10 dark:border-zinc-800">
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
      <section id="collections" className="w-full py-[100px] bg-white dark:bg-zinc-900 border-t border-[#3a0005]/10 dark:border-zinc-800">
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
                    <span className="text-[#3a0005] dark:text-[#E8A5B1]">₹250</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>15+ Pages</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1]">₹500</span>
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
                    <span className="text-[#3a0005] dark:text-[#E8A5B1]">₹249</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>Marvel (Special Offer)</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1] font-bold">₹199</span>
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
                    <span className="text-[#3a0005] dark:text-[#E8A5B1]">₹50</span>
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
                    <span className="text-[#3a0005] dark:text-[#E8A5B1]">₹20</span>
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
                    <span className="text-[#3a0005] dark:text-[#E8A5B1]">₹40</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>6 x 8 Size</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1]">₹45</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>A4 Size</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1]">₹50</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <span>12 x 18 Size</span>
                    <span className="text-[#3a0005] dark:text-[#E8A5B1]">₹150</span>
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
                    <span className="text-[#3a0005] dark:text-[#E8A5B1]">₹49</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Instagram Promo Section */}
      <section className="w-full py-[100px] bg-[#FDFBFB] dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a 
            href="https://www.instagram.com/dearpages_art" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 transition-all duration-700 shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(232,165,177,0.3)] dark:hover:shadow-[0_20px_60px_-15px_rgba(58,0,5,0.6)] hover:-translate-y-2"
          >
            <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] dark:opacity-5 group-hover:opacity-10 group-hover:rotate-12 group-hover:scale-125 transition-all duration-1000 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-[pulse_4s_ease-in-out_infinite]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* 4. Order / Contact Section */}
      <section id="contact" className="w-full py-[100px] bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up opacity-0 delay-200">
          <div className="bg-[#FDFBFB] dark:bg-zinc-950 rounded-[3rem] p-8 sm:p-16 border border-[#3a0005]/10 dark:border-zinc-800 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-6">
              Ready to Order?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
              Whether you want to place a custom order or have questions about our existing collections, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919345708986" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:bg-[#128C7E] transition-colors shadow-lg shadow-[#25D366]/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                WhatsApp Us
              </a>
              <a href="tel:+919345708986" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-zinc-800 text-[#3a0005] dark:text-white border border-[#3a0005]/20 dark:border-zinc-700 font-bold text-lg hover:bg-[#FDFBFB] dark:hover:bg-zinc-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
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
