"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { useTheme } from "@/context/ThemeContext"
import PageLayout from "@/components/ui/PageLayout"
import { ArrowLeft, Heart, MessageCircle, Bookmark, User, Calendar, Tag } from "lucide-react"

const API_BASE = 'https://amatra-backend-225910516553.asia-south2.run.app'

interface OutfitComponent {
  id: string
  assetId: string
  url: string
  productName: string
  productURL: string
}

interface OutfitComponents {
  [key: string]: OutfitComponent
}

interface Outfit {
  id: string
  name: string
  assetId: string
  imageUrl: string
  createdAt: string
  usedInPost: boolean
  components: OutfitComponents
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
  tags: string[] | null
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
        const response = await fetch(`${API_BASE}/public/post/${postId}`)
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
    if (typeof window === 'undefined') return dateString
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
      <PageLayout>
        <div className="container mx-auto px-4 py-8 animate-pulse">
          <div className="h-8 w-32 mb-4 rounded" style={{ backgroundColor: colors.lightBackground }} />
          <div className="h-64 w-full rounded mb-4" style={{ backgroundColor: colors.lightBackground }} />
          <div className="h-4 w-full mb-2 rounded" style={{ backgroundColor: colors.lightBackground }} />
          <div className="h-4 w-3/4 rounded" style={{ backgroundColor: colors.lightBackground }} />
        </div>
      </PageLayout>
    )
  }

  if (error || !post) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
            Post Not Found
          </h1>
          <p className="mb-4" style={{ color: colors.hoverText }}>
            The post you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
            style={{ backgroundColor: colors.brand, color: colors.background }}
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-6 transition-opacity hover:opacity-70"
          style={{ color: colors.hoverText }}
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {/* Hero Section - Image and Components Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Outfit Main Image */}
          <div>
            {post.outfit.imageUrl ? (
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={post.outfit.imageUrl}
                  alt={post.outfit.name}
                  className="w-full h-auto object-contain"
                />
              </div>
            ) : (
              <div className="rounded-2xl h-96 flex items-center justify-center" 
                   style={{ backgroundColor: colors.lightBackground }}>
                <div className="text-center" style={{ color: colors.hoverText }}>
                  <User size={48} className="mx-auto mb-2" />
                  <p>No outfit image available</p>
                </div>
              </div>
            )}
          </div>

          {/* Components Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
              Wardrobe Components
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(post.outfit.components).map(([componentType, component]) => (
                <div
                  key={component.id}
                  className="p-4 rounded-xl border shadow-md hover:shadow-lg transition-shadow"
                  style={{ 
                    backgroundColor: colors.background,
                    borderColor: colors.lightBackground
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Component Type Label */}
                    <div className="mb-2">
                      <span className="text-xs font-medium uppercase tracking-wider px-2 py-1 rounded-full"
                            style={{ 
                              backgroundColor: colors.lightBackground,
                              color: colors.hoverText
                            }}>
                        {componentType}
                      </span>
                    </div>
                    
                    {/* Component Image */}
                    {component.url ? (
                      <div className="w-20 h-20 rounded-lg overflow-hidden mb-2">
                        <img
                          src={component.url}
                          alt={component.productName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-lg mb-2 flex items-center justify-center" 
                           style={{ backgroundColor: colors.lightBackground }}>
                        <User size={24} style={{ color: colors.icon }} />
                      </div>
                    )}
                    
                    {/* Product Name */}
                    <h3 className="font-semibold text-sm mb-1" style={{ color: colors.text }}>
                      {component.productName}
                    </h3>
                    
                    {/* Product Link */}
                    {component.productURL && (
                      <a 
                        href={component.productURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs hover:underline"
                        style={{ color: colors.brand }}
                      >
                        View Product
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Post Info Section */}
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
            <p className="text-lg leading-relaxed mb-4" style={{ color: colors.text }}>
              {post.text}
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
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

          {/* Engagement Stats */}
          <div className="flex gap-6 text-sm" style={{ color: colors.hoverText }}>
            <div className="flex items-center gap-1">
              <Heart size={16} />
              <span>{post.likeCount} likes</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={16} />
              <span>{post.commentCount} comments</span>
            </div>
            <div className="flex items-center gap-1">
              <Bookmark size={16} />
              <span>{post.bookmarked ? 'Saved' : 'Not saved'}</span>
            </div>
          </div>
        </div>


        {/* Download CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.open('https://apps.apple.com', '_blank')}
            className="inline-block transition-transform hover:scale-105"
          >
            <img
              src="/download/appStore.png"
              alt="Download on App Store"
              className="h-12 w-auto cursor-pointer"
            />
          </button>
        </div>
      </div>
    </PageLayout>
  )
}
