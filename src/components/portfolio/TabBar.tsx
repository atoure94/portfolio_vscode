import { X } from 'lucide-react';

interface Tab {
  id: string;
  name: string;
  modified?: boolean;
}

interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onTabClose?: (tabId: string) => void;
}

const TabBar = ({ tabs, activeTab, onTabChange, onTabClose }: TabBarProps) => {
  return (
    <div className="flex bg-vscode-editor border-b border-border">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`
            group flex items-center gap-2 px-4 py-2 text-sm border-r border-border cursor-pointer
            transition-colors duration-200 min-w-0 max-w-xs
            ${tab.id === activeTab 
              ? 'bg-vscode-tab-active text-foreground border-t-2 border-t-vscode-blue' 
              : 'bg-vscode-tab-inactive text-muted-foreground hover:bg-vscode-tab-active hover:text-foreground'
            }
          `}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="truncate">{tab.name}</span>
          {tab.modified && (
            <div className="w-2 h-2 rounded-full bg-vscode-blue flex-shrink-0" />
          )}
          {onTabClose && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab.id);
              }}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-vscode-red/20 rounded p-0.5"
            >
              <X size={14} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabBar;