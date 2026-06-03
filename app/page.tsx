"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const heroStack = [
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Docker",
];

const techStack = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript"],
  Backend: ["Node.js", "NestJS"],
  Database: ["PostgreSQL"],
  DevOps: ["Docker"],
  Additional: ["Python"],
};

const projects = [
  {
    title: "Gaming & Interactive Rewards Platform",
    description:
      "A collection of browser-based promotional games including a casino wheel, digital scratch card, mystery reward box and Irish bingo game. Developed with a strong focus on user engagement, gamification and responsive design.",
    stack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Canvas API",
      "Game Logic",
      "Responsive Design",
    ],
    image: "/casino-project.png",
    liveUrl: "https://rafa90hernandez.github.io/rhdev-gaming-showcase/",
    githubUrl: "https://github.com/rafa90hernandez",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <section className="relative min-h-screen px-6 py-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(57,255,20,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(0,200,83,0.10),transparent_32%)]" />

        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto flex max-w-7xl items-center justify-between"
        >
          <a href="#" className="flex items-center">
            <Image
              src="/logo-rhdev.png"
              alt="RHDEV Logo"
              width={130}
              height={130}
              priority
              className="h-auto w-auto max-h-[150px]"
            />
          </a>

          <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#about" className="transition hover:text-[#39FF14]">
              About
            </a>
            <a href="#education" className="transition hover:text-[#39FF14]">
              Education
            </a>
            <a href="#experience" className="transition hover:text-[#39FF14]">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-[#39FF14]">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-[#39FF14]">
              Contact
            </a>
          </div>
        </motion.nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 pt-16 lg:grid-cols-2 lg:pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 font-mono text-sm font-semibold text-[#39FF14]">
              &lt; FULLSTACK DEVELOPER /&gt;
            </p>

            <h1 className="max-w-4xl text-6xl font-black tracking-tight md:text-8xl">
              Rafael Hernandez
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-300">
              Building modern digital products with React, Next.js, NestJS and
              PostgreSQL.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {heroStack.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.08 }}
                  className="rounded-full border border-[#39FF14]/30 bg-[#39FF14]/10 px-4 py-2 text-sm font-medium text-[#39FF14]"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-[#39FF14] px-8 py-4 text-center font-bold text-[#050816] transition hover:scale-105"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#39FF14]/50 px-8 py-4 text-center font-bold text-[#39FF14] transition hover:bg-[#39FF14]/10"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="rounded-3xl border border-[#39FF14]/20 bg-white/5 p-8 shadow-[0_0_80px_rgba(57,255,20,0.12)] backdrop-blur"
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-[#39FF14]" />
            </div>

            <pre className="overflow-x-auto font-mono text-sm leading-7 text-zinc-300">
              {`const developer = {
  name: "Rafael Hernandez",
  brand: "RHDEV",
  role: "Fullstack Developer",
  location: "Ireland",
  frontend: ["React", "Next.js"],
  backend: ["Node.js", "NestJS"],
  database: ["PostgreSQL"],
  devops: ["Docker"],
  focus: "Scalable web applications"
};`}
            </pre>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-20"
      >
        <h2 className="text-3xl font-black md:text-4xl">About Me</h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-300">
          I am a Fullstack Developer with a background in business management
          and entrepreneurship, focused on building scalable, modern and
          high-performance web applications using technologies such as React,
          Next.js, Node.js, NestJS, PostgreSQL and Docker.
        </p>
      </motion.section>

      <motion.section
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-20"
      >
        <h2 className="text-3xl font-black md:text-4xl">Education</h2>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-bold text-[#39FF14]">
            Analysis and Systems Development
          </h3>

          <p className="mt-3 text-zinc-300">
            Pontifical Catholic University of Rio Grande do Sul - PUCRS
          </p>

          <p className="mt-2 text-zinc-400">Graduation: December 2025</p>
        </div>
      </motion.section>

      <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-20"
      >
        <h2 className="text-3xl font-black md:text-4xl">
          Professional Experience
        </h2>

        <div className="mt-12 border-l-2 border-[#39FF14]/30">
          <div className="relative mb-12 pl-8">
            <div className="absolute left-0 top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-[#39FF14]" />

            <p className="text-sm font-semibold text-[#39FF14]">
              2008 – 2025
            </p>

            <h3 className="mt-2 text-2xl font-bold">Business Owner</h3>

            <p className="font-medium text-zinc-300">
              Hernandez Fruit Trading
            </p>

            <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
              17+ years of experience managing business operations, logistics,
              customer relationships, financial planning and business growth for
              a family-owned fruit trading company. Developed strong leadership,
              communication, decision-making and problem-solving skills through
              real-world entrepreneurial experience.
            </p>
          </div>

          <div className="relative mb-12 pl-8">
            <div className="absolute left-0 top-2 h-6 w-6 -translate-x-1/2 rounded-full bg-[#39FF14] shadow-[0_0_30px_rgba(57,255,20,1)]" />

            <p className="text-sm font-semibold text-[#39FF14]">
              2024 – Present
            </p>

            <h3 className="mt-2 text-3xl font-black text-white">
              Fullstack Developer
            </h3>

            <p className="text-lg font-semibold text-[#39FF14]">
              Personal & Independent Projects
            </p>

            <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
              Developing modern web applications and digital products using
              React, Next.js, Node.js, NestJS, PostgreSQL and Docker. Focused on
              scalable architectures, responsive interfaces and high-performance
              user experiences.
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-[#39FF14]" />

            <p className="text-sm font-semibold text-[#39FF14]">
              Global Experience
            </p>

            <h3 className="mt-2 text-2xl font-bold">Brazil • Ireland</h3>

            <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
              International experience gained through education, cultural
              immersion and professional development. This journey has
              strengthened my adaptability, communication skills and ability to
              thrive in multicultural environments.
            </p>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-20">
        <h2 className="text-3xl font-black md:text-4xl">Tech Stack</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techStack).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#39FF14]/40"
            >
              <h3 className="mb-4 text-xl font-bold text-[#39FF14]">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#39FF14]/30 px-4 py-2 text-sm text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-20"
      >
        <h2 className="text-3xl font-black md:text-4xl">Projects</h2>

        <div className="mt-8 grid gap-8">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-3xl border border-[#39FF14]/20 bg-white/5 p-6 transition hover:border-[#39FF14]/50 md:p-8"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={700}
                  className="w-full transition duration-500 hover:scale-105"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#39FF14]">
                {project.title}
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#39FF14]/10 px-4 py-2 text-sm text-[#39FF14]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#39FF14] px-6 py-3 text-center font-bold text-[#050816]"
                >
                  Live Demo
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 text-center font-bold text-white hover:border-[#39FF14] hover:text-[#39FF14]"
                >
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-[#39FF14]/20 bg-[#39FF14]/5 p-8 text-center md:p-12"
        >
          <p className="font-mono text-sm text-[#39FF14]">
            &lt; CONTACT /&gt;
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Let&apos;s Build Something Great Together
          </h2>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:rafaelhernandez.199025@gmail.com"
              className="rounded-full bg-[#39FF14] px-8 py-4 font-bold text-[#050816]"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/rafaelhernandez-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-4 font-bold text-white hover:border-[#39FF14] hover:text-[#39FF14]"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/rafa90hernandez"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-4 font-bold text-white hover:border-[#39FF14] hover:text-[#39FF14]"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}