import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "MaSanté24",
      description: "Application de gestion médicale intégrée (mobile & web) avec authentification par reconnaissance faciale et tableau de bord médical.",
      tech: ["React", "TypeScript", "Flask", "PostgreSQL", "JWT", "Render"],
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      id: 2,
      name: "Eva Service",
      description: "Application mobile de sous-traitance permettant aux clients de trouver des prestataires, avec processus d'inscription et validation par l'entreprise.",
      tech: ["React Native", "Expo", "EAS Build", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
      status: "En développement"
    },
    {
      id: 3,
      name: "Reconnaissance Faciale",
      description: "Plateforme de login et gestion des captures faciales, intégrée à un dashboard React avec statistiques et historique des utilisateurs.",
      tech: ["React", "Flask", "OpenCV", "JWT", "Recharts"],
      github: "#",
      demo: "#",
      status: "Complété"
    },
    {
      id: 4,
      name: "KoLiso",
      description: "Application mobile éducative visant à faciliter la gestion scolaire avec interconnexion à Moodle et Mattermost via SSO.",
      tech: ["React Native", "Expo", "Node.js", "PostgreSQL", "CI/CD"],
      github: "#",
      demo: "#",
      status: "Prototype"
    }
  ];

  return (
    <div className="p-6 h-full overflow-auto">
      <div className="max-w-6xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            <span className="syntax-keyword">const</span> 
            <span className="syntax-variable"> projects</span> 
            <span className="text-foreground"> = [</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-vscode-sidebar border border-border rounded-lg p-6 hover:border-vscode-blue transition-colors duration-300"
            >
              <div className="mb-4">
                <div className="text-xs text-syntax-comment mb-1">// Project {index + 1}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.name}</h3>
                <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                  project.status === 'Production' ? 'bg-vscode-green/20 text-vscode-green' :
                  project.status === 'En développement' ? 'bg-vscode-orange/20 text-vscode-orange' :
                  project.status === 'Prototype' ? 'bg-vscode-purple/20 text-vscode-purple' :
                  'bg-vscode-blue/20 text-vscode-blue'
                }`}>
                  {project.status}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="text-xs text-syntax-comment mb-2">// Technologies utilisées</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-vscode-tab-active text-xs rounded border border-border text-syntax-string"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-vscode-blue transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                <a 
                  href={project.demo}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-vscode-blue transition-colors"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="text-syntax-comment text-sm">
            // Plus de projets disponibles sur mon GitHub
          </div>
          <a 
            href="https://github.com/atoure94"
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-vscode-blue text-white rounded hover:bg-vscode-blue/80 transition-colors"
          >
            <Github size={16} />
            Voir tous mes projets
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
