---
title: Add New Developer Tools To DevToolset
description: How to add new developer tools to DevToolset
date: '2024-08-14T13:14:40.737Z'
---

# Adding New Developer Tools to DevToolset

Follow these steps to add new developer tools to DevToolset.

## Step 1: Add the New Developer Tool

1. Open the DevToolset repository: [DevToolset](https://github.com/iAmCorey/devtoolset/)
2. Open the relevant JSONC file in `/data/json/[locale]/tools/{category}.jsonc`.
3. Insert the new developer tool into the file.
4. If the `{category}.jsonc` file doesn’t exist, follow these steps:
     1. Add the new category to `/data/json/[locale]/tools/category.jsonc`.
     2. Copy `/data/json/[locale]/tools/example.jsonc` to the new location `/data/json/[locale]/tools/{category}.jsonc`.
     3. Add the developer tool to this newly created file.

## Step 2: Commit Your Changes and Submit a Pull Request


### PR Checklist

Before submitting your PR, please ensure you have completed the following:

- [ ] **name**: Provide a brief title describing the tool or data you added.
- [ ] **description**: Clearly state what tool or data was added and in which category.
- [ ] **url**: Provide the url of the tool.
- [ ] **Data Sorting**: Ensure all data in the modified JSON file is sorted alphabetically.
- [ ] **No Affiliate Links**: Confirm that no affiliate links have been added.
- [ ] **Relevant Tools Only**: Ensure that only development-related tools are included.



## Important Notes:

1. Ensure all entries are sorted alphabetically; they will be displayed in this order on the site.
2. Do not include affiliate links.
3. Do not submit tools that are unrelated to development.
