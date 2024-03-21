import { createClient } from "@supabase/supabase-js";

const API_keys =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuYm5pbGVjdGVvcGxrYnRlZ3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNTQxNTYsImV4cCI6MjAyMjczMDE1Nn0.H0EMa5s2ovoyDTwlRMdqK1wMtcpu0dD8MHJ-Wl0YtUg";

export const supabaseUrl = "https://pnbnilecteoplkbtegqv.supabase.co";
const supabaseKey = API_keys;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
