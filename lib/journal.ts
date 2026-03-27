import fs from "fs";
import path from "path";
import matter from "gray-matter";

// We'll omit the 'content' field from the list view to save memory, 
// and only return it when fetching a specific article.
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content?: string; 
  image: string;
  date: string;
  author: string;
}

const journalDirectory = path.join(process.cwd(), "content/journal");

export function getAllArticles(): Article[] {
  // Check if directory exists
  if (!fs.existsSync(journalDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(journalDirectory);
  const allArticlesData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(journalDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title,
        excerpt: matterResult.data.excerpt,
        image: matterResult.data.image,
        date: matterResult.data.date,
        author: matterResult.data.author,
        // We don't include the full content here for the list view
      };
    });

  // Sort articles by date (descending)
  return allArticlesData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getArticleBySlug(slug: string): Article | undefined {
  const fullPath = path.join(journalDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return {
    slug,
    title: matterResult.data.title,
    excerpt: matterResult.data.excerpt,
    image: matterResult.data.image,
    date: matterResult.data.date,
    author: matterResult.data.author,
    content: matterResult.content, // MDX content
  };
}
