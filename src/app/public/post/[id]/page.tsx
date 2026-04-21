"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { useTheme } from "@/context/ThemeContext"
import Header from "@/components/Landing/Header"
import Footer from "@/components/Landing/Footer"
import { ArrowLeft, Download, Heart, MessageCircle, Bookmark, User, Calendar, Tag } from "lucide-react"

interface OutfitItem {
  id: string
  name: string
  category: string
  color: string
  brand?: string
  imageUrl?: string
}

interface Outfit {
  id: string
  name: string
  description?: string
  items: OutfitItem[]
  occasion?: string
  season?: string
  style?: string
  imageUrl?: string
}

interface PostUser {
  id: string
  username: string
  profilePictureUrl?: string
}

interface PublicPost {
  id: string
  userId: string
  outfitId: string
  text: string
  tags: string[]
  createdAt: string
  updatedAt: string
  outfit: Outfit
  user: PostUser
  liked: boolean
  likeCount: number
  commentCount: number
  bookmarked: boolean
  isCurrentUser: boolean
  isFollowing: boolean
  isFollowedBy: boolean
}

export default function PublicPostPage() {
  const { colors } = useTheme()
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<PublicPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postId = params.id as string
        const response = await fetch(`https://amatra-backend-225910516553.asia-south2.run.app/public/post/${postId}`)
        
        console.log("-------------------",response)
        if (!response.ok) {
          throw new Error('Post not found')
        }
        
        const data = await response.json()
        setPost(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load post')
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchPost()
    }
  }, [params.id])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleDownload = () => {
    // Scroll to top and show app promotion
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 w-32 mb-4 rounded" style={{ backgroundColor: colors.lightBackground }}></div>
            <div className="h-64 w-full rounded mb-4" style={{ backgroundColor: colors.lightBackground }}></div>
            <div className="h-4 w-full mb-2 rounded" style={{ backgroundColor: colors.lightBackground }}></div>
            <div className="h-4 w-3/4 rounded" style={{ backgroundColor: colors.lightBackground }}></div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
              Post Not Found
            </h1>
            <p className="mb-4" style={{ color: colors.hoverText }}>
              The post you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
              style={{ 
                backgroundColor: colors.brand,
                color: colors.background 
              }}
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-6 transition-opacity hover:opacity-70"
          style={{ color: colors.hoverText }}
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {/* Post Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              {post.user.profilePictureUrl ? (
                <img 
                  src={post.user.profilePictureUrl} 
                  alt={post.user.username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: colors.lightBackground }}
                >
                  <User size={24} style={{ color: colors.icon }} />
                </div>
              )}
            </div>
            <div>
              <h3 className="font-semibold" style={{ color: colors.text }}>
                {post.user.username}
              </h3>
              <div className="flex items-center gap-2 text-sm" style={{ color: colors.hoverText }}>
                <Calendar size={14} />
                {formatDate(post.createdAt)}
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4 font-cormorant-garamond italic" style={{ color: colors.text }}>
            {post.outfit.name || 'Outfit Details'}
          </h1>

          {post.text && (
            <p className="text-lg leading-relaxed mb-6" style={{ color: colors.text }}>
              {post.text}
            </p>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 rounded-full text-sm"
                  style={{ 
                    backgroundColor: colors.lightBackground,
                    color: colors.text
                  }}
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Engagement Stats (Display Only) */}
          <div className="flex gap-6 text-sm" style={{ color: colors.hoverText }}>
            <div className="flex items-center gap-1">
              <Heart size={16} />
              {post.likeCount} likes
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={16} />
              {post.commentCount} comments
            </div>
            <div className="flex items-center gap-1">
              <Bookmark size={16} />
              {post.bookmarked ? 'Saved' : 'Not saved'}
            </div>
          </div>
        </div>

        {/* Outfit Image */}
        {post.outfit.imageUrl && (
          <div className="mb-8">
            <div className="rounded-lg overflow-hidden">
              <img
                src={post.outfit.imageUrl}
                alt={post.outfit.name}
                className="w-full h-auto max-h-96 object-cover"
              />
            </div>
          </div>
        )}

        {/* Outfit Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
            Outfit Details
          </h2>
          
          {post.outfit.description && (
            <p className="mb-6" style={{ color: colors.hoverText }}>
              {post.outfit.description}
            </p>
          )}

          {/* Outfit Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {post.outfit.occasion && (
              <div>
                <h3 className="font-semibold mb-1" style={{ color: colors.text }}>Occasion</h3>
                <p style={{ color: colors.hoverText }}>{post.outfit.occasion}</p>
              </div>
            )}
            {post.outfit.season && (
              <div>
                <h3 className="font-semibold mb-1" style={{ color: colors.text }}>Season</h3>
                <p style={{ color: colors.hoverText }}>{post.outfit.season}</p>
              </div>
            )}
            {post.outfit.style && (
              <div>
                <h3 className="font-semibold mb-1" style={{ color: colors.text }}>Style</h3>
                <p style={{ color: colors.hoverText }}>{post.outfit.style}</p>
              </div>
            )}
          </div>

          {/* Outfit Items */}
          <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>
            Components
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {post.outfit.items.map((item, index) => (
              <div
                key={item.id}
                className="p-4 rounded-lg border"
                style={{ 
                  backgroundColor: colors.background,
                  borderColor: colors.lightBackground
                }}
              >
                <div className="flex items-start gap-3">
                  {item.imageUrl && (
                    <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold" style={{ color: colors.text }}>
                      {item.name}
                    </h4>
                    <p className="text-sm" style={{ color: colors.hoverText }}>
                      {item.category}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span 
                        className="w-4 h-4 rounded-full border"
                        style={{ 
                          backgroundColor: item.color,
                          borderColor: colors.icon
                        }}
                      />
                      <span className="text-sm" style={{ color: colors.hoverText }}>
                        {item.color}
                      </span>
                    </div>
                    {item.brand && (
                      <p className="text-sm mt-1" style={{ color: colors.hoverText }}>
                        {item.brand}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-12 p-8 rounded-lg text-center"
             style={{ backgroundColor: colors.lightBackground }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
            Want to See More?
          </h2>
          <p className="mb-6" style={{ color: colors.hoverText }}>
            Download the Amatra app to explore full outfit details, save your favorites, and create your own AI-powered wardrobe.
          </p>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
            style={{ 
              backgroundColor: colors.brand,
              color: colors.background 
            }}
          >
            <Download size={20} />
            Download Amatra App
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
