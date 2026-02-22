interface Project {
  name: string;
  link: string;
  desc: string;
  tech: string;
  skills: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Safelora",
    link: "https://www.github.com/chamathan/safelora",
    desc: "A realtime multimodal multiagent adivisory system for plant disease management",
    tech: "Python, Tensorflow, Flask, Langchain, Langgraph, React, TailwindCSS, Socket.IO, Unsloth",
    skills:
      "LLM Finetuning(PEFT LoRA), RAG, multiagent systems, CNN (MobileNetV2), web development",
  },
  {
    name: "File-Share",
    link: "https://github.com/chamathAn/File-Share",
    desc: "A simple file sharing server on local network",
    tech: "ElysiaJS, TialwindCSS",
    skills: "Web development, Network handling, Server-static file handling",
  },
  {
    name: "Nova Web App",
    link: "https://github.com/lasanseniya/nova-web-app/",
    desc: "A study-note generator automatically create structured study notes with summaries and cue questions for youtube videos.",
    tech: "React, TailwindCSS, ExpressJS, OpenAI API, MongoDB, NodeJS",
    skills:
      "Web development, OpenAI Wrapper, Prompt engineering, REST API development",
  },
];

export async function getMediumPosts() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chamathanjula2",
  );
  const data = await res.json();

  return data.items.map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    thumbnail: item.thumbnail,
    description: item.description.replace(/<[^>]+>/g, "").slice(0, 120) + "...",
  }));
}
export const EXPERIENCE = [
  {
    role: "Full-stack Developer",
    company: "Cloud99X",
    duration: "Jul 2024 – Jul 2025",
  },
  {
    role: "Software Engineer Intern",
    company: "thinkCube Systems (Pvt) Ltd",
    duration: "May 2023 – Oct 2023",
  },
];

export const EDUCATION = [
  {
    place: "University of Westminster, BEng (Hons) S",
    duration: "2022 – 2026",
  },
  {
    place: "Mahinda Rajapaksha College, Homagama",
    duration: "May 2011 – Dec 2019",
  },
];

export const CERTIFICATIONS = [
  {
    title:
      "Safelora: A Real-Time Multimodal Multi-Agent Advisory System for Context-Aware and Safety-Compliant Plant Diseases Management",
    issuer: "ICARC 2026 Research Paper",
    date: "2026",
    link: "",
  },
  {
    title:
      "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "Oct 2025",
    link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Frecords%2FIM5YR12JJ52Q&urlhash=r8tl&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Byec%2F05QwRmmpWRSM88LfuQ%3D%3D",
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI, Amazon Web Services",
    date: "Oct 2025",
    link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Frecords%2FKSXPZJAN17SR&urlhash=67-r&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Byec%2F05QwRmmpWRSM88LfuQ%3D%3D",
  },
];
