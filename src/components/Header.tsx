'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (sectionId === 'home') {
      // ホームの場合はページトップにスクロール
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', `#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${sectionId}`);
      }
    }
    
    setIsMenuOpen(false); // モバイルメニューを閉じる
  };

  return (
    <header className="bg-[#003366] text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="text-lg sm:text-xl md:text-2xl font-bold cursor-pointer"
          >
            <span className="hidden sm:inline">Masaki Aota | Profile</span>
            <span className="sm:hidden">M. Aota</span>
          </a>
          
          {/* デスクトップメニュー */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, 'home')}
                className="hover:text-gray-300 font-medium transition-colors cursor-pointer"
              >
                ホーム
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className="hover:text-gray-300 font-medium transition-colors cursor-pointer"
              >
                自己紹介
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="hover:text-gray-300 font-medium transition-colors cursor-pointer"
              >
                プロジェクト
              </a>
            </li>
            <li>
              <a 
                href="#publications" 
                onClick={(e) => scrollToSection(e, 'publications')}
                className="hover:text-gray-300 font-medium transition-colors cursor-pointer"
              >
                出版物
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="hover:text-gray-300 font-medium transition-colors cursor-pointer"
              >
                お問い合わせ
              </a>
            </li>
          </ul>

          {/* ハンバーガーメニューボタン */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => scrollToSection(e, 'home')}
                  className="block hover:text-gray-300 font-medium transition-colors cursor-pointer py-2"
                >
                  ホーム
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="block hover:text-gray-300 font-medium transition-colors cursor-pointer py-2"
                >
                  自己紹介
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, 'projects')}
                  className="block hover:text-gray-300 font-medium transition-colors cursor-pointer py-2"
                >
                  プロジェクト
                </a>
              </li>
              <li>
                <a 
                  href="#publications" 
                  onClick={(e) => scrollToSection(e, 'publications')}
                  className="block hover:text-gray-300 font-medium transition-colors cursor-pointer py-2"
                >
                  出版物
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="block hover:text-gray-300 font-medium transition-colors cursor-pointer py-2"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}