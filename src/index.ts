import * as readline from 'readline';
import * as UserController from '../src/controller/user.controller';

const readlineSync = require('readline-sync');

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question(
  `Welcome to ODATA !\n 
below are the options:
1.List people \n
2.Searching/Show details on a specific Person \n
3.Filtering people \n
4. 0 To Exit
`,
  async (answer) => {
    console.log(answer);
    switch (answer) {
      case '1':
        console.log(
          'Listing people from ODATA ! \n',
          await UserController.getUserList(null)
        );
        break;

      case '2':
        const name = readlineSync.question('Enter Name to be search? ');
        console.log('User Info ! \n', await UserController.getUserList(name));
        break;

      case '3':
        const username = readlineSync.question(
          'Which Filter you want to use ? Enter Option Number\n 1. Filter By Username 2. By FirstName '
        );
        console.log('User Info ! \n', await UserController.getUserList(name));
        break;
      default:
        console.log('Invalid answer!');
    }
    readLine.close();
  }
);
