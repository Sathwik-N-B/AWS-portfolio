// All site text lives here. Edit this file to change the content; no layout code needs to change.

export const profile = {
  name: 'Sathwik Nellikoppa Basavaraja',
  shortName: 'Sathwik',
  tagline: 'Software Engineer building scalable Python services and agentic AI on AWS',
  location: 'Greenville, SC',
  email: 'sathwiknb1998@gmail.com',
  github: 'https://github.com/Sathwik-N-B',
  linkedin: 'https://www.linkedin.com/in/sathwiknb',
}

export const about = {
  paragraphs: [
    "I'm a software engineer with 3+ years of experience building scalable Python microservices on AWS. I like turning slow, tangled backends into fast, reliable systems, and I'm just as happy prototyping a new AI idea over a weekend.",
    'Lately I focus on RAG and agentic AI: retrieval pipelines, tool-using agents and the production plumbing that makes them dependable. I hold an M.S. in Computer Science from Binghamton University and am an AWS Certified AI Practitioner.',
    "Right now I'm a research intern at Binghamton University, applying PyTorch-based machine learning to quantum computing problems with Qiskit.",
  ],
  facts: [
    { label: 'Based in', value: 'Greenville, SC' },
    { label: 'Education', value: 'M.S. Computer Science, Binghamton University' },
    { label: 'Experience', value: '3+ years in backend and cloud engineering' },
    { label: 'Certifications', value: 'AWS Certified AI Practitioner · Azure AI Apps and Agents Developer Associate' },
  ],
}

export const skills = [
  { group: 'GenAI & Agentic', items: ['RAG', 'GraphRAG', 'Agentic Architectures', 'MCP', 'OpenAI API', 'FAISS', 'BM25', 'Prompt Engineering'] },
  { group: 'Cloud & DevOps', items: ['AWS (EC2, S3, DynamoDB, Amplify)', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'] },
  { group: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Shell Scripting', 'Java'] },
  { group: 'Backend', items: ['FastAPI', 'Django', 'Flask', 'SQLAlchemy', 'REST APIs', 'Microservices', 'PyTest'] },
  { group: 'Data & Frontend', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Power BI', 'Grafana', 'React', 'Next.js', 'HTML5', 'CSS3'] },
  { group: 'Dev Tools', items: ['Git', 'Postman', 'OpenAPI', 'GitHub Copilot', 'AI-assisted coding workflows'] },
]

export const projects = [
  {
    title: 'Fridge Chef',
    subtitle: 'Recipe agent on Amazon Bedrock',
    description:
      'An agent that looks at a photo of your fridge and suggests what to cook. It calls a Bedrock vision tool (Nova Lite) to identify ingredients, then plans recipes from the result. Built with Strands Agents; Amazon Rekognition was tested too, but a vision LLM identified the items on the shelves far better.',
    tags: ['Python', 'Strands Agents', 'Amazon Bedrock', 'Amazon Rekognition'],
    link: 'https://github.com/Sathwik-N-B/fridge-chef',
  },
  {
    title: 'AI Knowledge Assistant',
    subtitle: 'RAG / Agentic proof of concept',
    description:
      'A local-first, privacy-preserving RAG app. It combines hybrid BM25 + FAISS retrieval, HyDE query expansion and cross-encoder reranking, adds GraphRAG for single-hop reasoning, and supports local (Ollama) or cloud-hosted LLMs. Containerized with Docker.',
    tags: ['Python', 'Streamlit', 'FAISS', 'BM25', 'GraphRAG', 'Ollama', 'Docker'],
    link: '',
  },
  {
    title: 'Enterprise Knowledge Agent',
    subtitle: 'Knowledge-grounded AI agent',
    description:
      'An AI agent built on Microsoft Foundry and Foundry IQ that retrieves relevant information from connected knowledge sources, with MCP integrated for dynamic discovery and invocation of external tools.',
    tags: ['Microsoft Foundry', 'MCP', 'Python', 'RAG', 'Azure AI Search'],
    link: '',
  },
  {
    title: 'ConfDiff: Multiple Random Pairings',
    subtitle: 'Machine learning course project (team of two)',
    description:
      'Extended the ConfDiffABS method to use multiple random pairings per sample (a configurable k_pairs setting), then evaluated it in PyTorch on MNIST and UCI datasets. Co-implemented with a teammate and co-authored the project report.',
    tags: ['Python', 'PyTorch', 'NumPy', 'Machine Learning'],
    link: 'https://github.com/Sathwik-N-B/Project-ConfDiff-kpair',
  },
  {
    title: 'Resume Parser',
    subtitle: 'Built on the open-source OpenResume',
    description:
      'A TypeScript and Next.js resume parser that reads a PDF resume and shows how an ATS would read it, running entirely in the browser so no data leaves the device. Based on the open-source OpenResume project.',
    tags: ['TypeScript', 'Next.js', 'React', 'Redux Toolkit', 'PDF.js'],
    link: 'https://github.com/Sathwik-N-B/Resume_Parser',
  },
  {
    title: 'NeetHub',
    subtitle: 'Chrome extension',
    description:
      'A Chrome extension that brings LeetHub-style automation to NeetCode. It captures accepted submissions, with runtime and memory stats, and pushes them to your GitHub repo, with a popup for GitHub sign-in and solved-problem stats.',
    tags: ['TypeScript', 'Chrome Extension', 'GitHub API'],
    link: 'https://github.com/Sathwik-N-B/NeetHub',
  },
]

// Halloween edition of the superpowers: same real facts, spooky titles. Shown when the theme is "halloween".
export const halloweenSuperpowers = [
  { title: '🎃 The Fridge Whisperer', text: 'Summons recipes from a photo of your fridge using an Amazon Bedrock agent. Even the leftovers are not safe.' },
  { title: '👻 The Ghost in the Retrieval', text: 'Haunts your documents with BM25, FAISS, reranking and GraphRAG until the right answer appears.' },
  { title: '🧙 The Agent Conjurer', text: 'Casts RAG and agentic AI prototypes that retrieve, reason and call tools on command.' },
  { title: '🦇 The Quantum Night Owl', text: 'After dark, teaches PyTorch models to crack quantum computing problems.' },
  { title: '🍬 Treat: AWS Certified', text: 'Carries an AWS Certified AI Practitioner badge. No trick, just treat.' },
]

// Used by the creative feature (added later). Replace the TODO items with real facts about you.
export const superpowers = [
  { title: 'The Fridge Whisperer', text: 'Built an agent on Amazon Bedrock that looks at a photo of your fridge and tells you what to cook.' },
  { title: 'The Retrieval Tinkerer', text: 'Combines BM25, FAISS, reranking and GraphRAG so a chatbot finds the right answer in your documents.' },
  { title: 'The Agent Builder', text: 'Builds RAG and agentic AI prototypes that retrieve, reason and call tools.' },
  { title: 'The Quantum Explorer', text: 'Currently teaching PyTorch models to tackle quantum computing problems.' },
  { title: 'TODO: your fun fact', text: 'TODO: replace with a personal fun fact, hobby or story.' },
]
