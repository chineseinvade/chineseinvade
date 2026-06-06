# ChineseInvade

**Live site:** [chineseinvade.com](https://chineseinvade.com)

ChineseInvade is an open informational project that helps people around the world understand the risks posed by the Chinese government and its influence beyond China's borders. Many of these risks are easy to overlook in everyday life — cheap products, convenient apps, and global supply chains can make the threat feel distant or invisible. This site exists to make those risks visible, understandable, and backed by evidence.

## Purpose

The goal of this project is simple:

- **Inform global users** about security, privacy, economic, and geopolitical risks linked to the Chinese government and entities operating under its influence.
- **Present facts clearly** so readers can make informed decisions about the products, services, and institutions they trust.
- **Stay current** as new evidence, incidents, and policy actions emerge.

This is not a commercial product. It is a public awareness resource built for anyone who wants to understand why these risks matter — even when they do not seem obvious at first glance.

## Contribute

This project improves when more people help verify facts, add context, and keep the site up to date. **Pull requests are welcome.**

You can help improve the quality of the website by contributing:

| Type | Examples |
|------|----------|
| **New evidence** | Documented reports, court filings, government disclosures, reputable journalism, academic research, and primary sources |
| **Risk analysis** | Clear explanations of privacy, security, supply-chain, censorship, espionage, or economic coercion risks |
| **Current actions** | Recent laws, sanctions, corporate disclosures, military activity, diplomatic moves, and enforcement actions |
| **Corrections** | Factual fixes, outdated information, broken links, or unclear wording |
| **Site improvements** | Better structure, accessibility, translations, citations, and readability |

### Before you open a PR

1. **Use reliable sources.** Prefer primary documents, official statements, and established reporting. Include links where possible.
2. **Be specific.** Explain what changed, why it matters, and who is affected.
3. **Stay factual.** Avoid speculation unless it is clearly labeled as analysis or opinion.
4. **Keep changes focused.** One topic or improvement per pull request is easier to review.
5. **Follow the existing style.** Match the tone and structure already used on the site.

### How to contribute

```bash
# Clone the repository
git clone https://github.com/chineseinvade/chineseinvade.git
cd chineseinvade

# Install dependencies
yarn install

# Start local development
yarn dev

# Build for production
yarn build
```

Then open a pull request with:

- A short summary of your change
- Source links for any new factual claims
- Screenshots if you changed the UI

If you are unsure whether a contribution fits, open an issue first. Discussions about evidence standards and scope are welcome.

## Share This Report

Awareness only works if information spreads. If you find this site useful, please share it with others who may not realize how close these risks already are.

**Website:** [https://chineseinvade.com](https://chineseinvade.com)

Ways to share:

- Send the link directly to friends, family, colleagues, journalists, policymakers, and community groups
- Post it on social media with a short note about why the topic matters to you
- Reference it in articles, newsletters, forums, classrooms, or public discussions
- Translate or adapt key points for audiences in your language or region

When sharing, you are free to link directly to the homepage or to specific sections as they are added. No permission is needed to share the public site.

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deployed with [Cloudflare Workers](https://workers.cloudflare.com/) via [Wrangler](https://developers.cloudflare.com/workers/wrangler/)

## Development

| Command | Description |
|---------|-------------|
| `yarn dev` | Start local dev server |
| `yarn build` | Type-check and build for production |
| `yarn preview` | Preview production build locally |
| `yarn lint` | Run ESLint |
| `yarn deploy` | Build and deploy to Cloudflare |

## Disclaimer

This project aims to present carefully sourced information for educational and awareness purposes. Content may evolve as new facts become available. Readers should evaluate sources independently and form their own conclusions.

## License

Unless otherwise noted in this repository, content and code are shared to support public awareness and collaborative improvement through community contributions.
