import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-2">
        {/* Left section */}
        <div className="p-6 md:p-12 md:overflow-y-auto">
          <header className="mb-8">
            <h1 className="text-4xl text-primary font-manrope md:text-5xl font-extrabold">
              Dennis Terna
            </h1>
            <p className="text-lg font-semibold text-primary font-manrope">
              Front End Engineer
            </p>
            <p className="mt-2 text-primary font-manrope">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
          </header>
          <nav className="flex flex-col gap-4 mt-12">
            <a
              href="#about"
              className="text-primary  hover:text-white font-manrope"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-primary  hover:text-white font-manrope"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-primary  hover:text-white font-manrope"
            >
              Projects
            </a>
          </nav>

          <Footer />

          <div className="md:hidden mt-12 space-y-16">
            <section id="about">
              <h2 className="uppercase font-manrope text-primary tracking-wide text-sm font-semibold mb-4">
                About
              </h2>
              <p className="text-primary font-manrope leading-relaxed">
                I’m a developer passionate about crafting accessible,
                pixel-perfect user interfaces...
              </p>
            </section>

            <section id="experience">
              <h2 className="uppercase font-manrope text-primary tracking-wide text-sm font-semibold mb-4">
                Experience
              </h2>
              <p className="text-primary font-manrope leading-relaxed">
                Experience details...
              </p>
            </section>

            <section id="projects">
              <h2 className="uppercase font-manrope text-primary tracking-wide text-sm font-semibold mb-4">
                Projects
              </h2>
              <p className="text-primary font-manrope leading-relaxed">
                Project details...
              </p>
            </section>
          </div>
        </div>

        <div className="p-12 sticky top-0 h-screen overflow-y-scroll">
          <main className="prose prose-invert max-w-none space-y-16">
            <section id="about">
              <h2 className="uppercase tracking-wide text-sm font-semibold text-primary">
                &mdash; About
              </h2>
              {/* <p className="text-primary font-manrope">
                I’m a developer passionate about crafting accessible,
                pixel-perfect user interfaces...
              </p> */}
              <p className="text-primary font-manrope">
                I’m a passionate Front-End Engineer with a strong focus on
                crafting clean, responsive, and user-friendly interfaces. With a
                solid foundation in HTML, CSS, JavaScript, and modern frameworks
                like React and Nextjs, I specialize in translating complex UI/UX
                designs into smooth, performant web experiences.
              </p>
              <p className="text-primary font-manrope mt-3">
                Over the years, I’ve collaborated with cross-functional teams to
                build scalable web applications that prioritize both design
                fidelity and accessibility. I’m constantly learning, refining my
                skills, and keeping up with evolving front-end trends—whether
                that means exploring new CSS features, mastering animation
                libraries, or contributing to design systems.
              </p>
              <p className="text-primary font-manrope mt-3">
                When I’m not coding, you’ll likely find me sketching UI ideas,
                reading about design psychology, or optimizing code just for the
                fun of it. I love building with intention and believe great
                digital experiences start with thoughtful, user-centered code.
              </p>
            </section>
            <section id="experience">
              <h2 className="uppercase tracking-wide text-sm font-semibold text-primary">
                &mdash; Experience
              </h2>
              <p className="text-primary">Experience details...</p>
            </section>
            <section id="projects">
              <h2 className="uppercase text-primary tracking-wide text-sm font-semibold">
                &mdash; Projects
              </h2>
              <p className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati eum tenetur, magni accusamus repellendus adipisci?
                Quis voluptate beatae aliquid quasi laboriosam incidunt soluta
                cumque dolor praesentium accusantium earum animi inventore harum
                rerum error eius ipsam hic tempore nulla explicabo corporis,
                doloribus minima cum? Obcaecati incidunt accusamus eius
                exercitationem sunt deserunt voluptatum perferendis possimus
                blanditiis modi quos sed, totam a voluptatibus laudantium iusto?
                Laudantium, laborum aspernatur dolorum totam ducimus nam
                assumenda, rerum qui magnam velit quam, quia molestiae harum
                eligendi quidem ad illo. Libero fugit ipsam placeat amet unde
                quae nostrum pariatur soluta maiores? Deleniti dolores amet
                laboriosam unde libero?
              </p>
              <p className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati eum tenetur, magni accusamus repellendus adipisci?
                Quis voluptate beatae aliquid quasi laboriosam incidunt soluta
                cumque dolor praesentium accusantium earum animi inventore harum
                rerum error eius ipsam hic tempore nulla explicabo corporis,
                doloribus minima cum? Obcaecati incidunt accusamus eius
                exercitationem sunt deserunt voluptatum perferendis possimus
                blanditiis modi quos sed, totam a voluptatibus laudantium iusto?
                Laudantium, laborum aspernatur dolorum totam ducimus nam
                assumenda, rerum qui magnam velit quam, quia molestiae harum
                eligendi quidem ad illo. Libero fugit ipsam placeat amet unde
                quae nostrum pariatur soluta maiores? Deleniti dolores amet
                laboriosam unde libero?
              </p>
              <p className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati eum tenetur, magni accusamus repellendus adipisci?
                Quis voluptate beatae aliquid quasi laboriosam incidunt soluta
                cumque dolor praesentium accusantium earum animi inventore harum
                rerum error eius ipsam hic tempore nulla explicabo corporis,
                doloribus minima cum? Obcaecati incidunt accusamus eius
                exercitationem sunt deserunt voluptatum perferendis possimus
                blanditiis modi quos sed, totam a voluptatibus laudantium iusto?
                Laudantium, laborum aspernatur dolorum totam ducimus nam
                assumenda, rerum qui magnam velit quam, quia molestiae harum
                eligendi quidem ad illo. Libero fugit ipsam placeat amet unde
                quae nostrum pariatur soluta maiores? Deleniti dolores amet
                laboriosam unde libero?
              </p>
              <p className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati eum tenetur, magni accusamus repellendus adipisci?
                Quis voluptate beatae aliquid quasi laboriosam incidunt soluta
                cumque dolor praesentium accusantium earum animi inventore harum
                rerum error eius ipsam hic tempore nulla explicabo corporis,
                doloribus minima cum? Obcaecati incidunt accusamus eius
                exercitationem sunt deserunt voluptatum perferendis possimus
                blanditiis modi quos sed, totam a voluptatibus laudantium iusto?
                Laudantium, laborum aspernatur dolorum totam ducimus nam
                assumenda, rerum qui magnam velit quam, quia molestiae harum
                eligendi quidem ad illo. Libero fugit ipsam placeat amet unde
                quae nostrum pariatur soluta maiores? Deleniti dolores amet
                laboriosam unde libero?
              </p>
              <p className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati eum tenetur, magni accusamus repellendus adipisci?
                Quis voluptate beatae aliquid quasi laboriosam incidunt soluta
                cumque dolor praesentium accusantium earum animi inventore harum
                rerum error eius ipsam hic tempore nulla explicabo corporis,
                doloribus minima cum? Obcaecati incidunt accusamus eius
                exercitationem sunt deserunt voluptatum perferendis possimus
                blanditiis modi quos sed, totam a voluptatibus laudantium iusto?
                Laudantium, laborum aspernatur dolorum totam ducimus nam
                assumenda, rerum qui magnam velit quam, quia molestiae harum
                eligendi quidem ad illo. Libero fugit ipsam placeat amet unde
                quae nostrum pariatur soluta maiores? Deleniti dolores amet
                laboriosam unde libero?
              </p>
              <p className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati eum tenetur, magni accusamus repellendus adipisci?
                Quis voluptate beatae aliquid quasi laboriosam incidunt soluta
                cumque dolor praesentium accusantium earum animi inventore harum
                rerum error eius ipsam hic tempore nulla explicabo corporis,
                doloribus minima cum? Obcaecati incidunt accusamus eius
                exercitationem sunt deserunt voluptatum perferendis possimus
                blanditiis modi quos sed, totam a voluptatibus laudantium iusto?
                Laudantium, laborum aspernatur dolorum totam ducimus nam
                assumenda, rerum qui magnam velit quam, quia molestiae harum
                eligendi quidem ad illo. Libero fugit ipsam placeat amet unde
                quae nostrum pariatur soluta maiores? Deleniti dolores amet
                laboriosam unde libero?
              </p>
              <p className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati eum tenetur, magni accusamus repellendus adipisci?
                Quis voluptate beatae aliquid quasi laboriosam incidunt soluta
                cumque dolor praesentium accusantium earum animi inventore harum
                rerum error eius ipsam hic tempore nulla explicabo corporis,
                doloribus minima cum? Obcaecati incidunt accusamus eius
                exercitationem sunt deserunt voluptatum perferendis possimus
                blanditiis modi quos sed, totam a voluptatibus laudantium iusto?
                Laudantium, laborum aspernatur dolorum totam ducimus nam
                assumenda, rerum qui magnam velit quam, quia molestiae harum
                eligendi quidem ad illo. Libero fugit ipsam placeat amet unde
                quae nostrum pariatur soluta maiores? Deleniti dolores amet
                laboriosam unde libero?
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
