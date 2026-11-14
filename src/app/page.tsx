"use client";

import { useMemo, useState } from "react";

type Example = { title: string; steps: string[]; result: string };
type Question = { q: string; answer: string };
type Unit = {
  id: number; title: string; cls: "Class 11" | "Class 12" | "Both";
  intro: string; concepts: string[]; formulas: string[]; examples: Example[];
  questions: Question[]; traps: string[]; keywords?: string[];
};

const units: Unit[] = [
{
 id:1,title:"Units, Dimensions and Measurements",cls:"Class 11",
 intro:"Measurement is the bridge between a physical model and an experiment. This unit develops dimensional reasoning, uncertainty analysis and the language used to report measured quantities.",
 concepts:[
 "A physical quantity is written as a numerical value multiplied by a unit. The seven SI base quantities are length, mass, time, electric current, thermodynamic temperature, amount of substance and luminous intensity. Derived units are combinations of base units.",
 "Dimensions describe how a quantity depends on base dimensions. For mechanics, the most common symbols are [M], [L] and [T]. Dimensional homogeneity requires every additive term in a valid physical equation to have the same dimensions.",
 "Dimensional analysis can test an equation, find dimensions of constants and suggest a relation between variables. It cannot determine dimensionless numerical constants or prove that an equation is physically complete.",
 "For repeated measurements, the arithmetic mean is often used as the best estimate. Absolute, relative and percentage errors describe uncertainty. For independent small errors in products and powers, fractional uncertainties combine with the absolute values of their powers.",
 "Significant figures communicate measurement precision. In multiplication and division, the final result is generally limited by the least precise input; in addition and subtraction, decimal-place precision is the relevant rule."
 ],
 formulas:["[v] = LT⁻¹; [a] = LT⁻²; [F] = MLT⁻²","[W] = ML²T⁻²; [P] = ML²T⁻³; [pressure] = ML⁻¹T⁻²","Mean x̄ = (Σxᵢ)/n; mean absolute error = Σ|xᵢ − x̄|/n","Relative error = Δx/x̄; percentage error = 100(Δx/x̄)","If Q = AᵃBᵇ/Cᶜ, then ΔQ/Q ≈ |a|ΔA/A + |b|ΔB/B + |c|ΔC/C"],
 examples:[{title:"Error propagation in a derived quantity",steps:["Let A = πr² and suppose the radius has a small fractional uncertainty Δr/r = 1%.","For a power, fractional error is multiplied by the magnitude of the power.","Therefore ΔA/A ≈ 2Δr/r = 2 × 1%."],result:"The area has approximately 2% uncertainty."}],
 questions:[{q:"The radius of a circle is measured with 0.5% error. Estimate the percentage error in its area.",answer:"A = πr², so ΔA/A ≈ 2Δr/r = 1%. "},{q:"Can dimensional analysis determine the value of a pure numerical constant such as 2 or π?",answer:"No. Pure dimensionless numerical constants cannot be obtained from dimensional analysis alone."}],
 traps:["Dimensional consistency is necessary, not sufficient, for physical correctness.","Do not add percentage errors with signs; maximum-error estimates use magnitudes.","Angles are dimensionless in dimensional analysis, though radians are used as their unit."]
},
{
 id:2,title:"Kinematics",cls:"Class 11",
 intro:"Kinematics describes position and motion without asking what force caused the motion. Build a strong command of vectors, graphs and relative motion before moving to dynamics.",
 concepts:[
 "Position is specified relative to an origin. Displacement is the vector change in position, while distance is the total path length. Average velocity uses displacement; average speed uses distance.",
 "Instantaneous velocity is dr/dt and acceleration is dv/dt. On a position–time graph, slope gives velocity; on a velocity–time graph, slope gives acceleration and signed area gives displacement.",
 "For constant acceleration, the standard equations connect initial velocity u, final velocity v, acceleration a, time t and displacement s. Choose a sign convention before substituting values.",
 "Projectile motion is resolved into independent horizontal and vertical components when air resistance is neglected. Horizontal acceleration is zero; vertical acceleration is −g if upward is positive.",
 "In circular motion, velocity is tangential and centripetal acceleration points toward the centre. Constant speed does not mean zero acceleration because the direction of velocity changes."
 ],
 formulas:["v = u + at","s = ut + ½at²; v² = u² + 2as","For projectile: T = 2u sinθ/g; H = u²sin²θ/(2g)","Range R = u²sin(2θ)/g (same launch and landing height)","aₙ = v²/r = ω²r; vAB = vA − vB"],
 examples:[{title:"Projectile launched from level ground",steps:["Resolve the initial velocity: ux = u cosθ and uy = u sinθ.","At landing, vertical displacement is zero: 0 = u sinθ·T − ½gT².","The non-zero time gives T = 2u sinθ/g.","Horizontal range is R = uxT."],result:"R = u²sin(2θ)/g, valid for equal launch and landing heights with no air resistance."}],
 questions:[{q:"A particle starts from rest and accelerates uniformly at 3 m/s² for 4 s. Find its displacement.",answer:"s = ut + ½at² = 0 + ½(3)(16) = 24 m."},{q:"At the highest point of an ideal projectile, which component of velocity is zero?",answer:"The vertical component is zero. The horizontal component remains u cosθ, and acceleration is still downward with magnitude g."}],
 traps:["The area under a speed–time graph is distance; the signed area under a velocity–time graph is displacement.","At the top of a projectile path, acceleration is not zero.","The range formula above does not apply unchanged when launch and landing heights differ."]
},
{
 id:3,title:"Laws of Motion",cls:"Class 11",
 intro:"Dynamics connects motion to interactions. Most JEE mechanics problems become clearer when each body is isolated and its external forces are drawn carefully.",
 concepts:[
 "Newton’s first law defines inertial frames: without a net external force, a body remains at rest or moves with constant velocity. Inertia is resistance to change in velocity and is measured by mass.",
 "Newton’s second law in general form is Fnet = dp/dt. For constant mass, it becomes Fnet = ma. Resolve vector equations along convenient perpendicular axes.",
 "Newton’s third-law forces are equal and opposite but act on different bodies. They therefore do not cancel in the free-body diagram of a single object.",
 "A free-body diagram contains only forces acting on the chosen body: weight, normal reaction, tension, friction, spring force and applied forces as appropriate. Normal force is set by constraints, not automatically equal to mg.",
 "Static friction adjusts from zero up to a limiting value μsN. Kinetic friction is approximately μkN during sliding. Impulse equals change in momentum, and momentum is conserved for an isolated system."
 ],
 formulas:["ΣF = dp/dt; for constant mass ΣF = ma","p = mv; impulse J = ∫Fdt = Δp","fₛ ≤ μₛN; limiting fₛ,max = μₛN","fₖ = μₖN (kinetic-friction model)","For a smooth incline: mg sinθ along plane; mg cosθ perpendicular"],
 examples:[{title:"Block on a smooth incline",steps:["Choose axes parallel and perpendicular to the plane.","Resolve weight: mg sinθ down the plane and mg cosθ into the plane.","With no acceleration perpendicular to the plane, N = mg cosθ.","Along the plane, ma = mg sinθ."],result:"The block’s acceleration down the smooth incline is a = g sinθ."}],
 questions:[{q:"A 5 kg body experiences a net force of 20 N. Find its acceleration.",answer:"a = F/m = 20/5 = 4 m/s²."},{q:"A 2 kg object changes velocity from 3 m/s to 8 m/s in the same direction. Find its change in momentum.",answer:"Δp = m(v − u) = 2(8 − 3) = 10 kg m/s."}],
 traps:["Static friction is not always μsN; that is only its maximum value.","Action–reaction pairs act on different bodies.","Centripetal force is the net inward force, not an additional type of force."]
},
{
 id:4,title:"Work, Energy and Power",cls:"Class 11",
 intro:"Energy methods often solve problems faster than direct force equations, especially when forces vary with position or the path is complicated.",
 concepts:[
 "Work by a constant force is the dot product F·s. Work is positive when force has a component along displacement, negative when opposite, and zero when perpendicular.",
 "For a variable force, work is the integral of F·dr. In one dimension, it is the signed area under the force–position graph.",
 "The work–energy theorem states that net work equals change in kinetic energy. It applies whether or not the forces are conservative.",
 "A conservative force has path-independent work and an associated potential energy. Mechanical energy K + U is conserved when only conservative forces do work.",
 "Power is the rate of energy transfer. In collisions, momentum is conserved for an isolated system; kinetic energy is conserved only for elastic collisions."
 ],
 formulas:["W = Fs cosθ; for variable force W = ∫F·dr","Wnet = ΔK; K = ½mv²","Near Earth: Ug = mgh; spring: Us = ½kx²","Pavg = W/Δt; instantaneous P = F·v","Coefficient of restitution e = relative separation speed / relative approach speed"],
 examples:[{title:"Work from a change in speed",steps:["A 2 kg object changes speed from 3 m/s to 5 m/s.","Use Wnet = ΔK = ½m(v² − u²).","Substitute: Wnet = ½(2)(25 − 9) = 16 J."],result:"Net work done on the object is 16 J."}],
 questions:[{q:"Find the kinetic energy of a 3 kg body moving at 4 m/s.",answer:"K = ½mv² = ½(3)(16) = 24 J."},{q:"A spring of k = 200 N/m is stretched by 0.10 m. Find its stored energy.",answer:"U = ½kx² = ½(200)(0.10)² = 1 J."}],
 traps:["A non-zero force can do zero work if displacement is perpendicular to it.","Momentum conservation does not imply kinetic-energy conservation.","Choose the zero of potential energy consistently; only changes in potential energy affect energy differences."]
},
{
 id:5,title:"Centre of Mass and Rotational Motion",cls:"Class 11",
 intro:"Rotational dynamics is the angular counterpart of linear dynamics. The axis matters: torque and moment of inertia are always defined about a specified point or axis.",
 concepts:[
 "The centre of mass is the mass-weighted average position. The motion of the centre of mass is governed by the net external force: M aCM = Fext.",
 "Torque is the turning effect of a force, τ = r × F. Its magnitude is force multiplied by the perpendicular lever arm. Angular equilibrium requires zero net torque.",
 "Moment of inertia I = Σmr² measures resistance to angular acceleration and depends on the mass distribution and chosen axis. The rotational equation for a rigid body about a fixed axis is τnet = Iα.",
 "Angular momentum about a fixed axis is L = Iω. If net external torque is zero, angular momentum is conserved. This is distinct from conservation of linear momentum.",
 "For rolling without slipping, vCM = ωR. Total kinetic energy includes translation of the centre of mass and rotation about it."
 ],
 formulas:["rCM = (Σmᵢrᵢ)/(Σmᵢ)","τ = r × F; τ = Iα (fixed axis)","Krot = ½Iω²; L = Iω","Parallel axis: I = ICM + Md²","Rolling: vCM = ωR; K = ½MvCM² + ½ICMω²"],
 examples:[{title:"Torque and angular acceleration",steps:["A wheel has moment of inertia I = 2 kg m².","A constant net torque of 6 N m acts about its fixed axis.","Use τ = Iα, so α = τ/I = 6/2."],result:"Angular acceleration is 3 rad/s²."}],
 questions:[{q:"A perpendicular 10 N force acts 0.5 m from an axis. Find torque magnitude.",answer:"τ = rF = 0.5 × 10 = 5 N m."},{q:"State the no-slip rolling condition.",answer:"The speed of the centre is vCM = ωR, with consistent directions for the chosen sign convention."}],
 traps:["Moment of inertia changes when the axis changes.","Torque can be zero even for a non-zero force if its line of action passes through the axis.","Rolling kinetic energy has both translational and rotational parts."]
},
{
 id:6,title:"Gravitation",cls:"Class 11",
 intro:"Gravitation is a central inverse-square interaction. Potential and energy methods are particularly useful for satellite motion and escape problems.",
 concepts:[
 "Newton’s law states that two point masses attract with force GMm/r² along the line joining them. For a spherically symmetric body, the external field is equivalent to that of a point mass at its centre.",
 "Gravitational field is force per unit test mass; potential is potential energy per unit mass. With zero potential at infinity, gravitational potential is negative.",
 "A circular satellite orbit occurs when gravity supplies the required centripetal force. A satellite in orbit is in continuous free fall; apparent weightlessness is not absence of gravity.",
 "Escape speed follows from energy conservation: the minimum initial kinetic energy makes total energy zero at infinity. Atmospheric drag and other celestial bodies are neglected in the usual formula."
 ],
 formulas:["F = GMm/r²; g = GM/r²","V = −GM/r; U = −GMm/r","Circular orbit: v = √(GM/r)","T = 2π√(r³/GM)","Escape speed from radius R: ve = √(2GM/R)"],
 examples:[{title:"Circular orbital speed",steps:["For a satellite of mass m in a circular orbit of radius r, set gravity equal to centripetal force.","GMm/r² = mv²/r.","Cancel m and solve for v."],result:"v = √(GM/r). The satellite mass does not affect the ideal orbital speed."}],
 questions:[{q:"If the separation between two point masses doubles, what happens to gravitational force?",answer:"F ∝ 1/r², so the new force is one-quarter of the original."},{q:"Compare escape speed and circular orbital speed at the same radius.",answer:"ve = √2 vorbit."}],
 traps:["Use distance from the centre in orbital formulas, not altitude alone.","Gravitational potential is negative when zero is chosen at infinity.","Mass is constant in Newtonian mechanics; weight depends on the local gravitational field."]
},
{
 id:7,title:"Properties of Solids and Fluids",cls:"Class 11",
 intro:"This unit combines elastic deformation with fluid statics and dynamics. Identify the physical assumptions before applying each material or flow relation.",
 concepts:[
 "Stress is restoring force per unit area; strain is a dimensionless measure of deformation. Within the proportional limit, stress is proportional to strain. Young’s, bulk and shear moduli describe different deformations.",
 "Pressure in a static fluid increases with depth: P = P0 + ρgh. Pascal’s principle explains pressure transmission in an enclosed fluid, while Archimedes’ principle gives buoyant force as the weight of displaced fluid.",
 "Viscosity measures internal resistance to flow. Stokes’ law describes drag on a small sphere in slow, laminar flow under its assumptions. Surface tension is associated with the energy cost of creating liquid surface area.",
 "The continuity equation expresses mass conservation. For steady incompressible flow, Av is constant along a stream tube. Bernoulli’s equation is an energy relation for ideal steady flow along a streamline."
 ],
 formulas:["Stress = F/A; longitudinal strain = ΔL/L","Y = (F/A)/(ΔL/L)","P = P0 + ρgh; FB = ρfluid Vdisplaced g","A1v1 = A2v2 (steady incompressible flow)","P + ½ρv² + ρgh = constant (ideal Bernoulli flow)"],
 examples:[{title:"Gauge pressure under water",steps:["Take water density ρ = 1000 kg/m³, depth h = 2 m and g = 9.8 m/s².","Gauge pressure is ρgh.","P = 1000 × 9.8 × 2."],result:"Gauge pressure is 19,600 Pa. Add atmospheric pressure only if absolute pressure is required."}],
 questions:[{q:"Find gauge pressure at 5 m depth in water, taking g = 10 m/s².",answer:"P = ρgh = 1000 × 10 × 5 = 50,000 Pa."},{q:"For incompressible flow, the cross-sectional area halves. What happens to speed?",answer:"A1v1 = A2v2, so the speed doubles."}],
 traps:["Bernoulli’s equation is not universal for turbulent, viscous or unsteady flow.","Gauge pressure and absolute pressure are different.","Buoyant force depends on displaced-fluid volume, not simply the object's total volume."]
},
{
 id:8,title:"Thermal Physics and Thermodynamics",cls:"Class 11",
 intro:"Thermodynamics tracks heat, work and internal energy at the system level. Keep the sign convention explicit in every calculation.",
 concepts:[
 "Temperature determines thermal equilibrium. The zeroth law provides the basis for thermometers. Heat is energy transferred due to temperature difference; it is not a substance stored in a body.",
 "The first law is energy conservation: heat supplied changes internal energy and may also produce work. Here W is defined as work done by the system, so Q = ΔU + W.",
 "For an ideal gas, internal energy depends only on temperature. Thus ΔU = 0 for an isothermal ideal-gas process. In an adiabatic process Q = 0, but temperature can change.",
 "A cyclic heat engine absorbs heat from a hot reservoir, produces work and rejects heat to a cold reservoir. The second law prevents complete conversion of heat from a single reservoir into work."
 ],
 formulas:["Q = ΔU + W (W = work done by system)","PV = nRT; ΔU = nCVΔT for an ideal gas","Isothermal ideal gas: ΔU = 0; Q = W","Reversible adiabatic ideal gas: PVᵞ = constant","η = W/QH = 1 − QC/QH; Carnot η = 1 − TC/TH"],
 examples:[{title:"First-law calculation",steps:["A gas absorbs 500 J of heat and does 200 J of work.","Use Q = ΔU + W.","Therefore ΔU = Q − W = 500 − 200."],result:"The internal energy increases by 300 J."}],
 questions:[{q:"A system receives 100 J heat and does 40 J work. Find ΔU.",answer:"ΔU = Q − W = 100 − 40 = 60 J."},{q:"A Carnot engine operates between 500 K and 300 K. Find its maximum efficiency.",answer:"η = 1 − 300/500 = 0.40 = 40%."}],
 traps:["State whether W means work done by or on the system.","Use kelvin in gas laws and efficiency expressions.","Adiabatic means no heat exchange, not constant temperature."]
},
{
 id:9,title:"Kinetic Theory of Gases",cls:"Class 11",
 intro:"Kinetic theory connects microscopic molecular motion with macroscopic pressure and temperature. Use absolute temperature and consistent molar-mass units.",
 concepts:[
 "The ideal-gas model treats molecules as point particles with negligible intermolecular forces except during collisions. Collisions are assumed elastic and molecular motion is random.",
 "Gas pressure results from momentum transfer to container walls. Absolute temperature is proportional to the average translational kinetic energy per molecule.",
 "The equipartition theorem assigns an average energy of ½kBT to each independent quadratic degree of freedom in thermal equilibrium. The allowed degrees of freedom depend on the molecular model and temperature range."
 ],
 formulas:["PV = nRT = NkBT","P = ⅓ρ vrms²","Average translational KE per molecule = 3kBT/2","vrms = √(3RT/M) (M in kg mol⁻¹)","For f quadratic degrees: U = (f/2)nRT"],
 examples:[{title:"Temperature dependence of rms speed",steps:["For a fixed gas, vrms = √(3RT/M).","Thus vrms is proportional to √T.","If absolute temperature becomes four times, speed is multiplied by √4."],result:"The rms speed doubles."}],
 questions:[{q:"Write the ideal-gas equation using number of molecules N.",answer:"PV = NkBT."},{q:"Does average translational kinetic energy depend on the identity of an ideal gas at the same temperature?",answer:"No. It is 3kBT/2 per molecule and depends only on absolute temperature."}],
 traps:["RMS speed is not the same as average speed.","Use kelvin, not Celsius.","M must be in kg/mol when using SI values of R."]
},
{
 id:10,title:"Oscillations and Waves",cls:"Class 11",
 intro:"Simple harmonic motion is a special periodic motion with a linear restoring acceleration. Wave superposition explains interference, standing waves and beats.",
 concepts:[
 "In SHM, acceleration is proportional to displacement from equilibrium and directed toward equilibrium: a = −ω²x. At equilibrium speed is maximum; at extreme positions speed is zero.",
 "A spring–mass oscillator has period determined by mass and spring constant. The small-angle simple pendulum period depends on length and gravitational acceleration, not bob mass.",
 "A travelling wave transfers energy through a medium or field. Wave speed v, frequency f and wavelength λ satisfy v = fλ. The medium determines wave speed in many mechanical-wave settings.",
 "Standing waves arise from superposition of equal-frequency waves travelling in opposite directions. Nodes have zero displacement; antinodes have maximum amplitude."
 ],
 formulas:["a = −ω²x; x = A cos(ωt + φ)","vmax = Aω; amax = Aω²; E = ½mω²A²","Tspring = 2π√(m/k); Tpendulum = 2π√(L/g) (small angle)","v = fλ; string speed v = √(T/μ)","Beat frequency = |f1 − f2|"],
 examples:[{title:"Spring oscillator",steps:["Let m = 1 kg and k = 100 N/m.","Angular frequency ω = √(k/m) = √100 = 10 rad/s.","Period T = 2π/ω."],result:"T = 0.2π s ≈ 0.628 s."}],
 questions:[{q:"A wave has frequency 50 Hz and wavelength 2 m. Find its speed.",answer:"v = fλ = 50 × 2 = 100 m/s."},{q:"In SHM, what is acceleration at the equilibrium position?",answer:"Zero, because x = 0 and a = −ω²x."}],
 traps:["SHM acceleration is maximum in magnitude at the extremes, not at equilibrium.","The simple pendulum formula assumes small angular oscillations.","Wave speed is not generally changed by changing source frequency while the medium remains the same."]
},
{
 id:11,title:"Electric Charges and Fields",cls:"Class 12",
 intro:"Electrostatics studies charges at rest. Vector superposition, symmetry and Gaussian surfaces are the main tools for field calculations.",
 concepts:[
 "Charge is quantised and conserved. Like charges repel and unlike charges attract. Coulomb’s law gives the force between point charges in vacuum; forces add vectorially.",
 "Electric field is force per unit positive test charge. Field lines begin on positive charges and end on negative charges (or infinity); they never cross.",
 "Electric flux measures the field passing through a surface. Gauss’s law relates net flux through a closed surface to enclosed charge and is most useful when symmetry makes the field simple.",
 "A conductor in electrostatic equilibrium has zero electric field inside its material, and excess charge resides on its surface. The field just outside a conductor is normal to the surface in electrostatic equilibrium."
 ],
 formulas:["F = (1/4πε0)|q1q2|/r²","E = F/q0; point charge E = (1/4πε0)q/r² r̂","Flux ΦE = ∫E·dA; uniform field Φ = EA cosθ","Gauss law: ∮E·dA = Qenclosed/ε0","Infinite line: E = λ/(2πε0r); infinite sheet: E = σ/(2ε0)"],
 examples:[{title:"Field due to a point charge",steps:["A point charge q produces a radial field at distance r.","Use E = k|q|/r², where k = 1/(4πε0).","The direction is outward for positive q and inward for negative q."],result:"Field magnitude varies inversely as the square of distance."}],
 questions:[{q:"If distance from a point charge is tripled, how does field magnitude change?",answer:"E ∝ 1/r², so it becomes one-ninth."},{q:"What does Gauss’s law say about net flux through a closed surface enclosing zero net charge?",answer:"The net electric flux is zero, even if the field is non-zero at individual points on the surface."}],
 traps:["Zero net flux does not mean electric field is zero everywhere on the surface.","Electric field is a vector; add components, not magnitudes blindly.","Only enclosed charge determines net flux, not the position of external charges."]
},
{
 id:12,title:"Electrostatic Potential and Capacitance",cls:"Class 12",
 intro:"Potential is a scalar energy-per-charge quantity. Equipotential reasoning and capacitor combinations simplify many electrostatics problems.",
 concepts:[
 "Electric potential difference is work done per unit positive test charge by an external agent in a quasistatic displacement. Potential is scalar, so contributions add algebraically.",
 "The electric field points in the direction of decreasing potential. Equipotential surfaces are perpendicular to electric field lines, and no work is done moving a charge along an equipotential surface.",
 "Capacitance is the ratio of charge magnitude to potential difference. A parallel-plate capacitor in vacuum has capacitance ε0A/d; a dielectric changes the capacitance according to its permittivity.",
 "For capacitors in parallel, potential difference is common and capacitances add. In series, charge magnitude is common and reciprocals add. Energy is stored in the electric field."
 ],
 formulas:["V = U/q; point charge V = (1/4πε0)q/r","E = −dV/dr (one-dimensional radial form)","C = Q/V; parallel plate C = ε0A/d","Parallel: Ceq = ΣC; series: 1/Ceq = Σ(1/C)","U = ½CV² = Q²/(2C) = ½QV"],
 examples:[{title:"Series capacitor combination",steps:["Two capacitors C1 = 3 μF and C2 = 6 μF are connected in series.","1/Ceq = 1/3 + 1/6 = 1/2 per μF.","Invert the result."],result:"Equivalent capacitance is 2 μF."}],
 questions:[{q:"A 4 μF capacitor is connected to 10 V. Find charge.",answer:"Q = CV = 4 μF × 10 V = 40 μC."},{q:"What is the equivalent capacitance of 2 μF and 3 μF in parallel?",answer:"Ceq = 2 + 3 = 5 μF."}],
 traps:["In series, each capacitor has equal charge magnitude, not generally equal voltage.","In parallel, each capacitor has the same voltage.","When a battery is disconnected, charge conservation and energy changes must be considered carefully."]
},
{
 id:13,title:"Current Electricity",cls:"Class 12",
 intro:"Current electricity combines microscopic drift with circuit-level laws. Mark polarities and current directions before writing Kirchhoff equations.",
 concepts:[
 "Electric current is the rate of flow of charge. Conventional current is defined in the direction positive charges would move; electron drift in metals is opposite.",
 "Ohm’s law V = IR applies to ohmic conductors under fixed physical conditions. Resistivity is a material property; resistance also depends on dimensions.",
 "Cells have emf and internal resistance. Terminal voltage differs from emf when current flows. Series and parallel resistor networks can be reduced using equivalent resistance.",
 "Kirchhoff’s junction rule follows charge conservation; the loop rule follows energy conservation. In a balanced Wheatstone bridge, no current flows through the galvanometer branch."
 ],
 formulas:["I = dQ/dt; drift relation I = neAvd","R = ρL/A; V = IR; P = VI = I²R = V²/R","Series: Req = ΣR; parallel: 1/Req = Σ(1/R)","Terminal voltage (discharging): V = ε − Ir","Wheatstone balance: R1/R2 = R3/R4"],
 examples:[{title:"Resistors in parallel",steps:["Take 6 Ω and 3 Ω in parallel.","1/Req = 1/6 + 1/3 = 3/6 = 1/2.","Invert to find Req."],result:"Equivalent resistance is 2 Ω."}],
 questions:[{q:"A 12 V battery is connected across 4 Ω. Find current.",answer:"I = V/R = 12/4 = 3 A."},{q:"A wire’s length doubles and area remains fixed. What happens to resistance?",answer:"R = ρL/A, so resistance doubles if temperature and material remain unchanged."}],
 traps:["Use terminal voltage, not emf, when the question specifies the loaded cell’s terminal potential difference.","The current direction convention is not the same as electron drift direction.","Resistivity and resistance are different quantities."]
},
{
 id:14,title:"Moving Charges and Magnetism",cls:"Class 12",
 intro:"Magnetic forces act on moving charges and currents. Direction rules are essential, but the magnitude equations are only part of the reasoning.",
 concepts:[
 "A moving charge in a magnetic field experiences q(v × B). The magnetic force is perpendicular to velocity, so it does no work and changes direction rather than speed when it is the only force.",
 "A charged particle entering a uniform magnetic field perpendicular to its velocity follows circular motion. If velocity has a parallel component, the path is helical.",
 "A current-carrying conductor experiences a magnetic force. The Biot–Savart law and Ampere’s law describe magnetic fields produced by currents; symmetry guides the choice of method.",
 "A current loop has a magnetic dipole moment. A magnetic field exerts torque on the loop, tending to align its magnetic moment with the field."
 ],
 formulas:["F = q(v × B); magnitude |F| = |q|vB sinθ","Circular radius r = mv⊥/(|q|B); cyclotron angular frequency ω = |q|B/m","Fwire = I(L × B); magnitude = ILB sinθ","Long straight wire: B = μ0I/(2πr)","Loop torque τ = μ × B; μ = NIA n̂"],
 examples:[{title:"Radius of a charged particle’s path",steps:["A particle enters a uniform magnetic field with velocity perpendicular to B.","Magnetic force supplies centripetal force: |q|vB = mv²/r.","Solve for r."],result:"r = mv/(|q|B). The radius increases with momentum and decreases with field strength or charge magnitude."}],
 questions:[{q:"Does a magnetic force change the speed of a particle when it is the only force?",answer:"No. It is perpendicular to velocity and does no work; it changes the direction of motion."},{q:"A straight wire carries 2 A. Write B at distance r in vacuum.",answer:"B = μ0I/(2πr) = μ0(2)/(2πr) = μ0/(πr)."}],
 traps:["Magnetic force is zero when velocity is parallel or antiparallel to B.","Use the sign of charge to determine force direction.","The cyclotron frequency in the non-relativistic ideal model is independent of speed."]
},
{
 id:15,title:"Magnetism and Matter",cls:"Class 12",
 intro:"Matter responds to magnetic fields through magnetic dipoles and magnetisation. Distinguish the field B from magnetic field strength H and material response.",
 concepts:[
 "A bar magnet behaves like a magnetic dipole. Magnetic field lines form closed loops; outside a bar magnet they go from north to south.",
 "A current loop has a magnetic dipole moment. In a uniform magnetic field it experiences torque but no net force; in a non-uniform field it can experience a net force.",
 "Materials are classified by magnetic response. Diamagnetic materials are weakly repelled, paramagnetic materials weakly attracted, and ferromagnetic materials can show strong domain alignment and hysteresis.",
 "Earth’s magnetic field is described by components such as declination, inclination and horizontal component. Compass behaviour follows the local horizontal component."
 ],
 formulas:["Magnetic dipole moment of N-turn loop: μ = NIA","Torque: τ = μB sinθ","Potential energy: U = −μ·B","For a linear isotropic medium: B = μH","Magnetic susceptibility χm = M/H (SI convention)"],
 examples:[{title:"Torque on a magnetic dipole",steps:["A dipole of moment μ is placed in a uniform field B at angle θ.","Torque magnitude is τ = μB sinθ.","Torque is maximum at 90° and zero at 0° or 180°."],result:"The field tends to align the dipole moment with B."}],
 questions:[{q:"At what angle is torque on a magnetic dipole maximum?",answer:"At 90°, because sinθ = 1."},{q:"Which class of material is strongly associated with magnetic domains and hysteresis?",answer:"Ferromagnetic materials."}],
 traps:["A magnetic field line is not a path that a free magnetic pole follows.","Torque is zero when dipole moment is parallel or antiparallel to the field.","Do not interchange B, H and magnetisation M."]
},
{
 id:16,title:"Electromagnetic Induction and Alternating Current",cls:"Class 12",
 intro:"Changing magnetic flux induces emf. AC circuit analysis uses phase relationships and impedance rather than resistance alone.",
 concepts:[
 "Magnetic flux through a surface is ΦB = ∫B·dA. Faraday’s law states that induced emf is the negative rate of change of flux; Lenz’s law gives the direction that opposes the change producing it.",
 "Motional emf can arise when a conductor moves through a magnetic field. Self-induction opposes changes in current in the same circuit; mutual induction couples changing current in one coil to another.",
 "An alternating voltage changes periodically. In a pure resistor, current and voltage are in phase; in an ideal inductor current lags voltage by 90°, while in an ideal capacitor current leads by 90°.",
 "In a series LCR circuit, impedance combines resistance and net reactance. Resonance occurs when inductive and capacitive reactances are equal; power factor is cosφ."
 ],
 formulas:["ε = −N dΦB/dt","Motional emf: ε = Bℓv (mutually perpendicular geometry)","Inductor: εL = −L dI/dt; energy = ½LI²","XL = ωL; XC = 1/(ωC)","Z = √(R² + (XL − XC)²); Irms = Vrms/Z; ω0 = 1/√(LC)"],
 examples:[{title:"LCR resonance frequency",steps:["For a series LCR circuit, resonance requires XL = XC.","Thus ωL = 1/(ωC).","Rearrange to obtain ω² = 1/(LC)."],result:"ω0 = 1/√(LC), and f0 = 1/(2π√(LC))."}],
 questions:[{q:"What is the phase relation between current and voltage in an ideal resistor?",answer:"They are in phase."},{q:"At series resonance, what is the impedance?",answer:"The reactances cancel, so Z = R and current is maximum for a fixed rms voltage."}],
 traps:["Lenz’s law determines direction; the minus sign is not an optional decoration.","Use rms values consistently in average power calculations.","At resonance, voltage across L or C can individually be large even though net reactance is zero."]
},
{
 id:17,title:"Electromagnetic Waves",cls:"Class 12",
 intro:"Time-varying electric and magnetic fields sustain electromagnetic waves. They transport energy and momentum through space.",
 concepts:[
 "A changing electric field contributes to magnetic-field generation, and a changing magnetic field contributes to electric-field generation. This mutual coupling permits electromagnetic-wave propagation.",
 "In vacuum, electromagnetic waves are transverse: electric field, magnetic field and propagation direction are mutually perpendicular. E and B oscillate in phase.",
 "All electromagnetic waves travel at speed c in vacuum, but differ in frequency and wavelength. The spectrum includes radio, microwave, infrared, visible, ultraviolet, X-rays and gamma rays.",
 "The energy carried by electromagnetic radiation is described by its fields. Intensity is average power transmitted per unit area."
 ],
 formulas:["c = 1/√(μ0ε0)","c = fλ","E0/B0 = c in vacuum","Energy density u = ½ε0E² + B²/(2μ0)","Photon energy (quantum description): E = hf"],
 examples:[{title:"Wavelength from frequency",steps:["An EM wave has frequency 100 MHz = 1.0 × 10⁸ Hz.","Use λ = c/f with c ≈ 3.0 × 10⁸ m/s.","λ = (3.0 × 10⁸)/(1.0 × 10⁸)."],result:"Wavelength is 3 m."}],
 questions:[{q:"Are electric and magnetic fields in an electromagnetic wave in phase?",answer:"Yes, in a plane wave in vacuum they are in phase."},{q:"Find wavelength for f = 6 × 10¹⁴ Hz, taking c = 3 × 10⁸ m/s.",answer:"λ = c/f = 3×10⁸/(6×10¹⁴) = 5×10⁻⁷ m = 500 nm."}],
 traps:["Frequency remains unchanged when a wave enters another medium; speed and wavelength may change.","EM waves do not require a material medium.","Do not confuse photon energy hf with classical field energy density."]
},
{
 id:18,title:"Optics: Ray and Wave Optics",cls:"Class 12",
 intro:"Ray optics uses geometrical paths when wavelength effects are negligible. Wave optics explains interference, diffraction and polarisation.",
 concepts:[
 "Reflection obeys equality of incidence and reflection angles. Refraction follows Snell’s law. Total internal reflection requires light to travel from optically denser to rarer medium with incidence angle greater than the critical angle.",
 "Spherical mirrors and thin lenses form images according to their sign conventions. Magnification links image size to object size; lens power is measured in dioptres.",
 "Interference is superposition of coherent waves. In Young’s double-slit experiment, path difference determines bright and dark fringes. Diffraction is spreading around apertures or obstacles and becomes important when dimensions are comparable to wavelength.",
 "Polarisation demonstrates the transverse nature of light. Malus’ law describes transmitted intensity through an analyser for plane-polarised light."
 ],
 formulas:["Snell: n1 sin i = n2 sin r; critical angle sin C = nrarer/ndenser","Mirror: 1/f = 1/v + 1/u; magnification m = −v/u (Cartesian convention)","Thin lens: 1/f = 1/v − 1/u; power P = 1/f (f in metres)","YDSE fringe width β = λD/d","Malus law: I = I0 cos²θ"],
 examples:[{title:"Young’s double-slit fringe width",steps:["Let wavelength λ = 600 nm, screen distance D = 2 m and slit separation d = 0.5 mm.","Use β = λD/d.","Convert units: β = (600×10⁻⁹ × 2)/(0.5×10⁻³)."],result:"β = 2.4 × 10⁻³ m = 2.4 mm."}],
 questions:[{q:"What happens to YDSE fringe width if slit separation doubles?",answer:"β = λD/d, so fringe width becomes half."},{q:"State the condition for total internal reflection.",answer:"Light must travel from higher refractive index to lower refractive index, and incidence angle must exceed the critical angle."}],
 traps:["Use one consistent sign convention for mirrors and lenses.","A stable interference pattern requires coherent sources.","Diffraction is not restricted to sound; all waves can diffract."]
},
{
 id:19,title:"Dual Nature of Matter and Radiation",cls:"Class 12",
 intro:"Quantum ideas reveal particle-like light and wave-like matter. The photoelectric equation and de Broglie relation are central quantitative tools.",
 concepts:[
 "In the photoelectric effect, electrons are emitted only if incident frequency exceeds threshold frequency. The maximum kinetic energy depends on frequency; intensity mainly controls the number of emitted electrons for suitable frequency.",
 "Einstein’s photoelectric equation is energy conservation for one photon interacting with one electron. Work function is the minimum energy needed to liberate an electron from the surface.",
 "De Broglie proposed wavelength λ = h/p for a particle. For non-relativistic motion, p = √(2mK). Matter-wave effects become noticeable for small masses or large momenta less."
 ],
 formulas:["Photon energy E = hf = hc/λ","hf = φ + Kmax; Kmax = eVs","Threshold frequency f0 = φ/h","de Broglie wavelength λ = h/p","Non-relativistic: λ = h/√(2mK)"],
 examples:[{title:"Photoelectron maximum kinetic energy",steps:["A photon has energy 5 eV and the metal work function is 2 eV.","Einstein’s equation gives Kmax = hf − φ.","Kmax = 5 − 2."],result:"Maximum kinetic energy is 3 eV."}],
 questions:[{q:"If intensity is increased while frequency remains fixed above threshold, what happens to maximum kinetic energy?",answer:"It remains unchanged in Einstein’s ideal photoelectric model; photoelectric current can increase."},{q:"Write de Broglie wavelength in terms of momentum.",answer:"λ = h/p."}],
 traps:["Increasing intensity cannot compensate for frequency below threshold in the ordinary photoelectric effect.","Stopping potential measures maximum kinetic energy per electronic charge.","Use consistent units for photon energy and work function."]
},
{
 id:20,title:"Atoms, Nuclei and Electronic Devices",cls:"Class 12",
 intro:"Atomic and nuclear physics apply quantisation and energy conservation at small scales. Semiconductor devices use controlled charge carriers and junction behaviour.",
 concepts:[
 "The Bohr model explains hydrogen-like spectra using quantised angular momentum and discrete energy levels. A photon is emitted when an electron moves to a lower energy level; absorbed when it moves upward.",
 "Nuclear binding energy is the energy required to separate a nucleus into its constituent nucleons. Mass defect multiplied by c² gives binding energy. Radioactive decay is statistical and follows an exponential law.",
 "Fission splits a heavy nucleus; fusion combines light nuclei. Energy release is associated with products having greater total binding energy than the initial configuration.",
 "Intrinsic semiconductors are pure. Doping produces n-type material with electrons as majority carriers or p-type material with holes as majority carriers. A p-n junction has a depletion region; forward bias reduces its barrier and reverse bias increases it.",
 "Diodes can rectify AC. Zener diodes are designed for operation in reverse breakdown as voltage references/regulators. Logic gates implement Boolean functions."
 ],
 formulas:["Hydrogen-like energy: En = −13.6 Z²/n² eV","Photon: hf = |E2 − E1|","Mass defect Δm = Zmp + Nmn − Mnucleus; BE = Δmc²","N = N0e^(−λt); T1/2 = 0.693/λ; activity A = λN","AND: A·B; OR: A+B; NOT: Ā; NAND/NOR are universal gates"],
 examples:[{title:"Radioactive half-life",steps:["A sample has half-life 10 days. After 20 days, two half-lives have elapsed.","The remaining fraction after n half-lives is (1/2)^n.","For n = 2, fraction = 1/4."],result:"25% of the original undecayed nuclei remain."}],
 questions:[{q:"A sample has half-life 5 hours. What fraction remains after 15 hours?",answer:"Three half-lives pass, so fraction = (1/2)³ = 1/8."},{q:"For an AND gate with inputs 1 and 0, what is the output?",answer:"0. AND gives 1 only when every input is 1."}],
 traps:["Use energy-level differences, not absolute energy signs alone, for photon energy.","Half-life is independent of the initial number of nuclei in the standard decay model.","An n-type semiconductor is electrically neutral overall; electrons are majority carriers, not net charge."]
}
];

