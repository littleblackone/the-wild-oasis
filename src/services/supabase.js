import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://spqrhbiwasvqcbolalqf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwcXJoYml3YXN2cWNib2xhbHFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMjY4MjAsImV4cCI6MjAwNjcwMjgyMH0.2lJW1jAVzTcj2cVvaYZZHwiadckOlyOS1UiZd_Vb_JA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
