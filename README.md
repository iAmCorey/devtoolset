🌍 *[English](README.md) ∙ [简体中文](README.zh.md)*

# DevToolset

[DevToolset](https://DevToolset.net/) is an open-source database-free developer tools navigator

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=iamcorey/devtoolset&type=Date)](https://star-history.com/#iamcorey/devtoolset&Date)


## Preview

![DevToolset](https://img.magicbox.tools/screenshot_img/devtoolset.png?version=081702)

## Features

- **Database-free Architecture**: Utilizes GitHub for content storage and management.
- **Dynamic Content**: Renders content dynamically using Next.js server-side rendering.
- **Markdown Support**: Write your content in Markdown format for easy editing and version control.
- **Admin Interface**: Built-in admin panel for content management.
- **Responsive Design**: Fully responsive design using Tailwind CSS.
- **SEO Friendly**: Optimized for search engines with dynamic metadata.
- **Easy Deployment**: Simple deployment process to Vercel.
- **Built-in Analytics Support**: Integrated analytics support scripts, compatible with Google Analytics and Plausible Analytics.
- **i18n**: Support multiple languages and can be easily extended to support more languages.
- **Dark Mode**: Support dark mode and can be easily extended to support more themes.
- **Ads Support**: Support Google Adsense and can be easily extended to support more ads.

### Tech Stack
- Next.js - Framework
- Tailwind CSS - CSS Framework
- Shadcn/UI - Component Library
- Vercel - Deployment
- Next-Intl - Internationalization
- Analytics - Google Analytics & Plausible Analytics & ...
- Ads - Google Adsense & ...

---


## Adding New Developer Tools to DevToolset

Wanna add your site to DevToolset? 

### Two ways to submit your site
1. Submit your site via [GitHub Issues](https://github.com/iamcorey/devtoolset/issues) for a free dofollow link.

2. Or you can also submit your site by change the jsonc file in the `data/json/[locale]` folder and create a pull request.
(Please read our [Submission Guide](/data/md/add-new-developer-tools.md) for details on how to request inclusion)

### Submit format

Follow the format below:
- [ ] **name**: Provide a brief title describing the tool or data you added.
- [ ] **description**: Clearly state what tool or data was added and in which category.
- [ ] **url**: Provide the url of the tool.
- [ ] **category**: Provide the category of the tool.
- [ ] **tags**: Provide serval tags of the tool. (3 tags at most)
- [ ] **icon_url**: Provide the url of the icon of the tool. (Optional) If not provided, the icon will be generated automatically.


### Additional Notes
- **Developer Tools Only**: Please do not submit tools unrelated to development.
- **No Affiliate Links**: Do not include affiliate links.
- **No Spam**: Do not include spam.
- **Accessible URL**: Ensure the url is accessible.



## Deploy your own DevToolset

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FiAmCorey%2Fdevtoolset&project-name=devtoolset&repository-name=devtoolset&external-id=https%3A%2F%2Fgithub.com%2FiAmCoreye%2Fdevtoolset%2Ftree%2Fmain)



## Prerequisites

- Node.js (version 14 or later)
- npm/pnpm/yarn (comes with Node.js)
- Git
- GitHub account
- Vercel account (for deployment)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/iAmCorey/devtoolset
   cd devtoolset
   ```

2. Install dependencies:
   ```
   npm install
   pnpm install
   yarn
   ```

3. Create a `.env.local` file in the root directory and add the following:
   ```
   GITHUB_TOKEN=your_github_personal_access_token(Optional)
   GITHUB_OWNER=your_github_username(Optional)
   GITHUB_REPO=your_repo_name(Optional)
   ACCESS_PASSWORD=your_secure_access_password(Optional)
   JWT_SECRET=your_secret_key_here(Optional)
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_google_analytics(G-xxx)(Optional)
   NEXT_PUBLIC_PLAUSIBLE_URL=your_plausible_data_domain(Optional)
   NEXT_PUBLIC_GOOGLE_ADSENSE_ID=your_google_adsense_id(Optional)
   DOMAIN=your_domain(localhost / YOUR_DOMAIN.tld)
   ```

4. Set up your GitHub repository:
   - Create a new repository on GitHub
   - Create two folders in the repository: `data/json/[locale]` and `data/md`
   - In `data/json/[locale]`, create related jsonc file with an empty array: `[]`

5. Run the development server:
   ```
   npm run dev
   pnpm dev
   yarn run dev
   ```

Visit `http://localhost:3000` to see your DevToolset instance running locally.

## Deployment

1. Push your code to GitHub.
2. Log in to Vercel and create a new project from your GitHub repository.
3. Configure the environment variables in Vercel:
   - `GITHUB_TOKEN`(Optional)
   - `GITHUB_OWNER`(Optional)
   - `GITHUB_REPO`(Optional)
   - `ACCESS_PASSWORD`(Optional)
   - `JWT_SECRET`(Optional)
   - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`(Optional)
   - `NEXT_PUBLIC_PLAUSIBLE_URL`(Optional)
   - `NEXT_PUBLIC_GOOGLE_ADSENSE_ID`(Optional)
   - `DOMAIN`(localhost / YOUR_DOMAIN.tld)
4. Deploy the project.

For a detailed deployment guide, please refer to our [Installation and Deployment Guide](/data/md/deploy-own-devtoolset.md).

## Usage
### Mannually
- Tools: Change the jsonc file in the `data/json/[locale]` folder.
- Articles: Change the markdown file in the `data/md` folder.

### By The Admin Panel
(Need to configure the GITHUB related environment variables.)
- Access the admin panel by navigating to `/admin` and using your `ACCESS_PASSWORD`.
- Create and edit articles through the admin interface.
- Manage resources in the admin panel.
- All changes are automatically synced with your GitHub repository.


---


## Changelog
See [CHANGELOG.md](./CHANGELOG.md) for a detailed list of changes.

## Contributing

We welcome contributions to DevToolset! Please read our [Contributing Guide](/data/md/add-new-developer-tools.md) for details on our code of conduct and the process for submitting pull requests.

## License

DevToolset is open-source software licensed under the [MIT license](./LICENSE).


## Acknowledgements

DevToolset is built with the following tools and libraries:
- [GitBase](https://gitbase.app/) 
- [Favicon Stealer](https://github.com/iAmCorey/favicon-stealer) 
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)

We are grateful to the maintainers and contributors of these projects.

## Contact Us

If you want a secondary development, want to customize this project or want to collaborate with us, please contact us.

Feel free to reach out if you have any questions or suggestions:

- **Email:** [iamcoreychiu+devtoolset@gmail.com](mailto:iamcoreychiu+devtoolset@gmail.com)
- **GitHub:** [iamcorey](https://github.com/iamcorey)
- **jike:** `阿邱很行` [阿邱很行](https://okjk.co/mFe3NR)
- **Wechat:** `iAmCor3y`(Please add a note when sending a friend request)
<img src="https://img.magicbox.tools/screenshot_img/iamcoreywechat.jpg" alt="加我为好友" style="height: 200px; width: 200px">


## Support 

If you find this project helpful, please consider giving it a ⭐ on GitHub!

If you want to donate or sponsor this project, it will be greatly appreciated.

<a href='https://ko-fi.com/X8X2WF1V8' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

<img src="./public/buymeacoffee.jpg" alt="请阿邱喝咖啡" style="height: 200px; width: 200px">

Thank you for your support!
