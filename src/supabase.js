
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cibnjupftjgwshiudxze.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpYm5qdXBmdGpnd3NoaXVkeHplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNDU3MTgsImV4cCI6MjA0MDkyMTcxOH0.m2Nixz3EpdVPS2jnym65kcd6g0ZM4N_kLK1pbxb3Mss'
export const supabase = createClient(supabaseUrl, supabaseKey)