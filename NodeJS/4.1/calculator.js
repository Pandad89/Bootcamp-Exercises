import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'Add two numbers',
        builder: {
            num1: {
                describe: 'First number',
                demandOption: true,
                type: 'number'
            },
            num2: {
                describe: 'Second number',
                demandOption: true,
                type: 'number'
            }
        },
        handler: function (argv) {
            console.log(argv.num1 + argv.num2)
        }
    })
    .command({
        command: 'sub',
        describe: 'Subtract two numbers',
        builder: {
            num1: {
                describe: 'First number',
                demandOption: true,
                type: 'number'
            },
            num2: {
                describe: 'Second number',
                demandOption: true,
                type: 'number'
            }
        },
        handler: function (argv) {
            console.log(argv.num1 - argv.num2)
        }
    })
    .command({
        command: 'multi',
        describe: 'Multiplies two numbers',
        builder: {
            num1: {
                describe: 'First number',
                demandOption: true,
                type: 'number'
            },
            num2: {
                describe: 'Second number',
                demandOption: true,
                type: 'number'
            }
        },
        handler: function (argv) {
            console.log(argv.num1 * argv.num2)
        }
    })
    .command({
        command: 'pow',
        describe: 'Multiplies a number to the power of 2',
        builder: {
            num: {
                describe: 'First number',
                demandOption: true,
                type: 'number'
            }
        },
        handler: function (argv) {
            console.log(argv.num * argv.num)
        }
    })
    
    .parse();