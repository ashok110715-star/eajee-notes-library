
"use client";

import { useMemo, useState } from "react";
import {
  Search,
  BookOpen,
  GraduationCap,
  Atom,
  ChevronDown,
  ChevronUp,
  Zap,
  Menu,
  X,
} from "lucide-react";

const chapters = [
  {
    className: "Class 11",
    title: "Units, Dimensions and Measurements",
    topics: [
      "Fundamental and derived physical quantities",
      "SI units and significant figures",
      "Dimensional analysis and dimensional equations",
      "Errors, accuracy and precision",
      "Propagation of errors",
    ],
    formulas: [
      "If Q = A^a B^b, then ΔQ/Q = |a|ΔA/A + |b|ΔB/B",
      "Dimensions of velocity = [LT⁻¹]",
      "Dimensions of force = [MLT⁻²]",
      "Dimensions of energy = [ML²T⁻²]",
    ],
  },
  {
    className: "Class 11",
    title: "Motion in a Straight Line",
    topics: [
      "Position, displacement, distance and speed",
      "Velocity and acceleration",
      "Position-time and velocity-time graphs",
      "Uniform and non-uniform acceleration",
      "Relative velocity in one dimension",
    ],
    formulas: [
      "v = u + at",
      "s = ut + ½at²",
      "v² = u² + 2as",
      "s = (u + v)t/2",
    ],
  },
  {
    className: "Class 11",
    title: "Motion in a Plane",
    topics: [
      "Scalars and vectors",
      "Vector addition and resolution",
      "Projectile motion",
      "Uniform circular motion",
      "Relative velocity in two dimensions",
    ],
    formulas: [
      "R = u² sin(2θ)/g",
      "T = 2u sinθ/g",
      "H = u² sin²θ/(2g)",
      "a_c = v²/r = ω²r",
    ],
  },
  {
    className: "Class 11",
    title: "Laws of Motion",
    topics: [
      "Newton's three laws of motion",
      "Free body diagrams",
      "Normal reaction and tension",
      "Friction: static and kinetic",
      "Connected bodies and pulleys",
      "Circular motion and banking of roads",
    ],
    formulas: [
      "F_net = ma",
      "f_s ≤ μ_s N",
      "f_k = μ_k N",
      "a_c = v²/r",
    ],
  },
  {
    className: "Class 11",
    title: "Work, Energy and Power",
    topics: [
      "Work done by constant and variable forces",
      "Work-energy theorem",
      "Conservative and non-conservative forces",
      "Potential energy and energy conservation",
      "Power and collisions",
    ],
    formulas: [
      "W = Fs cosθ",
      "W_net = ΔK",
      "K = ½mv²",
      "P = dW/dt = F·v",
      "U_spring = ½kx²",
    ],
  },
  {
    className: "Class 11",
    title: "System of Particles and Centre of Mass",
    topics: [
      "Centre of mass of discrete systems",
      "Motion of centre of mass",
      "Linear momentum and impulse",
      "Conservation of momentum",
      "Collisions in one and two dimensions",
    ],
    formulas: [
      "R_cm = Σmᵢrᵢ / Σmᵢ",
      "V_cm = P_total / M",
      "J = Δp = F_avg Δt",
      "Σp_initial = Σp_final",
    ],
  },
  {
    className: "Class 11",
    title: "Rotational Motion",
    topics: [
      "Angular displacement, velocity and acceleration",
      "Torque and angular momentum",
      "Moment of inertia and radius of gyration",
      "Parallel and perpendicular axis theorems",
      "Rolling motion and rotational energy",
    ],
    formulas: [
      "τ = r × F",
      "L = Iω",
      "τ = Iα",
      "K_rot = ½Iω²",
      "I = I_cm + Md²",
    ],
  },
  {
    className: "Class 11",
    title: "Gravitation",
    topics: [
      "Newton's law of gravitation",
      "Gravitational field and potential",
      "Variation of gravity with height and depth",
      "Orbital velocity and escape velocity",
      "Kepler's laws and satellite motion",
    ],
    formulas: [
      "F = GMm/r²",
      "g = GM/R²",
      "V = -GM/r",
      "v_orbit = √(GM/r)",
      "v_escape = √(2GM/R)",
    ],
  },
  {
    className: "Class 11",
    title: "Mechanical Properties of Solids",
    topics: [
      "Stress and strain",
      "Hooke's law",
      "Young's, bulk and shear modulus",
      "Elastic potential energy",
    ],
    formulas: [
      "Stress = F/A",
      "Strain = ΔL/L",
      "Y = (F/A)/(ΔL/L)",
      "Elastic energy density = ½ × stress × strain",
    ],
  },
  {
    className: "Class 11",
    title: "Mechanical Properties of Fluids",
    topics: [
      "Pressure and Pascal's law",
      "Archimedes' principle and buoyancy",
      "Equation of continuity",
      "Bernoulli's theorem",
      "Viscosity and surface tension",
    ],
    formulas: [
      "P = P₀ + ρgh",
      "A₁v₁ = A₂v₂",
      "P + ½ρv² + ρgh = constant",
      "F_viscous = 6πηrv",
    ],
  },
  {
    className: "Class 11",
    title: "Thermal Properties of Matter",
    topics: [
      "Temperature and thermal expansion",
      "Calorimetry and specific heat",
      "Change of state and latent heat",
      "Heat transfer: conduction, convection and radiation",
      "Newton's law of cooling",
    ],
    formulas: [
      "Q = mcΔT",
      "Q = mL",
      "ΔL = αLΔT",
      "dQ/dt = kA(T₁-T₂)/L",
    ],
  },
  {
    className: "Class 11",
    title: "Thermodynamics",
    topics: [
      "Thermal equilibrium and zeroth law",
      "First law of thermodynamics",
      "Isothermal and adiabatic processes",
      "Work done in thermodynamic processes",
      "Heat engines and refrigerators",
    ],
    formulas: [
      "ΔQ = ΔU + W",
      "PV = nRT",
      "For an ideal gas: PVᵞ = constant (adiabatic)",
      "η = W/Q_H",
    ],
  },
  {
    className: "Class 11",
    title: "Kinetic Theory of Gases",
    topics: [
      "Molecular nature of matter",
      "Pressure of an ideal gas",
      "Kinetic interpretation of temperature",
      "Degrees of freedom",
      "Law of equipartition of energy",
    ],
    formulas: [
      "PV = nRT",
      "P = ⅓ρv_rms²",
      "v_rms = √(3RT/M)",
      "Average kinetic energy = 3kT/2",
    ],
  },
  {
    className: "Class 11",
    title: "Oscillations",
    topics: [
      "Periodic and oscillatory motion",
      "Simple harmonic motion",
      "Spring-block systems",
      "Simple pendulum",
      "Energy in SHM",
    ],
    formulas: [
      "x = A cos(ωt + φ)",
      "a = -ω²x",
      "T_spring = 2π√(m/k)",
      "T_pendulum = 2π√(l/g)",
      "E = ½mω²A²",
    ],
  },
  {
    className: "Class 11",
    title: "Waves",
    topics: [
      "Wave motion and wave speed",
      "Transverse and longitudinal waves",
      "Principle of superposition",
      "Standing waves in strings and pipes",
      "Beats and Doppler effect",
    ],
    formulas: [
      "v = fλ",
      "y = A sin(kx - ωt)",
      "f_beat = |f₁ - f₂|",
      "v_string = √(T/μ)",
    ],
  },
  {
    className: "Class 12",
    title: "Electric Charges and Fields",
    topics: [
      "Properties of electric charge",
      "Coulomb's law and superposition",
      "Electric field and field lines",
      "Electric dipole",
      "Electric flux and Gauss's law",
    ],
    formulas: [
      "F = kq₁q₂/r²",
      "E = F/q",
      "p = q × 2a",
      "Φ = E·A",
      "∮E·dA = Q_enclosed/ε₀",
    ],
  },
  {
    className: "Class 12",
    title: "Electrostatic Potential and Capacitance",
    topics: [
      "Electric potential and potential energy",
      "Potential due to point charges and dipoles",
      "Equipotential surfaces",
      "Capacitors and combinations",
      "Dielectrics and stored energy",
    ],
    formulas: [
      "V = kq/r",
      "C = Q/V",
      "C_parallel = C₁ + C₂ + ...",
      "1/C_series = 1/C₁ + 1/C₂ + ...",
      "U = ½CV²",
    ],
  },
  {
    className: "Class 12",
    title: "Current Electricity",
    topics: [
      "Electric current and drift velocity",
      "Ohm's law and resistance",
      "Resistivity and temperature dependence",
      "Cells, EMF and internal resistance",
      "Kirchhoff's laws and Wheatstone bridge",
    ],
    formulas: [
      "I = neAv_d",
      "V = IR",
      "R = ρL/A",
      "P = VI = I²R",
      "V_terminal = E - Ir",
    ],
  },
  {
    className: "Class 12",
    title: "Moving Charges and Magnetism",
    topics: [
      "Magnetic force on moving charges",
      "Motion of charged particles in magnetic fields",
      "Biot-Savart law",
      "Ampere's circuital law",
      "Force between parallel current-carrying wires",
      "Torque on a current loop",
    ],
    formulas: [
      "F = q(v × B)",
      "r = mv/(qB)",
      "B_wire = μ₀I/(2πr)",
      "F = BIL sinθ",
      "τ = NIAB sinθ",
    ],
  },
  {
    className: "Class 12",
    title: "Magnetism and Matter",
    topics: [
      "Bar magnets and magnetic dipoles",
      "Magnetic field lines",
      "Earth's magnetism",
      "Magnetic properties of materials",
      "Dia-, para- and ferromagnetism",
    ],
    formulas: [
      "τ = m × B",
      "U = -m·B",
      "B_axial = μ₀(2m)/(4πr³)",
      "B_equatorial = μ₀m/(4πr³)",
    ],
  },
  {
    className: "Class 12",
    title: "Electromagnetic Induction",
    topics: [
      "Magnetic flux",
      "Faraday's laws of induction",
      "Lenz's law",
      "Motional EMF",
      "Self and mutual inductance",
    ],
    formulas: [
      "Φ = BA cosθ",
      "ε = -dΦ/dt",
      "ε = Blv",
      "ε_L = -L(dI/dt)",
      "U = ½LI²",
    ],
  },
  {
    className: "Class 12",
    title: "Alternating Current",
    topics: [
      "AC voltage and current",
      "RMS and peak values",
      "Reactance and impedance",
      "Series LCR circuits",
      "Resonance and power factor",
      "Transformers",
    ],
    formulas: [
      "V_rms = V₀/√2",
      "X_L = ωL",
      "X_C = 1/(ωC)",
      "Z = √(R² + (X_L-X_C)²)",
      "ω₀ = 1/√(LC)",
    ],
  },
  {
    className: "Class 12",
    title: "Electromagnetic Waves",
    topics: [
      "Displacement current",
      "Nature of electromagnetic waves",
      "Transverse nature of EM waves",
      "Electromagnetic spectrum",
      "Uses of different EM waves",
    ],
    formulas: [
      "c = 1/√(μ₀ε₀)",
      "c = fλ",
      "E₀/B₀ = c",
    ],
  },
  {
    className: "Class 12",
    title: "Ray Optics and Optical Instruments",
    topics: [
      "Reflection and refraction",
      "Spherical mirrors and lenses",
      "Total internal reflection",
      "Prisms and optical fibres",
      "Microscopes and telescopes",
    ],
    formulas: [
      "1/f = 1/v + 1/u (mirror convention)",
      "1/f = 1/v - 1/u (lens convention)",
      "μ = sin i/sin r",
      "P = 1/f (f in metres)",
    ],
  },
  {
    className: "Class 12",
    title: "Wave Optics",
    topics: [
      "Huygens' principle",
      "Interference of light",
      "Young's double-slit experiment",
      "Diffraction",
      "Polarisation",
    ],
    formulas: [
      "β = λD/d",
      "Path difference = d sinθ",
      "Constructive: Δx = nλ",
      "Destructive: Δx = (n + ½)λ",
    ],
  },
  {
    className: "Class 12",
    title: "Dual Nature of Radiation and Matter",
    topics: [
      "Photoelectric effect",
      "Einstein's photoelectric equation",
      "Work function and threshold frequency",
      "Matter waves",
      "Davisson-Germer experiment",
    ],
    formulas: [
      "E = hν",
      "K_max = hν - φ",
      "λ = h/p",
      "λ = h/√(2meV)",
    ],
  },
  {
    className: "Class 12",
    title: "Atoms",
    topics: [
      "Rutherford's atomic model",
      "Bohr's postulates",
      "Energy levels of hydrogen",
      "Atomic spectra",
      "Excitation and ionisation energy",
    ],
    formulas: [
      "r_n = n²a₀",
      "E_n = -13.6/n² eV",
      "hν = E_i - E_f",
    ],
  },
  {
    className: "Class 12",
    title: "Nuclei",
    topics: [
      "Nuclear composition and size",
      "Mass defect and binding energy",
      "Radioactive decay",
      "Half-life and mean life",
      "Nuclear fission and fusion",
    ],
    formulas: [
      "R = R₀A^(1/3)",
      "E = Δmc²",
      "N = N₀e^(-λt)",
      "T₁/₂ = 0.693/λ",
    ],
  },
  {
    className: "Class 12",
    title: "Semiconductor Electronics",
    topics: [
      "Energy bands in solids",
      "Intrinsic and extrinsic semiconductors",
      "P-type and N-type materials",
      "P-N junction diode",
      "Rectifiers and basic electronic devices",
    ],
    formulas: [
      "I = I₀(e^(eV/kT) - 1)",
      "For a diode, forward bias reduces the depletion barrier",
      "A rectifier converts AC into pulsating DC",
    ],
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("All");
  const [openChapter, setOpenChapter] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredChapters = useMemo(() => {
    return chapters.filter((chapter) => {
      const matchesClass =
        classFilter === "All" || chapter.className === classFilter;

      const searchableText = (
        chapter.title +
        " " +
        chapter.topics.join(" ") +
        " " +
        chapter.className
      ).toLowerCase();

      return matchesClass && searchableText.includes(search.toLowerCase());
    });
  }, [search, classFilter]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white">
              <Atom size={26} />
            </div>
            <div>
              <h1 className="text-lg font-black">
                EAJEE <span className="text-blue-700">ADVANCED</span>
              </h1>
              <p className="text-[10px] font-bold tracking-widest text-slate-500">
                PHYSICS NOTES
              </p>
            </div>
          </a>

          <nav className="hidden gap-7 text-sm font-bold md:flex">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#chapters" className="hover:text-blue-700">Chapters</a>
            <a href="#about" className="hover:text-blue-700">About</a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="grid gap-4 border-t bg-white px-5 py-5 text-sm font-bold md:hidden">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#chapters" onClick={() => setMenuOpen(false)}>Chapters</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </nav>
        )}
      </header>

      <section id="home" className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-bold text-blue-200">
              <Zap size={15} />
              JEE MAIN & ADVANCED PREPARATION
            </div>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Master Physics.
              <span className="block text-blue-400">
                Think Beyond Limits.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-slate-300">
              Explore original Physics revision notes covering Class 11
              and Class 12 concepts, important formulas and problem-solving
              topics for JEE Main and JEE Advanced.
            </p>

            <a
              href="#chapters"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-500"
            >
              Explore Physics Notes <BookOpen size={18} />
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-900 p-8">
              <GraduationCap size={52} />
              <p className="mt-8 text-sm font-bold text-blue-100">
                EAJEE ADVANCED NOTES
              </p>
              <h3 className="mt-3 text-3xl font-black">
                Class 11 + Class 12
              </h3>
              <p className="mt-4 text-blue-100">
                Concepts. Formulas. Applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="chapters" className="mx-auto max-w-7xl px-5 py-14">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Complete Physics Collection
          </p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            EAJEE Advanced Physics Notes
          </h2>
          <p className="mt-3 text-slate-500">
            Select a chapter to explore its important topics and formulas.
          </p>
        </div>

        <div className="relative mt-8">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search chapters, topics or formulas..."
            className="w-full rounded-2xl border bg-white py-4 pl-12 pr-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div className="mt-5 flex gap-3">
          {["All", "Class 11", "Class 12"].map((item) => (
            <button
              key={item}
              onClick={() => setClassFilter(item)}
              className={`rounded-full px-5 py-3 text-sm font-bold ${
                classFilter === item
                  ? "bg-blue-700 text-white"
                  : "border bg-white text-slate-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm font-semibold text-slate-500">
          {filteredChapters.length} chapters found
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {filteredChapters.map((chapter, index) => {
            const isOpen = openChapter === chapter.title;

            return (
              <article
                key={chapter.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenChapter(isOpen ? null : chapter.title)
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <BookOpen size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        {chapter.className} · Chapter {chapters.indexOf(chapter) + 1}
                      </p>
                      <h3 className="mt-1 font-extrabold">
                        {chapter.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-500">
                        Advanced Revision Notes
                      </p>
                    </div>
                  </div>
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </button>

                {isOpen && (
                  <div className="border-t bg-slate-50 p-5">
                    <h4 className="font-extrabold text-slate-800">
                      Important Topics
                    </h4>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
                      {chapter.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>

                    <h4 className="mt-6 font-extrabold text-slate-800">
                      Key Formulas
                    </h4>
                    <div className="mt-3 space-y-2">
                      {chapter.formulas.map((formula) => (
                        <p
                          key={formula}
                          className="rounded-lg border bg-white px-3 py-3 font-mono text-sm text-blue-900"
                        >
                          {formula}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {filteredChapters.length === 0 && (
          <div className="mt-8 rounded-2xl border bg-white p-10 text-center">
            <Search className="mx-auto text-slate-400" size={32} />
            <h3 className="mt-3 font-bold">No chapters found</h3>
            <p className="mt-1 text-sm text-slate-500">
              Try a different search term.
            </p>
          </div>
        )}
      </section>

      <section id="about" className="bg-blue-50 px-5 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            About This Library
          </p>
          <h2 className="mt-2 text-3xl font-black">
            Built for Serious Physics Preparation
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            EAJEE Advanced Physics Notes is an independent educational
            resource created to help students revise Physics concepts,
            understand important formulas and strengthen their JEE
            problem-solving foundation. The notes are original study
            material and are not affiliated with any coaching institute.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            These are concise revision notes. Students should also practise
            detailed derivations, examples and JEE Advanced-level problems.
          </p>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
        <p className="font-bold text-white">EAJEE ADVANCED PHYSICS NOTES</p>
        <p className="mt-2">Independent educational resource library.</p>
        <p className="mt-4">
          © {new Date().getFullYear()} EAJEE Notes Library
        </p>
        <nav className="mt-5 flex flex-wrap justify-center gap-5">
          <a href="/about" className="text-blue-300 hover:underline">
            About Us
          </a>
          <a href="/contact" className="text-blue-300 hover:underline">
            Contact Us
          </a>
          <a href="/privacy-policy" className="text-blue-300 hover:underline">
            Privacy Policy
          </a>
        </nav>
      </footer>
    </main>
  );
}
