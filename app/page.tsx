import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Image
        src="/profile.jpeg"
        alt="Profile photo"
        className="rounded block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
        unoptimized
        width={260}
        height={260}
        priority
      />
      <div className="prose prose-neutral dark:prose-invert">
        <p>I am a PhD student in the Computer and Information Science department at the University of Pennsylvania, advised by Prof. <a href="https://metaxa.net">Danaé Metaxa</a>.</p>
        <p>At the intersection of <b>human-computer interaction + critical social theory</b>, I explore how power imbalances shape and are shaped by the <b>sociotechnical systems</b> that mediate daily life and work at scale.</p>
        <p>My research develops human-centered, justice-oriented methods and tools to advance the <b>evaluation + auditing</b> of these systems. I also study <b>reshaping platform design + governance</b> to center marginalized users' experiences, toward systems that are <b>more just and more robust for all</b>.</p>

        <p>Before Penn, I earned a BS in Computer Science from Spelman College. My work is supported by the NSF Graduate Research Fellowship.</p>

        <p><small>reach out to discuss: human-AI interaction · algorithmic justice · algorithm auditing · LLM simulation · LLM evaluation · platform governance · AI accountability </small></p>

        <h2 className="mb-10 text-2xl font-medium">updates ✨</h2>
        <ul>
          <li><b className="text-sm">04·2026</b> Sharing our work on LLM simulation of marginalized groups at the CHI'26 Workshop on Developing Standards and Documentation For LLMs as Simulated Research Participants.</li>
          <li><b className="text-sm">12·2025</b> Thank you to all tech is human for featuring the CDT AI personalization brief in their 2025 Responsible AI Impact Report!</li>
          <li><b className="text-sm">06·2025</b> Attending alt-FAccT in NYC.</li>
          <li><b className="text-sm">05·2025</b> Excited to spend this summer as an AI Research Intern @ ACLU National.</li>
          <li><b className="text-sm">05·2025</b> Check out the brief on <a href="https://cdt.org/insights/its-getting-personal-how-advanced-ai-systems-are-personalized/">personalization and AI</a> I co-authored while at CDT!</li>
          <li><b className="text-sm">12·2024</b> Thank you to the Center for Technological Responsibility, Reimagination, and Redesign (CNTR) at Brown for inviting me to speak about my work. ❣️🐻</li>
          <li><b className="text-sm">09·2024</b> Excited to spend this fall as a Google Public Policy Fellow hosted by the Center for Democracy and Technology's AI Governance Lab. 🥰</li>
          <li><b className="text-sm">04·2024</b> Very grateful and honored to recieve a NSF Graduate Research Fellowship alongside two of my labmates!! 🪩🥳</li>
          <li><b className="text-sm">12·2023</b> Read more about the PennHCI group's research in <a href="https://magazine.seas.upenn.edu/fall-2023/coming-together-to-transform-tech/">Penn Engineering Magazine&#39;s Fall 2023 edition</a>!</li>
          <li><b className="text-sm">09·2023</b> Thank you to the Data Nutrition Project for inviting me to give a lightning talk at their 2023 Sociotechnical Auditing Workshop!</li>
          <li><b className="text-sm">06·2023</b> I presented on the Queer Ads project at FAccT23; paper available <a href="https://dl.acm.org/doi/10.1145/3593013.3594110">here</a>.</li>
          <li><b className="text-sm">04·2023</b> Our paper &quot;Representation, Self-Determination, and Refusal: Queer People’s Experiences with Targeted Advertising&quot; was accepted to FAccT23! 🎉</li>
          <li><b className="text-sm">08·2022</b> Started my PhD. Excited to be an inaugural student in the PennHCI group. 🧑🏽‍💻</li>
        </ul>
      </div>
    </section>
  );
}
