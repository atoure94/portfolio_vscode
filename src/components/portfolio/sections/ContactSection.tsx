import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmadalkawssartoure@gmail.com",
      href: "mailto:ahmadalkawssartoure@gmail.com"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+223 94 09 52 46",
      href: "tel:+22394095246"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Bamako, Mali",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/atoure94",
      href: "https://github.com/atoure94"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ahmad-alkawssar-toure-5957b929b",
      href: "https://linkedin.com/in/ahmad-alkawssar-toure-5957b929b"
    }
  ];

  return (
    <div className="p-6 h-full overflow-auto">
      <div className="max-w-6xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            <span className="syntax-keyword">async function</span> 
            <span className="syntax-function"> contact</span>
            <span className="text-foreground">() {"{"}</span>
          </h2>
          <div className="text-syntax-comment text-sm">
            // N'hésitez pas à me contacter pour discuter de vos projets
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-vscode-sidebar border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                <span className="syntax-keyword">const</span> 
                <span className="syntax-variable"> contactInfo</span> 
                <span className="text-foreground"> = {"{"}</span>
              </h3>
              
              <div className="space-y-4">
                {contacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <div key={contact.label} className="flex items-center gap-4">
                      <Icon size={20} className="text-vscode-blue" />
                      <div>
                        <div className="text-xs text-syntax-comment">{contact.label}:</div>
                        <a 
                          href={contact.href}
                          className="text-syntax-string hover:text-vscode-blue transition-colors"
                        >
                          "{contact.value}"
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-4 text-foreground">{"}"};</div>
            </div>

            <div className="bg-vscode-sidebar border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                <span className="syntax-comment">// Disponibilité</span>
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-vscode-green rounded-full animate-pulse" />
                  <span className="text-sm text-foreground">Disponible pour de nouveaux projets</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Temps de réponse habituel : 24-48h
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-vscode-sidebar border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              <span className="syntax-keyword">const</span>{" "}
              <span className="syntax-variable">sendMessage</span>{" "}
              <span className="text-foreground">= () =&gt; {"{"}</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-syntax-comment mb-1">
                  // Votre nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-vscode-tab-active border border-border rounded px-3 py-2 text-sm text-foreground focus:border-vscode-blue focus:outline-none"
                  placeholder="Entrez votre nom..."
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-syntax-comment mb-1">
                  // Votre email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-vscode-tab-active border border-border rounded px-3 py-2 text-sm text-foreground focus:border-vscode-blue focus:outline-none"
                  placeholder="votre.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-syntax-comment mb-1">
                  // Votre message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-vscode-tab-active border border-border rounded px-3 py-2 text-sm text-foreground focus:border-vscode-blue focus:outline-none resize-none"
                  placeholder="Décrivez votre projet ou posez votre question..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-vscode-blue hover:bg-vscode-blue/80 text-white py-2 px-4 rounded transition-colors duration-200 text-sm font-medium"
              >
                Envoyer le message
              </button>
            </form>
            
            <div className="mt-4 text-foreground">{"}"};</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;