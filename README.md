<h1 align="center">
  Gatsby.js Medium Blog
</h1>

<p align="center">
   <a href="https://gatsbyjs.com" target="_blank">
     <img src="https://img.shields.io/badge/Built%20with-Gatsby-%23614dff?logo=gatsby" />
   </a>
   <a href="https://reactjs.org/" target="_blank">
     <img src="https://img.shields.io/badge/Powered%20by-React-%2361dafb?logo=react" />
   </a>
   <a>
     <img src="https://img.shields.io/github/license/BrianRuizy/gatsby-minimal-portfolio?color=red&style=flat" />
   </a>
</p>

</div>

![Cover](https://user-images.githubusercontent.com/23439187/177675013-db3b69f2-7c63-4424-9caa-b619c56deffc.png)
![Cover (1)](https://user-images.githubusercontent.com/23439187/177679060-97c9ec32-475d-4e44-8baa-9cf28e160983.png)
<p align="center">Don't forget to leave a star ⭐!</p>

## Features

- PWA ready, installable on Android and iOS
- Algolia Search, search by all attributes
- [Getform.io](getform.io) contact form with easy setup.
- Blog ready, easily add your blog posts with MDX
- Togglable dark mode
- Mobile friendly nav-dock, and bottom drawer
- SEO ready, option to Add meta description

## Getting Started

Before developing and working with the codebase on your IDE of choice, there are some services to set up to get the project running successfully.

### 1. Algolia Search

Algolia Search environment variables are required in the project's `.env` file.

You will need to provide some information that identifies your account to the Algolia plugin and authorizes it to write data to it. If you don’t already have an Algolia account, create one [here](https://www.algolia.com/users/sign_up). Then, go to the **API Keys** section of your Algolia profile.

There is already a file named `.env.example` in the project's root directory. You can rename this to `.env` and fill in the values or you can copy the contents of the file and paste them into your `.env` file as shown below.

```.env
GATSBY_ALGOLIA_APP_ID=<App ID>
GATSBY_ALGOLIA_SEARCH_KEY=<Search-Only API Key>
ALGOLIA_ADMIN_KEY=<Admin API Key>

```

### 2. GetForm

contact form is super easy to set up with getform.io.
Simply add your API / endpoint URL to the action attribute of your form and you're good to go. See https://app.getform.io/forms for documentation. The location for this component is `src/components/ContactDrawer.js`.

```jsx
  <form
    action="https://getform.io/f/faf8d119-4334-4fcc-ae56-2dc4de9cb453"
    method="POST"
  >
  ...
  </form>
```

## Run the project

Not you must have already installed [Node.JS](https://www.gatsbyjs.com/docs/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system) and [Gatsby CLI](https://www.gatsbyjs.com/docs/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system). See Gatsby's [Development Environment Setup](https://www.gatsbyjs.com/docs/tutorial/part-zero/) documentation for more details or if you have issues with the CLI installation.

```bash
nvm install 18
nvm use 18

npm install -g gatsby-cli
```

1. Install project dependencies ```npm install```.

2. Start Developing. Navigate into your new site’s directory and start up the local server ```gatsby develop``` 🎉.

See the [reference guide](https://www.gatsbyjs.com/docs/reference/gatsby-cli/) to read more on other commands you can use with the Gatsby CLI.

## Adding your blog posts

Adding your own content is super simple with the Jamstack design of the project. You won't need to write any HTML or CSS, just markdown (although you absolutely can if you wish to change the design or add your own features). The MDX posts are found in the `content/posts/` directory. With MDX you can even add react components to your posts as found below.

Visit [mdxjs.com](https://mdxjs.com) to see what other cool things you can implement.

```mdx
## Example header here

lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam.

<Alert severity="info">
  Visit <a href="https://python.org">here</a> for docs and examples.
</Alert>
```

