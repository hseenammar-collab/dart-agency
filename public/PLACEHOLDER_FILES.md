# Placeholder Files Guide

This document explains where to place your real assets to replace the placeholders used in the code.

## Logo
- **Path**: `/public/images/logo.png`
- **Usage**: Main agency logo displayed in navbar
- **Recommended size**: 200x60px (transparent background)

## Design Portfolio Images
- **Path**: `/public/images/designs/`
- **Files needed**:
  - `design1.jpg` - Fashion summer campaign
  - `design2.jpg` - Tech startup branding
  - `design3.jpg` - Product launch poster
  - `design4.jpg` - Holiday campaign creatives
  - `design5.jpg` - Influencer content series
  - `design6.jpg` - Corporate branding package
- **Recommended size**: 1200x800px or 1920x1080px

## Ads Campaign Screenshots
- **Path**: `/public/images/ads/`
- **Files needed**:
  - `campaign1.png` - Spring sale campaign screenshot
  - `campaign2.png` - Lead generation screenshot
  - `campaign3.png` - Brand awareness screenshot
  - `campaign4.png` - Product launch screenshot
- **Recommended size**: Full-width Ads Manager screenshots (1920x1080px)

## Video Thumbnails
- **Path**: `/public/images/videos/`
- **Files needed**:
  - `video1.jpg` - Instagram reel thumbnail
  - `video2.jpg` - Meta ad thumbnail
  - `video3.jpg` - Brand story film thumbnail
  - `video4.jpg` - TikTok content thumbnail
  - `video5.jpg` - Product demo ad thumbnail
  - `video6.jpg` - Behind the scenes thumbnail
- **Recommended size**: 1920x1080px (16:9 ratio)

## Video Files
- **Path**: `/public/videos/`
- **Files needed**:
  - `sample1.mp4` - Instagram reel video
  - `sample2.mp4` - Meta ad video
  - `sample3.mp4` - Brand story film
  - `sample4.mp4` - TikTok content
  - `sample5.mp4` - Product demo ad
  - `sample6.mp4` - Behind the scenes
- **Alternative**: You can use YouTube embed URLs in the video data files instead

## Case Study Images
- **Path**: `/public/images/case-studies/`
- **Files needed**:
  - `case1.jpg` - E-commerce campaign
  - `case2.jpg` - Lead generation system
  - `case3.jpg` - Brand launch
  - `case4.jpg` - Restaurant chain growth
- **Recommended size**: 1200x800px

## Team Photos
- **Path**: `/public/images/team/`
- **Files needed**:
  - `member1.jpg` - Alex Rivera (Media Buyer)
  - `member2.jpg` - Sarah Chen (Graphic Designer)
  - `member3.jpg` - Marcus Johnson (Videographer)
  - `member4.jpg` - Emma Watson (Creative Director)
  - `member5.jpg` - David Kim (Motion Graphics)
  - `member6.jpg` - Layla Hassan (Copywriter)
- **Recommended size**: 800x800px (square, professional headshots)

## How to Replace Data

### Portfolio Items
Edit `/data/designs.ts` to update:
- Client names
- Project titles
- Categories
- Results
- Image paths

### Ad Campaigns
Edit `/data/campaigns.ts` to update:
- Campaign names
- Client names
- Spend, results, CPA, ROAS data
- Screenshot paths

### Videos
Edit `/data/videos.ts` to update:
- Video titles
- Client names
- Thumbnail and video file paths
- KPIs (views, clicks, engagement)

### Team Members
Edit `/data/team.ts` to update:
- Names
- Roles
- Skills
- Photo paths

### Case Studies
Edit `/data/caseStudies.ts` to update:
- Client information
- Results metrics
- Image paths

## Branding Customization

### Colors
Update the CSS variables in `/app/globals.css`:
- `--primary`: Main brand color
- `--secondary`: Secondary brand color
- `--accent`: Neon accent color (for hover effects)

### Agency Name
Search and replace `[AGENCY_NAME]` in the translations file (`/lib/translations.ts`)

### Typography
The site uses system fonts by default. To add custom fonts, update `/app/layout.tsx`.
