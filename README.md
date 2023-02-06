## **Introduction**

This is a bookmark app built using HTML, CSS, and JavaScript (React.JS). The app allows users to add bookmarks with a name and URL, and displays a list of all bookmarks that persist across page reloads. Feel free to cherry pick the aspects of the site that interest you, by selecting the desired segment above.

The application was coded in less than a day, focussed on keeping the app as framework free as possible RE functionality, but equally aimed to impress via use of the graphic framework Three.JS.

***Before attempting to use the site, please bypass CORS restrictions requesting it via the button on the following site: [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo) - See Technical Limitations for more information on why this inconvenience exists.***

## **Want to get this running on your local machine?**

You'll need to do the following in your CLI, presuming you're running NPM, and have Node.js installed on your machine (v16.17.0 is ideal):

``git clone https://github.com/AJCJ1/phantomsbookmarkproject.git``

``cd phantomsbookmarkproject``

Then install dependancies (Namely Vite, ESlint, Prettier, Three.JS, React.JS):

``npm install``

Start dev server (Precompiles with Vite, so will likely run on port 5173/5174):

``npm run dev``

Open up your favourite browser (Mine's Brave), and check the port it's running on in your terminal.

``localhost:5173``

Should do the trick.


This will run the Dev version, meaning you'll have the added benefits of recommended linting from EsLint, and Prettier.Js formatting by running the npm run format command (or if using VSCode by automating on change, see <a href="https://devdojo.com/myogeshchavan97/automatically-format-code-in-visual-studio-code-using-prettier">this link</a> for some guidance).

Enjoy!

Created by Arnold Cubici-Jones

## **<strong><a href="https://ajcj1.github.io/vite-compiled-phantom-bookmarks/">Live Project </a></strong>**

## **Requirements**

- Displays a form on the top of the page, that lets a user submit a link. The form should validate whether the input is a valid URL ***and*** exists.
- Displays the list of links with pagination, so that 20 are shown per page, with pagination being numbered with next and previous links eg. < 1 2 3 >.
- Allows user to remove links, or clear all.
- The app must be built using HTML, CSS, and JavaScript (or React/Angular).
- Form validation must be custom-written.
- All links entered in the list must persist across page reloads.
- All code must be commented.
- Demonstrates good tooling setup eg. linting, pre-compilation etc…

## User Story

- As a user I can see a list of all of my bookmarks, with 20 per page, numbered pagination (next and previous links).
- As a user I can add a bookmark to my list, and have the form tell me whether the link is valid and leads to a real website.
- As a user I can edit any bookmark on my list.
- As a user I can remove any bookmark on my list, or clear all of them if necessary.
- As a user, I want to be able to easily submit links through a form on the top of the page, and have the form validate whether the input is a valid URL and exists.

## The **Design**

The bookmark app consists of two main components: a form for adding bookmarks and a list for displaying bookmarks.

### **Form**

The form allows users to enter a name and URL for a bookmark. When the form is submitted, the information is added to the list of bookmarks. The form includes custom validation to ensure that a name and URL are entered before the form can be submitted.

### **List**

The list displays all bookmarks that have been added through the form. Each bookmark includes the name and URL. The list is updated in real-time as bookmarks are added and persists across page reloads because of their being stored in local storage.

## **Implementation**

The implementation of the bookmark app follows a straightforward, modular design pattern. The form and list components are encapsulated in their own JavaScript files and can be easily updated and maintained.

### Components

- Home.jsx: This component displays the form and renders the pagination, list, and loading modal components.
- Pagination.jsx: This component is responsible for rendering the pagination (e.g. < 1 2 3 >) and implements the logic for determining the number of pages.
- List.jsx: This component takes each bookmark and renders a bookmark component for each item in the list.
- Bookmark.jsx: This component displays each bookmark with an edit and delete button.
- ValidatesInput.jsx: This component returns false if the URL and name do not pass validation regular expressions and also calls the fetchURL function to ensure the website returns a 200 response.
- FetchURL.jsx: This function performs a basic fetch to the link using cors anywhere to bypass CORS issues for most websites and is called in ValidatesInput.jsx.
- LoadingModal.jsx: This component is rendered in Home.jsx and turns on when the user submits a bookmark and off when validatesInput returns true or false.
- Index.html: This file renders the 'root' element, and in prod preloads the compiled Vite CSS/JS files.

### Technology Used

JavaScript (JS): This project uses React with Vite for JSX pre-compilation and Eslint for linting. NPM is used for package management. React is useful for its flexibility and performance (particularly client-side component rendering), and along with Vite makes the application run as fast as possible. Eslint allows for consistency in coding standards.

Rather than performing a quick and easy CLI command ‘npx create-react-app my-app’, the react application was built from scratch to show a better understanding of what is going on “under the hood”.

The specified versions of the below dependancies were used as the developer was certain that these dependancies worked together, and though using the most up to date versions of these dependancies was considered, they were not in this instance appropriate as the project didn’t demand their benefits.

For the sake of both simplicity and proof that there isn’t a backend, the page has been hosted on Github pages (among other technical limitations). Should requirements change, the site could be otherwise hosted on AWS Amplify, S3, or Heroku.

It’s been placed on a <a href="https://github.com/AJCJ1/vite-compiled-phantom-bookmarks">separate repository</a> to the repo holding the main uncompiled files.

In Package.json, the following dependancies are:

- @vitejs/plugin-react: This package allows you to use React with Vite. It sets up the necessary configuration to transpile React JSX code into JavaScript.
- Vite: This is a JavaScript build tool that allows you to develop high-performance applications with a minimum of setup and configuration. It pre-compiles JSX/CSS files.
- eslint: This is a JavaScript linter, a tool that analyses code to detect potential errors and enforce coding conventions.
- eslint-config-prettier: This package integrates Prettier with ESLint, ensuring that code conforms to the formatting rules defined by Prettier (ensures they don’t conflict).
- eslint-plugin-import: This package enforces a set of rules for ECMAScript (ES) imports.
- eslint-plugin-jsx-a11y: This package provides accessibility linting rules for JSX code. Most importantly ensures programmer includes relevant information and attributes, like an alt for each image
- eslint-plugin-react: This package provides React-specific linting rules for ESLint.
- prettier: This is a code formatter that automatically formats code to adhere to a consistent style.

### Styling

The style of this application was focussed on Phantom and Digital life:

- The list component is styled to mimic the Phantom.land/about page.
- Rendered WebGL/Three.JS graphic of a Pac-Man like Ghost. The light applied has been chosen to give a darker scene, and the eye colour, though against the colour palette, runs closer to a Pac-Man ghost.
- The colour theme matches dark theme of [Phantom.land](http://Phantom.land) website with the exception that the whites and blacks aren’t full #FFFFFF and #000000 respectively, but instead #F4F4F4 and #1f1f1f, to avoid a completely monochromatic design.
- From Google fonts ”Alata”, a sans serif font was chosen. This is because it is a close font to Phantom’s “Graebenbach Mono - Medium”.

Each component has an associated file for styling inside the src/styles folder. Placing CSS files in a separate folder helps keep the project organised, and makes it easier to maintain. By having a file for each component, it promotes modularity and separation of concerns, making it easier to make changes to components without affecting the rest of the project.

Styles are outlined for a ‘mobile-first’ experience. @media queries are applied from tablet size up. This allows for the mobile experience to be faster, as a large majority of web traffic is mobile.

Why not use SCSS with pre-compilation?

If SCSS were used it would have made it easier to assign variables like standard font sizes and colours, helping to reduce duplication and keep the page uniform, as well as nesting style rules for faster and cleaner programming. However, in this instance the application styling was quite basic. Because of the application’s size and theme it was not ‘time well spent’ for this particular project.

### **Form Validation**

The form validation is implemented in the **`validatesInput.jsx`** component. The component uses two Regular Expressions to check the validity of the entered URL and name.

The URL validation checks if the entered URL matches the pattern for a valid URL structure. The pattern checks for the presence of either "https://" or "http://" at the start of the URL, followed by "**[www](http://www/)**." and then a domain name or IP address. 

The pattern also checks for the presence of a port and/or a path and query parameters. The pattern is case-insensitive.

The name validation checks if the entered name consists of only alphanumerical characters, with the aim of *avoiding* SQL injections. The pattern only accepts characters from a-z/A-Z and 0-9.

If the URL and name match their respective patterns, the component then calls the **`FetchUrl`** function to check if the website returns a 200 response. If both the URL and name match and the website returns a 200 response, the component returns **`true.`**This then allows the edit or add function to store the bookmark in localStorage.

If only the name does not match the pattern, an alert is displayed with the message "Name must be alphanumerical (max 15 characters from a-z/A-Z and 0-9)". 

If only the URL does not match the pattern, an alert is displayed with the message "URL must look like: **[https://www.example.com](https://www.example.com/)**". If neither the URL nor the name match their respective patterns, the component returns **`false`**.

### **Data Persistence**

The list of bookmarks is stored in the browser's local storage, allowing it to persist across page reloads. The data is updated in real-time as bookmarks are added through the form.

There are certain limitations to using local storage, but ultimately the decision was made to use this over Cookies.

Benefits over Cookies:

1. LocalStorage allows for more data to be stored without affecting the performance, compared to Cookies, which have size limitations. 
2. LocalStorage data persists even after the browser is closed, whereas Cookies are deleted after the session is over.

Drawbacks:

1. data stored in LocalStorage is not secure, as it can be accessed by any JavaScript code running on the page, so sensitive information should not be stored in LocalStorage. 
2. LocalStorage is per-origin, meaning data stored in LocalStorage cannot be shared across different domains.
3.  LocalStorage data can also be wiped out by the user or by the browser, if the user clears their browser cache or if the browser's privacy mode is enabled.

Why a database might be more suitable:

1. Databases allow for multiple users to access and modify the same data at the same time.
2. They provide a way to organise and structure data, and allow for easy retrieval and manipulation of data through SQL queries or APIs.
3. They allow for relational data to be stored. This would allow users to have an account, provide authorisation and authentication.

## Strengths

1. React: The use of React allows for the ability to easily build reusable UI components, manage component state, and improve overall application performance.
2. Vite: Fast and optimised build tool for modern JS applications, which helps to increase the overall performance.
3. Eslint: Helps to ensure that the code adheres to a consistent (and accessibility friendly) coding style and best practices, improving the overall maintainability of the code.
4. NPM: Provides a centralised repository of packages that can be easily installed and managed.
5. CORS Anywhere: The use of CORS Anywhere helps to bypass CORS issues for most websites, allowing the application to fetch data from websites without CORS authorisation.
6. Separate Files for Styling: Having a separate file for each component and keeping the styles in a separate folder helps to keep the code organised, making it easier to maintain and debug.
7. WebGL/Three.JS: Use of Three.js vastly decreases the time necessary to render the graphic. Graphic itself adds novelty to the application.

## Technical **Limitations**

- The app does not have a backend database, so all data is stored in the browser's local storage. This means that the list of bookmarks is only accessible from the same browser and device.
- The app does not have any authentication or authorisation features, so any user can access and modify the list of bookmarks without first having to go through a login wall.
- The form component could be placed in a separate file for the sake of keeping the Home.jsx file cleaner.
- Use of Vanilla JavaScript - for the spec provided, and emphasis was made on `Pure JavaScript (or React/Angular if preferred)` so the application was created with React, but otherwise the functionality of the site kept the application as free from external libraries as possible, apart from tooling, React config, and visual graphics using Three.js. The external library Axios for fetching requests from websites was avoided as a result.
    
    
    ***Most Vital Flaw*** — The CORS Policy Problem
    
    Cross-Origin Resource Sharing (CORS) is a security mechanism that restricts you from making requests to a different domain from the domain it was served from. Bypassing CORS is common when building web applications that rely on external API’s for data.
    
    Unfortunately, there is no direct way to bypass CORS policies, without implementing some form of backend, whether that be a proxy designed by someone else or for this particular app. CORS is implemented on the server-side of other sites, designed to prevent unauthorised access to resources on a different domain. If one were to create a ‘fetch’ request to any given site, and they had a CORS policy, the likely response would be an error code 403 - Forbidden.
    
    Developers often use a server-side proxy like CORS-anywhere when making fetch requests to check that a website responds 200, at least in development. This usually happens when one is designing an API. One often needs to **request access** to use the proxy which can sometimes be on a time/request limit.
    
    The CORS proxy used in this instance was [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo)
    
    This is because it is quick to configure and doesn’t require an external library, meaning more Vanilla JavaScript code for the fetch request.
    
    **If you’re experimenting with the site, open the above link to “cors-anywhere”, press the ‘Request temporary access to the demo server’, and you’ll find you should stop getting 403 errors for the sites you attempt to add. You’ll be prompted to do so anyway.**

## **Conclusion**

The bookmark app is a simple yet functional application that demonstrates the ability to build a web-based app using HTML, CSS, and JavaScript (and no backend). The app is designed to be modular, allowing for easy maintenance and updates, and uses local storage to persist data across page reloads. React allows easy testing in localised components should this project be continued.

It passes the given specification, displays examples of good tooling, use of React, renders custom and dynamic WebGL graphics.

What would improve this application?

- FutureProofing, Reliability - **Jest** Testing each feature to ensure reliability.
- Security and storage space - Implement an **API** call to either a rails or Node.js API that stores users and bookmarks.
- Reliability - Use external libraries like **AXIOS** to make fetch requests more reliable and easy to configure.
- Separation of concerns - **form component** from Home.jsx.
- **Search feature** for bookmarks by name and url.
- day/night mode.
- **more work on WebGL graphic.**

Thanks for taking the time to read this Technical Design Document.

It was made by Arnold Cubici-Jones.

You can contact him here:

Emails:

- arnoldesigns@outlook.com
- hello@arnoldcjones.co.uk

Socials and Links:

- https://www.arnoldcjones.co.uk
- [https://www.linkedin.com/in/arnoldcubicijones/](https://www.linkedin.com/in/arnoldcubicijones/)
- [https://github.com/AJCJ1](https://github.com/AJCJ1)
- [https://twitter.com/ArnoldCJones](https://twitter.com/ArnoldCJones)
