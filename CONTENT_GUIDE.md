# 📘 Content Update Guide
### Your Complete Guide to Managing Your Portfolio Website

---

## Table of Contents

1. [Quick Start](#-quick-start)
2. [Adding New Projects](#-adding-new-projects)
3. [Adding New Experience](#-adding-new-experience)
4. [Creating Blog Posts](#-creating-blog-posts)
5. [Notion/Obsidian Workflow](#-notionobsidian-workflow)
6. [Customizing Styles](#-customizing-styles)
7. [Terminal Commands](#-terminal-commands)
8. [Deploying to GitHub](#-deploying-to-github)
9. [Troubleshooting](#-troubleshooting)

---

## 🚀 Quick Start

Your website is built with plain HTML, CSS, and JavaScript. No build tools needed!

**To make changes:**
1. Edit the HTML files
2. Save your changes
3. Push to GitHub
4. Your site updates automatically!

**File Structure:**
```
Anshul Website/
├── index.html          ← Main website
├── styles.css          ← All styling
├── script.js           ← Interactivity
├── blog/
│   ├── index.html      ← Blog listing
│   ├── blog.css        ← Blog-specific styles
│   ├── template.html   ← Template for new posts
│   └── posts/
│       └── *.html      ← Individual blog posts
└── CONTENT_GUIDE.md    ← This file
```

---

## 🎯 Adding New Projects

### Step 1: Open `index.html`

Find the Projects section (search for `<!-- ==================== PROJECTS SECTION ====================`).

### Step 2: Copy This Template

Add this code inside `<div class="projects__grid">`, before the "More projects coming soon" card:

```html
<!-- Project: YOUR PROJECT NAME -->
<article class="project-card card">
    <div class="project-card__header">
        <span class="project-card__icon">🔐</span>
        <div class="project-card__links">
            <a href="YOUR_GITHUB_LINK" class="project-card__link" aria-label="View on GitHub" target="_blank">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
            </a>
        </div>
    </div>
    <h3 class="project-card__title">YOUR PROJECT TITLE</h3>
    <p class="project-card__description">
        YOUR PROJECT DESCRIPTION - Keep it 2-3 sentences.
    </p>
    <ul class="project-card__features">
        <li>Key feature or achievement 1</li>
        <li>Key feature or achievement 2</li>
        <li>Key feature or achievement 3</li>
    </ul>
    <div class="project-card__tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
        <span class="tag">Tag3</span>
    </div>
</article>
```

### Step 3: Customize

Replace the placeholders:
- `🔐` → Choose an emoji (or use an image)
- `YOUR_GITHUB_LINK` → Your project URL
- `YOUR PROJECT TITLE` → Project name
- Description and features → Your content
- Tags → Technologies used

### Icon Ideas
```
🔐 Security    ☁️ Cloud       🐍 Python
🤖 Automation  🔒 Encryption  📊 Analytics
🛡️ Defense    🔍 Research    🌐 Web
```

---

## 💼 Adding New Experience

### Step 1: Find the Experience Section

In `index.html`, search for `<div class="timeline">`.

### Step 2: Copy This Template

Add this code inside the timeline div (new experiences go at the TOP):

```html
<!-- Experience Item: YOUR ROLE -->
<article class="timeline__item">
    <div class="timeline__marker"></div>
    <div class="timeline__content card">
        <div class="timeline__header">
            <h3 class="timeline__role">YOUR JOB TITLE</h3>
            <span class="timeline__date">Month Year – Present</span>
        </div>
        <p class="timeline__company">COMPANY NAME <span class="timeline__location">• City, State</span></p>
        <ul class="timeline__details">
            <li>Achievement or responsibility #1 with specific metrics</li>
            <li>Achievement or responsibility #2 with specific metrics</li>
            <li>Achievement or responsibility #3 with specific metrics</li>
        </ul>
        <div class="timeline__tags">
            <span class="tag">Skill1</span>
            <span class="tag">Skill2</span>
            <span class="tag">Skill3</span>
        </div>
    </div>
</article>
```

### Step 3: Fill in Your Details

Pro tips for writing bullet points:
- Start with action verbs: "Led", "Developed", "Implemented"
- Include metrics: "reduced by 30%", "managed 20+ systems"
- Keep each bullet to 1-2 lines

---

## 📝 Creating Blog Posts

### Method 1: Using the Template (Recommended)

1. **Copy the template**: Duplicate `blog/template.html`
2. **Rename it**: `blog/posts/your-post-slug.html`
3. **Edit the marked sections**:
   - Title and description in `<head>`
   - Category, title, date in the header
   - Your content in the content div

### What to Edit in the Template

The template has clear `<!-- ========== EDIT THIS ========== -->` markers.

**In the `<head>`:**
```html
<meta name="description" content="Your post description for SEO">
<title>Your Post Title | Anshul Dhull</title>
```

**In the header:**
```html
<span class="blog-post__category">Security</span>
<h1 class="blog-post__title">Your Post Title</h1>
<div class="blog-post__meta">
    <span>January 7, 2024</span>
    <span>•</span>
    <span>5 min read</span>
```

### Available Styling Elements

**Headings:**
```html
<h2>Major Section</h2>
<h3>Subsection</h3>
```

**Lists:**
```html
<ul>
    <li>Bullet point</li>
</ul>

<ol>
    <li>Numbered item</li>
</ol>
```

**Code:**
```html
<!-- Inline code -->
<code>inline code</code>

<!-- Code block -->
<pre><code>def your_function():
    return "code here"</code></pre>
```

**Quotes:**
```html
<blockquote>
    Your important quote here.
</blockquote>
```

**Callouts:**
```html
<!-- Info (blue) -->
<div class="callout callout--info">
    <p class="callout__title">💡 Pro Tip</p>
    <p>Your tip here.</p>
</div>

<!-- Warning (yellow) -->
<div class="callout callout--warning">
    <p class="callout__title">⚠️ Warning</p>
    <p>Your warning here.</p>
</div>

<!-- Success (green) -->
<div class="callout callout--success">
    <p class="callout__title">✓ Success</p>
    <p>Your success message.</p>
</div>
```

### Step 4: Add to Blog Listing

Open `blog/index.html` and add a new card in `.blog-grid`:

```html
<article class="blog-card card">
    <div class="blog-card__meta">
        <span class="blog-card__date">January 15, 2024</span>
        <span class="blog-card__category">Security</span>
    </div>
    <h2 class="blog-card__title">
        <a href="posts/your-post-slug.html">Your Post Title</a>
    </h2>
    <p class="blog-card__excerpt">
        First 2-3 sentences of your post...
    </p>
    <div class="blog-card__footer">
        <span class="blog-card__read-time">5 min read</span>
        <a href="posts/your-post-slug.html" class="blog-card__link">
            Read Article <span class="arrow">→</span>
        </a>
    </div>
</article>
```

---

## 📓 Notion/Obsidian Workflow

### From Notion

1. **Write your post** in Notion
2. **Export as HTML**: Click `...` → Export → HTML
3. **Copy the body content** (not the full HTML)
4. **Paste into template** between the content div tags
5. **Clean up**: Remove Notion-specific classes if any

### From Obsidian

**Option A: HTML Export**
1. Install "Obsidian Export" plugin
2. Export as HTML
3. Copy content to template

**Option B: Manual Conversion**
1. Export as Markdown
2. Convert to HTML using [markdown-it](https://markdown-it.github.io/) or [pandoc](https://pandoc.org/)
3. Paste into template

**Option C: Write Directly**
- Just write directly in the HTML template using the styling elements above

### Quick Markdown to HTML Cheat Sheet

| Markdown | HTML |
|----------|------|
| `# Heading` | `<h2>Heading</h2>` |
| `**bold**` | `<strong>bold</strong>` |
| `*italic*` | `<em>italic</em>` |
| `` `code` `` | `<code>code</code>` |
| `[link](url)` | `<a href="url">link</a>` |
| `- item` | `<ul><li>item</li></ul>` |

---

## 🎨 Customizing Styles

### Changing Colors

Open `styles.css` and find the `:root` section at the top:

```css
:root {
    /* Main backgrounds */
    --bg-primary: #0d0d0d;      /* Darkest - main background */
    --bg-secondary: #1a1a2e;    /* Cards, sections */
    --bg-tertiary: #16213e;     /* Accents */
    
    /* Text colors */
    --text-primary: #eaeaea;    /* Main text */
    --text-secondary: #b8b8b8;  /* Lighter text */
    
    /* Accent color (the pink/red) */
    --accent-primary: #e94560;  /* Change this for different accent */
    
    /* Terminal colors */
    --terminal-text: #00ff41;   /* Green terminal text */
}
```

### Popular Color Combinations

**Cyber Blue:**
```css
--accent-primary: #00d4ff;
--accent-tertiary: #0077b6;
```

**Hacker Green:**
```css
--accent-primary: #00ff41;
--accent-tertiary: #003d00;
```

**Purple Reign:**
```css
--accent-primary: #9d4edd;
--accent-tertiary: #5a189a;
```

---

## 🖥️ Terminal Commands

The interactive terminal in the Hero section responds to commands defined in `script.js`.

### Adding New Commands

Find the `commands` object in `script.js`:

```javascript
const commands = {
    // Add your command here:
    yourcommand: {
        response: `Your response text here.
Can be multiline.
Use <span class="terminal__response--highlight">highlight</span> for emphasis.`
    },
    
    // Command with action:
    navigate: {
        response: `Going somewhere...`,
        action: () => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }
    },
};
```

### Command Structure

```javascript
commandname: {
    response: `Text shown to user`,
    action: () => {
        // Optional JavaScript to run
    }
}
```

---

## 🚀 Deploying to GitHub

### Initial Setup (One Time)

1. **Create a GitHub repository** named `username.github.io` (replace `username` with your GitHub username)

2. **Initialize git** in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Connect to GitHub**:
   ```bash
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main, / (root)
   - Save

5. **Wait 2-3 minutes**, then visit `https://username.github.io`

### Updating Your Site

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Your site updates automatically within 1-2 minutes!

### Using GitHub Desktop (No Terminal)

1. Open GitHub Desktop
2. Select your repository
3. Write a summary of changes
4. Click "Commit to main"
5. Click "Push origin"

---

## ❓ Troubleshooting

### "My changes aren't showing"

- **Hard refresh**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- **Wait 2-3 minutes** after pushing to GitHub
- **Check file paths**: Make sure relative paths are correct

### "The styling looks broken"

- Check that CSS file paths are correct
- Blog posts should use `../../styles.css`
- Blog listing uses `../styles.css`

### "Theme toggle isn't working"

- Make sure `script.js` is linked at the bottom of your HTML
- Check browser console for errors (F12 → Console)

### "Terminal not responding"

- Click inside the terminal input field first
- Check that the command exists in `script.js`
- Commands are case-insensitive

---

## 💡 Pro Tips

1. **Test locally first**: Open `index.html` directly in browser before pushing
2. **Use VS Code**: Great for editing with live preview extensions
3. **Commit often**: Small, frequent commits are better than big ones
4. **Back up your work**: Your GitHub repo IS your backup
5. **Keep images small**: Compress images before adding them

---

**Need help?** Open an issue on GitHub or reach out via the contact form!

*Last updated: January 2024*
