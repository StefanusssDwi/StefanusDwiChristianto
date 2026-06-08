import { DiTerminal } from 'react-icons/di';
import { LuBot, LuFlame, LuGlobe } from "react-icons/lu";
import { LuStar, LuBriefcase, LuGraduationCap } from "react-icons/lu";
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { useState } from 'react';
import { projects } from '../data/Project';
import { tech } from '../data/Techs';
import { motion } from 'framer-motion';

function Home({ isHeroReady }) {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <div className="bg-neutral overflow-x-hidden">
            {/* Hero Section */}
            <section id='Hero' className="py-20 md:py-36 overflow-hidden">
                <motion.div 
                    variants={staggerContainer} 
                    initial="hidden" 
                    animate={isHeroReady ? "visible" : "hidden"}
                    className="flex flex-col gap-6 items-start justify-start px-6 max-w-7xl mx-auto"
                >
                    <motion.div variants={fadeInUp} className="flex items-center gap-2 bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-36 -ml-4 md:-ml-8 transform: -rotate-8">
                        <p className="w-3 h-3 rounded-full bg-[#ff5f56] border-2 border-black" />
                        <p className="w-3 h-3 rounded-full bg-[#ffbd2e] border-2 border-black" />
                        <p className="w-3 h-3 rounded-full bg-[#27c93f] border-2 border-black" />
                    </motion.div>
                    
                    <motion.div variants={fadeInUp} className="py-2 px-4 mt-4 md:mt-6 bg-secondary border-4 border-tertiary shadow-[4px_4px_0px_0px_#000] transform: rotate-8 animate-float">
                        <p className="text-gray-600 font-bold tracking-widest uppercase text-xs md:text-sm">Available For Work</p>
                    </motion.div>
                </motion.div>
                <motion.div 
                    variants={staggerContainer} 
                    initial="hidden" 
                    animate={isHeroReady ? "visible" : "hidden"}
                    className="flex flex-col items-start py-10 md:py-16 px-6 max-w-7xl mx-auto gap-2 font-heading"
                >
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-wide bg-linear-to-r from-tertiary via-secondary to-tertiary bg-size-[200%_auto] text-transparent bg-clip-text animate-text-gradient">STEFANUS.</motion.h2>
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-tertiary tracking-wide ">FULLSTACK DEVELOPER.</motion.h2>
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-tertiary tracking-wide">LOGIC TO <br className="hidden md:block" /> PIXELS.</motion.h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto gap-10">
                    <motion.p 
                        variants={fadeInUp} initial="hidden" animate={isHeroReady ? "visible" : "hidden"}
                        className="text-lg md:text-2xl text-gray-600 font-semibold font-Isi tracking-wide leading-relaxed max-w-2xl pt-4 md:pt-8 text-justify md:text-left"
                    >
                        Merakit aplikasi web modern dari hulu ke hilir. Menggabungkan pemahaman desain antarmuka dengan keahlian pemrograman web untuk menciptakan pengalaman pengguna yang cepat, intuitif, dan mudah diskalakan.
                    </motion.p>
                    
                    {/* Responsif: Tambahkan margin auto agar ke tengah di HP */}
                    <motion.div 
                        variants={slideInRight} initial="hidden" animate={isHeroReady ? "visible" : "hidden"}
                        className="w-full max-w-sm px-6 py-2 bg-white border-4 font-Mono border-tertiary shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] transition-all duration-150 ease-out cursor-pointer transform: rotate-3 md:rotate-8 mx-auto md:mx-0 mt-8 md:mt-0"
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-md font-bold tracking-wide text-tertiary">SYSTEM.STATUS</p>
                            <DiTerminal size={36} />
                        </div>
                        <hr className="border-2 border-tertiary my-2"/>
                        <div className="flex items-center justify-between py-2">
                            <p className="text-md font-semibold tracking-wide text-tertiary">Coffee:</p>
                            <p className="text-md font-semibold tracking-wide text-tertiary">100%</p>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <p className="text-md font-semibold tracking-wide text-tertiary">Bugs:</p>
                            <p className="text-md font-semibold tracking-wide text-tertiary">0%</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id='About' className="py-20 md:py-32 overflow-hidden">
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}
                    className="flex items-center justify-center px-6 max-w-7xl mx-auto gap-2 md:gap-4 flex-col md:flex-row text-center md:text-left"
                >
                    <div className="px-6 py-3 bg-primary border-4 border-tertiary shadow-[4px_4px_0px_0px_#000]">
                        <h2 className="text-3xl md:text-4xl font-bold text-tertiary tracking-wide font-heading">ABOUT ME</h2>
                    </div>
                    <hr className="hidden md:block border-2 border-tertiary w-full max-w-3xl"/>
                </motion.div>
                <motion.div 
                    variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                    className="relative py-12 md:py-20 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-10 px-6 max-w-7xl mx-auto font-Isi"
                >
                    {/* Responsif: Rotasi diperkecil di HP agar tidak terlalu memakan lebar layar */}
                    <motion.div variants={fadeInUp} className="relative flex-1 w-full md:w-1/3 p-6 bg-white border-4 border-tertiary shadow-[4px_4px_0px_0px_#000] z-10 md:mr-5 transform: rotate-0 md:-rotate-3 hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex pb-4 text-tertiary"><LuFlame size={46} strokeWidth={2.5} /></div>
                        <h3 className="text-xl md:text-2xl font-black text-tertiary tracking-tight uppercase">THE ETERNAL BETA.</h3>
                        <p className="pt-4 text-justify text-tertiary font-semibold tracking-wide leading-relaxed text-sm md:text-base">Gelar sarjana hanyalah garis start, bukan garis finish. Saya menolak sekadar menjadi pembelajar pasif. Cara terbaik untuk memahami teknologi baru bukanlah dengan menghafal dokumentasi, tapi dengan langsung merakit sistem, menabrak error, dan merombak kode. Belajar secara agresif, eksekusi secara brutal.</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="relative flex-1 w-full md:w-1/3 p-6 bg-quarternary border-4 border-tertiary shadow-[4px_4px_0px_0px_#000] z-20 md:translate-y-16 mt-0 md:mr-5 transform: rotate-0 md:rotate-5 hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex pb-4 text-white"><LuBot size={46} strokeWidth={2.5} /></div>
                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase">CYBORG DEVELOPER.</h3>
                        <p className="pt-4 text-justify text-white font-semibold tracking-wide leading-relaxed text-sm md:text-base">Saya tidak anti-AI, saya memanfaatkannya secara maksimal. Memakai AI sebagai co-pilot membantu saya memangkas waktu debugging dan boilerplate. Hasilnya? Saya bisa mengalihkan 100% energi dan logika pikiran saya untuk merancang arsitektur aplikasi yang lebih solid, scalable, dan memberikan hasil akhir yang jauh melampaui standar.</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="relative flex-1 w-full md:w-1/3 p-6 bg-primary border-4 border-tertiary shadow-[4px_4px_0px_0px_#000] z-10 md:translate-y-5 mt-0 transform: rotate-0 md:-rotate-5 hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex pb-4 text-tertiary"><LuGlobe size={46} strokeWidth={2.5} /></div>
                        <h3 className="text-xl md:text-2xl font-black text-tertiary tracking-tight uppercase">IMPACT OVER PIXELS.</h3>
                        <p className="pt-4 text-justify text-tertiary font-semibold tracking-wide leading-relaxed text-sm md:text-base">Kode yang rapi nggak ada artinya kalau nggak memecahkan masalah. Pengalaman menangani integrasi sistem antrean medis mengajarkan saya satu hal: teknologi harus berdampak. Saya merakit frontend dan logika IT bukan sekadar supaya terlihat keren di layar komputer, tapi untuk memastikan sistem tersebut benar-benar mempermudah operasional di dunia nyata.</p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Project */}
            <section id='Project' className="py-20 md:py-38">
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}
                    className="flex flex-col md:flex-row items-center justify-end px-6 max-w-7xl mx-auto gap-4 mb-10 md:mb-16"
                >
                    <hr className="hidden md:block border-2 border-black w-full" />
                    <div className="px-6 py-3 w-full md:w-auto text-center md:text-left bg-[#FFD43B] border-4 border-black shadow-[4px_4px_0px_0px_#000]">
                        <h2 className="text-2xl md:text-4xl font-black text-black tracking-wide uppercase whitespace-normal md:whitespace-nowrap font-heading">MY PROJECT</h2>
                    </div>
                </motion.div>

                {/* Preview */}
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-8 md:mt-12">
                    {projects.map((project, index) => (
                    <motion.div 
                        variants={fadeInUp} 
                        key={project.id} 
                        onClick={() => openModal(project)}
                        className={`
                            ${index % 2 === 0 ? 'md:col-span-7 rotate-0 md:-rotate-1' : 'md:col-span-5 md:translate-y-3 rotate-0 md:rotate-1'} 
                            ${project.bgColor} border-4 border-black shadow-[6px_6px_0px_0px_#000] md:shadow-[8px_8px_0px_0px_#000] 
                            hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_#000] md:hover:shadow-[12px_12px_0px_0px_#000] hover:rotate-0 transition-all duration-300 cursor-pointer flex flex-col relative
                        `}
                    >
                        <div className="bg-gray-200 border-b-4 border-black px-4 py-2 flex justify-between items-center">
                            <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full border-2 border-black bg-white"></div>
                            <div className="w-3 h-3 rounded-full border-2 border-black bg-white"></div>
                            </div>
                            <p className="font-Isi text-[10px] font-bold uppercase tracking-wider truncate ml-2">{project.windowName}</p>
                        </div>

                        <div className="p-4 md:p-6 pb-0 flex flex-col justify-between h-full">
                            <div>
                            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                {project.tech.map((t, i) => (
                                <span key={i} className="px-2 py-1 text-[10px] md:text-xs font-Isi font-bold bg-[#FFD43B] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                                    {t}
                                </span>
                                ))}
                            </div>
                            <h3 className={`text-2xl md:text-3xl font-black uppercase mb-3 font-heading ${project.textColor}`}>{project.title}</h3>
                            <p className={`text-sm md:text-base font-semibold mb-6 font-Isi ${project.textColor} leading-relaxed`}>{project.shortDesc}</p>
                            </div>
                        </div>
                    </motion.div>
                    ))}
                </motion.div>

                {/* Modal Detail Proyek */}
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6">
                    <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] md:shadow-[8px_8px_0px_0px_#000] w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-fade-in-up">
                        <div className="bg-gray-200 border-b-4 border-black px-4 py-3 flex justify-between items-center sticky top-0 z-10">
                        <p className="text-xs md:text-sm font-Isi font-bold uppercase truncate max-w-50 md:max-w-none">DETAIL_{selectedProject.windowName}</p>
                        <button onClick={closeModal} className="w-8 h-8 flex items-center justify-center bg-red-500 border-2 border-black text-white font-bold hover:bg-red-600 shadow-[2px_2px_0px_0px_#000] active:shadow-none active:translate-y-0.5 active:translate-x-0.5">
                            X
                        </button>
                        </div>
                        <div className="p-4 md:p-8">
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 md:h-64 object-cover border-4 border-black mb-6 md:mb-8 shadow-[4px_4px_0px_0px_#000]" />
                        
                        <h2 className="text-2xl md:text-4xl font-heading font-black text-black uppercase mb-4">{selectedProject.title}</h2>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                            {selectedProject.tech.map((t, i) => (
                            <span key={i} className="px-2 py-1 md:px-3 md:py-1 font-Isi text-xs md:text-sm font-bold bg-[#FFD43B] text-black border-2 border-black">
                                {t}
                            </span>
                            ))}
                        </div>

                        <p className="text-sm md:text-lg text-gray-800 font-Isi font-semibold leading-relaxed border-l-4 border-black pl-4">
                            {selectedProject.longDesc}
                        </p>
                        </div>
                    </div>
                    </div>
                )}
            </section>

            {/* Tech Stack */}
            <section id='Tech' className="py-20 md:py-24 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-start px-6 max-w-7xl mx-auto gap-4">
                    <div className="px-6 py-3 bg-primary border-4 border-tertiary shadow-[4px_4px_0px_0px_#000] w-full md:w-auto text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-black text-tertiary tracking-wide uppercase font-heading">TECH STACK</h2>
                    </div>
                    <hr className="hidden md:block border-2 border-tertiary w-full max-w-2xl"/>
                </div>
                <div className="overflow-hidden w-full max-w-7xl mx-auto mt-10 md:mt-20 py-16 md:py-32 px-6">
                    <div className="flex items-center whitespace-nowrap group">
                        <div className="flex animate-scroll-r2l flex-none gap-4 md:gap-6 pr-4 md:pr-6 group-hover:[animation-play-state:paused]">
                            {tech.map((tech, index) => (
                                <div 
                                    key={`tech-1-${index}`} 
                                    className={`px-4 md:px-6 py-2 md:py-3 ${tech.bg} border-4 border-tertiary shadow-[4px_4px_0px_0px_#000] flex items-center justify-center hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#000] active:translate-y-2 active:translate-x-2 active:shadow-none transition-all duration-150 cursor-default`}
                                >
                                    <h3 className={`text-base md:text-xl font-bold ${tech.text} tracking-wide font-heading uppercase whitespace-nowrap`}>{tech.name}</h3>
                                </div>
                            ))}
                        </div>
                        <div className="flex animate-scroll-r2l flex-none gap-4 md:gap-6 pr-4 md:pr-6 group-hover:[animation-play-state:paused]" aria-hidden="true">
                            {tech.map((tech, index) => (
                                <div 
                                    key={`tech-2-${index}`} 
                                    className={`px-4 md:px-6 py-2 md:py-3 ${tech.bg} border-4 border-tertiary shadow-[4px_4px_0px_0px_#000] flex items-center justify-center hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#000] active:translate-y-2 active:translate-x-2 active:shadow-none transition-all duration-150 cursor-default`}
                                >
                                    <h3 className={`text-base md:text-xl font-bold ${tech.text} font-heading tracking-wide uppercase whitespace-nowrap`}>{tech.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey */}
            <section id='Journey' className="py-20 md:py-24 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-center px-6 max-w-7xl mx-auto gap-4 md:gap-2">
                    <hr className="hidden md:block border-2 border-tertiary w-full max-w-sm"/>
                    <div className="px-6 py-3 bg-primary border-4 border-tertiary shadow-[4px_4px_0px_0px_#000] z-10 w-full md:w-auto text-center">
                        <h2 className="text-2xl md:text-4xl font-black text-tertiary tracking-wide uppercase font-heading">MY IT JOURNEY SO FAR</h2>
                    </div>
                </div>

                <div className="relative max-w-5xl mx-auto mt-12 md:mt-20 px-6">
                    <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-tertiary md:-translate-x-1/2"></div>
                    
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}
                        className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-12 md:mb-16 pl-14 md:pl-0"
                    >
                        <div className="absolute left-5 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-quarternary border-4 border-tertiary flex items-center justify-center z-10 shadow-[4px_4px_0px_0px_#000] rotate-45">
                            <LuStar className="text-white -rotate-45" size={20} strokeWidth={3} />
                        </div>

                        <div className="w-full md:w-[45%]">
                            <div className="p-4 md:p-6 bg-white border-4 border-tertiary shadow-[4px_4px_0px_0px_#000]">
                                <p className="text-quarternary uppercase font-black text-xs md:text-sm tracking-wider mb-2 font-Mono">Oktober 2025 - Januari 2026</p>
                                <h4 className="text-xl md:text-3xl font-black text-tertiary tracking-tight uppercase leading-none font-heading">Fullstack Internship</h4>
                                <p className="text-sm md:text-lg text-gray-800 font-bold tracking-wide mt-2 font-Mono">RSK NGESTI WALUYO</p>
                                <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-700 font-medium tracking-wide font-Isi text-justify">Membangun sistem antrean poliklinik terintegrasi (React/Express) dan merombak arsitektur backend bridging data (Python) untuk SATU SEHAT & BPJS demi efisiensi operasional rumah sakit.</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-[45%]"></div>
                    </motion.div>

                    <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-12 md:mb-16 pl-14 md:pl-0">
                        <div className="absolute left-5 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-[#FFD43B] border-4 border-tertiary flex items-center justify-center z-10 shadow-[4px_4px_0px_0px_#000]">
                            <LuBriefcase className="text-tertiary" size={20} strokeWidth={3} />
                        </div>
                        <div className="hidden md:block w-[45%]"></div>
                        <div className="w-full md:w-[45%]">
                            <div className="p-4 md:p-6 bg-white border-4 border-tertiary shadow-[4px_4px_0px_0px_#000]">
                                <p className="text-quarternary uppercase font-black text-xs md:text-sm tracking-wider mb-2 font-Mono">September 2024 - Januari 2025</p>
                                <h4 className="text-xl md:text-3xl font-black text-tertiary tracking-tight uppercase leading-none font-heading">Web Development & UI/UX Design</h4>
                                <p className="text-sm md:text-lg text-gray-800 font-bold tracking-wide mt-2 font-Mono">Studi Independen at Infinite Learning</p>
                                <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-700 font-medium tracking-wide font-Isi text-justify">Menguasai siklus pengembangan SDLC & Agile. Memimpin eksekusi Front-End (React & Tailwind) untuk proyek akhir aplikasi manajemen peternakan interaktif.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-12 md:mb-16 pl-14 md:pl-0">
                        <div className="absolute left-5 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-primary border-4 border-tertiary flex items-center justify-center z-10 shadow-[4px_4px_0px_0px_#000] rotate-45">
                            <LuGraduationCap className="text-tertiary -rotate-45" size={20} strokeWidth={3} />
                        </div>
                        <div className="w-full md:w-[45%]">
                            <div className="p-4 md:p-6 bg-white border-4 border-tertiary shadow-[4px_4px_0px_0px_#000]">
                                <p className="text-quarternary uppercase font-black text-xs md:text-sm tracking-wider mb-2 font-Mono">September 2022 - April 2026</p>
                                <h4 className="text-xl md:text-3xl font-black text-tertiary tracking-tight uppercase leading-none font-heading">IT College</h4>
                                <p className="text-sm md:text-lg text-gray-800 font-bold tracking-wide mt-2 font-Mono">UNIVERSITAS AMIKOM YOGYAKARTA</p>
                                <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-700 font-medium tracking-wide font-Isi text-justify">Lulusan baru (fresh graduate) yang siap deploy. Memadukan pemahaman logika algoritma dengan eksekusi Frontend yang presisi untuk menciptakan produk digital yang fungsional dan teruji.</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-[45%]"></div>
                    </div>

                </div>
            </section>

            {/* Contact */}
            <section id='Contact' className="py-20 md:py-36 overflow-hidden">
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}
                    className="flex flex-col items-center justify-center px-4 md:px-6 max-w-7xl mx-auto gap-2 p-6 md:p-8 bg-quarternary border-4 border-tertiary shadow-[4px_4px_0px_0px_#000]"
                >
                    <div className="flex flex-col max-w-5xl mx-auto gap-4">
                        <h2 className="text-white text-3xl md:text-5xl uppercase text-center font-bold tracking-wide font-heading leading-tight">punya proyek menarik atau sekadar ingin berdiskusi terkait website?</h2>
                        <p className="text-base md:text-xl text-white text-center font-semibold tracking-wide leading-relaxed font-Mono">Mari kita buat sesuatu yang nyata.</p>
                    </div>
                    <div className="px-8 md:px-12 py-3 md:py-4 mt-6 bg-white border-4 border-tertiary shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150 ease-out cursor-pointer text-center">
                        <a href="https://wa.me/6285162910560?text=Halo%20Stefanus" target="_blank" rel="noopener noreferrer" className="text-lg md:text-2xl font-bold text-tertiary tracking-widest uppercase font-Isi">Kolaborasi Sekarang</a>
                    </div>
                    {/* Responsif: Menambahkan flex-wrap agar tidak bertabrakan di HP */}
                    <div className="flex flex-wrap pt-8 md:pt-10 items-center justify-center gap-4 md:gap-6 font-Isi">
                        <div className='flex items-center justify-center gap-1 border-b-3 border-transparent hover:border-white pb-1 transition-all duration-150 cursor-pointer text-white'>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=stefanusdwichristianto@gmail.com&su=Peluang%20Kolaborasi%20-%20Stefanus" target="_blank" rel="noopener noreferrer" className="flex gap-1 items-center">
                                <AiOutlineMail size={20} className="md:w-6 md:h-6" stroke='currentColor' strokeWidth="20"/>
                                <p className="font-bold text-sm md:text-base">EMAIL</p>
                            </a>
                        </div>
                        <div className='flex items-center justify-center gap-1 border-b-3 border-transparent hover:border-white pb-1 transition-all duration-150 cursor-pointer text-white'>
                            <a href="https://www.linkedin.com/in/stefanus-dwi-christianto/" target="_blank" rel="noopener noreferrer" className="flex gap-1 items-center">
                                <AiOutlineLinkedin size={20} className="md:w-6 md:h-6" stroke='currentColor' strokeWidth="20" />
                                <p className="font-bold text-sm md:text-base">LINKEDIN</p>
                            </a>
                        </div>
                        <div className='flex items-center justify-center gap-1 border-b-3 border-transparent hover:border-white pb-1 transition-all duration-150 cursor-pointer text-white'>
                            <a href="https://github.com/StefanusssDwi" target="_blank" rel="noopener noreferrer" className="flex gap-1 items-center">
                                <AiOutlineGithub size={20} className="md:w-6 md:h-6" stroke='currentColor' strokeWidth="20" />
                                <p className="font-bold text-sm md:text-base">GITHUB</p>
                            </a>
                        </div>
                        <div className='flex items-center justify-center gap-1 border-b-2 border-transparent hover:border-white pb-1 transition-all duration-150 cursor-pointer text-white'>
                            <a href="https://wa.me/6285162910560?text=Halo%20Stefanus" target="_blank" rel="noopener noreferrer"  className="flex gap-1 items-center">
                                <AiOutlineWhatsApp size={20} className="md:w-6 md:h-6" stroke='currentColor' strokeWidth="20" />
                                <p className="font-bold text-sm md:text-base">WHATSAPP</p>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default Home;