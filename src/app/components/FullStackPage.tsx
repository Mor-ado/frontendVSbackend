import { 
  Monitor, 
  Server, 
  Database, 
  Code, 
  GitBranch,
  Cloud,
  ShieldCheck,
  Rocket,
  Users,
  Briefcase,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FullStackPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            What Is a Full-Stack Developer?
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 mb-8">
            One developer, both frontend and backend
          </p>
          
          {/* Visual Representation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <div className="flex flex-col items-center">
              <div className="p-6 bg-blue-500 rounded-2xl shadow-xl">
                <Monitor className="w-12 h-12 text-white" />
              </div>
              <p className="mt-3 font-semibold text-blue-100">Frontend</p>
            </div>
            
            <div className="text-white text-4xl font-bold">+</div>
            
            <div className="flex flex-col items-center">
              <div className="p-6 bg-green-500 rounded-2xl shadow-xl">
                <Server className="w-12 h-12 text-white" />
              </div>
              <p className="mt-3 font-semibold text-green-100">Backend</p>
            </div>
            
            <div className="text-white text-4xl font-bold">=</div>
            
            <div className="flex flex-col items-center">
              <div className="p-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl shadow-2xl border-4 border-white">
                <Layers className="w-14 h-14 text-white" />
              </div>
              <p className="mt-3 font-semibold text-yellow-200">Full-Stack</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Section 1: Definition */}
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-2xl p-10 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-full shadow-lg">
                <Layers className="w-12 h-12 text-purple-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">The Complete Picture</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              A <span className="font-bold text-purple-600">full-stack developer</span> works on both the{' '}
              <span className="font-semibold text-blue-600">user interface (frontend)</span> and the{' '}
              <span className="font-semibold text-green-600">server, database, and application logic (backend)</span>.
              They understand the entire web development process from start to finish.
            </p>
          </div>
        </div>

        {/* Section 2: Skills Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Full-Stack Skill Set
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Monitor className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-600">Frontend Skills</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>HTML & CSS</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>React/Vue/Angular</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>UI/UX Principles</span>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Server className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-600">Backend Skills</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Server Languages</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>REST APIs</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>SQL & NoSQL Databases</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Authentication</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Server Management</span>
                </div>
              </div>
            </div>

            {/* Extra Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-purple-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Code className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-600">Extra Skills</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <span>Git & Version Control</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <span>Deployment (CI/CD)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <span>Cloud Services (AWS, Azure)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <span>Security Basics</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <span>Testing & Debugging</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: When Full-Stack Is Used */}
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Where Full-Stack Developers Thrive
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="p-4 bg-white rounded-full shadow-md mb-4">
                <Rocket className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Startups</h3>
              <p className="text-sm text-gray-600">Small teams need versatile developers</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="p-4 bg-white rounded-full shadow-md mb-4">
                <Lightbulb className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Prototypes & MVPs</h3>
              <p className="text-sm text-gray-600">Quick development from idea to product</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="p-4 bg-white rounded-full shadow-md mb-4">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Personal Projects</h3>
              <p className="text-sm text-gray-600">Build complete apps independently</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="p-4 bg-white rounded-full shadow-md mb-4">
                <Briefcase className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Freelance Work</h3>
              <p className="text-sm text-gray-600">Deliver end-to-end solutions to clients</p>
            </div>
          </div>
        </div>

        {/* Section 4: Pros & Cons */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Advantages & Challenges
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pros */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600">Advantages</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Understands the Whole System</p>
                    <p className="text-sm text-gray-600 mt-1">See how all parts connect and work together</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Faster Development</p>
                    <p className="text-sm text-gray-600 mt-1">No waiting for other developers in small teams</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Better Communication</p>
                    <p className="text-sm text-gray-600 mt-1">Bridge the gap between frontend and backend teams</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">More Career Opportunities</p>
                    <p className="text-sm text-gray-600 mt-1">Valuable in many types of companies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cons */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <XCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-orange-600">Challenges</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                  <XCircle className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Harder to Master Everything</p>
                    <p className="text-sm text-gray-600 mt-1">Twice as many technologies to learn and maintain</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                  <XCircle className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">May Lack Deep Specialization</p>
                    <p className="text-sm text-gray-600 mt-1">Jack of all trades, master of none</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                  <XCircle className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Constantly Evolving Field</p>
                    <p className="text-sm text-gray-600 mt-1">Must stay updated on frontend AND backend trends</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                  <XCircle className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Increased Workload</p>
                    <p className="text-sm text-gray-600 mt-1">Responsible for more areas of the project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Career Path */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 rounded-2xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Career Path to Full-Stack
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line for mobile, horizontal for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 transform -translate-y-1/2"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
                {/* Start: Frontend or Backend */}
                <div className="flex flex-col items-center text-center w-full md:w-auto">
                  <div className="p-6 bg-white rounded-2xl shadow-lg mb-4 border-4 border-blue-400 z-10">
                    <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-800">Start with</p>
                    <p className="text-blue-600 font-bold">Frontend</p>
                  </div>
                  <p className="text-sm text-gray-600">Learn UI development first</p>
                </div>

                <div className="text-gray-400 text-2xl font-bold hidden md:block">OR</div>

                <div className="flex flex-col items-center text-center w-full md:w-auto">
                  <div className="p-6 bg-white rounded-2xl shadow-lg mb-4 border-4 border-green-400 z-10">
                    <Server className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-800">Start with</p>
                    <p className="text-green-600 font-bold">Backend</p>
                  </div>
                  <p className="text-sm text-gray-600">Learn server logic first</p>
                </div>

                <ArrowRight className="w-8 h-8 text-purple-500 rotate-90 md:rotate-0" />

                {/* End: Full-Stack */}
                <div className="flex flex-col items-center text-center w-full md:w-auto">
                  <div className="p-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl shadow-xl mb-4 border-4 border-purple-400 z-10">
                    <Layers className="w-12 h-12 text-white mx-auto mb-2" />
                    <p className="font-semibold text-white">Become</p>
                    <p className="text-yellow-200 font-bold">Full-Stack</p>
                  </div>
                  <p className="text-sm text-gray-600">Master both sides</p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-10 p-6 bg-white rounded-xl shadow-md border-l-4 border-purple-500">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Important Note</p>
                  <p className="text-gray-600 leading-relaxed">
                    Most full-stack developers start by specializing in either frontend or backend, 
                    then gradually learn the other side. It's a journey, not an overnight transformation!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <button className="group bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Overview
            </button>
          </Link>
          
          <Link to="/detailed">
            <button className="group bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Detailed Comparison
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8 text-center mt-12">
        <p className="text-gray-300">
          Whether you choose Frontend, Backend, or Full-Stack, the journey starts with learning!
        </p>
      </div>
    </div>
  );
}
