import { createClient } from '@supabase/supabase-js'

// Replace with your Supabase project URL and anon key
// Found at: supabase.com → Project Settings → API
const supabaseUrl = 'https://kbexuuoqpzrmnkegxsos.supabase.co'
const supabaseKey = 'sb_publishable_VnF0bCF0kM-e6RfivYVgog_oBGcAiU5'

export const supabase = createClient(supabaseUrl, supabaseKey)
