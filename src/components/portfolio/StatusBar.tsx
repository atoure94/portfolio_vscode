import { GitBranch, Check, AlertCircle } from 'lucide-react';

const StatusBar = () => {
  return (
    <div className="h-6 bg-vscode-status-bar border-t border-border flex items-center justify-between px-2 text-xs">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-foreground">
          <GitBranch size={12} />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1 text-vscode-green">
          <Check size={12} />
          <span>Portfolio ready</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-muted-foreground">
        <span>TypeScript React</span>
        <span>UTF-8</span>
        <span>CRLF</span>
        <span>Ln 1, Col 1</span>
      </div>
    </div>
  );
};

export default StatusBar;