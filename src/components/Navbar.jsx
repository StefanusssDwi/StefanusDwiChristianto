import { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b-4 border-tertiary shadow-[4px_4px_0px_0px_#000] bg-[#FDFBF7] sticky top-0 z-50">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3 z-50">
                <div className="flex items-center justify-center w-8 h-8 border-4 border-tertiary bg-[#FFD43B] font-bold text-tertiary text-sm font-heading">
                    S
                </div>
                <a href="#Hero" className="font-black text-tertiary text-xl md:text-2xl tracking-tight font-heading">STEFANUS</a>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center justify-center gap-8 uppercase font-Isi">
                <a href="#About" className="text-lg font-bold text-tertiary hover:underline decoration-4 underline-offset-4 cursor-pointer">About</a>
                <a href="#Project" className="text-lg font-bold text-tertiary hover:underline decoration-4 underline-offset-4 cursor-pointer">Project</a>
                <a href="#Journey" className="text-lg font-bold text-tertiary hover:underline decoration-4 underline-offset-4 cursor-pointer">Experience</a>
                <a href="#Contact" className="text-lg font-bold text-tertiary hover:underline decoration-4 underline-offset-4 cursor-pointer">Contact</a>
            </ul>

            {/* Desktop CTA Button */}
            <div className="hidden md:block py-2 px-6 font-Isi bg-secondary border-4 border-tertiary shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150 ease-out cursor-pointer">
                <a href="https://wa.me/6285162910560?text=Halo%20Stefanus" target="_blank" rel="noopener noreferrer" className="text-tertiary font-bold tracking-widest text-sm uppercase">KOLABORASI SEKARANG</a>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
                className="md:hidden flex items-center justify-center w-10 h-10 bg-[#FFD43B] border-4 border-tertiary shadow-[2px_2px_0px_0px_#000] z-50 active:translate-y-1 active:translate-x-1 active:shadow-none transition-all"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <LuX size={24} className="text-tertiary" strokeWidth={3} /> : <LuMenu size={24} className="text-tertiary" strokeWidth={3} />}
            </button>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[#FDFBF7] border-b-4 border-tertiary flex flex-col items-center gap-6 py-8 md:hidden shadow-[0px_8px_0px_0px_#000] z-40">
                    <a href="#About" onClick={closeMenu} className="text-xl font-bold text-tertiary uppercase font-Isi hover:bg-[#FFD43B] px-8 py-2 border-2 border-transparent hover:border-tertiary transition-all">About</a>
                    <a href="#Project" onClick={closeMenu} className="text-xl font-bold text-tertiary uppercase font-Isi hover:bg-[#FFD43B] px-8 py-2 border-2 border-transparent hover:border-tertiary transition-all">Project</a>
                    <a href="#Journey" onClick={closeMenu} className="text-xl font-bold text-tertiary uppercase font-Isi hover:bg-[#FFD43B] px-8 py-2 border-2 border-transparent hover:border-tertiary transition-all">Experience</a>
                    <a href="#Contact" onClick={closeMenu} className="text-xl font-bold text-tertiary uppercase font-Isi hover:bg-[#FFD43B] px-8 py-2 border-2 border-transparent hover:border-tertiary transition-all">Contact</a>
                    
                    <div className="mt-4 px-6 py-3 bg-secondary border-4 border-tertiary shadow-[4px_4px_0px_0px_#000] active:shadow-none active:translate-y-1 active:translate-x-1">
                        <a href="https://wa.me/6285162910560?text=Halo%20Stefanus" onClick={closeMenu} target="_blank" rel="noopener noreferrer" className="text-tertiary font-bold tracking-widest text-base uppercase font-Isi">KOLABORASI</a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;