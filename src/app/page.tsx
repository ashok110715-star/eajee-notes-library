"use client";

import { useMemo, useState } from "react";

type Chapter = {
  id: number; className: "Class 11" | "Class 12"; unit: string; title: string;
  summary: string; prerequisites: string[]; concepts: string[];
  formulas: { name: string; formula: string; condition: string }[];
  example: { question: string; solution: string[] };
  traps: string[]; practice: { q: string; answer: string; explanation: string }[];
};

const chapters: Chapter[] = [
{
 id:1,className:"Class 11",unit:"Mechanics",title:"Units, Dimensions and Measurements",
 summary:"Physical quantities, SI units, dimensional analysis, significant figures and measurement uncertainty.",
 prerequisites:["Basic algebra","Scientific notation"],
 concepts:["A physical quantity is expressed as a numerical value multiplied by a unit.","Base quantities are independent; derived quantities are formed from them.","Dimensional homogeneity is necessary for a valid physical equation, but it does not prove that an equation is correct.","For independent measured quantities, fractional uncertainties add in products and powers."],
 formulas:[
 {name:"Dimensional formula",formula:"[Q] = Mᵃ Lᵇ Tᶜ",condition:"Write powers of fundamental dimensions."},
 {name:"Relative error",formula:"Δx / x",condition:"For small measurement uncertainty."},
 {name:"Product/power rule",formula:"If Q = AᵐBⁿ, then ΔQ/Q ≈ |m|ΔA/A + |n|ΔB/B",condition:"Maximum fractional error; independent uncertainties."}
 ],
 example:{question:"A length is measured as (2.50 ± 0.02) m. Find the maximum percentage error in the area of a square made from this length.",solution:["For A = l², the maximum fractional error is ΔA/A = 2Δl/l.","= 2 × 0.02/2.50 = 0.016.","Percentage error = 1.6%."]},
 traps:["Dimensional correctness does not determine dimensionless constants such as 2 or π.","Convert all quantities to consistent units before substitution."],
 practice:[{q:"What is the dimensional formula of pressure?",answer:"[M L⁻¹ T⁻²]",explanation:"Pressure = force/area = (MLT⁻²)/L²."}]
},
{
 id:2,className:"Class 11",unit:"Mechanics",title:"Kinematics: 1D and 2D Motion",
 summary:"Position, displacement, velocity, acceleration, relative motion and projectile motion.",
 prerequisites:["Vectors","Basic graphs"],
 concepts:["Displacement is the change in position; distance is the path length.","Velocity is the time rate of change of position, while acceleration is the time rate of change of velocity.","The slope of an x–t graph gives velocity; the slope of a v–t graph gives acceleration.","For ideal projectile motion without air resistance, horizontal acceleration is zero and vertical acceleration is −g."],
 formulas:[
 {name:"Constant acceleration",formula:"v = u + at;  s = ut + ½at²;  v² = u² + 2as",condition:"Straight-line motion with constant acceleration."},
 {name:"Projectile time of flight",formula:"T = 2u sinθ / g",condition:"Launch and landing at the same height."},
 {name:"Projectile range",formula:"R = u² sin2θ / g",condition:"Same launch and landing height; no air resistance."},
 {name:"Relative velocity",formula:"v⃗AB = v⃗A − v⃗B",condition:"Velocity of A as observed from B."}
 ],
 example:{question:"A projectile is launched at speed u at angle θ and lands at its launch height. State its time of flight and maximum height.",solution:["Resolve initial velocity: ux = u cosθ and uy = u sinθ.","At landing, vertical displacement is zero: 0 = uyT − ½gT², giving T = 2u sinθ/g.","At the top, vertical velocity is zero: H = uy²/(2g) = u²sin²θ/(2g)."]},
 traps:["At the highest point of a projectile, vertical velocity is zero but acceleration remains g downward.","Average speed and magnitude of average velocity are generally different."],
 practice:[{q:"At the highest point of ideal projectile motion, what is its acceleration?",answer:"g vertically downward",explanation:"Gravity acts throughout the flight, including at the top."}]
},
{
 id:3,className:"Class 11",unit:"Mechanics",title:"Laws of Motion and Friction",
 summary:"Newton’s laws, free-body diagrams, connected bodies, pseudo force and friction.",
 prerequisites:["Vectors","Kinematics"],
 concepts:["Newton’s second law in an inertial frame is ΣF⃗ = m a⃗.","A free-body diagram shows every external force acting on one selected body.","Static friction adjusts up to a limiting value; kinetic friction acts during sliding.","For a non-inertial frame accelerating with a⃗frame, introduce pseudo force −m a⃗frame."],
 formulas:[
 {name:"Newton’s second law",formula:"ΣF⃗ = m a⃗",condition:"Constant mass; inertial reference frame."},
 {name:"Limiting friction",formula:"fₛ,max = μₛN",condition:"At impending relative motion."},
 {name:"Kinetic friction",formula:"fₖ = μₖN",condition:"Ideal dry sliding friction."},
 {name:"Inclined plane component",formula:"mg sinθ (along plane), mg cosθ (normal)",condition:"Resolve weight for a plane inclined at θ."}
 ],
 example:{question:"A block slides down a rough incline of angle θ. Find its acceleration if μₖ is the coefficient of kinetic friction.",solution:["Along the plane, mg sinθ acts downward and friction μₖmg cosθ acts upward.","Newton’s law: ma = mg sinθ − μₖmg cosθ.","Therefore a = g(sinθ − μₖcosθ), provided it slides downward."]},
 traps:["Friction is not always μN; static friction can take any required value up to its limit.","Action–reaction forces act on different bodies, so they do not cancel on one FBD."],
 practice:[{q:"A block rests on a horizontal surface. Is static friction necessarily equal to μₛN?",answer:"No.",explanation:"It takes the value needed for equilibrium, up to the limiting value μₛN."}]
},
{
 id:4,className:"Class 11",unit:"Mechanics",title:"Work, Energy and Power",
 summary:"Work by constant and variable forces, energy conservation, potential energy and power.",
 prerequisites:["Newton’s laws","Basic integration"],
 concepts:["Work is the line integral of force along displacement.","The work–energy theorem states that net work equals change in kinetic energy.","A conservative force has path-independent work and an associated potential energy.","Mechanical energy is conserved when only conservative forces do work."],
 formulas:[
 {name:"Work",formula:"W = ∫ F⃗ · dr⃗",condition:"General force along a path."},
 {name:"Kinetic energy",formula:"K = ½mv²",condition:"Non-relativistic particle."},
 {name:"Spring potential energy",formula:"U = ½kx²",condition:"Ideal spring measured from natural length."},
 {name:"Power",formula:"P = dW/dt = F⃗ · v⃗",condition:"Instantaneous power."}
 ],
 example:{question:"A spring of constant k is compressed by x from its natural length. Find the energy stored.",solution:["The restoring force magnitude at compression y is ky.","Stored energy is the work required: U = ∫₀ˣ ky dy.","Thus U = ½kx²."]},
 traps:["Normal force often does zero work, but not in every moving-constraint situation.","Use signed work; a force opposite displacement does negative work."],
 practice:[{q:"If speed doubles, by what factor does kinetic energy change?",answer:"Four times.",explanation:"K is proportional to v²."}]
},
{
 id:5,className:"Class 11",unit:"Mechanics",title:"Centre of Mass and System of Particles",
 summary:"Centre of mass, momentum, impulse, collisions and variable-mass systems.",
 prerequisites:["Vectors","Newton’s laws"],
 concepts:["The centre of mass is the mass-weighted average position.","Internal forces cancel in the total momentum equation for an isolated system.","Impulse equals change in momentum.","Momentum is conserved when net external impulse is zero."],
 formulas:[
 {name:"Centre of mass",formula:"r⃗cm = Σmᵢr⃗ᵢ / Σmᵢ",condition:"Discrete system."},
 {name:"Momentum",formula:"p⃗ = m v⃗",condition:"Non-relativistic motion."},
 {name:"Impulse",formula:"J⃗ = ∫F⃗dt = Δp⃗",condition:"Net force over the time interval."},
 {name:"Coefficient of restitution",formula:"e = relative speed of separation / relative speed of approach",condition:"Along the line of impact; 0 ≤ e ≤ 1 for ordinary passive collisions."}
 ],
 example:{question:"Two masses m and 3m are at x = 0 and x = 4a. Find the centre of mass.",solution:["xcm = (m·0 + 3m·4a)/(m + 3m).","xcm = 12ma/4m = 3a."]},
 traps:["Momentum conservation requires negligible external impulse, not merely a short collision time by itself.","Kinetic energy is conserved only in an elastic collision."],
 practice:[{q:"In an isolated system, what happens to total momentum during a collision?",answer:"It remains constant.",explanation:"Internal impulses cancel pairwise; net external impulse is zero."}]
},
{
 id:6,className:"Class 11",unit:"Mechanics",title:"Rotational Motion",
 summary:"Angular kinematics, torque, angular momentum, moment of inertia and rolling.",
 prerequisites:["Circular motion","Work and energy"],
 concepts:["Torque is the moment of force about a chosen origin or axis.","For a rigid body about a fixed principal axis, τ = Iα.","Angular momentum is conserved when external torque is zero.","Pure rolling combines translation and rotation with vcm = ωR."],
 formulas:[
 {name:"Torque",formula:"τ⃗ = r⃗ × F⃗",condition:"About the chosen origin."},
 {name:"Rotational dynamics",formula:"τ = Iα",condition:"Fixed axis, constant I."},
 {name:"Rotational kinetic energy",formula:"Krot = ½Iω²",condition:"Rotation about an axis."},
 {name:"Rolling without slipping",formula:"vcm = ωR",condition:"Instantaneous contact point at rest relative to surface."}
 ],
 example:{question:"A solid disc rolls without slipping with centre speed v. Find its total kinetic energy.",solution:["For a solid disc, Icm = ½MR² and ω = v/R.","K = ½Mv² + ½Icmω².","K = ½Mv² + ¼Mv² = ¾Mv²."]},
 traps:["Moment of inertia depends on axis as well as mass distribution.","Rolling constraint applies only when there is no slipping at contact."],
 practice:[{q:"For a ring rolling without slipping, what is ω in terms of centre speed v and radius R?",answer:"ω = v/R",explanation:"The no-slip rolling constraint is vcm = ωR."}]
},
{
 id:7,className:"Class 11",unit:"Mechanics",title:"Gravitation",
 summary:"Newton’s law of gravitation, gravitational field, potential, satellites and escape speed.",
 prerequisites:["Circular motion","Work and energy"],
 concepts:["Gravitational force between point masses is attractive and follows inverse-square dependence.","Field is force per unit test mass; potential is potential energy per unit mass.","For a circular orbit, gravity supplies centripetal force.","Escape speed is the minimum ideal launch speed to reach infinity with zero final speed."],
 formulas:[
 {name:"Gravitational force",formula:"F = Gm₁m₂/r²",condition:"Point masses or spherically symmetric bodies outside each other."},
 {name:"Potential",formula:"V = −GM/r",condition:"Zero potential at infinity."},
 {name:"Circular orbital speed",formula:"v = √(GM/r)",condition:"Circular orbit around mass M."},
 {name:"Escape speed",formula:"vesc = √(2GM/R)",condition:"From surface radius R; neglect atmosphere and rotation."}
 ],
 example:{question:"Compare escape speed and circular orbital speed at the same radius r.",solution:["vc = √(GM/r).","vesc = √(2GM/r).","Therefore vesc = √2 vc."]},
 traps:["Gravitational potential is negative when zero is chosen at infinity.","Use distance from the planet’s centre, not altitude alone."],
 practice:[{q:"How does gravitational field magnitude vary with distance r outside a spherical planet?",answer:"As 1/r².",explanation:"g = GM/r²."}]
},
{
 id:8,className:"Class 11",unit:"Properties of Matter",title:"Elasticity, Fluids and Surface Tension",
 summary:"Stress, strain, elastic moduli, pressure, buoyancy, viscosity and surface tension.",
 prerequisites:["Newton’s laws","Pressure and force"],
 concepts:["Stress is restoring force per unit area; strain is fractional deformation.","Pressure in a static fluid increases with depth.","Buoyant force equals the weight of displaced fluid.","Viscous force opposes relative fluid motion; surface tension arises from surface energy."],
 formulas:[
 {name:"Young’s modulus",formula:"Y = (F/A)/(ΔL/L)",condition:"Small longitudinal deformation within elastic limit."},
 {name:"Hydrostatic pressure",formula:"P = P₀ + ρgh",condition:"Static fluid of uniform density."},
 {name:"Buoyant force",formula:"FB = ρfluid g Vdisplaced",condition:"Archimedes’ principle."},
 {name:"Continuity equation",formula:"A₁v₁ = A₂v₂",condition:"Steady incompressible flow through a tube."}
 ],
 example:{question:"A body displaces volume V of a liquid of density ρ. Find the buoyant force.",solution:["The displaced liquid has mass ρV.","Its weight is ρVg.","By Archimedes’ principle, FB = ρVg upward."]},
 traps:["Gauge pressure and absolute pressure are different.","Bernoulli’s equation applies along a streamline for ideal steady flow under its assumptions."],
 practice:[{q:"What determines buoyant force in a liquid?",answer:"Weight of the displaced liquid.",explanation:"FB = ρfluid g Vdisplaced."}]
},
{
 id:9,className:"Class 11",unit:"Thermal Physics",title:"Thermal Properties and Calorimetry",
 summary:"Temperature, thermal expansion, heat capacity, calorimetry and heat transfer.",
 prerequisites:["Energy conservation","Basic algebra"],
 concepts:["Heat is energy transferred because of a temperature difference.","Specific heat capacity relates heat supplied to temperature rise per unit mass.","In an isolated calorimetry setup, heat lost equals heat gained.","Conduction, convection and radiation are distinct heat-transfer mechanisms."],
 formulas:[
 {name:"Sensible heat",formula:"Q = mcΔT",condition:"No phase change; approximately constant specific heat."},
 {name:"Latent heat",formula:"Q = mL",condition:"Phase change at constant temperature for a pure substance."},
 {name:"Linear expansion",formula:"ΔL = αL₀ΔT",condition:"Small temperature change and constant α."},
 {name:"Conduction rate",formula:"dQ/dt = kAΔT/L",condition:"Steady one-dimensional conduction through a slab."}
 ],
 example:{question:"How much heat is required to raise the temperature of mass m by ΔT if specific heat is c?",solution:["Use the definition of specific heat capacity.","Q = mcΔT.","Substitute values in SI units to obtain joules."]},
 traps:["During a pure phase change, temperature can remain constant while heat is absorbed or released.","Use the correct mass and specific heat for each part of a mixture."],
 practice:[{q:"What is the SI unit of specific heat capacity?",answer:"J kg⁻¹ K⁻¹",explanation:"c = Q/(mΔT)."}]
},
{
 id:10,className:"Class 11",unit:"Thermal Physics",title:"Thermodynamics and Kinetic Theory",
 summary:"First law, thermodynamic processes, heat engines, ideal gases and molecular interpretation.",
 prerequisites:["Work and energy","Gas laws"],
 concepts:["The first law is ΔU = Q − W when W is work done by the system.","Internal energy of an ideal gas depends only on temperature.","In an isothermal ideal-gas process, ΔU = 0.","Kinetic theory connects gas pressure and temperature with molecular motion."],
 formulas:[
 {name:"First law",formula:"ΔU = Q − W",condition:"W is work done by the system."},
 {name:"Ideal gas equation",formula:"PV = nRT",condition:"Ideal-gas approximation."},
 {name:"Mean translational kinetic energy",formula:"(3/2)kBT per molecule",condition:"Ideal gas in thermal equilibrium."},
 {name:"Adiabatic relation",formula:"PVᵞ = constant",condition:"Reversible adiabatic process for ideal gas with constant heat capacities."}
 ],
 example:{question:"An ideal gas absorbs heat Q and does work W. Find its internal-energy change.",solution:["Apply the first law using the stated sign convention.","ΔU = Q − W.","Positive Q adds energy; positive W removes energy from the gas."]},
 traps:["State the sign convention before using the first law.","Adiabatic means Q = 0, not necessarily constant temperature."],
 practice:[{q:"For an isothermal process of an ideal gas, what is ΔU?",answer:"Zero.",explanation:"Ideal-gas internal energy depends only on temperature."}]
},
{
 id:11,className:"Class 11",unit:"Waves",title:"Simple Harmonic Motion",
 summary:"Oscillations, phase, energy, spring systems and simple pendulum.",
 prerequisites:["Circular motion","Newton’s laws"],
 concepts:["SHM occurs when acceleration is proportional to displacement and directed toward equilibrium.","Displacement, velocity and acceleration have phase relationships.","In ideal SHM, total mechanical energy remains constant.","For small angular oscillations, a simple pendulum executes approximate SHM."],
 formulas:[
 {name:"SHM equation",formula:"x = A cos(ωt + φ)",condition:"Ideal one-dimensional SHM."},
 {name:"Acceleration",formula:"a = −ω²x",condition:"Measured from equilibrium."},
 {name:"Spring period",formula:"T = 2π√(m/k)",condition:"Ideal mass–spring oscillator."},
 {name:"Pendulum period",formula:"T = 2π√(L/g)",condition:"Small oscillations; ideal simple pendulum."}
 ],
 example:{question:"A mass m is attached to a spring k. Find its angular frequency.",solution:["The restoring force is F = −kx.","Using ma = −kx gives a = −(k/m)x.","Compare with a = −ω²x: ω = √(k/m)."]},
 traps:["At equilibrium, speed is maximum and acceleration is zero.","Pendulum period formula assumes small angular amplitude."],
 practice:[{q:"Where is the speed maximum in ideal SHM?",answer:"At the equilibrium position.",explanation:"All available mechanical energy is kinetic there."}]
},
{
 id:12,className:"Class 11",unit:"Waves",title:"Waves and Sound",
 summary:"Wave equation, speed, superposition, standing waves, strings, pipes and Doppler effect.",
 prerequisites:["SHM","Basic trigonometry"],
 concepts:["A travelling wave transports energy without net transport of matter.","Superposition gives the resultant displacement as the algebraic sum of component waves.","Standing waves arise from two equal-frequency waves travelling in opposite directions.","Boundary conditions determine allowed harmonics in strings and air columns."],
 formulas:[
 {name:"Wave speed",formula:"v = fλ",condition:"Periodic travelling wave."},
 {name:"Wave equation",formula:"y = A sin(kx − ωt + φ)",condition:"Sinusoidal wave travelling in +x direction."},
 {name:"String fundamental",formula:"f₁ = v/(2L)",condition:"String fixed at both ends."},
 {name:"Open pipe fundamental",formula:"f₁ = v/(2L)",condition:"Both ends open; ideal pipe."}
 ],
 example:{question:"A wave has frequency f and wavelength λ. Find its propagation speed.",solution:["In one period T = 1/f, one wavelength passes a fixed point.","Thus v = λ/T.","Therefore v = fλ."]},
 traps:["A closed pipe supports odd harmonics only in the ideal model.","Do not confuse particle speed in a wave with wave propagation speed."],
 practice:[{q:"What is the relation between wave speed, frequency and wavelength?",answer:"v = fλ",explanation:"One wavelength travels in one period."}]
},
{
 id:13,className:"Class 12",unit:"Electricity and Magnetism",title:"Electric Charges and Fields",
 summary:"Coulomb’s law, electric field, superposition, dipoles and Gauss’s law.",
 prerequisites:["Vectors","Force fields"],
 concepts:["Electric charge is quantised and conserved.","Electric field is force per unit positive test charge.","Superposition applies to electric fields and forces.","Gauss’s law is especially useful when charge distributions have high symmetry."],
 formulas:[
 {name:"Coulomb’s law",formula:"F = (1/4πε₀)|q₁q₂|/r²",condition:"Point charges in vacuum."},
 {name:"Electric field",formula:"E⃗ = F⃗/q₀",condition:"Small positive test charge."},
 {name:"Dipole moment",formula:"p⃗ = q d⃗",condition:"d⃗ from negative to positive charge."},
 {name:"Gauss’s law",formula:"∮E⃗·dA⃗ = Qenclosed/ε₀",condition:"Closed surface in vacuum."}
 ],
 example:{question:"What is the electric field magnitude at distance r from an isolated point charge q?",solution:["By Coulomb’s law, a test charge q₀ experiences F = (1/4πε₀)|qq₀|/r².","Divide by q₀.","E = (1/4πε₀)|q|/r², directed radially outward for positive q and inward for negative q."]},
 traps:["Electric field is a vector; add components, not magnitudes blindly.","Gauss’s law is always true, but only symmetry may make E constant over a chosen surface."],
 practice:[{q:"What is the net electric flux through a closed surface enclosing zero net charge?",answer:"Zero.",explanation:"Gauss’s law gives ΦE = Qenclosed/ε₀."}]
},
{
 id:14,className:"Class 12",unit:"Electricity and Magnetism",title:"Electrostatic Potential and Capacitance",
 summary:"Potential, potential energy, equipotentials, capacitors and dielectric materials.",
 prerequisites:["Electric field","Work and energy"],
 concepts:["Potential is potential energy per unit charge.","Electric field points in the direction of the steepest decrease of potential.","A capacitor stores charge separation and electric-field energy.","A dielectric changes capacitance depending on whether the capacitor is isolated or connected to a battery."],
 formulas:[
 {name:"Potential difference",formula:"ΔV = −∫E⃗·dl⃗",condition:"Electrostatic field."},
 {name:"Point-charge potential",formula:"V = (1/4πε₀)q/r",condition:"Zero potential at infinity."},
 {name:"Parallel-plate capacitance",formula:"C = ε₀A/d",condition:"Vacuum/air, negligible edge effects."},
 {name:"Stored energy",formula:"U = ½CV² = Q²/(2C) = ½QV",condition:"Ideal capacitor."}
 ],
 example:{question:"A capacitor C is charged to voltage V. Find stored energy.",solution:["Charging work accumulates as potential rises from 0 to V.","U = ∫₀Q (q/C)dq = Q²/(2C).","Since Q = CV, U = ½CV²."]},
 traps:["Potential is scalar; electric field is vector.","When a dielectric is inserted, specify whether charge or voltage is held constant."],
 practice:[{q:"If voltage across a fixed capacitor doubles, what happens to stored energy?",answer:"It becomes four times.",explanation:"U = ½CV²."}]
},
{
 id:15,className:"Class 12",unit:"Electricity and Magnetism",title:"Current Electricity",
 summary:"Current, drift velocity, resistance, circuits, cells, Kirchhoff laws and measuring instruments.",
 prerequisites:["Electrostatics","Basic algebra"],
 concepts:["Conventional current is the rate of positive charge flow.","Ohm’s law applies to ohmic conductors under fixed physical conditions.","Kirchhoff’s junction rule follows charge conservation; loop rule follows energy conservation.","Equivalent resistance depends on series or parallel connections."],
 formulas:[
 {name:"Current",formula:"I = dQ/dt",condition:"Instantaneous current."},
 {name:"Ohm’s law",formula:"V = IR",condition:"Ohmic conductor at fixed physical conditions."},
 {name:"Resistance",formula:"R = ρL/A",condition:"Uniform wire of resistivity ρ."},
 {name:"Electrical power",formula:"P = VI = I²R = V²/R",condition:"Resistive element."}
 ],
 example:{question:"Two resistors R and 2R are connected in parallel. Find equivalent resistance.",solution:["1/Req = 1/R + 1/(2R).","1/Req = 3/(2R).","Req = 2R/3."]},
 traps:["In a series circuit, current is common; in parallel, potential difference is common.","An ideal voltmeter has very high resistance; an ideal ammeter has negligible resistance."],
 practice:[{q:"What is the equivalent resistance of R and R in parallel?",answer:"R/2",explanation:"1/Req = 1/R + 1/R = 2/R."}]
},
{
 id:16,className:"Class 12",unit:"Electricity and Magnetism",title:"Moving Charges and Magnetism",
 summary:"Lorentz force, motion in magnetic fields, Biot–Savart law, Ampere’s law and magnetic materials.",
 prerequisites:["Vectors","Circular motion","Current electricity"],
 concepts:["Magnetic force on a charge is q(v⃗ × B⃗); it is perpendicular to velocity.","A magnetic force alone does no work on a point charge.","A current element produces magnetic field described by Biot–Savart law.","Ampere’s circuital law is powerful for symmetric current distributions."],
 formulas:[
 {name:"Lorentz force",formula:"F⃗ = q(E⃗ + v⃗ × B⃗)",condition:"Non-relativistic classical regime."},
 {name:"Circular radius",formula:"r = mv/(|q|B)",condition:"Velocity perpendicular to uniform B."},
 {name:"Long straight wire",formula:"B = μ₀I/(2πr)",condition:"Very long straight wire in vacuum."},
 {name:"Solenoid field",formula:"B = μ₀nI",condition:"Long ideal solenoid, inside away from ends."}
 ],
 example:{question:"A charge enters a uniform magnetic field perpendicular to its velocity. What is the orbit radius?",solution:["Magnetic force magnitude is |q|vB.","It supplies centripetal force: |q|vB = mv²/r.","Therefore r = mv/(|q|B)."]},
 traps:["Magnetic force does not change speed when it is the only force.","Direction depends on charge sign; use the right-hand rule for positive charge."],
 practice:[{q:"Does a magnetic field alone change the kinetic energy of a moving point charge?",answer:"No.",explanation:"Magnetic force is perpendicular to velocity, so instantaneous power F·v is zero."}]
},
{
 id:17,className:"Class 12",unit:"Electricity and Magnetism",title:"Electromagnetic Induction and Alternating Current",
 summary:"Magnetic flux, Faraday and Lenz laws, inductance, AC circuits and transformers.",
 prerequisites:["Magnetism","Work and energy"],
 concepts:["Changing magnetic flux induces emf in a circuit.","Lenz’s law gives the direction that opposes the change in flux.","An inductor opposes changes in current and stores energy in its magnetic field.","In a series AC circuit, impedance combines resistance and reactance."],
 formulas:[
 {name:"Magnetic flux",formula:"ΦB = BA cosθ",condition:"Uniform field over a flat area."},
 {name:"Faraday’s law",formula:"ε = −N dΦB/dt",condition:"N-turn coil; sign represents Lenz’s law."},
 {name:"Inductor energy",formula:"U = ½LI²",condition:"Ideal linear inductor."},
 {name:"Series RLC impedance",formula:"Z = √(R² + (XL − XC)²)",condition:"Sinusoidal steady-state series RLC circuit."}
 ],
 example:{question:"A coil of N turns experiences a uniform flux change ΔΦ in time Δt. Find the magnitude of average induced emf.",solution:["Faraday’s law gives εavg = −NΔΦ/Δt.","Magnitude removes the sign: |εavg| = N|ΔΦ|/Δt.","The negative sign in the law encodes the opposing direction." ]},
 traps:["Flux depends on field, area and orientation.","At resonance in an ideal series RLC circuit, XL = XC and impedance is R."],
 practice:[{q:"What does the negative sign in Faraday’s law represent?",answer:"Lenz’s law.",explanation:"The induced emf opposes the change in magnetic flux that produces it."}]
},
{
 id:18,className:"Class 12",unit:"Optics",title:"Electromagnetic Waves and Ray Optics",
 summary:"EM spectrum, reflection, refraction, mirrors, lenses and optical instruments.",
 prerequisites:["Wave basics","Geometry"],
 concepts:["Electromagnetic waves are transverse waves with mutually perpendicular electric and magnetic fields.","At a boundary, refraction follows Snell’s law.","Sign conventions must be applied consistently in mirror and lens equations.","Total internal reflection requires travel from optically denser to rarer medium above the critical angle."],
 formulas:[
 {name:"Wave speed in vacuum",formula:"c = 1/√(μ₀ε₀)",condition:"Vacuum."},
 {name:"Snell’s law",formula:"n₁ sin i = n₂ sin r",condition:"Refraction at a plane boundary."},
 {name:"Mirror/lens equation",formula:"1/f = 1/v + 1/u",condition:"Use the prescribed Cartesian sign convention."},
 {name:"Lens power",formula:"P = 1/f (metre)",condition:"Thin lens in air; power in dioptres."}
 ],
 example:{question:"Light travels from air (n₁≈1) into glass (n₂=1.5) at incidence angle 30°. Find sin r.",solution:["Apply Snell’s law: n₁sin i = n₂sin r.","sin r = (1/1.5)sin30°.","sin r = 1/3."]},
 traps:["Do not mix sign conventions between different textbook formulas.","Total internal reflection cannot occur from rarer to denser medium."],
 practice:[{q:"What is the critical-angle condition for a denser-to-rarer interface?",answer:"sin C = n₂/n₁, where n₁ > n₂.",explanation:"At critical incidence, refracted angle is 90°."}]
},
{
 id:19,className:"Class 12",unit:"Optics",title:"Wave Optics",
 summary:"Huygens principle, interference, Young’s double slit, diffraction and polarisation.",
 prerequisites:["Waves","Trigonometry"],
 concepts:["Interference is redistribution of intensity due to superposition of coherent waves.","Stable fringes require coherent sources with a constant phase difference.","Diffraction becomes significant when aperture dimensions are comparable to wavelength.","Polarisation demonstrates the transverse nature of light."],
 formulas:[
 {name:"YDSE fringe width",formula:"β = λD/d",condition:"Small-angle approximation; D ≫ d."},
 {name:"Bright fringe",formula:"Path difference = nλ",condition:"Coherent sources, integer n."},
 {name:"Dark fringe",formula:"Path difference = (n + ½)λ",condition:"Two equal-amplitude coherent waves."},
 {name:"Single-slit minima",formula:"a sinθ = mλ",condition:"m = ±1, ±2, ..."}
 ],
 example:{question:"In YDSE, λ = 600 nm, D = 2 m and slit separation d = 0.5 mm. Find fringe width.",solution:["β = λD/d.","β = (600×10⁻⁹ × 2)/(0.5×10⁻³) m.","β = 2.4×10⁻³ m = 2.4 mm."]},
 traps:["Fringe width is proportional to wavelength and screen distance, and inversely proportional to slit separation.","Diffraction minima and interference minima have different conditions."],
 practice:[{q:"If slit separation doubles while other YDSE parameters stay fixed, what happens to fringe width?",answer:"It becomes half.",explanation:"β = λD/d."}]
},
{
 id:20,className:"Class 12",unit:"Modern Physics",title:"Dual Nature, Atoms, Nuclei and Semiconductors",
 summary:"Photoelectric effect, de Broglie waves, Bohr model, nuclear physics and semiconductor basics.",
 prerequisites:["Energy","Electricity","Wave basics"],
 concepts:["Light and matter show wave-particle duality; experiments determine which description is useful.","Photoelectric emission has a threshold frequency and maximum kinetic energy controlled by frequency.","Nuclear binding energy is related to mass defect through E = Δmc².","Semiconductor conductivity depends on charge carriers and doping."],
 formulas:[
 {name:"Photon energy",formula:"E = hν = hc/λ",condition:"Photon."},
 {name:"Photoelectric equation",formula:"Kmax = hν − φ",condition:"ν at or above threshold frequency."},
 {name:"de Broglie wavelength",formula:"λ = h/p",condition:"Matter wave; non-relativistic p=mv when applicable."},
 {name:"Mass-energy",formula:"E = Δmc²",condition:"Mass defect converted to energy."}
 ],
 example:{question:"A photon has frequency ν and a metal work function φ. State the maximum photoelectron kinetic energy.",solution:["Photon energy is hν.","Energy conservation gives hν = φ + Kmax.","Therefore Kmax = hν − φ, provided hν ≥ φ."]},
 traps:["Increasing intensity above threshold increases photoelectric current, not the maximum kinetic energy in the ideal model.","Distinguish mass number A from atomic number Z."],
 practice:[{q:"What happens to maximum photoelectron kinetic energy when frequency increases by Δν?",answer:"It increases by hΔν.",explanation:"Kmax = hν − φ."}]
}
];

