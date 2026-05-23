export type TechStackItem = {
  name: string;
  icon: string;
};

export const TECH_STACK: TechStackItem[] = [
  { name: "Python", icon: "/images/tech/python.svg" },
  { name: "OpenAI", icon: "/images/tech/openai.svg" },
  { name: "Hugging Face", icon: "/images/tech/huggingface.svg" },
  { name: "LangChain", icon: "/images/tech/langchain.svg" },
  { name: "NumPy", icon: "/images/tech/numpy.svg" },
  { name: "scikit-learn", icon: "/images/tech/scikitlearn.svg" },
  { name: "AWS", icon: "/images/tech/aws.svg" },
  { name: "Azure", icon: "/images/tech/azure.svg" },
  { name: "Pandas", icon: "/images/tech/pandas.svg" },
  { name: "PostgreSQL", icon: "/images/tech/postgresql.svg" },
  { name: "Power BI", icon: "/images/tech/powerbi.svg" },
  { name: "Git", icon: "/images/tech/git.svg" },
];

export const TECH_STACK_ICON_URLS = TECH_STACK.map((item) => item.icon);
