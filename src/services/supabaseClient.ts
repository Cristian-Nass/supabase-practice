
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qbjrneqrrcameebgngjg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFianJuZXFycmNhbWVlYmduZ2pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4OTgxMzEsImV4cCI6MjAyOTQ3NDEzMX0.eRCs2bLpGZPTu_a3as7Z03fsAqC6WLJGaFRso-IV318'
export const supabase = createClient(supabaseUrl, supabaseKey)

