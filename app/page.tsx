import Image from "next/image"
import type { Metadata } from "next"
import { Instagram, Mail, ExternalLink, MessageSquare, Music } from "lucide-react"

export const metadata: Metadata = {
  title: "S1 Rekayasa Perangkat Lunak - Telkom University Purwokerto",
  description: "Program Studi S1 Rekayasa Perangkat Lunak Fakultas Informatika Telkom University Purwokerto",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Large Card Container */}
      <div className="w-full max-w-md mx-auto relative z-10">
        <div className="bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
          {/* Top Accent Line */}
          <div className="h-1 bg-gradient-to-r from-orange-500/20 via-yellow-600/20 to-orange-500/20"></div>

          {/* Content Wrapper */}
          <div className="p-8">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-12">
              {/* Logo Container with glow effect */}
              <div className="relative w-72 h-72 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full blur-2xl opacity-30"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-400 shadow-2xl ring-4 ring-gray-700/50">
                  <Image
                    src="/s1-rpl-logo.png"
                    alt="S1 Rekayasa Perangkat Lunak Logo"
                    fill
                    className="object-contain bg-white"
                    priority
                  />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-clip-text text-transparent mb-3">
                SEKILASINFO
              </h1>

              {/* Divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 rounded-full mb-4"></div>

              {/* Subtitle */}
              <div className="text-gray-300 max-w-sm text-center space-y-2">
                <p className="text-xs text-gray-300">Software Engineering Knowledge & Information Service Online</p>
                <div className="h-2"></div>
                <p className="text-base font-semibold text-gray-200">The Art of Code</p>
                <p className="text-xs text-gray-300">S1 Software Engineering</p>
                <p className="text-xs text-gray-300">Telkom University Purwokerto</p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3 mt-8 justify-center flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/se_telkomuniversity.pwt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all hover:scale-110 duration-300"
                  aria-label="Instagram"
                >
                  <div className="bg-gradient-to-br from-pink-400 to-rose-500 p-3 rounded-full shadow-lg hover:shadow-pink-500/50 group-hover:shadow-2xl transition-all">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@se_telkomuniversity.pwt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all hover:scale-110 duration-300"
                  aria-label="TikTok"
                >
                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-3 rounded-full shadow-lg hover:shadow-white/30 group-hover:shadow-2xl transition-all border border-gray-600">
                    <Music className="w-5 h-5 text-white" />
                  </div>
                </a>
                <a
                  href="mailto:bse-pwt@telkomuniversity.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all hover:scale-110 duration-300"
                  aria-label="Email"
                >
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-full shadow-lg hover:shadow-amber-500/50 group-hover:shadow-2xl transition-all">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-8"></div>

            {/* Service Links Section */}
            <div className="space-y-4">
              <a href="https://wa.me/+6285190456101" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30 hover:border-gray-500 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:translate-y-[-2px] backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-white text-base group-hover:text-gray-100 transition-colors">
                        Hubungi Kami
                      </h3>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                        Chat via WhatsApp
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              <a
                href="https://bse-pwt.telkomuniversity.ac.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30 hover:border-gray-500 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 hover:translate-y-[-2px] backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-lg overflow-hidden">
                      <div className="w-6 h-6 relative">
                        <Image src="/s1-rpl-logo.png" alt="Program Logo" fill className="object-contain" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-white text-base group-hover:text-gray-100 transition-colors">
                        Situs Program Studi
                      </h3>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                        Info lengkap program
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              <a
                href="https://smb.telkomuniversity.ac.id/lokasi-kampus/purwokerto/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30 hover:border-gray-500 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:translate-y-[-2px] backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70 overflow-hidden">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mr-4 shadow-lg overflow-hidden">
                      <div className="w-6 h-6 relative">
                        <Image src="/s1-rpl-logo.png" alt="SMB Logo" fill className="object-contain" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-white text-base group-hover:text-gray-100 transition-colors">
                        Seleksi Mahasiswa Baru
                      </h3>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                        Daftar mahasiswa baru
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              <a
                href="https://purwokerto.telkomuniversity.ac.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30 hover:border-gray-500 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:translate-y-[-2px] backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70 overflow-hidden">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-4 shadow-lg overflow-hidden">
                      <div className="w-6 h-6 relative">
                        <Image src="/s1-rpl-logo.png" alt="TUP Logo" fill className="object-contain" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-white text-base group-hover:text-gray-100 transition-colors">
                        Situs Telkom University
                      </h3>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                        Kunjungi situs TUP
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent my-8"></div>

            {/* Academic Resources Section */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-white mb-4 text-center">Sumber Akademik</h2>
              <div className="space-y-3">
                <a
                  href="https://baa.telkomuniversity.ac.id/kalender-akademik-2-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30 hover:border-purple-500/50 rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:translate-y-[-2px] backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-purple-500/0 transition-all"></div>
                    <div className="relative flex items-center justify-between">
                      <h3 className="font-semibold text-white text-sm group-hover:text-purple-200 transition-colors">
                        📅 Kalender Akademik
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-purple-300 transition-all" />
                    </div>
                  </div>
                </a>

                <a
                  href="https://drive.google.com/drive/folders/11DZvAl5_sshFSE6bqTS7ZOGz4rWCiUdH?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30 hover:border-cyan-500/50 rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:translate-y-[-2px] backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-cyan-500/0 transition-all"></div>
                    <div className="relative flex items-center justify-between">
                      <h3 className="font-semibold text-white text-sm group-hover:text-cyan-200 transition-colors">
                        📋 Template Magang
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>

                <a
                  href="https://drive.google.com/drive/folders/15b1zuMrLmaVlJ2WQRpJ0466qGVDv9qye?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30 hover:border-green-500/50 rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:translate-y-[-2px] backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-green-500/0 transition-all"></div>
                    <div className="relative flex items-center justify-between">
                      <h3 className="font-semibold text-white text-sm group-hover:text-green-200 transition-colors">
                        📚 Panduan Akademik
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>

                <a
                  href="https://baa.telkomuniversity.ac.id/pedoman-akademik-universitas-telkom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30 hover:border-pink-500/50 rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 hover:translate-y-[-2px] backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:to-pink-500/0 transition-all"></div>
                    <div className="relative flex items-center justify-between">
                      <h3 className="font-semibold text-white text-sm group-hover:text-pink-200 transition-colors">
                        📖 Pedoman Akademik
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>

                <a
                  href="https://drive.google.com/drive/folders/1uoiP8_qAkZG6M-XtuNWf3BohPSi9wBYn?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30 hover:border-orange-500/50 rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:translate-y-[-2px] backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/0 transition-all"></div>
                    <div className="relative flex items-center justify-between">
                      <h3 className="font-semibold text-white text-sm group-hover:text-orange-200 transition-colors">
                        🎓 Tugas Akhir
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>

                <a
                  href="https://drive.google.com/file/d/1e4gF-Co8sa4n3ieVhh1mwxeFVLM5QCEN/view?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30 hover:border-red-500/50 rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 hover:translate-y-[-2px] backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-red-500/0 transition-all"></div>
                    <div className="relative flex items-center justify-between">
                      <h3 className="font-semibold text-white text-sm group-hover:text-red-200 transition-colors">
                        📄 SK TAK
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>

                <a
                  href="https://telkomuniversityofficial-my.sharepoint.com/:b:/g/personal/vitadk_telkomuniversity_ac_id/IQCfzLvxoN-gQIGapEJztzGGAYRSx-ok3LXD-zxwJBcL5nQ?e=BqKHLi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30 hover:border-yellow-500/50 rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 hover:translate-y-[-2px] backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/10 group-hover:to-yellow-500/0 transition-all"></div>
                    <div className="relative flex items-center justify-between">
                      <h3 className="font-semibold text-white text-sm group-hover:text-yellow-200 transition-colors">
                        🎖️ Syarat Cumlaude
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent my-8"></div>

            {/* Supporting Applications Section */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-white mb-4 text-center">Aplikasi Penunjang</h2>
              <div className="space-y-3">
                <a
                  href="https://toss.telkomuniversity.ac.id/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30 hover:border-indigo-500/50 rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:translate-y-[-2px] backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-indigo-500/0 transition-all"></div>
                    <div className="relative flex items-center justify-between">
                      <h3 className="font-semibold text-white text-sm group-hover:text-indigo-200 transition-colors">
                        ✉️ TOSS - Pengajuan Surat
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>

                <a
                  href="https://sirama.telkomuniversity.ac.id/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30 hover:border-teal-500/50 rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 hover:translate-y-[-2px] backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/10 group-hover:to-teal-500/0 transition-all"></div>
                    <div className="relative flex items-center justify-between">
                      <h3 className="font-semibold text-white text-sm group-hover:text-teal-200 transition-colors">
                        📝 Sirama - Registrasi
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Premium Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-8"></div>

            {/* Footer */}
            <div className="text-center">
              <p className="text-xs text-gray-400">© 2025 S1 Rekayasa Perangkat Lunak</p>
              <p className="text-xs text-gray-500 mt-1">Telkom University Purwokerto</p>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="h-1 bg-gradient-to-r from-orange-500/20 via-yellow-600/20 to-orange-500/20"></div>
        </div>
      </div>
    </main>
  )
}
