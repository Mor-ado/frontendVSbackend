import { 
  Monitor, 
  Palette, 
  Code, 
  Server, 
  Database, 
  Zap, 
  Users, 
  ArrowRight,
  Globe,
  FileCode,
  Settings,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frontend vs Backend Development
          </h1>
          <p className="text-xl md:text-2xl text-blue-50">
            How websites work behind the scenes
          </p>
        </div>
      </div>

      {/* Main Content - Two Columns */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* Frontend Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Monitor className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-600">Frontend</h2>
                <p className="text-gray-600 text-sm">(Client Side)</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              The visible part of a website that users see and interact with directly in their browser. 
              It's all about creating beautiful, responsive interfaces.
            </p>

            {/* Visual Icons */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                <Globe className="w-10 h-10 text-blue-600 mb-2" />
                <span className="text-xs text-center text-gray-700">Browser</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                <Palette className="w-10 h-10 text-blue-600 mb-2" />
                <span className="text-xs text-center text-gray-700">Design & UI</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                <Users className="w-10 h-10 text-blue-600 mb-2" />
                <span className="text-xs text-center text-gray-700">User Experience</span>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">HTML</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">CSS</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">JavaScript</span>
              </div>

              <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2 pt-4">
                <FileCode className="w-5 h-5" />
                Popular Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-200">React</span>
                <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-200">Vue</span>
                <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-200">Angular</span>
              </div>
            </div>
          </div>

          {/* Backend Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-green-600">Backend</h2>
                <p className="text-gray-600 text-sm">(Server Side)</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              The behind-the-scenes system that handles logic, databases, authentication, and server operations. 
              Users don't see it, but it powers everything.
            </p>

            {/* Visual Icons */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                <Server className="w-10 h-10 text-green-600 mb-2" />
                <span className="text-xs text-center text-gray-700">Server</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                <Database className="w-10 h-10 text-green-600 mb-2" />
                <span className="text-xs text-center text-gray-700">Database</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                <Zap className="w-10 h-10 text-green-600 mb-2" />
                <span className="text-xs text-center text-gray-700">API</span>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Node.js</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Python</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Java</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">.NET</span>
              </div>

              <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2 pt-4">
                <Database className="w-5 h-5" />
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm border border-green-200">MySQL</span>
                <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm border border-green-200">PostgreSQL</span>
                <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm border border-green-200">MongoDB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Flow Diagram */}
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How It All Works Together
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {/* User */}
            <div className="flex flex-col items-center">
              <div className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-md">
                <Users className="w-12 h-12 text-purple-600" />
              </div>
              <p className="mt-3 font-semibold text-gray-700">User</p>
            </div>

            <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />

            {/* Frontend */}
            <div className="flex flex-col items-center">
              <div className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-md">
                <Monitor className="w-12 h-12 text-blue-600" />
              </div>
              <p className="mt-3 font-semibold text-blue-600">Frontend</p>
              <p className="text-xs text-gray-500 text-center">Browser/UI</p>
            </div>

            <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />

            {/* Backend */}
            <div className="flex flex-col items-center">
              <div className="p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-md">
                <Server className="w-12 h-12 text-green-600" />
              </div>
              <p className="mt-3 font-semibold text-green-600">Backend</p>
              <p className="text-xs text-gray-500 text-center">Server/Logic</p>
            </div>

            <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />

            {/* Database */}
            <div className="flex flex-col items-center">
              <div className="p-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-md">
                <Database className="w-12 h-12 text-amber-600" />
              </div>
              <p className="mt-3 font-semibold text-gray-700">Database</p>
              <p className="text-xs text-gray-500 text-center">Data Storage</p>
            </div>
          </div>

          <div className="mt-10 text-center text-gray-600 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-purple-600">Users</span> interact with the{' '}
              <span className="font-semibold text-blue-600">Frontend</span>, which sends requests to the{' '}
              <span className="font-semibold text-green-600">Backend</span>. The Backend processes the logic and communicates with the{' '}
              <span className="font-semibold text-amber-600">Database</span> to store or retrieve data, then sends the response back through the same path.
            </p>
          </div>
        </div>

        {/* Key Differences Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Key Differences at a Glance
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Frontend Focus</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>What the user sees and clicks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Runs in the browser</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Focuses on design & user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Responsive layouts & animations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-green-600 mb-4">Backend Focus</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Behind-the-scenes logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Runs on servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Handles data & security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>API creation & database management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mb-12">
          <Link to="/detailed">
            <button className="group bg-gradient-to-r from-blue-600 to-green-600 text-white px-10 py-5 rounded-xl text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              See Detailed Differences
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Optional Full-Stack Button */}
        <div className="flex justify-center mb-12">
          <Link to="/fullstack">
            <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 border-2 border-purple-300">
              What Is a Full-Stack Developer?
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8 text-center">
        <p className="text-gray-300">
          Understanding these concepts is the first step to becoming a full-stack developer!
        </p>
      </div>
    </div>
  );
}