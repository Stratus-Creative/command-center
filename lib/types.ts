export type Platform = 'instagram' | 'x' | 'tiktok' | 'youtube' | 'other'

export type ContentTag = 'competitor_intel' | 'trend' | 'inspiration' | 'market_signal'

export interface CapturedContent {
  id: string
  url: string | null
  platform: Platform
  author: string | null
  text: string | null
  hashtags: string[]
  ai_summary: string | null
  tags: ContentTag[]
  captured_at: string
  created_at: string
}

export interface TelegramMessage {
  message_id: number
  from?: {
    id: number
    username?: string
    first_name: string
  }
  text?: string
  date: number
  chat: {
    id: number
    type: string
  }
}

export interface TelegramUpdate {
  update_id: number
  message?: TelegramMessage
}
