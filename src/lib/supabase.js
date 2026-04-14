import { createClient } from '@supabase/supabase-js'

// Replace with your Supabase project URL and anon key
// Found at: supabase.com → Project Settings → API
const supabaseUrl = 'YOUR_PROJECT_URL'
const supabaseKey = 'YOUR_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)
