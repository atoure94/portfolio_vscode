import { useState } from 'react';
import { Files, User, Code, Mail, FolderOpen, Search, GitBranch, Settings } from 'lucide-react';

interface ActivityBarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const ActivityBar = ({ activeView, onViewChange }: ActivityBarProps) => {
  const items = [
    { id: 'explorer', icon: Files, label: 'Explorer' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'git', icon: GitBranch, label: 'Source Control' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-12 bg-vscode-activity-bar border-r border-border flex flex-col">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeView === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`
              h-12 w-12 flex items-center justify-center relative
              hover:bg-vscode-tab-active transition-colors duration-200
              ${isActive ? 'text-vscode-blue' : 'text-muted-foreground'}
            `}
            title={item.label}
          >
            <Icon size={20} />
            {isActive && (
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-vscode-blue" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ActivityBar;