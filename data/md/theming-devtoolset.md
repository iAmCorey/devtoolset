---
title: Theming DevToolset
description: How to theme DevToolset
date: '2024-08-17T13:20:40.737Z'
---


# Theming DevToolset


## Update existing theme
1. Update variables in `src/app/globals.css`

### List of variables
Here's the list of variables available for customization:

Default background color of `<body />`...etc
```
--background: 0 0% 100%;
--foreground: 222.2 47.4% 11.2%;
```
Muted backgrounds such as `<TabsList />`, `<Skeleton />` and `<Switch />`
```
--muted: 210 40% 96.1%;
--muted-foreground: 215.4 16.3% 46.9%;
```
Background color for `<Card />`
```
--card: 0 0% 100%;
--card-foreground: 222.2 47.4% 11.2%;
```
Background color for popovers such as `<DropdownMenu />`,` <HoverCard />`, `<Popover />`
```
--popover: 0 0% 100%;
--popover-foreground: 222.2 47.4% 11.2%;
```
Default border color
```
--border: 214.3 31.8% 91.4%;
```
Border color for inputs such as `<Input />`, `<Select />`, `<Textarea />`
```
--input: 214.3 31.8% 91.4%;
```
Primary colors for `<Button />`
```
--primary: 222.2 47.4% 11.2%;
--primary-foreground: 210 40% 98%;
```
Secondary colors for `<Button />`
```
--secondary: 210 40% 96.1%;
--secondary-foreground: 222.2 47.4% 11.2%;
```
Used for accents such as hover effects on `<DropdownMenuItem>`, `<SelectItem>`...etc
```
--accent: 210 40% 96.1%;
--accent-foreground: 222.2 47.4% 11.2%;
```
Used for destructive actions such as `<Button variant="destructive">`
```
--destructive: 0 100% 50%;
--destructive-foreground: 210 40% 98%;
```
Used for focus ring
```
--ring: 215 20.2% 65.1%;
```
Border radius for card, input and buttons
```
--radius: 0.5rem;
```




## Add new theme
To add new colors, you need to add them to your CSS file and to your tailwind.config.js file.
1. Define new theme variables in `src/app/globals.css`

```
:root {
  --warning: 38 92% 50%;
  --warning-foreground: 48 96% 89%;
}
 
.dark {
  --warning: 48 96% 89%;
  --warning-foreground: 38 92% 50%;
}
```

2. Add new theme in `tailwind.config.js`
```
module.exports = {
  theme: {
    extend: {
      colors: {
        warning: "hsl(var(--warning))",
        "warning-foreground": "hsl(var(--warning-foreground))",
      },
    },
  },
}
```

3. You can now use the warning utility class in your components.

`<div className="bg-warning text-warning-foreground" />`