import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Server-side client (service role — never expose to the browser)
export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

// Browser-safe client using the anon key (set NEXT_PUBLIC_SUPABASE_ANON_KEY when needed)
export const createBrowserClient = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
  )
