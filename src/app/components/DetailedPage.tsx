import { 
  Monitor, 
  Server, 
  Database, 
  Code, 
  Zap,
  CheckCircle2,
  ShieldCheck,
  Gauge,
  Coffee,
  Wrench,
  FileCode,
  ArrowLeft,
  Users,
  Settings,
  Globe,
  Lock,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DetailedPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frontend vs Backend: Detailed Breakdown
          </h1>
          <p className="text-lg md:text-xl text-blue-50">
            A deeper dive into the roles, responsibilities, and technologies
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Section 1: Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-6 px-8">
            <h2 className="text-3xl font-bold">Side-by-Side Comparison</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 w-1/3">Aspect</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 w-1/3">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-5 h-5" />
                      Frontend
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-green-600 w-1/3">
                    <div className="flex items-center gap-2">
                      <Server className="w-5 h-5" />
                      Backend
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5 font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gray-400" />
                      Main Responsibility
                    </div>
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    Creating the user interface and interactive elements
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    Managing data, logic, and server-side operations
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5 font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-gray-400" />
                      Runs Where
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      User's Browser
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Remote Server
                    </span>
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5 font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-400" />
                      Who Interacts With It
                    </div>
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    End users directly (clicking, typing, viewing)
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    System only (no direct user interaction)
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5 font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-5 h-5 text-gray-400" />
                      Performance Concerns
                    </div>
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    Page load speed, animations, responsiveness
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    Query speed, scalability, server resources
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5 font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-gray-400" />
                      Security Concerns
                    </div>
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    Input validation, XSS attacks, secure data display
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    Authentication, authorization, data encryption, SQL injection
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Daily Tasks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Developers Actually Do
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend Developer Tasks */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600">Frontend Developer</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Design and implement user interfaces using HTML, CSS, and JavaScript</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ensure websites work on all devices (responsive design)</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Optimize performance for faster page loads</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Work with designers to bring mockups to life</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Handle user interactions (clicks, forms, animations)</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Integrate with APIs to fetch and display data</span>
                </div>
              </div>
            </div>

            {/* Backend Developer Tasks */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Settings className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600">Backend Developer</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Build and maintain server-side logic and APIs</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Design and manage databases (SQL or NoSQL)</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Implement user authentication and authorization</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Handle business logic and data processing</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ensure security and data protection</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Optimize server performance and scalability</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Tools & Technologies */}
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Complete Technology Stack
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Frontend Technologies */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-600">Frontend Technologies</h3>
              </div>
              
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <FileCode className="w-4 h-4" />
                    Core Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">HTML</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">CSS</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">JavaScript</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">TypeScript</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Frameworks & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-200">React</span>
                    <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-200">Vue</span>
                    <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-200">Angular</span>
                    <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-200">Svelte</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    Tools & Others
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded text-xs border border-blue-200">Tailwind CSS</span>
                    <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded text-xs border border-blue-200">Bootstrap</span>
                    <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded text-xs border border-blue-200">Webpack</span>
                    <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded text-xs border border-blue-200">Vite</span>
                    <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded text-xs border border-blue-200">Sass</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Technologies */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-green-600">Backend Technologies</h3>
              </div>
              
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Server Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Node.js</span>
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Python</span>
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Java</span>
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">.NET (C#)</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Databases
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm border border-green-200">MySQL</span>
                    <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm border border-green-200">PostgreSQL</span>
                    <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm border border-green-200">MongoDB</span>
                    <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm border border-green-200">Redis</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Frameworks & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-green-50 text-green-600 rounded text-xs border border-green-200">Express.js</span>
                    <span className="px-3 py-1.5 bg-green-50 text-green-600 rounded text-xs border border-green-200">Django</span>
                    <span className="px-3 py-1.5 bg-green-50 text-green-600 rounded text-xs border border-green-200">Spring Boot</span>
                    <span className="px-3 py-1.5 bg-green-50 text-green-600 rounded text-xs border border-green-200">ASP.NET</span>
                    <span className="px-3 py-1.5 bg-green-50 text-green-600 rounded text-xs border border-green-200">GraphQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Real-World Analogy */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Real-World Analogy: A Restaurant
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Frontend = Dining Area */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Coffee className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600">Frontend = Dining Area</h3>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                The part of the restaurant customers see and interact with
              </p>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span>The menu (what you read)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span>The decor and ambiance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span>The tables and seating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span>The waiter taking your order</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-blue-600">Key Point:</span> Everything the customer experiences directly
                </p>
              </div>
            </div>

            {/* Backend = Kitchen */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <ShieldCheck className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600">Backend = Kitchen</h3>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                The behind-the-scenes operations customers don't see
              </p>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">•</span>
                  <span>Preparing the food (processing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">•</span>
                  <span>Managing inventory (database)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">•</span>
                  <span>Following recipes (business logic)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">•</span>
                  <span>Quality control and safety</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-green-600">Key Point:</span> Crucial operations hidden from customers
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Just like a restaurant needs both a great dining experience <span className="font-semibold text-blue-600">(Frontend)</span> and 
              a functional kitchen <span className="font-semibold text-green-600">(Backend)</span>, websites need both to work properly!
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mb-8">
          <Link to="/">
            <button className="group bg-gray-800 text-white px-10 py-5 rounded-xl text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              Back to Overview
            </button>
          </Link>
        </div>

        {/* Full-Stack Button */}
        <div className="flex justify-center">
          <Link to="/fullstack">
            <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-xl text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              Learn About Full-Stack Developers
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8 text-center mt-12">
        <p className="text-gray-300">
          Master both Frontend and Backend to become a full-stack developer!
        </p>
      </div>
    </div>
  );
}