import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
  return (
    <div id="main" className="max-w-6xl mx-auto p-6 md:p-12 font-sans text-gray-900">
        
        {/* Header Section */}
        <header className="border-b-2 border-gray-800 pb-6 mb-8">
            <h1 className="text-3xl md:text-3xl font-bold tracking-tight text-gray-900">
                Hi there, I am Jia Wei. A software engineer turned theoretical physicist
            </h1>
        </header>

        {/* Main Content Area */}
        <main className="space-y-12">
            
            {/* Top Section: Projects (Left) + Small Image & Links (Right) */}
            <section className="flex flex-col-reverse md:flex-row gap-12 items-start">
                
                {/* Left Side: Text Content (Projects) */}
                <div className="w-full md:w-3/4">
                    
                    <div className="space-y-10">
                        
                        {/* CATEGORY 1: Software Engineering & AI */}
                        <section>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-200 pb-1">
                                Software Engineering & AI
                            </h3>
                            <div className="space-y-3">
                                {/* Item */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Advanced Networks & Sensors Integration</h4>
                                        <p className="text-sm text-gray-700">AI/ML Intern • ST Engineering</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">May 2026 – Aug 2026</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Software Developer</h4>
                                        <p className="text-sm text-gray-700">Reluvate Technologies, NOC</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Dec 2024 – Jun 2025</p>
                                        <p className="text-xs text-gray-500">Malaysia</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Student Researcher – Data Engineer</h4>
                                        <p className="text-sm text-gray-700">NUS Computing</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Oct 2024 – Jan 2025</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Summer Intern (Llama3 & API Integration)</h4>
                                        <p className="text-sm text-gray-700">ASTRI</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Jul 2024 – Sep 2024</p>
                                        <p className="text-xs text-gray-500">Hong Kong</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Front-End Software Engineer</h4>
                                        <p className="text-sm text-gray-700">NUS Fintech Society</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Aug 2022 – Aug 2023</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Front-End Software Engineer</h4>
                                        <p className="text-sm text-gray-700">Codomo</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Jan 2022 – Jul 2022</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CATEGORY 2: Physics, Research & Engineering */}
                        <section>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-200 pb-1">
                                Physics, Research & Engineering
                            </h3>
                            <div className="space-y-3">
                                {/* Item */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">UROPS – Quantum Benchmarking</h4>
                                        <p className="text-sm text-gray-700">Student Researcher • NUS Computing</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Dec 2025 – Present</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">LaundroBot Director (IoT & Hardware)</h4>
                                        <p className="text-sm text-gray-700">NUS College</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Aug 2023 – Aug 2024</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CATEGORY 3: Leadership, Product & Community */}
                        <section>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-200 pb-1">
                                Leadership, Product & Community
                            </h3>
                            <div className="space-y-3">
                                {/* Item */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Private Mathematics Tutor</h4>
                                        <p className="text-sm text-gray-700">Self Employed Tuition Services</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Oct 2025 – Present</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Residential Assistant</h4>
                                        <p className="text-sm text-gray-700">NUS College</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Aug 2023 – Present</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Product Management Programme – 1st Place</h4>
                                        <p className="text-sm text-gray-700">NUS Product Club</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Aug 2024 – Aug 2025</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Participant, SoC Leadership Programme</h4>
                                        <p className="text-sm text-gray-700">NUS Computing</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Aug 2023 – Aug 2024</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Vice Orientation Leader</h4>
                                        <p className="text-sm text-gray-700">NUS College House Committee</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Aug 2022 – Aug 2023</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                    </div>
                </div>

                {/* Right Side: Image and Contact Links */}
                <div className="w-full md:w-1/4 max-w-[160px] shrink-0 ml-auto flex flex-col gap-4">
                    <Image 
                        className="rounded-sm border border-gray-300 shadow-sm object-cover" 
                        src="/assets/L_4685P.jpg" 
                        alt="Jia Wei" 
                        width={220}
                        height={293} 
                        layout="responsive"
                    />
                    
                    {/* Contact Links Below Photo */}
                    <div className="text-xs space-y-3 w-full border-t border-gray-300 pt-4 text-gray-600">
                        <div>
                            <strong className="block text-gray-800">Email:</strong>
                            <a href="mailto:lim_jia_wei@u.nus.edu" className="text-blue-700 hover:underline">lim_jia_wei@u.nus.edu</a>
                        </div>
                        <div>
                            <strong className="block text-gray-800">LinkedIn:</strong>
                            <Link href="https://www.linkedin.com/in/jia-wei-lim-747037181/">
                                <span className="text-blue-700 hover:underline cursor-pointer">Lim Jia Wei</span>
                            </Link>
                        </div>
                        <div>
                            <strong className="block text-gray-800">GitHub:</strong>
                            <Link href="https://github.com/Kappaccinoh">
                                <span className="text-blue-700 hover:underline cursor-pointer">Kappaccinoh</span>
                            </Link>
                        </div>
                        <div>
                            <strong className="block text-gray-800">Location:</strong>
                            <span>NUS College, Singapore</span>
                        </div>
                        <div>
                            <strong className="block text-gray-800">Education:</strong>
                            <span>National University of Singapore</span>
                            <br />
                            <span className="text-gray-500">BComp (Hons) in Computer Science, NUS College Class of 2026</span>
                        </div>
                    </div>
                </div>
                
            </section>

        </main>
    </div>
  );
}

export default Main;