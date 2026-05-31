import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPages: MetadataRoute.Sitemap = [{
      url: process.env.NEXT_PUBLIC_BASE_URL!,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    
    {
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/#home`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/#about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/#services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/#pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/#contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/#trainers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ]

  return [
    ...staticPages
  ];
}