'use client';
import IconButton from './IconButton';

interface HeaderBarProps {
  title: string;
  onRightIconClick?: () => void;
}

export default function HeaderBar({ title, onRightIconClick }: HeaderBarProps) {
  return (
    <div className="p-4 flex justify-between items-center border-b">
      <h1 className="text-lg font-bold">{title}</h1>
      {onRightIconClick && <IconButton icon="🤖" onClick={onRightIconClick} />}
    </div>
  );
}
//NOT Utilised,Switched to a Bottom Navigation Panel in FullChatLayout.tsx for Mobile Resolution