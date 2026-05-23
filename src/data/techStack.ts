export type TechStackItem = {
  name: string;
  icon: string;
};

export const TECH_STACK: TechStackItem[] = [
  { name: "Python", icon: "/images/tech/python.webp" },
  { name: "OpenAI", icon: "/images/tech/openai.webp" },
  { name: "Hugging Face", icon: "/images/tech/huggingface.webp" },
  { name: "LangChain", icon: "/images/tech/langchain.webp" },
  { name: "NumPy", icon: "/images/tech/numpy.webp" },
  { name: "scikit-learn", icon: "/images/tech/scikitlearn.webp" },
  { name: "AWS", icon: "/images/tech/aws.webp" },
  { name: "Azure", icon: "/images/tech/azure.webp" },
  { name: "Pandas", icon: "/images/tech/pandas.webp" },
  { name: "PostgreSQL", icon: "/images/tech/postgresql.webp" },
  { name: "Power BI", icon: "/images/tech/powerbi.webp" },
  { name: "Git", icon: "/images/tech/git.webp" },
];

export const TECH_STACK_ICON_URLS = TECH_STACK.map((item) => item.icon);
