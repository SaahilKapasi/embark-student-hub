import { useState } from "react";
import { Heart, MessageCircle, Share, ExternalLink, User, MoreHorizontal } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export interface SocialPost {
  id: string;
  platform: 'reddit' | 'twitter' | 'instagram' | 'tiktok' | 'linkedin';
  author: {
    name: string;
    username: string;
    avatar?: string;
    verified?: boolean;
  };
  content: {
    text: string;
    images?: string[];
    video?: string;
  };
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
  timestamp: string;
  university?: string;
  subreddit?: string;
  hashtags?: string[];
  link?: string;
}

interface SocialFeedPostProps {
  post: SocialPost;
}

export function SocialFeedPost({ post }: SocialFeedPostProps) {
  const [liked, setLiked] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  const getPlatformIcon = () => {
    switch (post.platform) {
      case 'reddit':
        return '🔴';
      case 'twitter':
        return '🐦';
      case 'instagram':
        return '📷';
      case 'tiktok':
        return '🎵';
      case 'linkedin':
        return '💼';
      default:
        return '💬';
    }
  };

  const getPlatformColor = () => {
    switch (post.platform) {
      case 'reddit':
        return 'bg-orange-500';
      case 'twitter':
        return 'bg-blue-500';
      case 'instagram':
        return 'bg-gradient-to-br from-purple-500 to-pink-500';
      case 'tiktok':
        return 'bg-black';
      case 'linkedin':
        return 'bg-blue-700';
      default:
        return 'bg-gray-500';
    }
  };

  const formatEngagement = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const shouldTruncate = post.content.text.length > 280;
  const displayText = shouldTruncate && !showFullText 
    ? post.content.text.slice(0, 280) + "..." 
    : post.content.text;

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="relative">
            <Avatar className="w-10 h-10">
              {post.author.avatar ? (
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
              )}
            </Avatar>
            <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full ${getPlatformColor()} flex items-center justify-center text-xs`}>
              {getPlatformIcon()}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-medium text-sm">{post.author.name}</span>
              {post.author.verified && <span className="text-blue-500">✓</span>}
              <span className="text-muted-foreground text-sm">@{post.author.username}</span>
              <span className="text-muted-foreground text-sm">•</span>
              <span className="text-muted-foreground text-sm">{post.timestamp}</span>
            </div>
            
            {post.subreddit && (
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  r/{post.subreddit}
                </Badge>
              </div>
            )}
          </div>
        </div>
        
        <Button variant="ghost" size="sm" className="shrink-0">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="leading-relaxed whitespace-pre-wrap">
          {displayText}
        </p>
        
        {shouldTruncate && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowFullText(!showFullText)}
            className="p-0 h-auto text-primary hover:bg-transparent"
          >
            {showFullText ? "Show less" : "Show more"}
          </Button>
        )}

        {/* Hashtags */}
        {post.hashtags && post.hashtags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {post.hashtags.map((tag) => (
              <span key={tag} className="text-primary text-sm hover:underline cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Images */}
        {post.content.images && post.content.images.length > 0 && (
          <div className="mt-4">
            {post.content.images.length === 1 ? (
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={post.content.images[0]} 
                  alt="Post image"
                  className="w-full max-h-96 object-cover"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
                {post.content.images.slice(0, 4).map((image, index) => (
                  <div key={index} className="relative">
                    <img 
                      src={image} 
                      alt={`Post image ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                    {index === 3 && post.content.images!.length > 4 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-medium">
                          +{post.content.images!.length - 4} more
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* University tag */}
        {post.university && (
          <div className="mt-3">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {post.university}
            </Badge>
          </div>
        )}
      </div>

      {/* Engagement */}
      <div className="flex items-center justify-between pt-3 border-t">
        <div className="flex items-center gap-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-2 hover:bg-red-50 hover:text-red-500 ${
              liked ? 'text-red-500' : 'text-muted-foreground'
            }`}
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
            <span className="text-sm">{formatEngagement(post.engagement.likes + (liked ? 1 : 0))}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-500 text-muted-foreground">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">{formatEngagement(post.engagement.comments)}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-green-50 hover:text-green-500 text-muted-foreground">
            <Share className="w-4 h-4" />
            <span className="text-sm">{formatEngagement(post.engagement.shares)}</span>
          </Button>
        </div>

        {post.link && (
          <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">View Original</span>
          </Button>
        )}
      </div>
    </Card>
  );
}