const css = `
:root{color-scheme:light}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f4f7fc;color:#17243b;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
button,input{font:inherit}button{cursor:pointer}
.site{min-height:100vh}.hero{background:radial-gradient(circle at 85% 15%,#2862a4 0,transparent 30%),linear-gradient(130deg,#08152d,#102d54 62%,#174a77);color:#fff;padding:24px 20px 58px}
.nav{max-width:1120px;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:16px}.brand{font-weight:950;letter-spacing:2px;font-size:22px;color:#83e1ff}.navlinks{display:flex;gap:20px;flex-wrap:wrap}.navlinks a{color:#d8e9ff;text-decoration:none;font-size:13px;font-weight:650}
.heroInner{max-width:1120px;margin:62px auto 0;display:grid;grid-template-columns:1.4fr .8fr;gap:36px;align-items:center}.eyebrow{font-size:11px;letter-spacing:2.5px;font-weight:850;color:#72d8f4;text-transform:uppercase}.hero h1{font-size:clamp(38px,6vw,68px);line-height:1.03;letter-spacing:-2px;margin:16px 0}.hero p{max-width:650px;color:#d3e3f6;line-height:1.8;font-size:16px}.heroActions{display:flex;gap:12px;flex-wrap:wrap;margin-top:26px}.primary,.secondary{border-radius:12px;padding:13px 18px;font-weight:800;text-decoration:none;display:inline-flex;align-items:center;justify-content:center}.primary{background:#7de1f4;color:#08203b;border:0}.secondary{border:1px solid #7396bb;color:#fff;background:#ffffff0b}
.heroCard{background:#ffffff12;border:1px solid #ffffff2c;border-radius:22px;padding:22px;backdrop-filter:blur(8px)}.heroCard h3{margin:0 0 14px;font-size:17px}.metricGrid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.metric{background:#ffffff12;border-radius:14px;padding:15px}.metric b{display:block;font-size:25px;color:#8ce9ff}.metric span{font-size:11px;color:#d4e5f8}
.wrap{max-width:1120px;margin:auto;padding:38px 18px}.sectionTop{display:flex;justify-content:space-between;align-items:end;gap:14px;margin-bottom:18px}.sectionTop h2{font-size:29px;margin:5px 0;letter-spacing:-.7px}.muted{color:#697991;line-height:1.7}.pill{background:#e4f4fa;color:#17627c;border-radius:999px;padding:7px 11px;font-size:12px;font-weight:800}
.toolbar{display:grid;grid-template-columns:1fr auto;gap:12px;margin:20px 0}.search{width:100%;padding:14px 16px;border:1px solid #d5dfeb;border-radius:13px;background:white;outline-color:#1688b3}.filters{display:flex;gap:7px;flex-wrap:wrap}.filter{border:1px solid #d4deea;background:white;color:#40536c;border-radius:999px;padding:10px 14px;font-weight:750;font-size:12px}.filter.active{background:#123b66;color:white;border-color:#123b66}
.layout{display:grid;grid-template-columns:280px minmax(0,1fr);gap:18px;align-items:start}.side{position:sticky;top:14px;background:#fff;border:1px solid #e0e7f0;border-radius:17px;padding:17px}.side h3{margin:0 0 12px;font-size:14px}.sideItem{display:flex;width:100%;text-align:left;gap:10px;align-items:center;padding:9px 8px;border:0;background:transparent;border-radius:9px;color:#4c5d73;font-size:12px}.sideItem:hover,.sideItem.selected{background:#eaf4fb;color:#124b79;font-weight:800}.sideItem span:first-child{color:#8aa0b7;font-variant-numeric:tabular-nums}
.chapterList{display:grid;gap:12px}.chapter{background:#fff;border:1px solid #dfe7f0;border-radius:16px;overflow:hidden;box-shadow:0 5px 18px #18385a08}.chapterHead{width:100%;display:flex;align-items:center;gap:13px;padding:17px;border:0;background:white;text-align:left;color:#17243b}.num{width:42px;height:42px;flex:0 0 42px;display:grid;place-items:center;border-radius:12px;background:#eaf4ff;color:#15568d;font-weight:900;font-size:13px}.chapterMain{flex:1;min-width:0}.classTag{font-size:10px;text-transform:uppercase;letter-spacing:1.3px;color:#1881a9;font-weight:850}.chapterTitle{font-size:17px;font-weight:850;margin:4px 0}.chapterIntro{font-size:12px;color:#738198;line-height:1.5;margin:0}.toggle{font-size:24px;color:#187da5}
.lesson{border-top:1px solid #e8eef5;padding:20px}.lessonIntro{font-size:14px;line-height:1.8;color:#51627a;margin:0 0 18px}.tabs{display:flex;gap:6px;overflow:auto;padding-bottom:10px;margin-bottom:12px}.tab{white-space:nowrap;border:1px solid #dce5ee;background:#f8fafc;color:#52647b;border-radius:9px;padding:9px 12px;font-size:12px;font-weight:800}.tab.active{background:#123b66;color:#fff;border-color:#123b66}.lessonGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.panel{border:1px solid #e3eaf2;border-radius:13px;padding:15px;background:#fff}.panel h4{font-size:14px;margin:0 0 11px;color:#173b60}.panel p,.panel li{font-size:13px;line-height:1.8;color:#53647a}.panel ul,.panel ol{padding-left:20px;margin:0}.panel li+li{margin-top:7px}.formula{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;background:#f0f6fc;border:1px solid #e0eaf5;border-radius:8px;padding:9px 10px;margin:7px 0;font-size:12px;line-height:1.6;color:#19466c;overflow-wrap:anywhere}
.exampleBox{background:#f0f8f5;border-left:3px solid #2c9a72;border-radius:0 10px 10px 0;padding:12px;margin-top:10px}.exampleBox b{font-size:13px;color:#176347}.exampleBox ol{margin-top:8px}.answer{margin-top:10px;background:#f2f7ff;border-radius:9px;padding:10px;color:#284e78!important}.answerButton{border:1px solid #b9cee2;background:#fff;color:#1b5c8b;padding:8px 11px;border-radius:8px;font-size:11px;font-weight:850;margin-top:9px}
.callout{margin-top:14px;padding:14px;border-radius:12px;background:#fff8e9;border:1px solid #f2e2bb;color:#71551b;font-size:12px;line-height:1.7}
.featureGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:13px;margin-top:22px}.feature{background:#fff;border:1px solid #e1e8f0;border-radius:15px;padding:17px}.feature b{display:block;margin:8px 0;color:#1c4269}.feature p{font-size:12px;line-height:1.7;color:#697991;margin:0}
.disclaimer{font-size:11px;color:#8390a2;line-height:1.7;margin-top:20px}.footer{background:#0b1c35;color:#cfdded;padding:30px 18px;text-align:center}.footer a{color:#a8dff2;text-decoration:none;margin:0 10px;font-size:12px}.footer small{display:block;color:#91a4bb;margin-top:16px}
.empty{background:#fff;border:1px dashed #cad6e4;padding:28px;text-align:center;border-radius:14px;color:#718096}
@media(max-width:800px){.heroInner{grid-template-columns:1fr;margin-top:42px}.heroCard{max-width:520px}.layout{grid-template-columns:1fr}.side{position:static}.sideNav{display:grid;grid-template-columns:1fr 1fr;gap:2px;max-height:250px;overflow:auto}.toolbar{grid-template-columns:1fr}.lessonGrid{grid-template-columns:1fr}.featureGrid{grid-template-columns:1fr 1fr}.navlinks{gap:10px}.navlinks a{font-size:11px}}
@media(max-width:480px){.hero{padding:18px 16px 40px}.heroInner{margin-top:36px}.hero h1{letter-spacing:-1px}.wrap{padding:28px 12px}.sectionTop h2{font-size:24px}.featureGrid{grid-template-columns:1fr}.chapterHead{padding:13px;gap:10px}.chapterTitle{font-size:15px}.chapterIntro{font-size:11px}.lesson{padding:14px}.navlinks a:nth-child(2){display:none}}
`;

