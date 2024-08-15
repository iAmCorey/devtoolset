# DevToolset

[DevToolset](https://DevToolset.net/) 是一个开源的、无需数据库的开发者工具导航网站

## Star记录

[![Star History Chart](https://api.star-history.com/svg?repos=iamcorey/devtoolset&type=Date)](https://star-history.com/#iamcorey/devtoolset&Date)


## 预览
![DevToolset](https://img.magicbox.tools/screenshot_img/devtoolset.png)


![DevToolset](https://img.magicbox.tools/screenshot_img/devtoolset.png)

## 如何添加新开发者工具到 DevToolset

按照以下步骤将新开发者工具添加到 DevToolset。

### 步骤 1：添加新的开发者工具

1. 打开位于 `/data/json/tools/{category}.jsonc` 的相关 JSONC 文件。
2. 将新的开发者工具添加在文件中。
3. 如果 `{category}.jsonc` 文件不存在，请按照以下步骤操作：
   1. 将新类别添加到 `/data/json/tools/category.jsonc` 中。
   2. 将 `/data/json/tools/example.jsonc` 文件复制到新路径 `/data/json/tools/{category}.jsonc`。
   3. 将开发者工具添加到这个新创建的文件中。

### 步骤 2：提交更改并提交 Pull Request

### PR 清单

在提交 PR 之前，请确保您已完成以下操作：

- [ ] **name**：提供一个简短的标题描述您添加的工具或数据。
- [ ] **description**：清楚地说明添加了什么工具或数据以及在哪个类别中。
- [ ] **URL**：提供该工具的 URL。
- [ ] **数据排序**：确保修改后的 JSON 文件中的所有数据按字母顺序排列。
- [ ] **没有推广链接**：确认没有添加推广链接。
- [ ] **仅限相关工具**：确保只包含与开发相关的工具。

### 其他注意事项

- 确保所有条目按字母顺序排列；它们将在站点上按此顺序显示。
- 请不要提交与开发无关的工具。
- 不要包含推广链接。
- 如果添加新类别，请遵循贡献指南中提供的说明。

## 部署您的 DevToolset

### 在 Vercel 上部署

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FiAmCorey%2Fdevtoolset&project-name=devtoolset&repository-name=devtoolset&external-id=https%3A%2F%2Fgithub.com%2FiAmCoreye%2Fdevtoolset%2Ftree%2Fmain)

## 功能

- **无需数据库架构**：使用 GitHub 进行内容存储和管理。
- **动态内容**：使用 Next.js 服务器端渲染动态呈现内容。
- **Markdown 支持**：用 Markdown 格式编写内容，便于编辑和版本控制。
- **管理界面**：内置管理面板用于内容管理。
- **响应式设计**：使用 Tailwind CSS 实现完全响应的设计。
- **SEO 友好**：通过动态元数据优化搜索引擎。
- **简单部署**：简单的 Vercel 部署流程。

## 先决条件

- Node.js（版本 14 或更高）
- npm/pnpm/yarn（随 Node.js 一起提供）
- Git
- GitHub 账户
- Vercel 账户（用于部署）

## 安装

1. 克隆存储库：
   ```
   git clone https://github.com/iAmCorey/devtoolset
   cd devtoolset
   ```

2. 安装依赖项：
   ```
   npm install
   pnpm install
   ```

3. 在根目录下创建 `.env.local` 文件，并添加以下内容：
   ```
   GITHUB_TOKEN=your_github_personal_access_token
   GITHUB_OWNER=your_github_username
   GITHUB_REPO=your_repo_name
   ACCESS_PASSWORD=your_secure_access_password
   JWT_SECRET=your_secret_key_here
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_google_analytics(G-xxx)(可选)
   NEXT_PUBLIC_PLAUSIBLE_URL=your_plausible_data_domain(可选)
   ```

4. 设置您的 GitHub 仓库：
   - 在 GitHub 上创建一个新仓库
   - 在仓库中创建两个文件夹：`data/json` 和 `data/md`
   - 在 `data/json` 中创建一个名为相关数据的jsonc文件，内容为空数组：`[]`

5. 运行开发服务器：
   ```
   npm run dev
   pnpm dev
   ```

访问 `http://localhost:3000` 查看本地运行的 DevToolset 实例。

## 部署

1. 将代码推送到 GitHub。
2. 登录 Vercel 并从您的 GitHub 仓库创建一个新项目。
3. 在 Vercel 中配置环境变量：
   - `GITHUB_TOKEN`
   - `GITHUB_OWNER`
   - `GITHUB_REPO`
   - `ACCESS_PASSWORD`
   - `JWT_SECRET`
   - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`(可选)
   - `NEXT_PUBLIC_PLAUSIBLE_URL`(可选)
4. 部署项目。

有关详细的部署指南，请参阅我们的[安装和部署指南](/data/md/deploy-own-devtoolset.md)。

## 使用方法

- 通过导航到 `/admin` 并使用您的 `ACCESS_PASSWORD` 访问管理面板。
- 通过管理界面创建和编辑文章。
- 在管理面板中管理资源。
- 所有更改将自动与您的 GitHub 仓库同步。

## 贡献

我们欢迎对 DevToolset 的贡献！请阅读我们的[贡献指南](/data/md/add-new-developer-tools.md)，了解我们的行为准则和提交PR的流程。

## 许可证

DevToolset 是一个开源软件，遵循 [MIT 许可证](./LICENSE)。

## 支持

如果您觉得这个项目有帮助，请考虑在 GitHub 上给我们一个 ⭐！

如果您有任何问题或建议，请随时与我们联系：

- **电子邮件**：[iamcoreychiu@gmail.com](mailto:iamcoreychiu@gmail.com)
- **GitHub**：[iamcorey](https://github.com/iamcorey)
- **即刻:** `阿邱很行` [阿邱很行](https://okjk.co/mFe3NR)
- **微信**：`iAmCor3y`（添加好友时请加上备注）
![iamcorey](https://img.magicbox.tools/screenshot_img/iamcoreywechat.jpg) 

感谢您的支持！

## 鸣谢

DevToolset 使用了以下工具和库构建：
- [GitBase](https://gitbase.app/) 
- [Favicon.im](https://favicon.im/) 
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)

我们对这些项目的维护者和贡献者表示感谢。
