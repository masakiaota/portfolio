import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-100 to-slate-300 py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
          <SocialLinks className="[&>a]:text-slate-600 [&>a]:hover:text-[#003366] [&>a]:transition-colors" />
          <p className="text-center text-slate-600 text-sm">
            &copy; 2025 Masaki Aota. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-xs text-slate-500 mt-2">
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>
        </div>
      </div>
    </footer>
  )
}