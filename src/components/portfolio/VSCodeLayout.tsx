import { useState } from 'react';
import ActivityBar from './ActivityBar';
import Sidebar from './Sidebar';
import TabBar from './TabBar';
import StatusBar from './StatusBar';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';

const VSCodeLayout = () => {
  const [activeView, setActiveView] = useState('explorer');
  const [activeTab, setActiveTab] = useState('about');
  
  const tabs = [
    { id: 'about', name: 'about.tsx' },
    { id: 'projects', name: 'projects.tsx' },
    { id: 'skills', name: 'skills.tsx' },
    { id: 'contact', name: 'contact.tsx' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-vscode-editor overflow-hidden">
      <div className="flex flex-1 min-h-0">
        <ActivityBar activeView={activeView} onViewChange={setActiveView} />
        
        {activeView === 'explorer' && (
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        )}
        
        <div className="flex-1 flex flex-col min-w-0">
          <TabBar 
            tabs={tabs} 
            activeTab={activeTab} 
            onTabChange={setActiveTab}
          />
          
          <div className="flex-1 bg-vscode-editor overflow-hidden">
            {renderContent()}
          </div>
        </div>
      </div>
      
      <StatusBar />
    </div>
  );
};

export default VSCodeLayout;