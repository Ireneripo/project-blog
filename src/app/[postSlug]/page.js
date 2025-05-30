import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import { BLOG_TITLE } from "@/constants";
import { loadBlogPost } from "@/helpers/file-helpers";
import COMPONENT_MAP from "@/helpers/mdx-components";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(params.postSlug);

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  // {postSlug: 'javascript-modulo-operator'}

  const { frontmatter, content } = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={COMPONENT_MAP}
        />
      </div>
    </article>
  );
}

export default BlogPost;
