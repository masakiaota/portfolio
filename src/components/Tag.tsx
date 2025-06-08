interface TagProps {
  children: string;
  variant?: 'blue' | 'green' | 'purple' | 'gray';
  size?: 'sm' | 'md';
}

export default function Tag({ children, variant = 'blue', size = 'sm' }: TagProps) {
  const variantClasses = {
    blue: 'bg-blue-50 text-blue-700',
    green: 'bg-green-50 text-green-700',
    purple: 'bg-purple-50 text-purple-700',
    gray: 'bg-gray-50 text-gray-700'
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base'
  };

  return (
    <span 
      className={`inline-block rounded-full font-medium ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {children}
    </span>
  );
}