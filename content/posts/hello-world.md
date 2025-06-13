+++
date = '2025-06-10T19:45:51-07:00'
draft = false
title = 'Hello, World!'
+++

I wanted to create a website for a few different reasons.
- Replace a rather embarrassing years-old attempt at web design
- Host basic personal and contact information for anyone interested in connecting
- Store occasional blog posts on any personal projects I do

I love working on projects, but I don't have time to continually work on anything, meaning I end up setting aside and picking projects back up fairly often.  Hopefully by writing blog posts about the things I work on, I will recall more about every project I pick back up.

This website is the first project to get a write-up. My web dev experience is a little limited compared to other CS disciplines. I have a rather large gaping hole where design intuition normally goes, which is why I'm using the lovely [Hugo PaperMod theme](https://github.com/adityatelange/hugo-PaperMod). I've also been more interested in the functional side of CS, so the little gimmicks of this site like the [clickable live age count](https://github.com/ScottWegley/ScottWegley/blob/main/layouts/shortcodes/age.html) ({{< age >}} years old) on the home page are all me, while anything that looks nice is courtesy of either Hugo or PaperMod.

For those unaware, Hugo is a static site generator that I'm using for this site.  I considered a number of different stacks for this site but ultimately I wanted low friction setup and maintenance.  

[React](https://react.dev/) was a buzzword in my brain, but feels daunting to learn entirely for personal use.  I can't justify the time investment when I don't see any professional opportunities in my future involving it.

I've used [Svelte](https://svelte.dev/) before, and enjoyed it, but for that reason I chose not to use it again.  While I am prioritizing low friction, I also want to learn.  I was fairly set on a static site generator because I wanted something that GitHub pages would play nicely with out of the box; hosting things needs to wait while I finish my homelab.  

[Hugo](https://gohugo.io/) stood out among all the options because it was written in Go, supported Markdown for page design, and boasted an impressive offering of features while still remaining fairly simple to setup.  As far as my choice to use PaperMod, it simply looked the nicest aesthetically as I was browsing different Hugo themes.

The advertised simple setup was very accurate.  A simple `choco install hugo-extended` followed by `hugo new site <site-name>` and I was off to the races.  After cloning the PaperMod repo into themes and adding it as a submodule, the setup process was over.  The hardest part (writing the first post and maintaining the motivation to keep posting) begins now, so hopefully I'm up to the task.

The last technical task to call the site good-to-go is to set up a deployment pipeline. This will ensure that whenever I push any updates to the GitHub repository for this site, it will automatically be rebuilt. I'll be using a basic GitHub action to take care of this, largely based on the template that the GitHub actions team has listed for Hugo sites. I recommend reading through my [YML File](https://github.com/ScottWegley/ScottWegley/blob/main/.github/workflows/hugo.yml) to understand the deployment process. While GitHub actions can seem intimidating if you are unfamiliar with the syntax, they are fairly legible if you just focus on reading line by line. 

To provide a brief overview for this post, the action has two parts: `build` and `deploy`. The jobs run on an Ubuntu runner (a virtual machine that GitHub provides to execute your workflow). The build task downloads Hugo, [Dart Sass](https://sass-lang.com/dart-sass/) (a Dart implementation of [Syntactically Awesome Stylesheets](https://sass-lang.com/), a CSS extension), and uses the pre-installed Node.js available on all GitHub action runners. Then the site is built with Hugo, with the result uploaded as an artifact in the `/public` directory. Once this `build` job is finished, the `deploy` job runs the `deploy-pages` action native to GitHub Pages, which fetches that `/public` directory and serves it at my GitHub Pages URL.

As of this line, the entirety of this website has been covered.  It's unlikely there will be another post regarding this site while it's still in its infancy barring any radical changes I think of.  I'm still getting settled into my new role at PayPal, so I may pad this blog out with posts about projects that pre-date the blog for a while.  Once I've settled into my new routine, there will be projects of some kind.  I know better than to promise any sort of schedule or consistency, only that when there is a new project, there will be a blog post.

Overall, I give this project a 7/10 for personal value. I learned a new interesting technology in Hugo and created something that will hopefully facilitate future learning. While it's a high quality piece of tech, Hugo has not enamored me in the same way other technologies have, thus no 10/10.