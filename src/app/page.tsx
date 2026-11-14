
"use client";

import { useMemo, useState } from "react";
import {
  Search,
  BookOpen,
  Download,
  GraduationCap,
  FileText,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";

const subjects = ["All", "OC", "Physics", "Chemistry", "Maths"];

const notes = [
  {
    title: "EAJEE Organic Chemistry Notes",
    teacher: "RA Sir",
    subject: "OC",
    description: "Chapter-wise Organic Chemistry study material.",
    status: "Coming Soon",
  },
  {
    title: "EAJEE Physics Notes",
    teacher: "PW Faculty",
    subject: "Physics",
    description: "Physics notes and chapter-wise study resources.",
    status: "Coming Soon",
  },
  {
    title: "EAJEE Chemistry Notes",
    teacher: "PW Faculty",
    subject: "Chemistry",
    description: "Chemistry study material and revision notes.",
    status: "Coming Soon",
  },
  {
    title: "EAJEE Mathematics Notes",
    teacher: "PW Faculty",
    subject: "Maths",
    description: "Mathematics notes and important concepts.",
    status: "Coming Soon",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const matchesSubject =
        subject === "All" || note.subject === subject;

      const text =
        `${note.title} ${note.teacher} ${note.subject}`.toLowerCase();

      return matchesSubject && text.includes(search.toLowerCase());
    });
  }, [search, subject]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white">
              <BookOpen size={23} />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight">
                EAJEE <span className="text-blue-700">NOTES</span>
              </h1>
              <p className="text-[10px] font-semibold tracking-widest text-slate-500">
                NOTES LIBRARY
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#notes" className="hover:text-blue-700">Notes</a>
            <a href="#teachers" className="hover:text-blue-700">Teachers</a>
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
          <nav className="grid gap-4 border-t bg-white px-5 py-5 text-sm font-semibold md:hidden">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#notes" onClick={() => setMenuOpen(false)}>Notes</a>
            <a href="#teachers" onClick={() => setMenuOpen(false)}>Teachers</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </nav>
        )}
      </header>

      <section id="home" className="overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-bold text-blue-200">
              <Sparkles size={15} />
              EAJEE NOTES COLLECTION
            </div>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Your Notes.
              <span className="block text-blue-400">Your Preparation.</span>
              Your Success.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-300">
              Explore EAJEE study resources in one organized library.
              Find notes by teacher, subject and chapter.
            </p>

            <a
              href="#notes"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-500"
            >
              Explore Notes <ArrowRight size={18} />
            </a>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-blue-400" />
                Organized Library
              </span>
              <span className="flex items-center gap-2">
                <FileText size={17} className="text-blue-400" />
                PDF Resources
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl md:p-8">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 p-7">
              <GraduationCap size={48} />
              <p className="mt-8 text-sm font-bold text-blue-100">
                EAJEE NOTES LIBRARY
              </p>
              <h3 className="mt-2 text-3xl font-black">
                Learn Smart.
                <br />
                Prepare Better.
              </h3>
              <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-5">
                <span className="text-sm text-blue-100">
                  Study Resources
                </span>
                <BookOpen size={25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-7 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Advertisement
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Ad space — Google AdSense integration after approval
          </p>
        </div>
      </section>

      <section id="notes" className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Explore Library
          </p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            Find Your Notes
          </h2>
          <p className="mt-3 text-slate-500">
            Search and filter the available EAJEE resources.
          </p>
        </div>

        <div className="relative mb-6">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search notes, teacher or subject..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {subjects.map((item) => (
            <button
              key={item}
              onClick={() => setSubject(item)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                subject === item
                  ? "bg-blue-700 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredNotes.map((note) => (
            <article
              key={note.title}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <FileText size={25} />
                </div>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                  {note.status}
                </span>
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-blue-700">
                {note.subject}
              </p>

              <h3 className="mt-2 text-xl font-extrabold">
                {note.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {note.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-sm font-semibold text-slate-600">
                  {note.teacher}
                </span>
                <button
                  disabled
                  className="flex cursor-not-allowed items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-400"
                >
                  <Download size={15} />
                  Coming Soon
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <Search className="mx-auto text-slate-400" size={32} />
            <h3 className="mt-3 font-bold">No notes found</h3>
            <p className="mt-1 text-sm text-slate-500">
              Try another search or subject.
            </p>
          </div>
        )}
      </section>

      <section id="teachers" className="bg-blue-50 px-5 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Teacher Collection
          </p>
          <h2 className="mt-2 text-3xl font-black">
            Learn From Your Teachers
          </h2>
          <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <GraduationCap size={30} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold">RA Sir</h3>
                <p className="text-sm text-slate-500">
                  EAJEE OC Notes Collection
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Authorized study resources will be added here.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              About Us
            </p>
            <h2 className="mt-2 text-3xl font-black">
              A Simple Home for EAJEE Notes
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              EAJEE Notes Library is designed to organize authorized
              educational resources in one easy-to-use place.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <Clock className="text-blue-400" size={30} />
            <h3 className="mt-4 text-xl font-bold">
              More Resources Coming Soon
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              The library will grow as authorized notes and PDF resources
              become available.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
        <p className="font-bold text-white">EAJEE NOTES LIBRARY</p>
        <p className="mt-2">
          Independent educational resource library.
        </p>
        <p className="mt-4">
          © {new Date().getFullYear()} EAJEE Notes Library
        </p>
      </footer>
    </main>
  );
}
