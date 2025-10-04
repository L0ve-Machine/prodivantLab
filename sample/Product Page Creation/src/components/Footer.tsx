import { Mail, Phone, MapPin, Github, Twitter, Linkedin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-none px-8 lg:px-16 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-cyan-400 flex items-center justify-center">
                  <span className="text-black text-lg">&lt;/&gt;</span>
                </div>
                <span className="text-2xl tracking-tight uppercase">TechCorp</span>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                革新的なITソリューションで、<br />
                お客様のビジネスを次のレベルへ。
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg uppercase tracking-wide mb-4">Get in Touch</h3>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">contact@techcorp.jp</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">03-1234-5678</span>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-cyan-400 mt-1" />
                <span className="text-gray-300">
                  東京都渋谷区恵比寿1-2-3<br />
                  テックビル10F
                </span>
              </div>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h3 className="text-lg uppercase tracking-wide">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>自社開発プロダクト</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>受託開発</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>システム運用保守</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>技術コンサルティング</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-8">
            <h3 className="text-lg uppercase tracking-wide">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>会社概要</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>採用情報</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>ニュース</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>プライバシーポリシー</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="mb-8 lg:mb-0">
              <h3 className="text-2xl lg:text-3xl mb-4">
                Stay <span className="text-cyan-400">Updated</span>
              </h3>
              <p className="text-gray-300">
                最新の技術情報やプロダクトアップデートをお届けします。
              </p>
            </div>
            <div className="flex space-x-px">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="bg-gray-900 border border-gray-700 px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 min-w-0 flex-1 lg:w-80"
              />
              <button className="bg-cyan-400 text-black px-8 py-4 hover:bg-cyan-300 transition-colors duration-300 uppercase tracking-wide">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4 lg:mb-0">
              © 2024 TechCorp. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm uppercase tracking-wider transition-colors duration-300">
                利用規約
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm uppercase tracking-wider transition-colors duration-300">
                プライバシーポリシー
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}