import React from "react";
import { useParams, Navigate } from "react-router-dom";
import articlesData from "../data/articles.json";
import { Article } from "../types";
import { MdxArticleRenderer } from "../components/articles/MdxArticleRenderer";

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const articles: Article[] = articlesData as Article[];
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return <MdxArticleRenderer article={article} />;
}
