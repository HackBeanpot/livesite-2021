# 2021 Livesite

_The day-of site for the 2021 hackathon_

## Helpful links

- [Livesite Designs (in Figma)](https://www.figma.com/file/qgezzhkFHU4IJJhpdYaqtc/Live-Site?node-id=161%3A0)
- [A guide for using Git and GitHub](https://docs.google.com/document/d/1gZXyTDybJIk65tp0VBRweOfAJOv6RqUqRQgNXdSeKTw/edit?usp=sharing) (part of a guide put together for hackers last year)
- The livesite itself (production!): https://live.hackbeanpot.com/

## Getting Set Up For Development

First and foremost, make sure you have [Node](https://nodejs.org/) installed.

- Clone the repository (`git clone https://github.com/HackBeanpot/livesite-2021`)
- Move into the new local repo (`cd website-2021`)
- Install dependencies (`npm install`)
- Launch the environment locally (`npm start`), then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running locally -- airtable API

In order to run this locally, you will need an Airtable API key which you can obtain from our Airtable account page (the login for this page can be found in lastpass). Create a file at the root directory (with the gitignore and stuff, NOT in the /src folder!) called `.env`. The contents of this file should just be the line `REACT_APP_AIRTABLE_KEY=<your api key>`. Don't put quotation marks or anything around the key value. **DO NOT** commit this file to github!! If you need help with this, message @sarah

### Using Airtable API in your code
You can use the [custom React hook](/src/hooks/api-hook.js) that we created which will handle the asynchronous call and fetch the data. You will have to pass in two variable that we call `basePath` and `tableQuery`, which you can find in table's URL: `https://api.airtable.com/v0/[basePath]/[tableQuery]`.

## A Guide for Contributers

1. Create a branch, named something like `name-typeofchanges` (ex. `sarah-navbar`)
   - Pull your changes from the `main` branch
   - Commit your changes to your branch as you work on them
2. Create a pull request - Include a short description of what you worked on screenshots of the changes you made
   - You can create the pull request by going to branches -> select your branch -> click "Create Pull Request" (make sure all of your changes have been pushed to `origin` first)
3. Tweak your changes based on any feedback you get.

Also, feel free to give constructive feedback on anyone else's pull requests. The tech team will review your changes and merge them if they look good.

_Most importantly, reech out for help on slack if you have **any** questions!_

## Branches

- **Main branch** (`main`): production-ready site that gets deployed. Merging should only happen from development to master.
- **Development branch** (`develop`): branch for developers to merge in their features as they are completed. PR should be made from feature branch to develop.
- **Feature branches**: Each developer should make a new branch for their work from the development branch in the following format: `sarah-navbar` (lowercase first name, short description of changes). Make a pull request into develop after your work has been completed. Please note that new experimental changes to your code should not be made when a PR is open.

## Tools and Frameworks

- [React](https://reactjs.org/docs/hello-world.html) - JavaScript library for building user interfaces or UI components
- [Airtable](https://airtable.com/) - Used to store data which can be updated the day of the hackathon
