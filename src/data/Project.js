import AntrianPoliklinik from "../assets/Antrian-Poliklinik.png"
import TaskManagement from "../assets/Task-Management.png"
import AbcSchool from "../assets/ABC-School.png"
import Haka from "../assets/Haka.png"
import StJudes from "../assets/St-Judes-Academy.png"

export const projects = [
  {
    id: 1,
    title: "Antrian Poliklinik",
    windowName: "Antrian_Poliklinik.EXE",
    tech: ["React", "JavaScript", "Tailwind", "Express", "SQL Server"],
    shortDesc: "Sistem antrian pasien real-time terintegrasi untuk RSK Ngesti Waluyo.",
    longDesc: "Dibangun untuk mengatasi antrean rumah sakit yang padat, sistem ini menghubungkan antarmuka React yang responsif dengan backend Express dan database SQL Server yang tangguh. Memastikan alur data pasien tersinkronisasi tanpa delay, mengurangi waktu tunggu, dan meningkatkan efisiensi operasional staf medis secara signifikan di lingkungan production.",
    bgColor: "bg-white",
    textColor: "text-gray-800",
    image: AntrianPoliklinik
  },
  {
    id: 2,
    title: "Task Management",
    windowName: "Task_Management.EXE",
    tech: ["React", "Tailwind", "TypeScript", "AWS"],
    shortDesc: "Aplikasi manajemen tugas berbasis web dengan arsitektur cloud skalabel.",
    longDesc: "Dirancang untuk produktivitas maksimal. Aplikasi ini memanfaatkan ketegasan tipe data dari TypeScript untuk meminimalisir runtime error, dibalut dengan UI minimalis yang lincah dari Tailwind CSS. Infrastruktur di-deploy menggunakan layanan AWS untuk menjamin skalabilitas dan ketersediaan data secara konstan bagi pengguna.",
    bgColor: "bg-red-500", 
    textColor: "text-white",
    image: TaskManagement
  },
  {
    id: 3,
    title: "HAKA FOTOCOPY",
    windowName: "Haka_Fotocopy.HTML",
    tech: ["React", "JavaScript", "Tailwind", "Google Analytics"],
    shortDesc: "Landing page dinamis dengan optimasi digital marketing berbasis data.",
    longDesc: "Bukan sekadar pamer visual. Proyek ini menggabungkan frontend development dengan analisis digital marketing. Melalui pemantauan metrik Google Analytics selama 4 minggu, tata letak dan struktur UI/UX terus dirombak dan dievaluasi untuk mengubah visitor menjadi customer, meningkatkan conversion rate secara nyata.",
    bgColor: "bg-yellow-400",
    textColor: "text-black",
    image: Haka
  },
  {
    id: 4,
    title: "ABC School",
    windowName: "ABC_School.HTML",
    tech: ["React", "JavaScript", "Tailwind"],
    shortDesc: "Wajah digital institusi pendidikan dengan navigasi yang intuitif.",
    longDesc: "Fokus utama proyek ini adalah menciptakan first-impression yang kuat dan terpercaya bagi calon siswa dan orang tua. Mengandalkan ekosistem React dan Tailwind CSS untuk membangun struktur informasi akademik yang mudah diakses, sangat responsif di perangkat mobile, dan memiliki waktu muat (load time) yang optimal.",
    bgColor: "bg-blue-400", // Diubah agar variatif
    textColor: "text-black",
    image: AbcSchool
  },
  {
    id: 5,
    title: "St. Jude's Academy",
    windowName: "St_Judes_Admin.EXE", // Disesuaikan agar penulisan aman
    tech: ["React", "JavaScript", "Tailwind", "Express", "Supabase"],
    shortDesc: "Platform manajemen sekolah terintegrasi dengan CMS mandiri.",
    longDesc: "Solusi end-to-end untuk administrasi akademik. Selain menyajikan portal informasi sekolah, sistem ini dilengkapi dashboard admin tertutup. Menggunakan Express dan Supabase sebagai tulang punggung arsitektur data, memungkinkan staf sekolah untuk mengelola konten, pengumuman, dan data operasional secara mandiri tanpa perlu campur tangan developer.",
    bgColor: "bg-green-400", // Diubah agar variatif
    textColor: "text-black",
    image: StJudes
  }
];