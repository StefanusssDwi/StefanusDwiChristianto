function Footer() {
    return (
        <footer className="bg-secondary">
            <div className="flex flex-col md:flex-row items-center justify-between px-6 py-8 md:py-4 border-t-4 border-tertiary gap-6 md:gap-0 text-center md:text-left">        
                <h1 className="text-3xl md:text-2xl font-black text-tertiary tracking-wide uppercase font-heading">Stefanus</h1>
                <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8 font-Isi">
                    <li>
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=stefanusdwichristianto@gmail.com&su=Peluang%20Kolaborasi%20-%20Stefanus"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-sm md:text-md font-bold text-tertiary hover:underline decoration-2 underline-offset-4 cursor-pointer"
                        >
                            EMAIL
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.linkedin.com/in/stefanus-dwi-christianto/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-sm md:text-md font-bold text-tertiary hover:underline decoration-2 underline-offset-4 cursor-pointer"
                        >
                            LINKEDIN
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/StefanusssDwi" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-sm md:text-md font-bold text-tertiary hover:underline decoration-2 underline-offset-4 cursor-pointer"
                        >
                            GITHUB
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://wa.me/6285162910560?text=Halo%20Stefanus" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-sm md:text-md font-bold text-tertiary hover:underline decoration-2 underline-offset-4 cursor-pointer"
                        >
                            WHATSAPP
                        </a>
                    </li>
                </ul>
                <p className="text-xs md:text-sm font-bold text-tertiary tracking-widest mt-4 md:mt-0 opacity-80">
                    &copy; 2026 STEFANUS - Build With Confidence!
                </p>

            </div>
        </footer>
    )
}

export default Footer;