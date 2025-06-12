# Scott Wegley Personal Website (Hugo + PaperMod)

This is the source for my personal website and blog, built with [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

## 🚀 Features
- **Profile homepage** with live-updating age, degrees/certifications, and social icons
- **Resume** link and Google Docs embed
- **Blog** section for technology posts (Markdown format)
- **Custom shortcodes** for dynamic content (age, social icons)
- **Modern, responsive design** via PaperMod theme

## 🛠️ Project Structure
- `hugo.toml` — Main site configuration (title, theme, params, menus, etc.)
- `content/` — All site content (homepage: `_index.md`, blog posts: `posts/`)
- `layouts/shortcodes/` — Custom shortcodes (e.g., `age.html`, `socialicon.html`)
- `themes/PaperMod/` — Theme (added as a git submodule)
- `static/` — Static assets (images, PDFs, etc.)

## ⚙️ Configuration
- **Site settings**: Edit `hugo.toml` for title, theme, social links, and menu.
- **Homepage content**: Edit `content/_index.md` using Markdown and shortcodes.
- **Blog posts**: Add Markdown files to `content/posts/`.
- **Custom shortcodes**: Place `.html` files in `layouts/shortcodes/` and use with `{{< shortcode >}}` syntax in Markdown.

## ▶️ Running Locally
1. **Install Hugo** (if not already):  https://gohugo.io/getting-started/installing/
2. **Clone the repo** (with submodules):
   ```sh
   git clone --recurse-submodules <repo-url>
   ```
3. **Start the local server:**
   ```sh
   cd mysite
   hugo server
   ```
4. Open [http://localhost:1313](http://localhost:1313) in your browser.

## ⬆️ Updating the Project
- **Content:**
  - Edit `content/_index.md` for homepage/profile changes.
  - Add/edit blog posts in `content/posts/`.
- **Theme:**
  - To update PaperMod, run:
    ```sh
    cd mysite/themes/PaperMod
    git pull origin master
    cd ../../
    git add themes/PaperMod
    git commit -m "Update PaperMod theme"
    ```
- **Configuration:**
  - Edit `hugo.toml` for site-wide settings, menus, and social links.
- **Shortcodes:**
  - Edit or add files in `layouts/shortcodes/`.

## 📝 Creating a New Blog Post
1. From the `mysite` directory, run:
   ```sh
   hugo new posts/my-new-post.md
   ```
2. Edit the new file in `content/posts/` and set `draft = false` to publish.

## 📦 Deployment
- Run `hugo` in the `mysite` directory to build the site to `public/`.
- Deploy the contents of `public/` to your static hosting provider (GitHub Pages, Netlify, etc.).

## 📚 Resources
- [Hugo Documentation](https://gohugo.io/documentation/)
- [PaperMod Theme Docs](https://adityatelange.github.io/hugo-PaperMod/)

---
Feel free to fork or use this structure for your own Hugo + PaperMod site!
