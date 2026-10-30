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
    title: 'Accenture: Backend and Cloud Engineering',
    subtitle: 'Achievements, 2021–2024',
    description:
      'Cut deployment time from 45 to under 15 minutes with GitHub Actions CI/CD, sped dashboard loads from 3.2s to 800ms, and migrated legacy monoliths to Kubernetes-deployed Python microservices (35% faster processing).',
    tags: ['FastAPI', 'Flask', 'PostgreSQL', 'Kubernetes', 'AWS S3', 'Redis', 'Celery'],
    link: '',
  },
]

// Used by the creative feature (added later). Replace the TODO items with real facts about you.
export const superpowers = [
  { title: 'The Speed Tuner', text: 'Took dashboard loads from 3.2s down to 800ms by tuning queries and pagination.' },
  { title: 'The Pipeline Wizard', text: 'Cut deploy times from 45 minutes to under 15 with parallel CI/CD stages.' },
  { title: 'The Agent Builder', text: 'Builds RAG and agentic AI prototypes that retrieve, reason and call tools.' },
  { title: 'The Quantum Explorer', text: 'Currently teaching PyTorch models to tackle quantum computing problems.' },
  { title: 'TODO: your fun fact', text: 'TODO: replace with a personal fun fact, hobby or story.' },
]
