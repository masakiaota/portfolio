import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export default function Card({ title, children, footer, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col h-full ${className}`}>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-slate-900">{title}</h3>
        {children}
      </div>
      {footer && (
        <div className="mt-auto pt-3">
          {footer}
        </div>
      )}
    </div>
  );
}