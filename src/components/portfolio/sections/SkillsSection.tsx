const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 90, color: "text-vscode-blue" },
        { name: "TypeScript", level: 85, color: "text-vscode-blue" },
        { name: "Next.js", level: 80, color: "text-vscode-purple" },
        { name: "Tailwind CSS", level: 95, color: "text-vscode-green" },
        { name: "Redux ToolKit", level: 70, color: "text-vscode-green" }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85, color: "text-vscode-green" },
        { name: "Express", level: 80, color: "text-vscode-orange" },
        { name: "Flask", level: 80, color: "text-vscode-blue" },
        { name: "PostgreSQL", level: 75, color: "text-vscode-blue" },
        { name: "MongoDB", level: 70, color: "text-vscode-green" }
      ]
    },
    {
      name: "Mobile",
      skills: [
        { name: "React Native", level: 85, color: "text-vscode-blue" },
        { name: "Expo & EAS Build", level: 80, color: "text-vscode-purple" },
        { name: "Android & iOS Deployment", level: 75, color: "text-vscode-orange" }
      ]
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub/GitLab", level: 90, color: "text-vscode-orange" },
        { name: "Docker", level: 75, color: "text-vscode-blue" },
        { name: "CI/CD (GitHub Actions, EAS)", level: 80, color: "text-vscode-green" },
        { name: "Render / Vercel", level: 70, color: "text-vscode-purple" },
        { name: "AWS", level: 65, color: "text-vscode-orange" }
      ]
    }
  ];

  return (
    <div className="p-6 h-full overflow-auto">
      <div className="max-w-6xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            <span className="syntax-keyword">interface</span> 
            <span className="syntax-function"> Skills</span> 
            <span className="text-foreground"> {`{`}</span>
          </h2>
          <div className="text-syntax-comment text-sm">
            // Mes compétences techniques et leur niveau de maîtrise
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-vscode-sidebar border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                <span className="syntax-string">"{category.name}"</span>
                <span className="text-foreground">: {`{`}</span>
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`text-sm font-medium ${skill.color}`}>
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-vscode-tab-active rounded-full h-2">
                      <div 
                        className="bg-vscode-blue h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-foreground">
                {`}`}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-vscode-sidebar border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            <span className="syntax-keyword">const</span> 
            <span className="syntax-variable"> learningGoals</span> 
            <span className="text-foreground"> = [</span>
          </h3>
          
             <div className="text-syntax-comment text-sm mb-5">
            // Mes objectifs d'apprentissage pour les prochains mois
            </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "GraphQL & Apollo",
              "Kubernetes",
              "Machine Learning",
              "Rust",
              "WebAssembly",
              "Blockchain Development"
            ].map((goal) => (
              <div key={goal} className="flex items-center gap-3 p-3 bg-vscode-tab-active rounded border border-border">
                <div className="w-2 h-2 bg-vscode-orange rounded-full animate-pulse" />
                <span className="text-sm syntax-string">"{goal}"</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-foreground">];</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
