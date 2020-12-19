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
- Launch the environment locally (`npm start`)

## A Guide for Contributers
1. Create a branch, named something like `name-typeofchanges` (ex. `sarah-navbar`)
    - Pull your changes from the `main` branch 
    - Commit your changes to your branch as you work on them
2. Create a pull request - Include a short description of what you worked on screenshots of the changes you made
    - You can create the pull request by going to branches -> select your branch -> click "Create Pull Request" (make sure all of your changes have been pushed to `origin` first)
3. Tweak your changes based on any feedback you get.

Also, feel free to give constructive feedback on anyone else's pull requests. The tech team will review your changes and merge them if they look good.

*Most importantly, reech out for help on slack if you have **any** questions!*


## Branches 
- **Main branch** (`main`): production-ready site that gets deployed. Merging should only happen from development to master.
- **Development branch** (`develop`): branch for developers to merge in their features as they are completed. PR should be made from feature branch to develop.
- **Feature branches**: Each developer should make a new branch for their work from the development branch in the following format: `sarah-navbar` (lowercase first name, short description of changes). Make a pull request into develop after your work has been completed. Please note that new experimental changes to your code should not be made when a PR is open.

## Tools and Frameworks
- [React](https://reactjs.org/docs/hello-world.html) - JavaScript library for building user interfaces or UI components
- [Airtable](https://airtable.com/) - Used to store data which can be updated the day of the hackathon

