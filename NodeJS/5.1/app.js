import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import users from './users.js';


yargs(hideBin(process.argv))
    .command({
        command: 'create',
        describe: 'Create a new user',
        builder: {
            id: {
                describe: 'User ID',
                demandOption: true,
                type: 'number',
            },
            name: {
                describe: 'User Name',
                demandOption: true,
                type: 'string',
            },
            email: {
                describe: 'User email',
                demandOption: true,
                type: 'string',
            },
        },
        handler(argv) {
            users.create(argv.id, argv.name, argv.email);
        }
    })
    .command({
        command: 'read',
        describe: 'Read an existing user',
        builder: {
            id: {
                id: {
                    describe: 'User ID',
                    demandOption: true,
                    type: 'number'
                }
            }
        },
        handler(argv) {
            users.read(argv.id);
        }
    })
    .command({
        command: 'update',
        describe: 'Update an existing user',
        handler() {
            console.log('Update')
        }
    })
    .command({
        command: 'delete',
        describe: 'Delete an existing user',
        builder: {
            id: {
                describe: 'User ID',
                demandOption: true,
                type: 'number',
            }
        },
        handler(argv) {
            users.remove(argv.id);
        }
    })
    .parse();