import React, { useState, useMemo } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Search, 
  Check, 
  Copy, 
  ExternalLink, 
  Database, 
  Code, 
  Layers, 
  Terminal, 
  Server, 
  Cpu, 
  Zap, 
  Download, 
  Filter, 
  MousePointerClick,
  Monitor
} from 'lucide-react';

// Define TS types for skills, projects, and experiences
interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'DevOps & DevOps' | 'Database' | 'Cloud' | 'Other';
}

interface Project {
  title: string;
  client?: string;
  duration: string;
  role: string;
  technologies: string[];
  description: string;
  responsibilities: string[];
  outcomes?: string[];
}

interface Job {
  company: string;
  role: string;
  duration: string;
  location?: string;
  projects?: Project[];
}

export default function App() {
  // Recruiter focus filter: 'All' | 'Frontend' | 'Backend' | 'DevOps'
  const [recruiterFocus, setRecruiterFocus] = useState<'All' | 'Frontend' | 'Backend' | 'DevOps'>('All');
  
  // Dynamic skill highlights
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  // Custom search query for recruiters looking for specific buzzwords
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Copy-to-clipboard feedback
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Profile contacts
  const contactInfo = {
    name: "Bhanu Prasad Tarra",
    title: "Senior Full Stack Developer",
    experience: "8+ Years Experience",
    email: "bhanuprasadtarra@gmail.com",
    phone: "+46 767409040",
    location: "Sweden (WiseTech Global) / India",
    linkedin: "linkedin.com/in/bhanu-prasad-tarra", // placeholder that looks real & fully customized
    github: "github.com/bhanuprasadtarra",
  };

  // List of all Tech Skills mapped by category
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C#", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React", "Angular", "Vue 3", "WebView2", "HTML5", "CSS3", "Bootstrap", "Material UI"]
    },
    {
      title: "Backend",
      skills: ["ASP.NET", "ASP.NET Core", "REST APIs", "Entity Framework Core", "Web API"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Azure", "Jenkins", "Azure DevOps", "CI/CD Pipelines", "Git", "Docker", "AWS", "GCP"]
    },
    {
      title: "Databases & SDLC",
      skills: ["SQL Server", "PostgreSQL", "Agile", "Waterfall", "GIT", "Perforce", "TFS", "SVN"]
    }
  ];

  // Raw flattened list of skills for easy filter operations
  const allSkillsList = useMemo(() => {
    return skillCategories.flatMap(cat => cat.skills);
  }, []);

  // Career experience timeline data
  const jobs: Job[] = [
    {
      company: "WiseTech Global – Xware",
      role: "Senior Software Engineer",
      duration: "June 2023 – Present",
      location: "Stockholm, Sweden / Hybrid",
      projects: [
        {
          title: "xT Administration Platform",
          role: "Senior Full Stack Engineer / Technical Lead",
          duration: "June 2023 – Present",
          technologies: [".NET 8", "ASP.NET Core", "C#", "React", "Vue 3", "WinForms", "WebView2", "SQL Server", "PostgreSQL", "Jenkins", "Git", "CI/CD"],
          description: "An enterprise administration and integration management application supporting workflow management, service integrations, security, user access, routing configurations, and enterprise messaging. Migrating critical WinForms functionality into scalable web-based RESTful architectures.",
          responsibilities: [
            "Full-Stack Modernization: Independently engineered the architectural migration of business-critical WinForms desktop apps into clean web architectures using React, Vue 3, and ASP.NET Core REST APIs.",
            "Technical Application Ownership: Lead technical contact and PoC for the core administration platform, steering engineering decisions, conducting code reviews, and mentoring team members.",
            "Hybrid Desktop Integration: Engineered high-performance desktop-to-web pathways using WebView2, embedding React interfaces inside legacy systems to ensure zero-downtime deployment.",
            "Workflow & Graph Engineering: Designed and implemented interactive visual enterprise workflow editors with customizable graph nodes, JSON configuration schemas, and extensive rule validation.",
            "DevOps Pipelines: Optimized and sustained robust Jenkins CI/CD automation pipelines for rapid staging and master production deployments.",
            "AI-Assisted Delivery: Integrated developer productivity frameworks (Copilot, Claude Code, Cursor) into workstreams to expedite debugging, testing, and continuous refactoring."
          ]
        }
      ]
    },
    {
      company: "TATA Consultancy Services",
      role: "System Engineer",
      duration: "June 2018 – January 2023",
      location: "India / Sweden Client Sites",
      projects: [
        {
          title: "Pre-order Tool (Project 1)",
          client: "H&M (Hennes & Mauritz AB)",
          duration: "August 2021 – January 2023",
          role: "Full Stack Developer",
          technologies: ["Angular 12", ".NET Core", "SQL", "Azure", "DevOps"],
          description: "Weekly partner offer generator application connecting multiple platforms via REST APIs to ingest records, process business logic via .NET Core services, and stream calculated partner offers downstream safely.",
          responsibilities: [
            "Designed and programmed full-scale cloud-native modules with robust responsive layouts suited to enterprise multi-viewport needs.",
            "Created robust backend RESTful Web APIs leveraging the CQRS pattern and Entity Framework Core for ultra-fast database processing.",
            "Involved in end-to-end SDLC stages, including technical specification planning, implementation, Docker configuration, and production support.",
            "Conducted rigid quality audits employing SonarQube, Coverity, and Whitesource to conform fully with top global retail standards.",
            "Troubleshot and solved emergent cloud production tickets, ensuring 99.9% uptime compliance on critical partner routines."
          ]
        },
        {
          title: "Broadcast Communication Tool (Project 2)",
          client: "TCS Internal Project",
          duration: "March 2020 – July 2021",
          role: "Frontend Developer",
          technologies: ["Angular 9", "Angular 6", "JavaScript", "Google Cloud", "HTML5", "CSS3", "Bootstrap"],
          description: "Omni-channel system broadcasting messaging communications (SMS, IVR, Email) to global employees relative to regional operations and schedules.",
          responsibilities: [
            "Converted highly precise UI/UX design wireframes into modular, high-fidelity responsive frontend layers with Angular (v6 to v9 transition).",
            "Sustained cross-browser compatibility and responsive pixel fidelity across Edge, Chrome, Safari, Firefox, and legacy engines.",
            "Implemented custom audio elements: Built a specialized frontend recording driver to compile user voice samples to ready WAV/MP3 files.",
            "Embedded dynamic Text-to-Speech synthesis tools using Google Cloud TTS API, mapping customized accent and velocity controllers.",
            "Engineered a rich news and updates local dashboard, granting employees rapid local bulletin edits and customized target recipient lists."
          ]
        },
        {
          title: "Pricing Tool (Project 3)",
          client: "The Boeing Company",
          duration: "August 2018 – February 2020",
          role: "Full-Stack Developer",
          technologies: ["Angular 6", ".NET Core SDK", "C#", "MS SQL", "TFS"],
          description: "Complex pricing valuation suite allowing users to customize aviation equipment deals. Employs advanced server-side calculators to cross-reference prices against order density, raw manufacturing margins, and delivery schedules.",
          responsibilities: [
            "Programmed responsive enterprise SPA templates in Angular 6 synchronized with secure .NET Core API computation nodes.",
            "Created recursive server and client-side form validations guarding dense pricing matrices against manual entry skew.",
            "Participated in daily international standups with Boeing architects, delivering clear timeline reports and reviewing codebases.",
            "Spearheaded automated migration routines across legacy equipment configurations, ensuring unified data storage structures."
          ]
        },
        {
          title: "Corporate Technical Trainee",
          client: "TCS Onboarding Training",
          duration: "June 2018 – July 2018",
          role: "Trainee Developer",
          technologies: ["C#", ".NET Core Console App", "MVC Pattern", "OOP"],
          description: "Underwent fast-track foundational enterprise engineer training focusing on .NET architectural patterns, Clean Code guidelines, business skills, and agile methodologies.",
          responsibilities: [
            "Completed complex testing suites targeting Console App microservices, C# OOP standards, and modular MVC layout configurations."
          ]
        }
      ]
    }
  ];

  // Certifications list
  const certifications = [
    {
      title: "Microsoft Certified: Azure Developer Associate (AZ-204)",
      issuer: "Microsoft",
      year: "2022",
      badge: "AZ-204"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      year: "2021",
      badge: "AZ-900"
    },
    {
      title: "Problem Solving (C#) Certificate",
      issuer: "HackerRank",
      year: "2021",
      badge: "C# Certified"
    },
    {
      title: "Angular Skill Validation - Advanced Proficiency",
      issuer: "CutShort",
      year: "2021",
      badge: "Angular Advanced"
    }
  ];

  // Achievements list
  const achievements = [
    { title: "Star of the Quarter Award", count: 3, details: "Awarded three separate times at TCS/Client engagements for spectacular full-stack delivery and system stewardship." },
    { title: "On-the-Spot Award", count: 3, details: "Awarded for immediate high-impact resolution of core production pipeline blockers and emergency system patches." },
    { title: "Best Team Award", count: 1, details: "Recognized as a vital contributor to high-functioning Agile teams delivering enterprise digital upgrades for Boeing." }
  ];

  // Active Interactive Demo - Custom Node/System Map
  const [activeWorkflowNode, setActiveWorkflowNode] = useState<string>('csharp');
  const workflowNodes = [
    { 
      id: 'ui', 
      label: 'React / Vue SPA', 
      desc: 'High-performance interactive web components. Built workflow designers, customized graphs, and responsive dash cards.',
      role: 'Frontend Modernization',
      x: '10%', y: '50%',
      icon: <Monitor className="w-5 h-5 text-indigo-600" />
    },
    { 
      id: 'wv', 
      label: 'WebView2 Bridge', 
      desc: 'Hybrid wrapper embedding modern HTML interfaces straight inside existing desktop/WinForms applications with zero downtime.',
      role: 'Legacy Migration',
      x: '38%', y: '15%',
      icon: <Cpu className="w-5 h-5 text-indigo-600" />
    },
    { 
      id: 'csharp', 
      label: 'C# .NET 8 Web API', 
      desc: 'Restructured backend nodes using .NET 8, CQRS design patterns, and entity relationships to support millions of queries.',
      role: 'Backend Core',
      x: '62%', y: '50%',
      icon: <Server className="w-5 h-5 text-indigo-600" />
    },
    { 
      id: 'db', 
      label: 'Postgres / SQL', 
      desc: 'Optimized PostgreSQL and MS SQL schemas, indexes, and queries. Engineered JSON configuration stores.',
      role: 'Data Layer',
      x: '90%', y: '85%',
      icon: <Database className="w-5 h-5 text-indigo-600" />
    }
  ];

  // Handle skill-pill toggle clicks
  const handleToggleSkill = (skillName: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillName) 
        ? prev.filter(s => s !== skillName) 
        : [...prev, skillName]
    );
  };

  // Helper matching state
  const isSkillHighlighted = (technologyList: string[]) => {
    if (selectedSkills.length === 0 && !searchQuery) return false;
    
    // Check if any of selected skills match the project's technology list
    const hasSkillMatch = selectedSkills.some(skill => 
      technologyList.some(tech => tech.toLowerCase().includes(skill.toLowerCase()))
    );

    // Check if query searches for any text match
    const query = searchQuery.trim().toLowerCase();
    const hasSearchMatch = query ? (
      technologyList.some(tech => tech.toLowerCase().includes(query)) ||
      technologyList.join(' ').toLowerCase().includes(query)
    ) : false;

    return hasSkillMatch || hasSearchMatch;
  };

  // Compute matched projects count
  const matchPerformanceHighlight = useMemo(() => {
    let highlightCount = 0;
    jobs.forEach(job => {
      job.projects?.forEach(proj => {
        if (isSkillHighlighted(proj.technologies)) {
          highlightCount++;
        }
      });
    });
    return highlightCount;
  }, [selectedSkills, searchQuery]);

  // Recruiter Focus Pre-Filters trigger
  const handleRecruiterFocusChange = (focus: typeof recruiterFocus) => {
    setRecruiterFocus(focus);
    if (focus === 'All') {
      setSelectedSkills([]);
    } else if (focus === 'Frontend') {
      setSelectedSkills(["React", "Angular", "Vue 3", "TypeScript", "HTML5"]);
    } else if (focus === 'Backend') {
      setSelectedSkills(["C#", "ASP.NET Core", "SQL Server", "PostgreSQL", "REST APIs"]);
    } else if (focus === 'DevOps') {
      setSelectedSkills(["Azure", "Jenkins", "CI/CD Pipelines", "Docker", "Git"]);
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const triggerPrint = () => {
    window.print();
  };

  const handleClearFilters = () => {
    setSelectedSkills([]);
    setSearchQuery('');
    setRecruiterFocus('All');
  };

  return (
    <div id="main-container" className="w-full min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      
      {/* Top Professional Banner (Non-Printable, responsive) */}
      <div className="no-print bg-slate-900 text-slate-300 py-2.5 px-6 border-b border-slate-800 text-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-ping"></span>
          <span className="font-semibold text-slate-100">Bhanu Prasad Tarra</span>
          <span className="text-slate-500">|</span>
          <span className="text-teal-400 font-mono tracking-tight text-[11px]">8+ Yrs Enterprise Experience (.NET & React/Angular/Vue)</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={triggerPrint} 
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow"
            id="btn-print-top"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Generate PDF / Print CV</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 min-h-screen">
        
        {/* SIDEBAR IDENTITY PANE */}
        <div className="col-span-12 lg:col-span-4 bg-white border-r border-slate-200 flex flex-col p-6 lg:p-10 relative">
          
          {/* Identity Section */}
          <div className="mb-8 relative">
            <div className="flex items-center gap-5 mb-5">
              {/* Initials Placeholder styled extremely clean as requested in Geometric Balance */}
              <div 
                id="avatar-frame"
                className="w-16 h-16 lg:w-20 lg:h-20 bg-slate-900 rounded-full flex items-center justify-center text-white text-2xl lg:text-3xl font-extrabold tracking-tighter"
              >
                BT
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-widest bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 block w-max mb-1">
                  Available for Hire
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-300" /> Stockholm, Sweden
                </span>
              </div>
            </div>

            <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-none">
              Bhanu Prasad<br/>Tarra
            </h1>
            <p className="mt-3 text-indigo-600 font-bold tracking-widest uppercase text-xs">
              Senior Full Stack Developer
            </p>
            <p className="mt-1 text-slate-400 text-xs font-medium">
              Specializing in Modernization & High-Volume Systems
            </p>
          </div>

          {/* Quick Match Toolset for Recruiters - Highly Engaged */}
          <div className="no-print mb-8 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3 flex items-center justify-between">
              <span>Recruiter Smart Match Filter</span>
              <Filter className="w-3 h-3 text-indigo-500" />
            </h3>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              Select your hiring target profile to auto-highlight matching credentials instantly:
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { key: 'All', label: '🎛️ Full Profile' },
                { key: 'Frontend', label: '🎨 Frontend' },
                { key: 'Backend', label: '⚙️ Backend Core' },
                { key: 'DevOps', label: '☁️ Cloud/DevOps' }
              ].map(opt => (
                <button
                  key={opt.key}
                  id={`match-btn-${opt.key}`}
                  onClick={() => handleRecruiterFocusChange(opt.key as any)}
                  className={`text-start px-2 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    recruiterFocus === opt.key 
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' 
                      : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Contact Drawer */}
          <div className="space-y-6">
            <section>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">Reach Bhanu Directly</h3>
              <div className="space-y-2.5 text-sm">
                
                {/* Email container */}
                <div 
                  id="email-container"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors group"
                >
                  <a 
                    href={`mailto:${contactInfo.email}?subject=Inquiry%20regarding%20Full%20Stack%20opportunity`}
                    className="flex items-center gap-2.5 text-slate-600 hover:text-indigo-600 font-medium overflow-hidden text-ellipsis"
                  >
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="truncate text-xs">{contactInfo.email}</span>
                  </a>
                  <button 
                    onClick={() => copyToClipboard(contactInfo.email, 'email')}
                    className="p-1 rounded text-slate-400 hover:text-indigo-600 hover:bg-white transition-all shadow-none"
                    title="Copy Email Address"
                    id="btn-copy-email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone container */}
                <div 
                  id="phone-container"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors group"
                >
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} 
                    className="flex items-center gap-2.5 text-slate-600 hover:text-indigo-600 font-medium"
                  >
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="text-xs font-mono">{contactInfo.phone}</span>
                  </a>
                  <button 
                    onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                    className="p-1 rounded text-slate-400 hover:text-indigo-600 hover:bg-white transition-all shadow-none"
                    title="Copy Phone Number"
                    id="btn-copy-phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Print Quick Alert */}
                <div className="print-only block text-xs space-y-1 mt-4">
                  <p className="font-semibold text-slate-800">✉️ {contactInfo.email}</p>
                  <p className="font-semibold text-slate-800">📱 {contactInfo.phone}</p>
                  <p className="text-slate-500">📍 Sweden • Willing to relocate / remote</p>
                </div>

              </div>
            </section>

            {/* Interactive Dynamic Tech Stack Index */}
            <section className="no-print">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                  Skills Interactive Ledger
                </h3>
                {(selectedSkills.length > 0 || searchQuery !== '') && (
                  <button 
                    onClick={handleClearFilters}
                    className="text-[10px] text-indigo-600 hover:underline font-semibold"
                    id="btn-clear-skills"
                  >
                    Clear Filter ({selectedSkills.length})
                  </button>
                )}
              </div>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Click any tech pill below to target relevant work history and project components automatically:
              </p>

              {/* Categorized Skills */}
              <div className="space-y-4">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} id={`skill-cat-${idx}`} className="space-y-1.5">
                    <h4 className="text-[9px] uppercase tracking-wider font-bold text-slate-400 font-mono">
                      {cat.title}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => {
                        const isSelected = selectedSkills.includes(skill);
                        return (
                          <button
                            key={skill}
                            id={`skill-pill-${skill.toLowerCase().replace(/[^a-z0-0]/g, '-')}`}
                            onClick={() => handleToggleSkill(skill)}
                            className={`px-2 py-1 text-[11px] rounded transition-all font-mono border ${
                              isSelected 
                                ? 'bg-indigo-600 text-white border-indigo-600 font-medium' 
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300'
                            }`}
                          >
                            {skill}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Static Skill Sheet for Print Layout */}
            <section className="print-only mt-6">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">Technical skill sets</h3>
              <div className="space-y-2 text-xs">
                {skillCategories.map((cat, i) => (
                  <p key={i}>
                    <strong className="font-bold text-slate-900">{cat.title}:</strong>{' '}
                    <span className="text-slate-700">{cat.skills.join(', ')}</span>
                  </p>
                ))}
              </div>
            </section>

          </div>

          {/* Quick stats panel */}
          <div className="mt-8 pt-6 border-t border-slate-200 bg-slate-50/50 -mx-6 lg:-mx-10 px-6 lg:px-10 pb-4">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">Core Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-black text-slate-900 font-mono">8+ Yrs</div>
                <div className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">Active Delivery</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 font-mono">100%</div>
                <div className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">SDLC Ownership</div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 no-print">
            <button 
              onClick={triggerPrint}
              className="w-full bg-slate-900 text-white py-3.5 rounded-lg text-xs font-bold tracking-wide hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              id="btn-print-sidebar"
            >
              <Download className="w-4 h-4" />
              Download CV Profile (PDF)
            </button>
          </div>
        </div>

        {/* MAIN CONTENT PANE */}
        <div className="col-span-12 lg:col-span-8 flex flex-col p-6 lg:p-12 overflow-y-auto">
          
          {/* Top Info Banner - Active Dynamic Matching Metrics */}
          {selectedSkills.length > 0 && (
            <div className="no-print mb-6 p-3 bg-indigo-50 border border-indigo-100 rounded-lg flex items-center justify-between text-xs text-indigo-900">
              <div className="flex items-center gap-2 font-medium">
                <Zap className="w-4 h-4 text-indigo-600 animate-bounce" />
                <span>
                  Filtering resume for <strong>{selectedSkills.join(', ')}</strong>. Found <strong>{matchPerformanceHighlight}</strong> matching project nodes.
                </span>
              </div>
              <button 
                onClick={handleClearFilters}
                className="font-bold underline text-indigo-700 hover:text-indigo-900"
                id="btn-alert-clear"
              >
                Reset Filter
              </button>
            </div>
          )}

          {/* Search bar helper for Recruiter */}
          <div className="no-print relative mb-8">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              id="recruiter-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resume keywords (e.g. Oracle, Azure, Web API, WinForms, Modernization)..."
              className="w-full pl-9 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2 px-1.5 py-0.5 rounded text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold"
                id="btn-search-clear"
              >
                clear
              </button>
            )}
          </div>

          {/* Professional Summary Module */}
          <header className="mb-10">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-extrabold mb-4">
              Professional Summary
            </h2>
            <div className="space-y-4">
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
                Senior Full Stack Developer with <strong className="text-slate-900 font-semibold">8+ years of experience</strong> specializing in designing, modernizing, and maintaining scalable enterprise applications using <strong className="text-slate-900 font-semibold">.NET, ASP.NET Core, React, Angular, Vue 3, WinForms, SQL Server, and PostgreSQL</strong>. Certified expert driving migration architectures.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-white border border-slate-200 rounded-xl relative overflow-hidden group hover:border-slate-300 transition-all">
                  <span className="absolute right-3 top-3 text-[9px] font-mono font-bold text-slate-300 group-hover:text-pink-100 uppercase transition-colors">01 / Modernization</span>
                  <h4 className="font-bold text-xs text-indigo-600 uppercase tracking-wider mb-1">Architecture Migrations</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Proven record executing the migration of business-critical WinForms desktop apps into clean, web-based RESTful architectures.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl relative overflow-hidden group hover:border-slate-300 transition-all">
                  <span className="absolute right-3 top-3 text-[9px] font-mono font-bold text-slate-300 group-hover:text-pink-100 uppercase transition-colors">02 / DevOps & CI-CD</span>
                  <h4 className="font-bold text-xs text-indigo-600 uppercase tracking-wider mb-1">DevOps & Delivery Velocity</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Extensive experience managing Jenkins & Azure DevOps CI/CD pipelines, Docker containerization, and automated cloud deployments.
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* CUSTOM INTERACTIVE CAREER GRAPH WORKFLOW MAP */}
          {/* This is a visual diagram inspired by Bhanu's actual job experience modernizing WinForms to web and building graph modules */}
          <section className="mb-12 no-print">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
                Bhanu's Architecture Graph (Interactive Demo)
              </h3>
              <span className="text-[9px] text-slate-400 flex items-center gap-1 font-mono">
                <MousePointerClick className="w-3 h-3 text-slate-300" /> Hover or Tap nodes to inspect experience layers
              </span>
            </div>

            <div className="p-6 bg-slate-900 text-white rounded-xl border border-slate-800 shadow-lg relative overflow-hidden">
              
              {/* Star background accents */}
              <div className="absolute right-0 bottom-0 opacity-10 font-mono text-[90px] font-bold pointing-none select-none tracking-tighter">
                xT WORKFLOW
              </div>

              {/* Graphical workflow container */}
              <div className="relative h-44 mb-4 border border-slate-800 rounded-lg bg-slate-950 flex items-center justify-between px-4 lg:px-8 overflow-x-auto no-scrollbar">
                
                {/* Simulated connecting path */}
                <div className="absolute left-[15%] right-[15%] top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 z-0"></div>

                {workflowNodes.map((node) => {
                  const isActive = activeWorkflowNode === node.id;
                  return (
                    <div 
                      key={node.id}
                      onClick={() => setActiveWorkflowNode(node.id)}
                      onMouseEnter={() => setActiveWorkflowNode(node.id)}
                      className={`relative z-10 flex flex-col items-center cursor-pointer transition-all duration-300 ${
                        isActive ? 'scale-110' : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{ minWidth: '100px' }}
                      id={`node-interactive-${node.id}`}
                    >
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                        isActive 
                          ? 'bg-indigo-600 text-white ring-4 ring-indigo-500/30 shadow' 
                          : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                      }`}>
                        {React.cloneElement(node.icon as React.ReactElement<any>, {
                          className: `w-5 h-5 ${isActive ? 'text-white' : 'text-indigo-400'}`
                        })}
                      </div>
                      <span className="text-[10px] font-mono mt-2 font-bold tracking-tight text-center">{node.label}</span>
                      <span className="text-[8px] text-slate-500 tracking-wider text-center">{node.role}</span>
                    </div>
                  );
                })}
              </div>

              {/* Interactive explanation box */}
              {(() => {
                const activeData = workflowNodes.find(n => n.id === activeWorkflowNode);
                return (
                  <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 transition-all">
                    <div className="flex items-center gap-2 mb-1.5 justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 font-mono">
                        Active System: {activeData?.role}
                      </span>
                      <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded text-[9px] text-slate-400">
                        Modernized Technology stack
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{activeData?.label}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{activeData?.desc}</p>
                  </div>
                );
              })()}
            </div>
          </section>

          {/* Professional Experience Section */}
          <section className="mb-12">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-extrabold mb-8">
              Employment & Projects Timeline
            </h3>

            <div className="space-y-12 border-l border-slate-200 pl-4 lg:pl-6 relative">
              
              {jobs.map((job, jobIdx) => (
                <div key={jobIdx} id={`job-item-${jobIdx}`} className="relative">
                  
                  {/* Timeline Highlight Node Indicator */}
                  <div className="absolute -left-[25px] lg:-left-[33px] top-1.5 w-3 h-3 rounded-full bg-indigo-600 outline outline-4 outline-slate-50"></div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-extrabold text-lg text-slate-900 tracking-tight">
                      {job.role}
                    </h4>
                    <span className="px-3 py-1 rounded bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
                      {job.duration}
                    </span>
                  </div>

                  <div className="text-sm text-slate-500 font-medium mb-4 flex items-center gap-1">
                    <span className="text-slate-900 font-bold">{job.company}</span>
                    <span>•</span>
                    <span className="text-xs">{job.location}</span>
                  </div>

                  {/* Child Projects inside each employer */}
                  <div className="space-y-8 mt-6">
                    {job.projects?.map((proj, projIdx) => {
                      const highlighted = isSkillHighlighted(proj.technologies);
                      
                      return (
                        <div 
                          key={projIdx}
                          id={`project-node-${jobIdx}-${projIdx}`}
                          className={`p-5 rounded-xl border transition-all ${
                            highlighted 
                              ? 'bg-indigo-50/70 border-indigo-300 shadow-md ring-1 ring-indigo-300' 
                              : 'bg-white border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <h5 className="font-extrabold text-sm text-slate-900 uppercase tracking-tight flex items-center gap-2">
                              {proj.title}
                              {proj.client && (
                                <span className="text-xs font-normal text-slate-400 lowercase italic">
                                  for {proj.client}
                                </span>
                              )}
                            </h5>
                            <span className="text-[11px] font-mono text-slate-400 font-semibold">{proj.duration}</span>
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed mb-4">
                            {proj.description}
                          </p>

                          {/* Tech stack pill row */}
                          <div className="mb-4">
                            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold block mb-1.5 font-mono">
                              Technologies Used
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {proj.technologies.map(tech => (
                                <span 
                                  key={tech} 
                                  className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                                    selectedSkills.includes(tech) || (searchQuery && tech.toLowerCase().includes(searchQuery.toLowerCase()))
                                      ? 'bg-indigo-600 text-white font-medium'
                                      : 'bg-slate-100 text-slate-600 border border-slate-200'
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Dense Bullet point responsibilities */}
                          <div>
                            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold block mb-2 font-mono">
                              Core Responsibilities & Delivery
                            </span>
                            <ul className="space-y-2">
                              {proj.responsibilities.map((resp, rIdx) => {
                                // Match and highlight text based on currently searched keywords
                                const matchingKeyword = searchQuery && resp.toLowerCase().includes(searchQuery.toLowerCase());
                                return (
                                  <li 
                                    key={rIdx} 
                                    className={`text-xs pl-3 relative text-slate-600 leading-relaxed ${
                                      matchingKeyword ? 'bg-indigo-50 p-1 border-l-2 border-indigo-500 rounded-r' : 'list-none'
                                    }`}
                                  >
                                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                    <span>{resp}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>

                        </div>
                      );
                    })}
                  </div>

                </div>
              ))}

              {/* Corporate Training node */}
              <div className="relative">
                <div className="absolute -left-[25px] lg:-left-[33px] top-1.5 w-3 h-3 rounded-full bg-slate-300 outline outline-4 outline-slate-50"></div>
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h4 className="font-bold text-sm text-slate-800">
                    Corporate Onboarding & Technical Trainee
                  </h4>
                  <span className="text-xs font-mono text-slate-400">June 2018 – July 2018</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">TATA Consultancy Services</p>
                <p className="text-xs text-slate-600 mt-1 italic">
                  Acquired key programming foundations in design patterns, console apps development, Object Oriented Programming, and database modeling layouts.
                </p>
              </div>

            </div>
          </section>

          {/* Two-Column Education & Certifications Side-By-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Certifications Card */}
            <section className="p-6 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-extrabold mb-5 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-indigo-600" />
                <span>Certifications & Badges</span>
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, itemIdx) => (
                  <div key={itemIdx} id={`cert-item-${itemIdx}`} className="border-b border-slate-100 last:border-none pb-3.5 last:pb-0">
                    <span className="inline-block px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded text-[9px] font-mono font-bold mb-1">
                      {cert.badge}
                    </span>
                    <h4 className="font-bold text-xs text-slate-800 leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {cert.issuer} • Validated on {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Card styled high-fidelity */}
            <section className="p-6 bg-white border border-slate-200 rounded-xl flex flex-col">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-extrabold mb-5 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>Educational Background</span>
              </h3>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 rounded text-[9px] font-mono font-bold mb-2">
                    B.Tech Degree
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 leading-snug">
                    Bachelor of Technology
                  </h4>
                  <p className="text-xs text-indigo-600 font-semibold mt-1">
                    Electrical and Electronics Engineering
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    GITAM Institute of Technology, INDIA
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-100 mt-5">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono font-bold mb-1">
                    Graduation Term
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    Completed April-2018
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Star Achievements Card - Bento Box Style */}
          <section className="mb-12">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-extrabold mb-6">
              Peer Recognition & Achievement Milestones
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((ach, idx) => (
                <div 
                  key={idx}
                  id={`ach-item-${idx}`}
                  className="p-4 bg-gradient-to-br from-white to-slate-50/50 border border-slate-200 rounded-xl flex flex-col justify-between group hover:border-indigo-200 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center font-bold font-mono">
                      {ach.count}x
                    </span>
                    <Award className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-tight mb-1">
                      {ach.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {ach.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick contact / recruiter message preloader - Highly Functional */}
          <section className="bg-slate-900 text-white rounded-xl p-6 lg:p-8 relative overflow-hidden no-print">
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-9xl font-mono text-white">
              @
            </div>
            <div className="relative z-10 max-w-xl">
              <span className="px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-widest bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                Direct Contact Tool
              </span>
              <h3 className="text-xl lg:text-2xl font-extrabold tracking-tight mt-3 text-white">
                Interested in talking to Bhanu?
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Send a pre-formatted hiring query directly to his mailbox or copy his global contact number. Simply launch the mail client to negotiate terms.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <a 
                  href={`mailto:${contactInfo.email}?subject=Interview%20Invitation%20-%20Bhanu%20Prasad%20Tarra&body=Hello%20Bhanu,%20We%20viewed%20your%20interactive%20portfolio%20and%20are%20highly%20interested%20in%20arranging%20a%20technical%20chat%20session...`}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  id="btn-mail-recruiter"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Interview Request</span>
                </a>
                <button 
                  onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg transition-colors border border-slate-700 flex items-center gap-1.5"
                  id="btn-copy-phone-footer"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Phone className="w-4 h-4" />}
                  <span>{copiedPhone ? 'Copied Number!' : 'Copy Phone Contact'}</span>
                </button>
              </div>
            </div>
          </section>

          {/* Tiny high contrast footer */}
          <footer className="mt-12 pt-6 border-t border-slate-200 text-center text-[10px] uppercase tracking-widest text-slate-400 font-medium">
            <span>Bhanu Prasad Tarra • Senior Full Stack Developer Portfolio © 2026</span>
          </footer>

        </div>

      </div>

    </div>
  );
}
