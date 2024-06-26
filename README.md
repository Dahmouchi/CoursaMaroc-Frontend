### Software prerequisites

Install the below tools/packages

| Serial No   | Software           | Version   | Installation site |
| :---------: | :----------------: | :-------: | :---------------- |
| 1           | Node.js            | >= 6.9.1  | [Install NodeJS](https://nodejs.org/en/download/) |
| 2           | npm                | >= 3.10.8 | [Install NPM](https://www.npmjs.com/get-npm)      |
| 3           | react-native       | >= 0.51.0 | [Install react-native](https://www.npmjs.com/package/react-native) |
| 4           | react-native-cli   | >= 2.0.1  | [Install react-native-cli](https://www.npmjs.com/package/react-native-cli) |
| 5           | exp                | >= 47.1.1 | [Install Expo](https://www.npmjs.com/package/exp) |


### Setup Instructions

#### System setup
1. Clone the repo with `git clone https://github.com/Dahmouchi/CoursaMaroc-Frontend.git` command
2. Switch to the project's root directory in terminal
3. Install the dependencies by running `npm install`
4. Once, 'npm install' is completed, run `npx exp start` to start the expo and react-native server
5. If it shows a QR code on the terminal as a result of 'exp start' command, then you are good to go!

you can write your env specific config variables on `.env` file and import them from `react-native-dotenv` package as mentioned [here](https://github.com/zetachang/react-native-dotenv#usage).

Ignore the first step on 'Mobile setup' instructions given below if you already have 'Expo' app installed on your phone.

#### Mobile setup
1. Install 'Expo' application on your android/iOS device. You can find the links to Android and iOS apps [here](https://expo.io/tools#client).
2. Scan the QR code shown on the terminal.
3. Once the QR code is successfully scanned, it will take few seconds to load and render the app.

#### Linter git-hook setup
1. Switch to the project's root directory in terminal
2. Run the following command to copy the git hook from 'git-hooks' to '.git/hooks' directory
  `cp git-hooks/pre-commit .git/hooks/`
3. Run the following command to make the hook executable.
  `chmod +x .git/hooks/pre-commit`

**Note** This git hook runs everytime you commit. It won't let the developer commit the code if there is any eslint issue on the files changed.
