import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tkrkdbsrnwwdtcshgyit.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrcmtkYnNybnd3ZHRjc2hneWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyODU4NTYsImV4cCI6MjA3OTg2MTg1Nn0.yrFapvqRLS5xkCWHYhtn8RHpXDwFHeenDN1rLw5MVK4';

export const supabase = createClient(supabaseUrl, supabaseKey);
