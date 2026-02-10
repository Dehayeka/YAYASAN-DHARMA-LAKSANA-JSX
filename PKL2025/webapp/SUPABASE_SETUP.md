# Supabase Setup Instructions

## Step 1: Create Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub/Email
4. Create new organization (can use your name)

## Step 2: Create Project

1. Click "New Project"
2. **Project name**: `yayasan-dharma-laksana`
3. **Database password**: Choose a strong password (SAVE THIS!)
4. **Region**: Select **Singapore** (closest to Indonesia)
5. Click "Create new project" (wait 2-3 minutes)

## Step 3: Create Database Schema

1. Go to **SQL Editor** (left sidebar)
2. Click **"New query"**
3. Copy all content from `supabase-schema.sql` file
4. Paste into the editor
5. Click **RUN** (or press Ctrl+Enter)
6. You should see: "Success. No rows returned"
7. Verify tables created: Go to **Table Editor** → you should see 4 tables

## Step 4: Setup File Storage

1. Go to **Storage** (left sidebar)
2. Click **"New bucket"**
3. **Name**: `yayasan-images`
4. **Public bucket**: ✅ Check this (so images are publicly accessible)
5. Click **"Create bucket"**

## Step 5: Upload Images

### Using Supabase UI:

1. Click on `yayasan-images` bucket
2. Create folders:
   - Click **"Create folder"** → name: `kegiatan`
   - Create folder: `pengurus`
   - Create folder: `pendidik`
   - Create folder: `pencapaian`
3. Upload images to respective folders from your PHP `uploads/` directories

### Image URLs will be:
```
https://[your-project-id].supabase.co/storage/v1/object/public/yayasan-images/kegiatan/image.png
```

## Step 6: Get API Keys

1. Go to **Project Settings** (gear icon, bottom left)
2. Click **API** tab
3. Copy these values:

**Project URL:**
```
https://xxxxxxxxxxxxx.supabase.co
```

**anon/public key:** (long string starting with `eyJ...`)
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9......
```

## Step 7: Configure Next.js Environment

1. In `PKL2025/webapp/` directory, create file `.env.local`
2. Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9......
```

3. **IMPORTANT**: Never commit `.env.local` to git (it's already in `.gitignore`)

## Step 8: Test Connection

Run this in terminal:
```bash
cd PKL2025/webapp
npm run dev
```

Visit `http://localhost:3000` - if data loads, Supabase is working!

## Step 9: Deploy to Vercel

1. Go to Vercel project  Settings
2. **Environment Variables** tab
3. Add the same two variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **Save**
5. Redeploy

## Troubleshooting

**Can't see data?**
- Check SQL Editor → Run `SELECT * FROM kegiatan` to verify data exists
- Check browser console for errors
- Verify environment variables are set

**Images not loading?**
- Make sure `yayasan-images` bucket is **public**
- Check Storage → Policies → should have public read access
- Verify image paths in database match Storage folder structure

**Connection refused?**
- Double-check `.env.local` file exists and has correct values
- Restart dev server: `Ctrl+C` then `npm run dev` again