const groups = ["All","Mechanics","Properties of Matter","Thermal Physics","Waves","Electricity and Magnetism","Optics","Modern Physics"];

export default function Home() {
 const [query,setQuery] = useState("");
 const [classFilter,setClassFilter] = useState("All");
 const [groupFilter,setGroupFilter] = useState("All");
 const [selected,setSelected] = useState<number | null>(null);
 const [tab,setTab] = useState("Learn");
 const [showAnswers,setShowAnswers] = useState<Record<number,boolean>>({});
 const filtered = useMemo(()=>chapters.filter(c =>
   (classFilter==="All" || c.className===classFilter) &&
   (groupFilter==="All" || c.unit===groupFilter) &&
   (c.title+" "+c.summary+" "+c.unit).toLowerCase().includes(query.toLowerCase())
 ),[query,classFilter,groupFilter]);
 const active = chapters.find(c=>c.id===selected);
 const count11 = chapters.filter(c=>c.className==="Class 11").length;
 const count12 = chapters.filter(c=>c.className==="Class 12").length;

 return <main className="min-h-screen bg-[#07111f] text-slate-100">
  <style jsx global>{`
   *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;background:#07111f}
   .wrap{width:min(1160px,calc(100% - 36px));margin:auto}
   .glass{background:rgba(15,30,49,.82);border:1px solid rgba(148,163,184,.18);backdrop-filter:blur(12px)}
   .muted{color:#9fb0c5}.accent{color:#7dd3fc}
   .btn{border:1px solid #334155;border-radius:12px;padding:9px 13px;font-size:13px;transition:.2s}
   .btn:hover{border-color:#38bdf8;background:#102b42}
   .btn.active{background:#0c4a6e;border-color:#38bdf8;color:#e0f2fe}
   .chapter{transition:transform .18s,border-color .18s}.chapter:hover{transform:translateY(-2px);border-color:#38bdf8}
   .content h3{font-size:18px;font-weight:700;margin:24px 0 10px;color:#e0f2fe}
   .content p,.content li{color:#cbd5e1;line-height:1.75}
   .content code{color:#bae6fd;background:#0b2238;padding:3px 7px;border-radius:6px;white-space:normal}
   @media(max-width:640px){.wrap{width:min(100% - 24px,1160px)}}
  `}</style>
  <header className="border-b border-slate-800/80 sticky top-0 z-30 bg-[#07111f]/90 backdrop-blur-xl">
   <div className="wrap h-[70px] flex items-center justify-between gap-3">
    <button onClick={()=>{setSelected(null);window.scrollTo({top:0,behavior:"smooth"})}} className="flex items-center gap-3 text-left">
     <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-300 to-blue-600 text-slate-950 font-black grid place-items-center text-lg">E</span>
     <span><b className="tracking-wide text-lg">EAJEE <span className="text-cyan-300">PHYSICS</span></b><small className="block text-[10px] tracking-[.22em] text-slate-400">LEARN • PRACTISE • MASTER</small></span>
    </button>
    <nav className="hidden sm:flex gap-2 text-sm">
     <button className="btn active" onClick={()=>{setSelected(null);setTab("Learn")}}>Study Library</button>
     <a className="btn" href="/about">About</a><a className="btn" href="/contact">Contact</a>
    </nav>
    <a href="#library" className="sm:hidden btn active">Explore</a>
   </div>
  </header>

  <section className="relative overflow-hidden border-b border-slate-800">
   <div className="absolute inset-0 opacity-40" style={{background:"radial-gradient(circle at 78% 22%, #075985 0, transparent 35%), radial-gradient(circle at 12% 85%, #1e3a8a 0, transparent 35%)"}}/>
   <div className="wrap relative py-16 md:py-24 grid md:grid-cols-[1.25fr_.75fr] gap-10 items-center">
    <div>
     <div className="inline-flex items-center gap-2 rounded-full border border-cyan-800 bg-cyan-950/50 px-3 py-1 text-xs text-cyan-200 mb-5">● JEE MAIN + JEE ADVANCED • PHYSICS</div>
     <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.06] tracking-tight">Understand Physics.<br/><span className="text-cyan-300">Master the Concepts.</span></h1>
     <p className="mt-6 max-w-xl text-slate-300 leading-7">A structured, chapter-wise learning library with original explanations, essential formulas, worked examples and practice checks for serious JEE preparation.</p>
     <div className="mt-8 flex flex-wrap gap-3"><a href="#library" className="rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-200">Explore Chapters →</a><a href="#how-to-study" className="rounded-xl border border-slate-600 px-5 py-3 font-semibold hover:bg-slate-800">How to study</a></div>
    </div>
    <div className="glass rounded-3xl p-6 md:p-7 shadow-2xl shadow-cyan-950/30">
     <div className="text-sm text-slate-400">YOUR PHYSICS WORKSPACE</div>
     <div className="grid grid-cols-2 gap-3 mt-4">
      {[["20","Core chapters"],[String(count11), "Class 11 chapters"],[String(count12),"Class 12 chapters"],["JEE","Main + Advanced"]].map(([n,l])=><div key={l} className="rounded-2xl bg-slate-900/80 border border-slate-700 p-4"><div className="text-2xl font-black text-cyan-300">{n}</div><div className="text-xs text-slate-400 mt-1">{l}</div></div>)}
     </div>
     <div className="mt-5 rounded-xl bg-slate-900 p-4"><div className="flex justify-between text-xs"><span className="text-slate-300">Learning path</span><span className="text-cyan-300">Start anywhere</span></div><div className="h-2 bg-slate-700 rounded-full mt-3 overflow-hidden"><div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"/></div><p className="text-xs text-slate-500 mt-2">Build concepts chapter by chapter, then test your understanding.</p></div>
    </div>
   </div>
  </section>

  <section id="library" className="wrap py-12">
   <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
    <div><div className="text-cyan-300 text-xs font-bold tracking-[.2em]">THE STUDY LIBRARY</div><h2 className="text-3xl font-extrabold mt-2">Physics, chapter by chapter</h2><p className="muted mt-2 text-sm">Choose a chapter to open its learning page.</p></div>
    <div className="text-xs text-slate-400">{filtered.length} of {chapters.length} chapters</div>
   </div>
   <div className="glass rounded-2xl p-4 md:p-5 mb-6 grid md:grid-cols-[1fr_auto_auto] gap-3">
    <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search chapters, topics or units..." className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-sm outline-none focus:border-cyan-400"/>
    <div className="flex gap-2"><button onClick={()=>setClassFilter("All")} className={`btn ${classFilter==="All"?"active":""}`}>All classes</button><button onClick={()=>setClassFilter("Class 11")} className={`btn ${classFilter==="Class 11"?"active":""}`}>Class 11</button><button onClick={()=>setClassFilter("Class 12")} className={`btn ${classFilter==="Class 12"?"active":""}`}>Class 12</button></div>
    <select value={groupFilter} onChange={e=>setGroupFilter(e.target.value)} className="rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-sm"><option>All</option>{groups.slice(1).map(g=><option key={g}>{g}</option>)}</select>
   </div>

   {active ? <article className="glass rounded-3xl p-5 md:p-8">
    <button onClick={()=>setSelected(null)} className="btn mb-6">← Back to all chapters</button>
    <div className="text-xs uppercase tracking-[.2em] text-cyan-300">{active.className} / {active.unit}</div>
    <h2 className="text-3xl md:text-4xl font-black mt-3">{active.title}</h2><p className="text-slate-300 mt-3 leading-7">{active.summary}</p>
    <div className="grid md:grid-cols-2 gap-4 mt-7">
     <div className="rounded-2xl bg-slate-900/80 p-5 border border-slate-700"><h3 className="font-bold text-cyan-200">Prerequisites</h3><ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-slate-300">{active.prerequisites.map(x=><li key={x}>{x}</li>)}</ul></div>
     <div className="rounded-2xl bg-slate-900/80 p-5 border border-slate-700"><h3 className="font-bold text-cyan-200">Core concepts</h3><ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-slate-300">{active.concepts.map(x=><li key={x}>{x}</li>)}</ul></div>
    </div>
    <div className="mt-7"><h3 className="text-xl font-bold text-cyan-200">Formula bank</h3><div className="grid md:grid-cols-2 gap-3 mt-3">{active.formulas.map(f=><div key={f.name} className="rounded-xl bg-slate-900 border border-slate-700 p-4"><b>{f.name}</b><div className="text-cyan-200 font-mono text-sm my-2">{f.formula}</div><p className="text-xs text-slate-400">{f.condition}</p></div>)}</div></div>
    <div className="mt-7 rounded-2xl bg-slate-900 border border-slate-700 p-5"><div className="text-xs text-cyan-300 font-bold tracking-widest">WORKED EXAMPLE</div><h3 className="font-bold text-lg mt-2">{active.example.question}</h3><ol className="list-decimal pl-5 mt-3 space-y-2 text-sm text-slate-300">{active.example.solution.map(s=><li key={s}>{s}</li>)}</ol></div>
    <div className="mt-7 grid md:grid-cols-2 gap-4">
     <div className="rounded-2xl border border-amber-900/60 bg-amber-950/20 p-5"><h3 className="font-bold text-amber-200">Common JEE traps</h3><ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-slate-300">{active.traps.map(t=><li key={t}>{t}</li>)}</ul></div>
     <div className="rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-5"><h3 className="font-bold text-cyan-200">Check your understanding</h3>{active.practice.map((p,i)=><div key={i}><p className="mt-3 text-sm text-slate-200">{p.q}</p><button className="btn mt-3" onClick={()=>setShowAnswers(v=>({...v,[active.id]:!v[active.id]}))}>{showAnswers[active.id]?"Hide answer":"Reveal answer"}</button>{showAnswers[active.id]&&<div className="mt-3 text-sm text-cyan-100"><b>{p.answer}</b><p className="text-slate-300 mt-1">{p.explanation}</p></div>}</div>)}</div>
    </div>
    <div className="mt-8 flex justify-between gap-3"><button className="btn" disabled={active.id===1} onClick={()=>{setSelected(active.id-1);setShowAnswers({})}}>← Previous</button><button className="rounded-xl bg-cyan-300 text-slate-950 font-bold px-4 py-2 disabled:opacity-40" disabled={active.id===20} onClick={()=>{setSelected(active.id+1);setShowAnswers({});window.scrollTo({top:0,behavior:"smooth"})}}>Next chapter →</button></div>
   </article> :
   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{filtered.map(c=><button key={c.id} onClick={()=>{setSelected(c.id);setShowAnswers({});window.scrollTo({top:0,behavior:"smooth"})}} className="chapter glass rounded-2xl p-5 text-left">
    <div className="flex justify-between items-center"><span className="text-[11px] uppercase tracking-wider text-cyan-300">{c.className}</span><span className="text-xs text-slate-500">CH {String(c.id).padStart(2,"0")}</span></div>
    <h3 className="font-bold text-lg mt-3 leading-snug">{c.title}</h3><p className="text-sm text-slate-400 mt-2 leading-6">{c.summary}</p>
    <div className="flex justify-between items-center mt-5 pt-4 border-t border-slate-700"><span className="text-xs text-slate-500">{c.unit}</span><span className="text-sm text-cyan-300 font-semibold">Open chapter ↗</span></div>
   </button>)}</div>}
   {filtered.length===0&&<div className="text-center py-14 text-slate-400">No chapters match that search. Try another keyword.</div>}
  </section>

  <section id="how-to-study" className="border-y border-slate-800 bg-[#0a1728]">
   <div className="wrap py-12"><div className="text-cyan-300 text-xs font-bold tracking-[.2em]">A SIMPLE STUDY ROUTINE</div><h2 className="text-3xl font-extrabold mt-2">Learn actively, not passively</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">{[["01","Build the idea","Read the concept and write the assumptions in your own words."],["02","Understand the maths","Derive the formula and check its units and limiting cases."],["03","Solve without peeking","Attempt the worked example again, then try a fresh problem."],["04","Review mistakes","Record why an approach failed and revisit it after a few days."]].map(([n,t,d])=><div key={n} className="rounded-2xl border border-slate-700 bg-slate-900 p-5"><div className="text-3xl font-black text-cyan-300">{n}</div><h3 className="font-bold mt-3">{t}</h3><p className="text-sm text-slate-400 mt-2 leading-6">{d}</p></div>)}</div>
   </div>
  </section>

  <footer className="wrap py-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-500"><div><b className="text-slate-300">EAJEE Physics</b><p className="mt-1">Independent learning resource for JEE Physics.</p></div><div className="flex flex-wrap gap-4"><a href="/about" className="hover:text-cyan-300">About</a><a href="/contact" className="hover:text-cyan-300">Contact</a><a href="/privacy-policy" className="hover:text-cyan-300">Privacy Policy</a></div><p>© {new Date().getFullYear()} EAJEE Notes Library</p></footer>
 </main>;
}
