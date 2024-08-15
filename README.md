# DevToolset

[DevToolset](https://DevToolset.net/) is an open-source database-free developer tools navigator

![DevToolset](https://img.magicbox.tools/screenshot_img/devtoolset.png)


## Adding New Developer Tools to DevToolset

Follow these steps to add new developer tools to DevToolset.

### Step 1: Add the New Developer Tool

1. Open the relevant JSONC file in `/data/json/tools/{category}.jsonc`.
2. Insert the new developer tool into the file.
3. If the `{category}.jsonc` file doesn’t exist, follow these steps:
     1. Add the new category to `/data/json/tools/category.jsonc`.
     2. Copy `/data/json/tools/example.jsonc` to the new location `/data/json/tools/{category}.jsonc`.
     3. Add the developer tool to this newly created file.

### Step 2: Commit Your Changes and Submit a Pull Request

### PR Checklist

Before submitting your PR, please ensure you have completed the following:

- [ ] **name**: Provide a brief title describing the tool or data you added.
- [ ] **description**: Clearly state what tool or data was added and in which category.
- [ ] **url**: Provide the url of the tool.
- [ ] **Data Sorting**: Ensure all data in the modified JSON file is sorted alphabetically.
- [ ] **No Affiliate Links**: Confirm that no affiliate links have been added.
- [ ] **Relevant Tools Only**: Ensure that only development-related tools are included.



### Additional Notes
- Ensure all entries are sorted alphabetically; they will be displayed in this order on the site.
- Please do not submit tools unrelated to development.
- Do not include affiliate links.
- If adding a new category, follow the instructions provided in the contribution guidelines.




## Deploy your own DevToolset

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FiAmCorey%2Fdevtoolset&project-name=devtoolset&repository-name=devtoolset&external-id=https%3A%2F%2Fgithub.com%2FiAmCoreye%2Fdevtoolset%2Ftree%2Fmain)


## Features

- **Database-free Architecture**: Utilizes GitHub for content storage and management.
- **Dynamic Content**: Renders content dynamically using Next.js server-side rendering.
- **Markdown Support**: Write your content in Markdown format for easy editing and version control.
- **Admin Interface**: Built-in admin panel for content management.
- **Responsive Design**: Fully responsive design using Tailwind CSS.
- **SEO Friendly**: Optimized for search engines with dynamic metadata.
- **Easy Deployment**: Simple deployment process to Vercel.

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
   ```

3. Create a `.env.local` file in the root directory and add the following:
   ```
   GITHUB_TOKEN=your_github_personal_access_token
   GITHUB_OWNER=your_github_username
   GITHUB_REPO=your_repo_name
   ACCESS_PASSWORD=your_secure_access_password
   JWT_SECRET=your_secret_key_here
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_google_analytics(G-xxx)(Optional)
   NEXT_PUBLIC_PLAUSIBLE_URL=your_plausible_data_domain(Optional)
   ```

4. Set up your GitHub repository:
   - Create a new repository on GitHub
   - Create two folders in the repository: `data/json` and `data/md`
   - In `data/json`, create related jsonc file with an empty array: `[]`

5. Run the development server:
   ```
   npm run dev
   pnpm dev
   ```

Visit `http://localhost:3000` to see your DevToolset instance running locally.

## Deployment

1. Push your code to GitHub.
2. Log in to Vercel and create a new project from your GitHub repository.
3. Configure the environment variables in Vercel:
   - `GITHUB_TOKEN`
   - `GITHUB_OWNER`
   - `GITHUB_REPO`
   - `ACCESS_PASSWORD`
   - `JWT_SECRET`
   - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`(Optional)
   - `NEXT_PUBLIC_PLAUSIBLE_URL`(Optional)
4. Deploy the project.

For a detailed deployment guide, please refer to our [Installation and Deployment Guide](/data/md/deploy-own-devtoolset.md).

## Usage

- Access the admin panel by navigating to `/admin` and using your `ACCESS_PASSWORD`.
- Create and edit articles through the admin interface.
- Manage resources in the admin panel.
- All changes are automatically synced with your GitHub repository.

## Contributing

We welcome contributions to DevToolset! Please read our [Contributing Guide](/data/md/add-new-developer-tools.md) for details on our code of conduct and the process for submitting pull requests.

## License

DevToolset is open-source software licensed under the [MIT license](./LICENSE).

## Support

If you find this project helpful, please consider giving it a ⭐ on GitHub!

Feel free to reach out if you have any questions or suggestions:

- **Email:** [iamcoreychiu@gmail.com](mailto:iamcoreychiu@gmail.com)
- **GitHub:** [iamcorey](https://github.com/iamcorey)
- **Wechat:** `iAmCor3y`(Please add a note when sending a friend request)
![iamcorey](https://img.magicbox.tools/screenshot_img/iamcoreywechat.jpg) 


Thank you for your support!


## Acknowledgements

DevToolset is built with the following tools and libraries:
- [GitBase](https://gitbase.app/) 
- [Favicon.im](https://favicon.im/) 
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)

We are grateful to the maintainers and contributors of these projects.