export default function Home() {
 const [search,setSearch]=useState("");
 const [filter,setFilter]=useState("All");
 const [active,setActive]=useState<number|null>(1);
 const [tab,setTab]=useState("Concepts");
 const [revealed,setRevealed]=useState<Record<string,boolean>>({});
 const filtered=useMemo(()=>units.filter(u=>{
   const cls=filter==="All" || u.cls===filter || u.cls==="Both";
   const text=[u.title,u.intro,...u.concepts,...u.formulas,...(u.keywords || [])].join(" ").toLowerCase();
   return cls && text.includes(search.trim().toLowerCase());
 }),[search,filter]);
 const selected=units.find(u=>u.id===active);
 const tabs=["Concepts","Formula Bank","Solved Examples","Practice & Solutions","JEE Traps"];
 return <main className="site">
 <style>{css}</style>
 <header className="hero">
  <nav className="nav"><a href="/" className="brand" style={{textDecoration:"none"}}>EAJEE<span style={{color:"#fff"}}> PHYSICS</span></a>
   <div className="navlinks"><a href="#chapters">Chapters</a><a href="#method">Study Method</a><a href="/about">About</a><a href="/contact">Contact</a></div>
  </nav>
  <div className="heroInner">
   <div><div className="eyebrow">Independent JEE Physics Learning Library</div>
    <h1>Understand Physics.<br/>Solve with confidence.</h1>
    <p>Build concepts chapter by chapter with original explanations, formula conditions, worked examples, practice questions and common JEE traps. Designed for focused study on mobile and desktop.</p>
    <div className="heroActions"><a className="primary" href="#chapters">Explore all chapters ↓</a><a className="secondary" href="#method">How to study</a></div>
   </div>
   <aside className="heroCard"><h3>Your Physics workspace</h3><div className="metricGrid">
    <div className="metric"><b>20</b><span>Learning units</span></div><div className="metric"><b>11 + 12</b><span>Class coverage</span></div>
    <div className="metric"><b>5</b><span>Lesson sections</span></div><div className="metric"><b>Free</b><span>Open study resource</span></div>
   </div><p style={{fontSize:11,marginBottom:0}}>Use the chapter list to jump directly to a topic. Reveal each practice solution only after attempting it.</p></aside>
  </div>
 </header>
 <section className="wrap" id="chapters">
  <div className="sectionTop"><div><div className="eyebrow" style={{color:"#1681a7"}}>Structured study material</div><h2>Physics Chapters</h2><div className="muted" style={{fontSize:13}}>Choose a chapter, study the concepts, then test your understanding.</div></div><span className="pill">{filtered.length} units shown</span></div>
  <div className="toolbar"><input className="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search a chapter, concept or formula…" aria-label="Search chapters, concepts and formulas"/><div className="filters">{["All","Class 11","Class 12"].map(f=><button key={f} className={`filter ${filter===f?"active":""}`} onClick={()=>setFilter(f)}>{f}</button>)}</div></div>
  <div className="layout">
   <aside className="side"><h3>Jump to a chapter</h3><div className="sideNav">{filtered.map(u=><button className={`sideItem ${active===u.id?"selected":""}`} key={u.id} onClick={()=>{setActive(u.id);setTab("Concepts")}}><span>{String(u.id).padStart(2,"0")}</span><span>{u.title}</span></button>)}</div></aside>
   <div className="chapterList">
    {filtered.map(u=><article className="chapter" key={u.id}>
     <button className="chapterHead" onClick={()=>{setActive(active===u.id?null:u.id);setTab("Concepts")}} aria-expanded={active===u.id}>
      <span className="num">{String(u.id).padStart(2,"0")}</span><span className="chapterMain"><span className="classTag">{u.cls==="Both"?"Class 11 & 12":u.cls}</span><span className="chapterTitle" style={{display:"block"}}>{u.title}</span><span className="chapterIntro">{u.intro}</span></span><span className="toggle">{active===u.id?"−":"+"}</span>
     </button>
     {active===u.id&&<div className="lesson">
      <p className="lessonIntro">{u.intro}</p>
      <div className="tabs">{tabs.map(t=><button key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t}</button>)}</div>
      {tab==="Concepts"&&<div className="panel"><h4>Core theory and concepts</h4><ol>{u.concepts.map((p,i)=><li key={i}>{p}</li>)}</ol></div>}
      {tab==="Formula Bank"&&<div className="panel"><h4>Formula bank — check assumptions and units</h4>{u.formulas.map((f,i)=><div className="formula" key={i}>{f}</div>)}<p>Tip: write the physical meaning and SI unit of every symbol in your notebook. Check whether the formula assumes ideal conditions, small oscillations, a fixed axis or a particular sign convention.</p></div>}
      {tab==="Solved Examples"&&<div className="panel"><h4>Worked example with reasoning</h4>{u.examples.map((ex,i)=><div className="exampleBox" key={i}><b>{ex.title}</b><ol>{ex.steps.map((s,j)=><li key={j}>{s}</li>)}</ol><p><strong>Result:</strong> {ex.result}</p></div>)}</div>}
      {tab==="Practice & Solutions"&&<div className="panel"><h4>Attempt first, then reveal the worked answer</h4>{u.questions.map((q,i)=>{const k=`${u.id}-${i}`;return <div key={k} style={{padding:"12px 0",borderBottom:"1px solid #edf1f5"}}><p><strong>Q{i+1}.</strong> {q.q}</p><button className="answerButton" onClick={()=>setRevealed(v=>({...v,[k]:!v[k]}))}>{revealed[k]?"Hide solution":"Reveal solution"}</button>{revealed[k]&&<p className="answer"><strong>Solution:</strong> {q.answer}</p>}</div>})}</div>}
      {tab==="JEE Traps"&&<div className="panel"><h4>Common mistakes and conceptual traps</h4><ul>{u.traps.map((t,i)=><li key={i}>{t}</li>)}</ul><div className="callout"><strong>Exam habit:</strong> Before substituting numbers, write the governing principle, identify assumptions, choose axes or sign convention, and check dimensions in the final result.</div></div>}
     </div>}
    </article>)}
    {filtered.length===0&&<div className="empty">No chapter matches that search. Try a shorter keyword or choose “All”.</div>}
   </div>
  </div>
  <p className="disclaimer">Syllabus note: This is an independent learning resource. Exam syllabi and question patterns can change; always verify the latest official JEE Main and JEE Advanced notices. The examples and practice prompts here are original learning exercises, not official questions or predictions.</p>
 </section>
 <section className="wrap" id="method" style={{paddingTop:0}}>
  <div className="sectionTop"><div><div className="eyebrow" style={{color:"#1681a7"}}>A repeatable learning process</div><h2>Study actively, not passively.</h2><p className="muted" style={{fontSize:13,maxWidth:650}}>Use each chapter as a small learning cycle. Reading a formula is only the beginning; understanding its conditions and applying it is what builds problem-solving skill.</p></div></div>
  <div className="featureGrid">
   <div className="feature"><span>01 · Learn</span><b>Understand the model</b><p>Read the concept explanation and identify what is assumed, what is conserved and which quantities are vectors.</p></div>
   <div className="feature"><span>02 · Connect</span><b>Build a formula map</b><p>Record symbol meanings, SI units, limiting cases and the conditions under which each relation is valid.</p></div>
   <div className="feature"><span>03 · Apply</span><b>Solve before revealing</b><p>Attempt the practice prompt independently. Then compare your reasoning with the solution and correct your method.</p></div>
  </div>
  <div className="callout"><strong>Important:</strong> This website is an independent educational project and is not affiliated with or endorsed by NTA, IITs or any coaching institute. No exam result or admission outcome is guaranteed.</div>
 </section>
 <footer className="footer"><div style={{fontWeight:950,letterSpacing:2,color:"#8ce6fa"}}>EAJEE PHYSICS</div><p style={{fontSize:12}}>Original Physics learning material for JEE preparation.</p><div><a href="/about">About</a><a href="/contact">Contact</a><a href="/privacy-policy">Privacy Policy</a></div><small>© {new Date().getFullYear()} EAJEE Notes Library. All rights reserved.</small></footer>
 </main>;
}
