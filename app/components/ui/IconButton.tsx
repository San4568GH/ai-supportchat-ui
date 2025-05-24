'use client';

interface IconButtonProps {
  icon: string;
  onClick: () => void;
}

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button onClick={onClick} className="text-xl px-2 py-1 hover:bg-gray-200 rounded">
      {icon}
    </button>
  );
}