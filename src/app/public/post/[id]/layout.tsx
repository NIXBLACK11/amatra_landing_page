import type { Metadata } from "next";

const API_BASE = "https://amatra-backend-225910516553.asia-south2.run.app";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  try {
    const res = await fetch(`${API_BASE}/public/post/${id}`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("not found");

    const { data } = await res.json();
    const title = data?.outfit?.name || "Outfit on Amatra";
    const description = data?.text
      ? `${data.text} — shared on Amatra by @${data.user?.username}`
      : `An AI-composed outfit by @${data?.user?.username} on Amatra.`;
    const image = data?.outfit?.imageUrl;

    return {
      title,
      description,
      alternates: { canonical: `https://amatra.co/public/post/${id}` },
      openGraph: {
        title: `${title} | Amatra`,
        description,
        url: `https://amatra.co/public/post/${id}`,
        images: image ? [{ url: image, width: 1200, height: 1200, alt: title }] : undefined,
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} | Amatra`,
        description,
        images: image ? [image] : undefined,
      },
    };
  } catch {
    return {
      title: "Outfit | Amatra",
      description: "View this AI-composed outfit on Amatra — the fashion social app.",
    };
  }
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
