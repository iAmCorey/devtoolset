# DevToolset

[DevToolset](https://DevToolset.net/) is an open-source developer tools navigator without database

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

### Important Notes:

1. Ensure all entries are sorted alphabetically; they will be displayed in this order on the site.
2. Do not include affiliate links.
3. Do not submit tools that are unrelated to development.


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
- npm (comes with Node.js)
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
   ```

3. Create a `.env.local` file in the root directory and add the following:
   ```
   GITHUB_TOKEN=your_github_personal_access_token
   GITHUB_OWNER=your_github_username
   GITHUB_REPO=your_repo_name
   ACCESS_PASSWORD=your_secure_access_password
   ```

4. Set up your GitHub repository:
   - Create a new repository on GitHub
   - Create two folders in the repository: `data/json` and `data/md`
   - In `data/json`, create a file named `resources.json` with an empty array: `[]`

5. Run the development server:
   ```
   npm run dev
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
4. Deploy the project.

For a detailed deployment guide, please refer to our [Installation and Deployment Guide](link-to-guide).

## Usage

- Access the admin panel by navigating to `/admin` and using your `ACCESS_PASSWORD`.
- Create and edit articles through the admin interface.
- Manage resources in the admin panel.
- All changes are automatically synced with your GitHub repository.

## Contributing

We welcome contributions to DevToolset! Please read our [Contributing Guide](link-to-contributing-guide) for details on our code of conduct and the process for submitting pull requests.

## License

DevToolset is open-source software licensed under the [MIT license](link-to-license).

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

## Acknowledgements

DevToolset is built with the following tools and libraries:
- [GitBase](https://gitbase.app/) 
- [Favicon.im](https://favicon.im/) 
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)

We are grateful to the maintainers and contributors of these projects.