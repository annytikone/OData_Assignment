import * as readline from 'readline';
import * as UserController from '../src/controller/user.controller';

const readlineSync = require('readline-sync');

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function Filter(options: number) {
  if (options == 1) {
    const Username = readlineSync.question('\n Enter Username:');

    return await UserController.getUserList(null, { Username });
  } else if (options == 2) {
    const FirstName = readlineSync.question('\n Enter FirstName:');
    return await UserController.getUserList(null, { FirstName });
  }
}

readLine.question(
  `Welcome to ODATA !\n 
below are the options:
1.List people \n
2.Searching/Show details on a specific Person \n
3.Filtering people \n
`,
  async (answer) => {
    switch (answer) {
      case '1':
        console.log(
          'Listing people from ODATA ! \n',
          await UserController.getUserList(null, null)
        );
        break;

      case '2':
        const name = readlineSync.question('Enter Name to be search? \n');
        console.log(
          'User Info ! \n',
          await UserController.getUserList(name, null)
        );
        break;

      case '3':
        const options = readlineSync.question(
          'Which Filter you want to use ? Enter Option Number\n 1. Filter By Username \n2. By FirstName :'
        );
        console.log('Filter Result:', await Filter(options));
        break;
      default:
        console.log('Invalid answer!');
    }
    readLine.close();
  }
);
