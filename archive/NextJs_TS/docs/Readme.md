# Portfolio Documentation

There will be a github workflow to deploy to either vercel or azure, most likely vercel.

## GitHub Actions Flow

- Build
    1. run a docker instance or ubuntu (with node v19)
    2. clone repo to the instances
    3. run npm run build command
    4. compress dist folder to zip
- Test
    1. using previous instance, run npm run test
- Deploy
- Functional Test

## Pages

This application is a single page app, with the goal of demonstrating the current projects working on or the featured projects working on. I will limit the sight to display the top 4 featured projects else, the the top 4 current/most recent projects, the order will be featured projects first, i.e if only 2 featured projects are found display them fist then get two of the most recent projects to show a total of 4 on the site.
