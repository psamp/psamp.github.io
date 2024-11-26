import Image from "next/image";

export default function Page() {
  return (
    <section>
      {/* <a target="_blank"> */}
      <Image
        src="/profile.jpeg"
        alt="Profile photo"
        className="rounded block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
        unoptimized
        width={260}
        height={260}
        priority
      />
      {/* </a> */}

      <div className="prose prose-neutral dark:prose-invert">
        <p>I am a PhD student at the University of Pennsylvania in the Computer &amp; Information Science department, advised by Prof. <a href="https://metaxa.net">Danaë Metaxa</a>. My work is supported by the <a href="http://nsfgrfp.org/">NSF Graduate Research Fellowship</a>.</p>

        <p>I am broadly interested in human-AI interaction, and in particular the interplay between the social structures and algorithmic infrastructure that shape daily life, work, and play at scale. In my research, I build human-centered and justice-oriented systems and study how marginalized people's experiences can inform platform governance.</p>

        <p>Before Penn, I earned a BS in Computer Science from Spelman College, and conducted research with Profs. <a href="http://www.munmund.net/">Munmun De Choudhury </a>and <a href="https://www.jayenias.com/">Jaye Nias</a>. My prior work in industry spans software engineering, data engineering, and HCI research at Amazon, Etsy, and Adobe Research.</p>
        <h3 className="mb-10 text-2xl font-medium">updates ✨</h3>
        <ul>
          <li><h4 className="text-sm">09·03·2024</h4>Excited to spend this fall as a Google Public Policy Fellow hosted by the Center for Democracy and Technology. 🥰</li>
          <li><h4 className="text-sm">04·04·2024</h4> Very grateful and honored to recieve a NSF Graduate Research Fellowship alongside two of my labmates!! 🪩🥳</li>
          <li><h4 className="text-sm">12·21·2023</h4> Read more about the PennHCI group&#39;s ongoing work in <a href="https://magazine.seas.upenn.edu/fall-2023/coming-together-to-transform-tech/">Penn Engineering Magazine&#39;s Fall 2023 edition</a>!</li>
          <li><h4 className="text-sm">09·27·2023</h4> Thank you to the Data Nutrition Project for inviting me to give a lightning talk at their 2023 Sociotechnical Auditing Workshop!</li>
          <li><h4 className="text-sm">06·14·2023</h4> I presented on the Queer Ads project at FAccT23; talk and paper available <a href="https://www.youtube.com/watch?v=EYbBUEZPaD4">here</a> and <a href="https://dl.acm.org/doi/10.1145/3593013.3594110">here</a>.</li>
          <li><h4 className="text-sm">04·06·2023</h4> Our paper &quot;Representation, Self-Determination, and Refusal: Queer People’s Experiences with Targeted Advertising&quot; was accepted to FAccT23! 🎉</li>
          <li><h4 className="text-sm">08·30·2022</h4> Started my PhD. Excited to be an inaugural student in the PennHCI group. 🧑🏽‍💻</li>
        </ul>

      </div>
    </section>
  );
}
