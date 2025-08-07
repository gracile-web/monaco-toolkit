# Gracile — Monaco Toolkit

A collection of tools and settings to easily bootstrap a Monaco Editor setup,
for live playgrounds, REPL, etc. with a focus on **JSX** and HTML/CSS/SVG/MD…
**Tagged Template Literals**.

**Features**:

- TextMate grammars (via Shiki Monaco)
- Prettier worker (via monaco-pretiier)
- Emmet (via emmet-monaco-es)
- Pre-populated Vite static files import maps
- Helpers for importing deps
- Additional keybindings
- JSX syntax support
- HTML/CSS/SVG/MD (Lit, etc.) template literal syntax highlighting
- Sensible TS settings
- Other syntax highlighting bonuses
- A Custom TS Worker superclass definition, to copy over in a project (those who
  know…)

---

It's not for everyone, **Monaco Toolkit** is pretty opinionated, often hacky,
and tailor-made for tricky setups.  
However, if you use Gracile, Lit, or even just JSX, it provides some perks
without fussing too much, if you need to do similar playgrounds.

---

The TM grammars <=> Shiki <=> Monaco part, while easier than in past, is hand
customized to match the Desktop Environment rendering as close as possible, with
remaining bugs.

---

At this time of writing, here is the list of projects using this toolkit for
their playground:

- [Web Elements Analyzer](https://github.com/JulianCataldo/web-elements-analyzer)
  — A cross-framework template analyzer, for deep insights on standard HTML, SVG
  and Custom Elements.
