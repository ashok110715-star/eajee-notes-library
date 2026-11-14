
"use client";

import { useMemo, useState } from "react";

type Unit = {
  no: number;
  title: string;
  className: string;
  topics: string[];
  theory: string[];
  formulas: string[];
  example: string;
  practice: string[];
  traps: string[];
};

const units: Unit[] = [
  {
    no: 1,
    title: "Units and Measurements",
    className: "Class 11",
    topics: ["Physical quantities", "SI units", "Dimensions", "Dimensional analysis", "Errors", "Significant figures", "Measuring instruments"],
    theory: [
      "A physical quantity is expressed as a numerical value multiplied by a unit. Fundamental quantities are independent quantities; derived quantities are formed from them.",
      "The SI system uses metre, kilogram, second, ampere, kelvin, mole and candela as its seven base units.",
      "The dimensional formula represents a quantity in terms of mass [M], length [L], time [T] and other base dimensions. It is useful for checking equations and deriving possible relations.",
      "If measured values contain errors, absolute error is the magnitude of the difference from the mean. Relative error is absolute error divided by the mean. Percentage error is relative error multiplied by 100.",
      "For multiplication or division, maximum fractional errors add. For a quantity raised to a power, its fractional error is multiplied by the magnitude of that power."
    ],
    formulas: [
      "Velocity: [LT⁻¹] | Acceleration: [LT⁻²]",
      "Force: [MLT⁻²] | Work: [ML²T⁻²]",
      "Pressure: [ML⁻¹T⁻²] | Power: [ML²T⁻³]",
      "Mean value = (sum of readings)/(number of readings)",
      "Percentage error = (absolute error / mean value) × 100",
      "If Q = AᵃBᵇ/Cᶜ, then ΔQ/Q ≈ |a|ΔA/A + |b|ΔB/B + |c|ΔC/C"
    ],
    example: "A length is measured as 2.0 m with an absolute error of 0.1 m. Percentage error = (0.1/2.0) × 100 = 5%.",
    practice: ["Find the dimensions of the gravitational constant G.", "If radius has 2% error, find the percentage error in the area of a circle."],
    traps: ["Dimensional correctness does not prove that an equation is physically correct.", "A dimensionless quantity can still have a unit, such as plane angle in radians.", "Do not add absolute errors directly when quantities are multiplied."]
  },
  {
    no: 2,
    title: "Kinematics",
    className: "Class 11",
    topics: ["Position and displacement", "Speed and velocity", "Acceleration", "Motion graphs", "Equations of motion", "Relative motion", "Projectile motion", "Circular motion"],
    theory: [
      "Kinematics describes motion without discussing the forces causing it. Position specifies location; displacement is the change in position and is a vector.",
      "Average velocity is displacement divided by time. Instantaneous velocity is the rate of change of position. Acceleration is the rate of change of velocity.",
      "For constant acceleration, the velocity-time graph is a straight line. Its slope gives acceleration and its signed area gives displacement.",
      "Projectile motion is two-dimensional motion under uniform downward gravitational acceleration, neglecting air resistance. Horizontal velocity remains constant while vertical velocity changes.",
      "In uniform circular motion, speed may remain constant while velocity changes direction. The acceleration is directed towards the centre."
    ],
    formulas: [
      "v = u + at",
      "s = ut + ½at²",
      "v² = u² + 2as",
      "Average velocity = displacement / time",
      "Projectile time of flight: T = 2u sinθ / g",
      "Projectile range: R = u² sin2θ / g",
      "Maximum height: H = u² sin²θ / 2g",
      "Centripetal acceleration: a = v²/r = ω²r",
      "Relative velocity: vAB = vA − vB"
    ],
    example: "A body starts from rest and accelerates at 2 m/s² for 5 s. Its final velocity is v = 0 + 2 × 5 = 10 m/s. Its displacement is s = ½ × 2 × 25 = 25 m.",
    practice: ["A projectile is launched at speed u and angle 30°. Write its time of flight.", "A car changes velocity from 10 m/s to 25 m/s in 5 s. Find acceleration."],
    traps: ["Distance is scalar; displacement is vector.", "The area under a velocity-time graph gives displacement, not always total distance.", "At the highest point of a projectile, vertical velocity is zero but acceleration is still g.", "Centripetal acceleration exists even when speed is constant."]
  },
  {
    no: 3,
    title: "Laws of Motion",
    className: "Class 11",
    topics: ["Newton's laws", "Inertia", "Free body diagrams", "Momentum", "Impulse", "Friction", "Circular dynamics", "Connected bodies"],
    theory: [
      "Newton's first law states that a body remains at rest or in uniform straight-line motion unless acted upon by a net external force.",
      "Newton's second law gives the relation between net force and rate of change of momentum. For constant mass, F = ma.",
      "Newton's third law states that forces between two interacting bodies are equal in magnitude and opposite in direction. They act on different bodies.",
      "A free body diagram shows all external forces acting on one selected body. Draw weight, normal reaction, tension, friction and applied forces separately.",
      "Static friction adjusts up to a limiting value. Kinetic friction acts when surfaces slide relative to one another.",
      "Momentum is conserved in an isolated system when the net external impulse is zero."
    ],
    formulas: [
      "F = dp/dt; for constant mass, F = ma",
      "Momentum: p = mv",
      "Impulse: J = ∫F dt = Δp",
      "Limiting friction: fs,max = μsN",
      "Kinetic friction: fk = μkN",
      "Centripetal force requirement: Fnet,radial = mv²/r"
    ],
    example: "A 4 kg block experiences a net horizontal force of 12 N. Its acceleration is a = F/m = 12/4 = 3 m/s².",
    practice: ["A 2 kg object changes speed from 3 m/s to 8 m/s. Find its change in momentum.", "A block rests on a horizontal surface. Identify the normal force if no other vertical force acts."],
    traps: ["Action and reaction never act on the same body.", "Normal reaction is not always equal to mg.", "Static friction is not always μsN; that is its maximum value.", "Centripetal force is the net inward force, not an extra force."]
  },
  {
    no: 4,
    title: "Work, Energy and Power",
    className: "Class 11",
    topics: ["Work by constant force", "Variable force", "Kinetic energy", "Potential energy", "Work-energy theorem", "Conservation of energy", "Power", "Collisions"],
    theory: [
      "Work done by a constant force is the dot product of force and displacement. Work is positive when the force has a component along displacement and negative when it opposes displacement.",
      "The work-energy theorem states that net work done on a particle equals its change in kinetic energy.",
      "Conservative forces have path-independent work. Gravitational and ideal spring forces are conservative. Friction is generally non-conservative.",
      "Mechanical energy is the sum of kinetic and potential energy. It remains constant when only conservative forces do work.",
      "Power is the rate of doing work. Instantaneous power can also be expressed as the dot product of force and velocity.",
      "In collisions, momentum is conserved for an isolated system. Kinetic energy is conserved only in elastic collisions."
    ],
    formulas: [
      "W = Fs cosθ",
      "Wnet = ΔK = ½mv² − ½mu²",
      "K = ½mv²",
      "Gravitational potential energy near Earth: U = mgh",
      "Spring potential energy: U = ½kx²",
      "Power: P = W/t; instantaneous P = F·v",
      "Coefficient of restitution: e = relative speed of separation / relative speed of approach"
    ],
    example: "A 2 kg object speeds up from 3 m/s to 5 m/s. Net work = ½ × 2 × (25 − 9) = 16 J.",
    practice: ["Find the kinetic energy of a 3 kg body moving at 4 m/s.", "A spring of constant 200 N/m is stretched by 0.1 m. Find stored energy."],
    traps: ["Centripetal force does no work in uniform circular motion.", "Work can be zero even when force is non-zero.", "Momentum conservation alone does not imply kinetic-energy conservation."]
  },
  {
    no: 5,
    title: "Rotational Motion",
    className: "Class 11",
    topics: ["Centre of mass", "Torque", "Angular variables", "Moment of inertia", "Angular momentum", "Rolling motion", "Rotational equilibrium"],
    theory: [
      "The centre of mass is the weighted average position of the mass distribution. For a system, its motion is determined by the net external force.",
      "Torque measures the turning effect of a force and depends on the perpendicular distance from the axis to the force's line of action.",
      "Moment of inertia measures resistance to angular acceleration and depends on mass distribution and the chosen axis.",
      "Angular momentum is conserved when net external torque is zero. This principle explains why changing the distribution of mass changes angular speed.",
      "For rolling without slipping, translational and rotational motion are linked by v = ωR. Total kinetic energy includes both translational and rotational parts."
    ],
    formulas: [
      "rCM = (Σmiri)/(Σmi)",
      "τ = r × F; magnitude = rF sinθ",
      "τnet = Iα",
      "Krotation = ½Iω²",
      "L = Iω (fixed-axis rotation)",
      "Parallel-axis theorem: I = ICM + Md²",
      "Perpendicular-axis theorem: Iz = Ix + Iy for a plane lamina",
      "Rolling: vCM = ωR",
      "Krolling = ½Mv² + ½Iω²"
    ],
    example: "A wheel has I = 2 kg m² and experiences torque 6 N m. Angular acceleration α = τ/I = 3 rad/s².",
    practice: ["Find the torque of a 10 N perpendicular force applied 0.5 m from an axis.", "State the condition for rolling without slipping."],
    traps: ["Moment of inertia depends on the axis.", "Torque is zero if the force's line of action passes through the axis.", "Rolling kinetic energy has translational and rotational contributions."]
  },
  {
    no: 6,
    title: "Gravitation",
    className: "Class 11",
    topics: ["Newton's law of gravitation", "Gravitational field", "Potential", "Acceleration due to gravity", "Satellites", "Orbital speed", "Escape speed"],
    theory: [
      "Every pair of masses attracts each other. The gravitational force acts along the line joining their centres and follows an inverse-square law.",
      "Gravitational field is force per unit test mass. Gravitational potential is potential energy per unit mass.",
      "For a spherical body, outside the body its gravitational effect is equivalent to that of a point mass at its centre.",
      "A satellite remains in orbit because gravity provides the required centripetal acceleration. In a circular orbit, its speed depends on orbital radius.",
      "Escape speed is the minimum launch speed needed to reach infinitely far away with zero remaining speed, neglecting atmosphere and other bodies."
    ],
    formulas: [
      "F = GMm/r²",
      "g = GM/r²",
      "V = −GM/r",
      "U = −GMm/r",
      "Circular orbital speed: v = √(GM/r)",
      "Orbital period: T = 2π√(r³/GM)",
      "Escape speed: ve = √(2GM/R)",
      "Near Earth's surface: g ≈ 9.8 m/s²"
    ],
    example: "For a circular orbit, equate gravitational force to centripetal force: GMm/r² = mv²/r. Therefore v = √(GM/r).",
    practice: ["How does gravitational force change if separation becomes twice as large?", "Write the relation between escape speed and circular orbital speed at the same radius."],
    traps: ["Gravitational potential is negative when zero is chosen at infinity.", "Orbital speed decreases as orbital radius increases.", "Mass and weight are different physical quantities."]
  },
  {
    no: 7,
    title: "Properties of Solids and Liquids",
    className: "Class 11",
    topics: ["Elasticity", "Stress and strain", "Young's modulus", "Pressure", "Pascal's law", "Buoyancy", "Viscosity", "Surface tension", "Fluid flow"],
    theory: [
      "Stress is restoring force per unit area. Strain is a fractional measure of deformation. Within the elastic limit, stress is proportional to strain for many materials.",
      "Young's modulus describes resistance to longitudinal deformation. Bulk modulus describes resistance to volume change.",
      "Pressure in a static fluid increases with depth. Pressure at a point acts equally in all directions in a fluid at rest.",
      "Archimedes' principle states that the buoyant force equals the weight of displaced fluid.",
      "Viscosity describes internal resistance to fluid flow. Surface tension arises from the tendency of a liquid surface to reduce its area.",
      "For steady incompressible flow, the continuity equation expresses conservation of mass. Bernoulli's equation expresses energy conservation along a streamline under ideal conditions."
    ],
    formulas: [
      "Stress = F/A",
      "Strain = change in dimension / original dimension",
      "Young's modulus Y = (F/A)/(ΔL/L)",
      "Pressure: P = F/A",
      "Liquid pressure: P = P₀ + ρgh",
      "Buoyant force: FB = ρfluid Vdisplaced g",
      "Continuity: A₁v₁ = A₂v₂",
      "Bernoulli: P + ½ρv² + ρgh = constant",
      "Stokes' drag: F = 6πηrv (valid for slow flow around a small sphere)"
    ],
    example: "A fluid has density 1000 kg/m³ at depth 2 m. Gauge pressure = ρgh = 1000 × 9.8 × 2 = 19600 Pa.",
    practice: ["Calculate pressure at 5 m depth in water, taking g = 10 m/s².", "State the continuity equation for an incompressible fluid."],
    traps: ["Gauge pressure and absolute pressure are different.", "Bernoulli's equation has assumptions; it is not universal for every real flow.", "Buoyant force depends on displaced fluid volume."]
  },
  {
    no: 8,
    title: "Thermodynamics",
    className: "Class 11",
    topics: ["Thermal equilibrium", "Zeroth law", "First law", "Internal energy", "Isothermal process", "Adiabatic process", "Heat engines", "Refrigerators"],
    theory: [
      "The zeroth law establishes the concept of temperature: systems separately in thermal equilibrium with a third system are in equilibrium with each other.",
      "The first law is conservation of energy applied to thermodynamic systems. Heat supplied can increase internal energy and/or be used to do work.",
      "In an isothermal process, temperature remains constant. For an ideal gas, internal energy depends only on temperature, so its change is zero in an isothermal process.",
      "In an adiabatic process, no heat is exchanged with the surroundings. Temperature can change because work is done.",
      "A heat engine absorbs heat from a hot source, performs work and rejects some heat to a cold sink. No cyclic engine can convert all absorbed heat into work."
    ],
    formulas: [
      "First law: Q = ΔU + W (W = work done by system)",
      "Ideal gas: PV = nRT",
      "Isothermal ideal gas: ΔU = 0",
      "Adiabatic ideal gas: PVᵞ = constant",
      "Efficiency: η = W/QH = 1 − QC/QH",
      "Carnot efficiency: η = 1 − TC/TH (temperatures in kelvin)",
      "For one mole: Cp − Cv = R"
    ],
    example: "A gas absorbs 500 J heat and does 200 J work. From Q = ΔU + W, ΔU = 500 − 200 = 300 J.",
    practice: ["A system receives 100 J heat and does 40 J work. Find ΔU.", "Write Carnot efficiency in terms of source and sink temperatures."],
    traps: ["Always state the sign convention for work.", "Use kelvin in gas laws and Carnot efficiency.", "Adiabatic does not mean constant temperature."]
  },
  {
    no: 9,
    title: "Kinetic Theory of Gases",
    className: "Class 11",
    topics: ["Ideal gas model", "Molecular motion", "Pressure of gas", "RMS speed", "Degrees of freedom", "Equipartition", "Specific heat"],
    theory: [
      "The kinetic theory models a gas as a large number of molecules in continuous random motion. Ideal-gas molecules are treated as point particles with negligible intermolecular forces except during collisions.",
      "Gas pressure arises from molecular collisions with container walls. Temperature is related to the average translational kinetic energy of molecules.",
      "The equipartition theorem assigns an average energy of ½kT to each independent quadratic degree of freedom in thermal equilibrium.",
      "Real gases approach ideal behaviour at sufficiently low pressure and high temperature, where molecular size and interactions become less important."
    ],
    formulas: [
      "PV = nRT = NkBT",
      "P = ⅓ρ vrms²",
      "Average translational kinetic energy per molecule = 3kBT/2",
      "vrms = √(3RT/M)",
      "Average energy = f kBT/2",
      "For an ideal gas: Cp − Cv = R",
      "γ = Cp/Cv"
    ],
    example: "At a fixed temperature, the average translational kinetic energy per molecule is 3kBT/2. It depends on temperature, not on the gas identity.",
    practice: ["What happens to vrms if absolute temperature becomes four times?", "Write the ideal gas equation using number of molecules."],
    traps: ["Use absolute temperature, not Celsius.", "RMS speed is not the same as average speed.", "The molar mass in vrms must be in kg/mol when using SI units."]
  },
  {
    no: 10,
    title: "Oscillations and Waves",
    className: "Class 11",
    topics: ["Periodic motion", "Simple harmonic motion", "Spring systems", "Simple pendulum", "Energy in SHM", "Wave equation", "Sound waves", "Standing waves", "Beats"],
    theory: [
      "Periodic motion repeats after equal intervals of time. Simple harmonic motion is a special periodic motion in which acceleration is proportional to displacement from equilibrium and directed towards it.",
      "In SHM, displacement, velocity and acceleration vary sinusoidally with time. At equilibrium, speed is maximum; at extreme positions, speed is zero.",
      "A travelling wave transfers energy without net transport of matter. Wave speed depends on the medium and wave properties.",
      "Standing waves form through superposition of waves travelling in opposite directions with the same frequency. Nodes have zero displacement while antinodes have maximum displacement."
    ],
    formulas: [
      "SHM: a = −ω²x",
      "x = A cos(ωt + φ)",
      "vmax = Aω; amax = Aω²",
      "Tspring = 2π√(m/k)",
      "Tpendulum = 2π√(L/g) (small oscillations)",
      "Wave speed: v = fλ",
      "String wave speed: v = √(T/μ)",
      "Beat frequency = |f₁ − f₂|"
    ],
    example: "A spring-mass system has m = 1 kg and k = 100 N/m. Its angular frequency is √(k/m) = 10 rad/s and period is 2π/10 s.",
    practice: ["If amplitude doubles in SHM, what happens to maximum speed?", "A wave has frequency 50 Hz and wavelength 2 m. Find its speed."],
    traps: ["SHM acceleration is zero at equilibrium, not maximum.", "The simple pendulum formula assumes small angular displacement.", "Wave speed is determined by the medium, not simply by source frequency."]
  },
  {
    no: 11,
    title: "Electrostatics",
    className: "Class 12",
    topics: ["Electric charge", "Coulomb's law", "Electric field", "Electric dipole", "Electric flux", "Gauss's law", "Potential", "Capacitance", "Dielectrics"],
    theory: [
      "Electric charge is conserved and quantised. Like charges repel and unlike charges attract.",
      "Coulomb's law gives the electrostatic force between stationary point charges. The electric field is force per unit positive test charge.",
      "Electric field lines begin on positive charges and end on negative charges or infinity. They never cross.",
      "Gauss's law relates net electric flux through a closed surface to the charge enclosed. It is especially useful for spherical, cylindrical and planar symmetry.",
      "Electric potential is potential energy per unit charge. The electric field points in the direction of decreasing potential.",
      "A capacitor stores charge and electrical energy. A dielectric changes capacitance by modifying the electric field inside the capacitor."
    ],
    formulas: [
      "Coulomb force: F = k|q₁q₂|/r²",
      "Electric field: E = F/q₀",
      "Point charge field: E = kq/r²",
      "Electric potential: V = kq/r",
      "Gauss's law: ∮E·dA = Qenc/ε₀",
      "Dipole moment: p = q × separation",
      "Capacitance: C = Q/V",
      "Parallel plate capacitor: C = ε₀A/d",
      "Stored energy: U = ½CV² = Q²/(2C) = ½QV"
    ],
    example: "A 2 μF capacitor is connected to 10 V. Its charge is Q = CV = 2 × 10⁻⁶ × 10 = 20 μC.",
    practice: ["Find the electric field magnitude due to a point charge q at distance r.", "Two capacitors of 2 μF and 3 μF are in parallel. Find equivalent capacitance."],
    traps: ["Electric field is a vector; potential is a scalar.", "Gauss's law is always true, but symmetry is needed to easily calculate E from it.", "Capacitors in series have the same charge magnitude."]
  },
  {
    no: 12,
    title: "Current Electricity",
    className: "Class 12",
    topics: ["Electric current", "Drift velocity", "Ohm's law", "Resistance", "Resistivity", "Series and parallel circuits", "Kirchhoff's laws", "Wheatstone bridge", "Potentiometer"],
    theory: [
      "Electric current is the rate of flow of charge. In a metallic conductor, electrons drift opposite to conventional current direction.",
      "Ohm's law states that current is proportional to potential difference for a conductor under constant physical conditions.",
      "Resistance depends on material, length, cross-sectional area and temperature. Resistivity is a material property.",
      "Kirchhoff's junction rule follows conservation of charge; the loop rule follows conservation of energy.",
      "A potentiometer compares potential differences using a null method, reducing the effect of drawing current from the source being measured."
    ],
    formulas: [
      "I = dQ/dt",
      "V = IR",
      "R = ρL/A",
      "Drift current: I = neAvd",
      "Series: Req = R₁ + R₂ + ...",
      "Parallel: 1/Req = 1/R₁ + 1/R₂ + ...",
      "Electric power: P = VI = I²R = V²/R",
      "Junction rule: ΣIin = ΣIout",
      "Loop rule: ΣΔV = 0"
    ],
    example: "A 6 Ω resistor is connected across 12 V. Current I = V/R = 12/6 = 2 A and power P = VI = 24 W.",
    practice: ["Find equivalent resistance of 4 Ω and 6 Ω in parallel.", "A 10 Ω resistor carries 2 A. Find power dissipated."],
    traps: ["Conventional current direction is opposite to electron drift in metals.", "Series elements carry the same current; parallel branches have the same voltage.", "An ideal ammeter has zero resistance and an ideal voltmeter has infinite resistance."]
  },
  {
    no: 13,
    title: "Magnetic Effects of Current and Magnetism",
    className: "Class 12",
    topics: ["Magnetic force", "Lorentz force", "Charged particle motion", "Biot-Savart law", "Ampere's law", "Force on wire", "Torque on coil", "Magnetic dipole", "Magnetic materials"],
    theory: [
      "A moving charge experiences magnetic force perpendicular to both its velocity and the magnetic field. A stationary charge does not experience magnetic force.",
      "A charged particle entering a uniform magnetic field perpendicular to its velocity follows circular motion because magnetic force provides centripetal force.",
      "Current-carrying conductors produce magnetic fields. Biot-Savart law and Ampere's circuital law are tools for calculating these fields.",
      "A current loop in a magnetic field experiences torque. Its magnetic dipole moment is directed perpendicular to the plane of the loop.",
      "Magnetic materials are commonly described as diamagnetic, paramagnetic or ferromagnetic based on their response to an applied field."
    ],
    formulas: [
      "Lorentz force: F = q(E + v × B)",
      "Magnetic force magnitude: F = |q|vB sinθ",
      "Circular radius: r = mv/(|q|B)",
      "Cyclotron angular frequency: ω = |q|B/m",
      "Long straight wire: B = μ₀I/(2πr)",
      "Solenoid: B = μ₀nI (ideal long solenoid)",
      "Force on wire: F = ILB sinθ",
      "Torque on coil: τ = NIAB sinθ",
      "Magnetic moment: μ = NIA"
    ],
    example: "A charge q moves perpendicular to a uniform magnetic field B. Equating |q|vB = mv²/r gives r = mv/(|q|B).",
    practice: ["What is magnetic force on a stationary charge?", "Write the magnetic field due to a long straight current-carrying wire."],
    traps: ["Magnetic force does no work on a point charge because it is perpendicular to velocity.", "Use the magnitude of charge when calculating orbit radius.", "Magnetic field direction must be determined using the appropriate right-hand rule."]
  },
  {
    no: 14,
    title: "Electromagnetic Induction and Alternating Current",
    className: "Class 12",
    topics: ["Magnetic flux", "Faraday's law", "Lenz's law", "Motional emf", "Self induction", "Mutual induction", "AC circuits", "Reactance", "Resonance", "Transformer"],
    theory: [
      "Electromagnetic induction occurs when magnetic flux linked with a circuit changes. The induced emf is proportional to the rate of change of flux linkage.",
      "Lenz's law gives the direction of induced current: it opposes the change in magnetic flux that produces it.",
      "An inductor opposes changes in current. A capacitor opposes changes in voltage through charge storage.",
      "In AC circuits, voltage and current can have phase differences. Impedance combines resistance and reactance.",
      "At resonance in an ideal series LCR circuit, inductive and capacitive reactances are equal and impedance is minimum."
    ],
    formulas: [
      "Magnetic flux: Φ = BA cosθ",
      "Faraday's law: ε = −N dΦ/dt",
      "Motional emf: ε = Blv (perpendicular arrangement)",
      "Inductor: ε = −L dI/dt",
      "Inductive reactance: XL = ωL",
      "Capacitive reactance: XC = 1/(ωC)",
      "Series LCR: Z = √(R² + (XL − XC)²)",
      "Resonance: ω₀ = 1/√(LC)",
      "Transformer: Vs/Vp = Ns/Np (ideal)"
    ],
    example: "For L = 0.2 H and frequency 50 Hz, XL = 2πfL = 2π × 50 × 0.2 ≈ 62.8 Ω.",
    practice: ["State Lenz's law.", "What is the condition for resonance in a series LCR circuit?"],
    traps: ["The negative sign in Faraday's law represents Lenz's law.", "Use angular frequency ω = 2πf.", "At resonance, XL = XC; impedance equals R in an ideal series circuit."]
  },
  {
    no: 15,
    title: "Electromagnetic Waves",
    className: "Class 12",
    topics: ["Displacement current", "Nature of EM waves", "Electric and magnetic fields", "Electromagnetic spectrum", "Energy transport"],
    theory: [
      "Electromagnetic waves consist of changing electric and magnetic fields. In a plane wave in free space, the fields are mutually perpendicular and perpendicular to the direction of propagation.",
      "Electromagnetic waves do not require a material medium and travel through vacuum at the speed of light.",
      "The electromagnetic spectrum includes radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays. Their frequencies increase across this sequence."
    ],
    formulas: [
      "c = 1/√(μ₀ε₀)",
      "c = fλ",
      "E₀/B₀ = c (vacuum plane wave)",
      "Energy density: u = ½ε₀E² + B²/(2μ₀)"
    ],
    example: "An electromagnetic wave has frequency 100 MHz. In vacuum, λ = c/f = 3 × 10⁸ / 10⁸ = 3 m.",
    practice: ["Arrange radio waves, visible light and X-rays in increasing frequency.", "What is the relation between electric and magnetic field amplitudes in vacuum?"],
    traps: ["All electromagnetic waves travel at the same speed in vacuum.", "Frequency remains unchanged when a wave enters a different medium; speed and wavelength may change."]
  },
  {
    no: 16,
    title: "Optics",
    className: "Class 12",
    topics: ["Reflection", "Spherical mirrors", "Refraction", "Total internal reflection", "Lenses", "Prism", "Optical instruments", "Interference", "Diffraction", "Polarisation"],
    theory: [
      "Geometrical optics studies light using rays. Reflection follows equality of the angles of incidence and reflection.",
      "Refraction occurs because light changes speed when it enters a different medium. Snell's law relates the angles and refractive indices.",
      "Total internal reflection occurs when light travels from an optically denser to a rarer medium and the angle of incidence exceeds the critical angle.",
      "A thin lens forms images through refraction at its surfaces. The sign convention must be applied consistently.",
      "Wave optics explains interference, diffraction and polarisation. Interference is due to superposition of coherent waves; diffraction is the spreading of waves around obstacles or apertures."
    ],
    formulas: [
      "Mirror: 1/f = 1/v + 1/u",
      "Lens: 1/f = 1/v − 1/u",
      "Magnification (mirror): m = −v/u",
      "Power of lens: P = 1/f (f in metres)",
      "Snell's law: n₁ sin i = n₂ sin r",
      "Critical angle: sin C = n₂/n₁ (n₁ > n₂)",
      "YDSE fringe width: β = λD/d",
      "Single-slit minima: a sinθ = mλ, m = 1,2,..."
    ],
    example: "In Young's double-slit experiment, λ = 600 nm, D = 2 m and d = 1 mm. Fringe width β = λD/d = 1.2 mm.",
    practice: ["Write Snell's law.", "How does fringe width change if slit separation is doubled?", "State the condition for total internal reflection."],
    traps: ["Use a consistent Cartesian sign convention for mirrors and lenses.", "Total internal reflection requires travel from denser to rarer medium.", "Interference requires coherent sources for a stable pattern."]
  },
  {
    no: 17,
    title: "Dual Nature of Radiation and Matter",
    className: "Class 12",
    topics: ["Photoelectric effect", "Photon", "Work function", "Threshold frequency", "Stopping potential", "Matter waves", "de Broglie wavelength"],
    theory: [
      "Light shows both wave-like and particle-like behaviour. In the photoelectric effect, electrons are emitted from a surface when incident light has sufficient frequency.",
      "The maximum kinetic energy of photoelectrons depends on frequency, not on intensity. Increasing intensity at a suitable frequency increases the number of emitted electrons.",
      "Matter waves are associated with moving particles. The de Broglie wavelength decreases as momentum increases."
    ],
    formulas: [
      "Photon energy: E = hf = hc/λ",
      "Einstein equation: hf = φ + Kmax",
      "Kmax = eVs",
      "Threshold frequency: f₀ = φ/h",
      "de Broglie wavelength: λ = h/p",
      "For non-relativistic particle: λ = h/√(2mK)"
    ],
    example: "If a photon has energy 5 eV and the work function is 2 eV, maximum photoelectron kinetic energy is 3 eV.",
    practice: ["What happens to maximum kinetic energy when light intensity increases but frequency remains fixed?", "Write the de Broglie wavelength in terms of momentum."],
    traps: ["Intensity mainly affects photoelectric current, not maximum kinetic energy.", "Below threshold frequency, increasing intensity alone does not cause ordinary photoemission.", "Use consistent energy units when applying Einstein's equation."]
  },
  {
    no: 18,
    title: "Atoms and Nuclei",
    className: "Class 12",
    topics: ["Atomic models", "Bohr model", "Energy levels", "Hydrogen spectrum", "Nuclear composition", "Mass defect", "Binding energy", "Radioactivity", "Fission and fusion"],
    theory: [
      "Atomic models developed from experimental evidence. The Bohr model explains the hydrogen spectrum using quantised angular momentum and discrete energy levels.",
      "An electron changes energy levels by absorbing or emitting a photon whose energy equals the difference between the two levels.",
      "A nucleus contains protons and neutrons. Nuclear stability is related to binding energy per nucleon.",
      "Radioactive decay is a spontaneous nuclear process. The number of undecayed nuclei decreases exponentially with time.",
      "Nuclear fission splits a heavy nucleus; fusion combines light nuclei. Both can release energy because of changes in nuclear binding energy."
    ],
    formulas: [
      "Bohr angular momentum: mvr = nh/(2π)",
      "Hydrogen energy: En = −13.6/n² eV",
      "Photon energy: hf = |Efinal − Einitial|",
      "Mass defect: Δm = Zmp + Nmn − Mnucleus",
      "Binding energy: BE = Δmc²",
      "Radioactive decay: N = N₀e^(−λt)",
      "Half-life: T½ = 0.693/λ",
      "Activity: A = λN"
    ],
    example: "A radioactive sample has half-life 10 days. After 20 days, two half-lives have passed, so the remaining fraction is (1/2)² = 1/4.",
    practice: ["A sample has half-life 5 hours. What fraction remains after 15 hours?", "What does binding energy per nucleon indicate?"],
    traps: ["Half-life is independent of the initial number of nuclei.", "Use mass defect in consistent units before calculating energy.", "Emission corresponds to a transition to a lower energy state."]
  },
  {
    no: 19,
    title: "Electronic Devices",
    className: "Class 12",
    topics: ["Conductors and semiconductors", "Intrinsic semiconductor", "Doping", "p-n junction", "Diode", "Rectifier", "Zener diode", "Logic gates"],
    theory: [
      "Semiconductors have electrical conductivity between that of conductors and insulators. Their conductivity can be changed by temperature and doping.",
      "An intrinsic semiconductor is pure. Doping introduces controlled impurities to create n-type or p-type material.",
      "A p-n junction forms a depletion region and a potential barrier. Forward bias reduces the barrier; reverse bias increases it.",
      "A diode allows current much more readily in one direction than the other and can be used for rectification.",
      "Logic gates perform Boolean operations. Their outputs depend on the input combinations."
    ],
    formulas: [
      "Ohm's law for a circuit element: V = IR where applicable",
      "Diode current depends nonlinearly on applied voltage.",
      "AND: output 1 only when all inputs are 1",
      "OR: output 1 when at least one input is 1",
      "NOT: output is the complement of input",
      "NAND = NOT(AND); NOR = NOT(OR)"
    ],
    example: "For an AND gate with inputs A = 1 and B = 0, the output is A·B = 0.",
    practice: ["What type of semiconductor has electrons as majority carriers?", "Write the output of a NOT gate when input is 1."],
    traps: ["In n-type material, electrons are majority carriers but the material remains electrically neutral overall.", "Forward and reverse bias have different effects on the depletion region.", "Do not confuse conventional current with electron motion."]
  },
  {
    no: 20,
    title: "Experimental Skills",
    className: "Class 11 & 12",
    topics: ["Measurement and errors", "Vernier calipers", "Screw gauge", "Simple pendulum", "Resistivity experiment", "Optics experiments", "Graph interpretation", "Significant figures"],
    theory: [
      "Experimental physics connects theoretical relations with measurements. Every measurement should include a suitable unit and an appropriate number of significant figures.",
      "Vernier calipers measure small lengths using the difference between main-scale and vernier-scale readings. Zero error must be checked and corrected.",
      "A screw gauge measures small thicknesses or diameters. Its least count is the pitch divided by the number of circular-scale divisions.",
      "Graphical analysis can reveal physical relationships. A straight-line graph can be used to determine slope, intercept and unknown constants.",
      "Repeated measurements help estimate random uncertainty. Good experimental practice includes careful alignment, avoiding parallax and recording observations systematically."
    ],
    formulas: [
      "Vernier reading = main scale reading + (coinciding division × least count)",
      "Screw gauge least count = pitch / circular scale divisions",
      "Corrected reading = observed reading − zero error",
      "Slope = Δy/Δx",
      "For a simple pendulum: T² = (4π²/g)L",
      "For a wire: ρ = RA/L"
    ],
    example: "A screw gauge has pitch 1 mm and 100 circular divisions. Least count = 1/100 = 0.01 mm.",
    practice: ["A graph of T² against L is a straight line. Write its slope for a simple pendulum.", "Why should zero error be checked before taking measurements?"],
    traps: ["Do not forget zero correction.", "Avoid parallax by viewing the scale perpendicular to it.", "The slope depends on which quantity is on the vertical axis."]
  }
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return units.filter((unit) => {
      const matchesClass = filter === "All" || unit.className.includes(filter);
      const text = [
        unit.title,
        ...unit.topics,
        ...unit.theory,
        ...unit.formulas
      ].join(" ").toLowerCase();
      return matchesClass && (!q || text.includes(q));
    });
  }, [search, filter]);

  return (
    <main style={styles.page}>
      <header style={styles.hero}>
        <div style={styles.logo}>EAJEE</div>
        <div style={styles.tag}>PHYSICS NOTES LIBRARY</div>
        <h1 style={styles.heading}>Master Physics.<br />Crack JEE.</h1>
        <p style={styles.subheading}>
          Original study notes for JEE Main and JEE Advanced.
          Learn concepts, revise formulas and practise problem-solving.
        </p>
        <div style={styles.stats}>
          <div><strong>20</strong><span>Units</span></div>
          <div><strong>11 + 12</strong><span>Classes</span></div>
          <div><strong>Main + Advanced</strong><span>Preparation</span></div>
        </div>
      </header>

      <section style={styles.content}>
        <div style={styles.sectionHeading}>
          <div>
            <p style={styles.eyebrow}>YOUR STUDY MATERIAL</p>
            <h2 style={styles.sectionTitle}>Physics Chapters</h2>
          </div>
          <span style={styles.count}>{filtered.length} units</span>
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search chapters, topics or formulas..."
          style={styles.search}
        />

        <div style={styles.filters}>
          {["All", "Class 11", "Class 12"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              style={{
                ...styles.filterButton,
                ...(filter === item ? styles.filterActive : {})
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div style={styles.chapterList}>
          {filtered.map((unit) => {
            const isOpen = active === unit.no;
            return (
              <article key={unit.no} style={styles.chapter}>
                <button
                  onClick={() => setActive(isOpen ? null : unit.no)}
                  style={styles.chapterButton}
                  aria-expanded={isOpen}
                >
                  <div style={styles.chapterNumber}>
                    {String(unit.no).padStart(2, "0")}
                  </div>
                  <div style={styles.chapterInfo}>
                    <span style={styles.classLabel}>{unit.className}</span>
                    <h3 style={styles.chapterTitle}>{unit.title}</h3>
                    <p style={styles.topicPreview}>
                      {unit.topics.slice(0, 4).join(" • ")}
                    </p>
                  </div>
                  <span style={styles.arrow}>{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div style={styles.notes}>
                    <section style={styles.noteSection}>
                      <h4>📌 Topics covered</h4>
                      <div style={styles.topicTags}>
                        {unit.topics.map((topic) => (
                          <span key={topic} style={styles.topicTag}>{topic}</span>
                        ))}
                      </div>
                    </section>

                    <section style={styles.noteSection}>
                      <h4>📖 Concepts and Theory</h4>
                      {unit.theory.map((paragraph, i) => (
                        <p key={i} style={styles.paragraph}>{paragraph}</p>
                      ))}
                    </section>

                    <section style={styles.noteSection}>
                      <h4>🧮 Formula Bank</h4>
                      <div style={styles.formulaBox}>
                        {unit.formulas.map((formula, i) => (
                          <div key={i} style={styles.formula}>{formula}</div>
                        ))}
                      </div>
                    </section>

                    <section style={styles.noteSection}>
                      <h4>✍️ Solved Example</h4>
                      <div style={styles.example}>{unit.example}</div>
                    </section>

                    <section style={styles.noteSection}>
                      <h4>🎯 Practice Questions</h4>
                      <ol style={styles.questionList}>
                        {unit.practice.map((question, i) => (
                          <li key={i}>{question}</li>
                        ))}
                      </ol>
                      <p style={styles.answerNote}>
                        Try solving these questions in your notebook before checking a solution.
                      </p>
                    </section>

                    <section style={styles.noteSection}>
                      <h4>⚠️ Common Mistakes and JEE Traps</h4>
                      <ul style={styles.questionList}>
                        {unit.traps.map((trap, i) => (
                          <li key={i}>{trap}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                )}
              </article>
            );
          })}
          {filtered.length === 0 && (
            <div style={styles.empty}>
              No matching chapters found. Try another search.
            </div>
          )}
        </div>
      </section>

      <section style={styles.about}>
        <p style={styles.eyebrow}>ABOUT THIS LIBRARY</p>
        <h2 style={styles.sectionTitle}>Learn with clarity.</h2>
        <p style={styles.aboutText}>
          EAJEE Notes Library is an independent educational project.
          The study material here is written for learning and revision.
          Always check the latest official JEE syllabus and examination
          information from the exam authorities.
        </p>
      </section>

      <footer style={styles.footer}>
        <div style={styles.logo}>EAJEE</div>
        <p>Independent Physics learning resource.</p>
        <nav style={styles.footerLinks}>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </nav>
        <small>© {new Date().getFullYear()} EAJEE Notes Library</small>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f5f7fb",
    color: "#172033",
    fontFamily: "Arial, Helvetica, sans-serif"
  },
  hero: {
    background: "linear-gradient(135deg, #101b38, #173c70)",
    color: "white",
    padding: "54px 22px 48px",
    textAlign: "center"
  },
  logo: {
    fontSize: 25,
    fontWeight: 900,
    letterSpacing: 3,
    color: "#67d5ff"
  },
  tag: {
    marginTop: 13,
    fontSize: 11,
    letterSpacing: 3,
    color: "#a9c8ed",
    fontWeight: 700
  },
  heading: {
    fontSize: "clamp(38px, 8vw, 64px)",
    lineHeight: 1.08,
    margin: "22px 0 15px",
    fontWeight: 900
  },
  subheading: {
    maxWidth: 580,
    margin: "0 auto",
    color: "#d5e3f7",
    lineHeight: 1.7,
    fontSize: 15
  },
  stats: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 30,
    marginTop: 35
  },
  content: {
    maxWidth: 920,
    padding: "42px 18px",
    margin: "auto"
  },
  sectionHeading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    gap: 10,
    marginBottom: 22
  },
  eyebrow: {
    color: "#2878c7",
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 2
  },
  sectionTitle: {
    fontSize: 28,
    margin: "7px 0",
    color: "#172033"
  },
  count: {
    fontSize: 13,
    color: "#64748b",
    paddingBottom: 10
  },
  search: {
    boxSizing: "border-box",
    width: "100%",
    padding: "15px 16px",
    borderRadius: 12,
    border: "1px solid #d8dfeb",
    background: "white",
    fontSize: 15,
    outlineColor: "#2878c7"
  },
  filters: {
    display: "flex",
    gap: 9,
    flexWrap: "wrap",
    margin: "16px 0 22px"
  },
  filterButton: {
    border: "1px solid #d5deea",
    borderRadius: 30,
    padding: "9px 17px",
    background: "white",
    color: "#40516b",
    fontWeight: 700,
    cursor: "pointer"
  },
  filterActive: {
    background: "#173c70",
    color: "white",
    borderColor: "#173c70"
  },
  chapterList: {
    display: "grid",
    gap: 12
  },
  chapter: {
    background: "white",
    border: "1px solid #e0e6ef",
    borderRadius: 14,
    overflow: "hidden",
    boxShadow: "0 3px 12px rgba(20,40,70,0.035)"
  },
  chapterButton: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    width: "100%",
    padding: "18px 16px",
    border: 0,
    background: "white",
    textAlign: "left",
    cursor: "pointer",
    color: "#172033"
  },
  chapterNumber: {
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
    width: 43,
    height: 43,
    borderRadius: 11,
    background: "#eaf3ff",
    color: "#1e63a6",
    fontWeight: 900,
    fontSize: 14
  },
  chapterInfo: {
    minWidth: 0,
    flex: 1
  },
  classLabel: {
    fontSize: 10,
    fontWeight: 800,
    color: "#2878c7",
    textTransform: "uppercase",
    letterSpacing: 1
  },
  chapterTitle: {
    fontSize: 17,
    margin: "5px 0",
    lineHeight: 1.3
  },
  topicPreview: {
    margin: 0,
    color: "#758197",
    fontSize: 12,
    lineHeight: 1.5
  },
  arrow: {
    fontSize: 25,
    color: "#2878c7",
    padding: "0 5px"
  },
  notes: {
    borderTop: "1px solid #e8edf4",
    padding: "8px 18px 20px"
  },
  noteSection: {
    marginTop: 20
  },
  formulaBox: {
    background: "#f0f5fc",
    border: "1px solid #dce8f7",
    borderRadius: 10,
    padding: 13
  },
  formula: {
    padding: "8px 5px",
    borderBottom: "1px solid #dce5f0",
    fontFamily: "monospace",
    fontSize: 13,
    lineHeight: 1.6,
    overflowWrap: "anywhere"
  },
  paragraph: {
    color: "#46546a",
    fontSize: 14,
    lineHeight: 1.8,
    margin: "10px 0"
  },
  example: {
    background: "#f0f8f5",
    borderLeft: "4px solid #25966b",
    padding: 15,
    borderRadius: "0 9px 9px 0",
    fontSize: 14,
    lineHeight: 1.8,
    color: "#244b3d"
  },
  topicTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 7
  },
  topicTag: {
    background: "#edf3fb",
    color: "#385778",
    padding: "7px 10px",
    borderRadius: 20,
    fontSize: 12
  },
  questionList: {
    color: "#46546a",
    fontSize: 14,
    lineHeight: 1.9,
    paddingLeft: 22
  },
  answerNote: {
    color: "#78869a",
    fontSize: 12,
    lineHeight: 1.6
  },
  empty: {
    background: "white",
    padding: 25,
    borderRadius: 12,
    textAlign: "center",
    color: "#64748b"
  },
  about: {
    maxWidth: 850,
    margin: "10px auto 45px",
    padding: "30px 22px",
    textAlign: "center",
    background: "white",
    borderRadius: 16
  },
  aboutText: {
    maxWidth: 650,
    margin: "12px auto",
    color: "#64748b",
    lineHeight: 1.8,
    fontSize: 14
  },
  footer: {
    background: "#101b38",
    color: "#c8d6e9",
    textAlign: "center",
    padding: "32px 18px"
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 20,
    margin: "18px 0"
  }
};
