import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Opens the browser's print dialog ("Save as PDF").
// withPhoto=false adds a class on <html> that hides the profile photo in print,
// and tweaks the tab title so the suggested filename says "no photo".
const printCV = (withPhoto) => {
  const root = document.documentElement;
  const originalTitle = document.title;

  if (!withPhoto) {
    root.classList.add('print-no-photo');
    document.title = `${originalTitle} (no photo)`;
  }

  const cleanup = () => {
    root.classList.remove('print-no-photo');
    document.title = originalTitle;
    window.removeEventListener('afterprint', cleanup);
  };
  window.addEventListener('afterprint', cleanup);

  window.print();
};

const pdfButtonClass =
  'bg-none bg-transparent shadow-none rounded-sm normal-case text-blue-700 border border-blue-700 px-3 py-1.5 hover:bg-blue-50 w-full whitespace-nowrap';

const Main = () => {
  return (
    <div id="main" className="max-w-6xl mx-auto p-6 md:p-12 print:max-w-none print:p-0 font-sans text-gray-900">

        <main className="space-y-12 print:space-y-0">

            <section className="flex flex-col-reverse md:flex-row print:flex-row gap-12 print:gap-8 items-start">

                {/* Left Side: Text Content */}
                <div className="w-full md:w-3/4 print:w-auto print:flex-1 print:min-w-0">

                    {/* Introduction Hook */}
                    <section className="mb-8">
                        <h1 className="text-2xl print:text-3xl font-bold tracking-tight text-gray-900">
                            <span className="print:hidden">Hi there, I am Jia Wei.</span>
                            <span className="hidden print:inline">Lim Jia Wei</span>
                        </h1>
                        <p className="text-lg text-gray-700 mt-2">
                            I am an aspiring theoretical physicist, currently a final-year
                            undergraduate at the National University of Singapore. I work where
                            physical models meet numerical computation: the structure of quantum
                            circuits on superconducting hardware, and Bayesian estimation over
                            geomagnetic vector fields. I am applying to graduate programs in
                            theoretical and mathematical physics.
                        </p>
                    </section>

                    <div className="space-y-10 print:space-y-6">

                        {/* CATEGORY 1: Education */}
                        <section>
                            <h3 className="font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200 pb-1 break-after-avoid">
                                Education
                            </h3>
                            <div className="space-y-3 mt-3">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">National University of Singapore</h4>
                                        <p className="text-sm text-gray-700">B.Comp. (Hons.) in Computer Science, Minor in Physics &bull; NUS College</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Expected Dec 2026</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-medium text-gray-800">Physics coursework:</span>{' '}
                                        Quantum Mechanics I, General Relativity, Thermodynamics &amp; Statistical
                                        Mechanics, Electricity &amp; Magnetism I, Nuclear &amp; Particle Physics,
                                        Mathematical Methods in Physics II &amp; III, Experimental Physics I.
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        <span className="font-medium text-gray-800">Mathematical &amp; computational coursework:</span>{' '}
                                        Linear Algebra, Multivariable Calculus,
                                        Probability &amp; Statistics, Algorithms &amp; Data
                                        Structures, Machine Learning.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* CATEGORY 2: Research */}
                        <section>
                            <h3 className="font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200 pb-1 break-after-avoid">
                                Research
                            </h3>
                            <div className="space-y-5 mt-3">

                                {/* Item */}
                                <div className="break-inside-avoid">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                        <div>
                                            <h4 className="text-base font-bold text-gray-900">Circuit Structure and Classical Simulability on Superconducting Quantum Hardware</h4>
                                            <p className="text-sm text-gray-700">Undergraduate Research (UROPS) &bull; NUS</p>
                                        </div>
                                        <div className="text-left sm:text-right shrink-0">
                                            <p className="text-sm font-medium text-gray-800">Dec 2025 &ndash; Present</p>
                                            <p className="text-xs text-gray-500">Singapore</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">
                                        Constructing S&middot;U&middot;U<sup>&dagger;</sup> circuit families on IBM heavy-hex
                                        devices to probe where tensor-network methods stop being able to track a state.
                                        Derived and numerically verified conjugation identities across the rotation and
                                        RZZ gate families, allowing gates to be reordered while preserving unitary
                                        equivalence; the mirrored structure forces a product-state output, motivating
                                        a perturbed S&middot;U&middot;P&middot;U<sup>&dagger;</sup> variant as a route to
                                        states that resist efficient classical simulation.
                                    </p>
                                </div>

                                {/* Item */}
                                <div className="break-inside-avoid">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                        <div>
                                            <h4 className="text-base font-bold text-gray-900">Geomagnetic Field Reconstruction and Nonlinear State Estimation</h4>
                                            <p className="text-sm text-gray-700">Research Intern &bull; ST Engineering</p>
                                            <Link
                                                href="/assets/MAGNAV STE Report.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-blue-600 hover:underline block sm:inline-block mt-0.5"
                                            >
                                                Technical Report
                                            </Link>
                                        </div>
                                        <div className="text-left sm:text-right shrink-0">
                                            <p className="text-sm font-medium text-gray-800">May 2026 &ndash; Aug 2026</p>
                                            <p className="text-xs text-gray-500">Singapore</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">
                                        Reconstructed a three-dimensional magnetic vector field from field-collected
                                        magnetometer and GPS measurements, regressing the field in ECEF coordinates so
                                        that maps built on separate runs remain mutually consistent. Fused the resulting
                                        map with inertial dead reckoning through an unscented Kalman filter. Failure
                                        analysis localised the dominant positioning error to insufficient spatial
                                        gradient in the field itself rather than to the estimator &mdash; the map, not the
                                        filter, sets the achievable resolution.
                                    </p>
                                </div>

                                {/* Item */}
                                <div className="break-inside-avoid">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                        <div>
                                            <h4 className="text-base font-bold text-gray-900">Quantum Bouncer: Wavepacket Dynamics in a Linear Potential</h4>
                                            <p className="text-sm text-gray-700">Quantum Mechanics I project &bull; NUS Physics</p>
                                            <Link
                                                href="/assets/quantum bouncer matlab simulator.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-blue-600 hover:underline block sm:inline-block mt-0.5"
                                            >
                                                Simulation Code
                                            </Link>
                                        </div>
                                        <div className="text-left sm:text-right shrink-0">
                                            <p className="text-sm font-medium text-gray-800">Aug 2025 &ndash; Nov 2025</p>
                                            <p className="text-xs text-gray-500">Singapore</p>
                                        </div>
                                        
                                    </div>
                                    <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">
                                        Integrated the time-dependent Schr&ouml;dinger equation for a particle bouncing
                                        under gravity above a hard floor, and compared the numerically propagated
                                        wavepacket against the Airy-function eigenbasis to recover the revival structure
                                        of the bound spectrum.
                                    </p>
                                </div>

                            </div>
                        </section>

                        {/* CATEGORY 3: Computational Methods */}
                        <section>
                            <h3 className="font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200 pb-1 break-after-avoid">
                                Computational Methods
                            </h3>
                            <div className="space-y-2 mt-3 text-sm text-gray-700">
                                <p>
                                    <span className="font-medium text-gray-800">Numerical &amp; statistical:</span>{' '}
                                    time-dependent PDE integration, linear algebra and eigenproblems, Gaussian process
                                    regression, nonlinear Bayesian filtering (UKF), Monte Carlo methods, optimisation.
                                </p>
                                <p>
                                    <span className="font-medium text-gray-800">Quantum:</span>{' '}
                                    Qiskit, transpilation to hardware topologies, tensor-network state simulation,
                                    Clifford and rotation-gate algebra.
                                </p>
                                <p>
                                    <span className="font-medium text-gray-800">Tools:</span>{' '}
                                    Python (NumPy, SciPy, SymPy, Matplotlib, Plotly), C/C++, Git, Linux, LaTeX.
                                </p>
                            </div>
                        </section>

                        {/* CATEGORY 4: Applied Engineering */}
                        <section>
                            <h3 className="font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200 pb-1 break-after-avoid">
                                Applied Engineering Experience
                            </h3>
                            <div className="space-y-3 mt-3">
                                {/* Item */}
                                <div className="break-inside-avoid flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Road Network Spatial AI &amp; Computer Vision</h4>
                                        <p className="text-sm text-gray-700">Summer Intern &bull; Hong Kong Applied Science and Technology Research Institute (ASTRI)</p>
                                        <Link href="https://github.com/Kappaccinoh/ASTRI" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block sm:inline-block mt-0.5">
                                        Project Report</Link>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Jul 2024 &ndash; Sep 2024</p>
                                        <p className="text-xs text-gray-500">Hong Kong</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="break-inside-avoid flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">LaundroBot &mdash; Embedded Sensing &amp; Hardware</h4>
                                        <p className="text-sm text-gray-700">Project Director &bull; NUS College</p>
                                        <Link href="https://github.com/Kappaccinoh/LaundroBot/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block sm:inline-block mt-0.5">
                                        Handover Report</Link>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Aug 2023 &ndash; Aug 2024</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="break-inside-avoid flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Full Stack Developer</h4>
                                        <p className="text-sm text-gray-700">Reluvate Technologies &bull; NUS Overseas Colleges</p>
                                        <Link href="https://github.com/Kappaccinoh/parklah" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block sm:inline-block mt-0.5">
                                        Project Repo</Link>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">Dec 2024 &ndash; Jun 2025</p>
                                        <p className="text-xs text-gray-500">Malaysia</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="break-inside-avoid flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Earlier software roles</h4>
                                        <p className="text-sm text-gray-700">Data engineering, NUS Computing (2024&ndash;25) &bull; Front-end engineering, NUS Fintech Society (2022&ndash;23) and Codomo (2022)</p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <p className="text-sm font-medium text-gray-800">2022 &ndash; 2025</p>
                                        <p className="text-xs text-gray-500">Singapore</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Right Side: Image and Contact Links */}
                <div className="w-full md:w-1/4 max-w-[180px] print:w-[140px] shrink-0 ml-auto flex flex-col gap-4">
                    <Image
                        className="cv-photo w-full h-auto rounded-sm border border-gray-300 shadow-sm print:shadow-none object-cover"
                        src={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/assets/L_4685P.jpg`}
                        alt="Jia Wei"
                        width={220}
                        height={293}
                        priority
                    />

                    <div className="cv-contact text-xs space-y-3 w-full border-t border-gray-300 pt-4 text-gray-600">
                        <div>
                            <strong className="block text-gray-800">Currently exploring:</strong>
                            <span>High Energy Physics, Computational Physics</span>
                        </div>
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
                        <div className="print:hidden pt-1 flex flex-col gap-2">
                            <button type="button" onClick={() => printCV(true)} className={pdfButtonClass}>
                                Download PDF
                            </button>
                            <button type="button" onClick={() => printCV(false)} className={pdfButtonClass}>
                                Download PDF (no photo)
                            </button>
                        </div>
                    </div>
                </div>

            </section>

        </main>
    </div>
  );
}

export default Main;