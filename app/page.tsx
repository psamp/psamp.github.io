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

        <p>I am a PhD student in the Computer and Information Science department at the University of Pennsylvania, advised by Prof. <a href="https://metaxa.net">Danaé Metaxa</a>. Working at the intersection of human-computer interaction and critical social theory, I am interested in how power and inequality shape and are shaped by sociotechnical systems that mediate daily life, work, and play at scale. My research develops human-centered, justice-oriented methods and tools to advance the evaluation and auditing of these systems, and studies how marginalized people's experiences can inform platform governance.</p>

        <p>My work on human-AI interaction in the Penn Human-Computer Interaction Group is supported by the National Science Foundation's Graduate Research Fellowship.</p>

        <h3 className="mb-10 text-2xl font-medium">updates ✨</h3>
        <ul>
          <li><h4 className="text-sm">04·2026</h4>Presenting our work on LLM simulation of marginalized groups at the CHI'26 Workshop on Developing Standards and Documentation For LLMs as Simulated Researcher Participants.</li>
          <li><h4 className="text-sm">12·2025</h4>Thank you to all tech is human for featuring the CDT AI personalization brief in their 2025 Responsible AI Impact Report!</li>
          <li><h4 className="text-sm">06·2025</h4>Attending alt-FAccT in NYC.</li>
          <li><h4 className="text-sm">05·2025</h4>Excited to spend this summer as an AI Research Intern @ ACLU National.</li>
          <li><h4 className="text-sm">05·2025</h4>Check out the brief on <a href="https://cdt.org/insights/its-getting-personal-how-advanced-ai-systems-are-personalized/">personalization and AI</a> I co-authored while at CDT!</li>
          <li><h4 className="text-sm">12·2024</h4> Thank you to the Center for Technological Responsibility, Reimagination, and Redesign (CNTR) at Brown for inviting me to speak about my work. ❣️🐻</li>
          <li><h4 className="text-sm">09·2024</h4> Excited to spend this fall as a Google Public Policy Fellow hosted by the Center for Democracy and Technology's AI Governance Lab. 🥰</li>
          <li><h4 className="text-sm">04·2024</h4> Very grateful and honored to recieve a NSF Graduate Research Fellowship alongside two of my labmates!! 🪩🥳</li>
          <li><h4 className="text-sm">12·2023</h4> Read more about the PennHCI group's research in <a href="https://magazine.seas.upenn.edu/fall-2023/coming-together-to-transform-tech/">Penn Engineering Magazine&#39;s Fall 2023 edition</a>!</li>
          <li><h4 className="text-sm">09·2023</h4> Thank you to the Data Nutrition Project for inviting me to give a lightning talk at their 2023 Sociotechnical Auditing Workshop!</li>
          <li><h4 className="text-sm">06·2023</h4> I presented on the Queer Ads project at FAccT23; paper available <a href="https://dl.acm.org/doi/10.1145/3593013.3594110">here</a>.</li>
          <li><h4 className="text-sm">04·2023</h4> Our paper &quot;Representation, Self-Determination, and Refusal: Queer People’s Experiences with Targeted Advertising&quot; was accepted to FAccT23! 🎉</li>
          <li><h4 className="text-sm">08·2022</h4> Started my PhD. Excited to be an inaugural student in the PennHCI group. 🧑🏽‍💻</li>
        </ul>

      </div>
    </section>
  );
}
