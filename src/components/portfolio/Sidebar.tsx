import { ChevronDown, ChevronRight, File, FolderOpen } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const files = [
    { name: 'about.tsx', type: 'file', active: activeTab === 'about' },
    { name: 'projects.tsx', type: 'file', active: activeTab === 'projects' },
    { name: 'skills.tsx', type: 'file', active: activeTab === 'skills' },
    { name: 'contact.tsx', type: 'file', active: activeTab === 'contact' },
  ];

  return (
    <div className="w-80 bg-vscode-sidebar border-r border-border flex flex-col">
      <div className="p-2 border-b border-border">
        <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
          Explorer
        </div>
      </div>
      
      <div className="flex-1 overflow-auto">
        <div className="p-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 text-sm font-medium text-foreground hover:bg-vscode-tab-active w-full p-1 rounded"
          >
            {isOpen ? (
              <ChevronDown size={14} />
            ) : (
              <ChevronRight size={14} />
            )}
            <FolderOpen size={14} />
            PORTFOLIO
          </button>
          
          {isOpen && (
            <div className="ml-4 mt-1 space-y-0.5">
              {files.map((file) => (
                <button
                  key={file.name}
                  onClick={() => onTabChange(file.name.split('.')[0])}
                  className={`
                    flex items-center gap-2 text-sm p-1 rounded w-full text-left
                    transition-colors duration-200
                    ${file.active 
                      ? 'bg-vscode-tab-active text-foreground' 
                      : 'text-muted-foreground hover:bg-vscode-tab-active hover:text-foreground'
                    }
                  `}
                >
                  <File size={14} />
                  {file.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;