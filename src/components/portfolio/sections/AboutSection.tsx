import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = `// About me
const developer = {
  name: "Ahmad Alkawssar Toure",
  role: "Ingénieur Logiciel & Développeur Full Stack",
  location: "Bamako, Mali",
  experience: "3+ ans",
  passion: "Concevoir des solutions innovantes pour le web et le mobile",
  
  getCurrentFocus: () => {
    return [
      "React, React Native & TypeScript",
      "Node.js, Express & Flask",
      "Bases de données (PostgreSQL, MongoDB, MySQL)",
      "Développement d'APIs REST & GraphQL",
      "CI/CD & Déploiement Cloud (Render, EAS, Docker)",
      "Architecture microservices"
    ];
  },
  
  getPhilosophy: () => {
    return "Un code propre, maintenable et performant avant tout. " +
           "Je crois en l’apprentissage continu et à l’innovation comme moteurs du progrès.";
  }
};

export default developer;`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 1);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 h-full overflow-auto font-mono text-sm leading-relaxed">
      <div className="max-w-4xl">
        <pre className="whitespace-pre-wrap">
          <code>
            {displayedText.split('\n').map((line, i) => {
              if (line.startsWith('//')) {
                return (
                  <div key={i} className="syntax-comment">
                    {line}
                  </div>
                );
              }
              if (line.includes('const') || line.includes('return') || line.includes('export')) {
                return (
                  <div key={i}>
                    <span className="syntax-keyword">
                      {line.match(/(const|return|export|default)/g)?.[0] || ''}
                    </span>
                    {line.replace(/(const|return|export|default)/, '')}
                  </div>
                );
              }
              if (line.includes('"') || line.includes("'")) {
                return (
                  <div key={i}>
                    {line.split(/(["'][^"']*["'])/).map((part, j) => 
                      part.match(/["'][^"']*["']/) ? (
                        <span key={j} className="syntax-string">{part}</span>
                      ) : (
                        <span key={j}>{part}</span>
                      )
                    )}
                  </div>
                );
              }
              return <div key={i}>{line}</div>;
            })}
          </code>
        </pre>
        
        {displayedText === fullText && (
  <>
    <div className="mt-8 p-4 bg-vscode-sidebar rounded border border-border">
      <h3 className="text-lg font-semibold mb-4 text-vscode-blue">Mon parcours</h3>
      <p className="text-muted-foreground leading-relaxed">
        Ingénieur junior en Génie Logiciel et Systèmes d’Information, j’ai travaillé sur plusieurs 
        projets allant du développement <strong>web</strong> et <strong>mobile</strong> jusqu’au 
        déploiement <strong>CI/CD</strong> et l’intégration de solutions Cloud. 
        Mon expertise couvre aussi bien le <strong>backend (Flask, Node.js, etc)</strong> que le <strong>frontend (React, React Native, TypeScript)</strong>. 
        Je mets un point d’honneur à livrer des solutions modernes, fiables et orientées utilisateur.
      </p>
    </div>

    <div className="mt-6 p-4 bg-vscode-sidebar rounded border border-border mb-8">
      <h3 className="text-lg font-semibold mb-4 text-vscode-blue">Lien vers mon CV</h3>
      <a
        href="https://drive.google.com/drive/folders/1RdmLXHHQHjUJAWySuW_fbgKDECQFqjED?usp=sharing" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-vscode-green underline hover:text-vscode-blue transition"
      >
        📄 Consulter mon CV
      </a>
    </div>
  </>
)}
      </div>
    </div>
  );
};

export default AboutSection;





