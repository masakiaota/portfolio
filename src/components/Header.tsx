'use client';

export default function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // URLにハッシュを追加
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <header className="bg-[#003366] text-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="text-2xl font-bold cursor-pointer"
          >
            Masaki Aota | Profile
          </a>
          <ul className="flex space-x-6">
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
                私が登場する出版物
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
        </div>
      </nav>
    </header>
  )
}