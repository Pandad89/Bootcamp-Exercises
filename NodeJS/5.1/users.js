import fs from 'fs';
import chalk from 'chalk';

const create = (id, name, email) => {
    const users = loadUsers();
    const existingUsers = users.find((user) => user.id === id || user.email === email);

    if (!existingUsers) {
        users.push({
            id: id,
            name: name,
            email: email,
        })
        saveUser(users)
        console.log(chalk.green.inverse('New user registered'));
    } else {
        console.log(chalk.red.inverse('User already registered!'))
    }

}

const read = (id) => {
    const users = loadUsers();
    const user = users.find((user) => user.id === id)

    if (user) {
        console.log(chalk.inverse.yellow("ID:") + " " + chalk.yellow(user.id));
        console.log(chalk.inverse.yellow("Name:") + " " + chalk.yellow(user.name));
        console.log(chalk.inverse.yellow("Email:") + " " + chalk.yellow(user.email));
    }else{
        console.log(chalk.red.inverse('No matching user found'))
    }
}

const remove = (id) => {
    const users = loadUsers();
    const usersToKeep = users.filter((user) => user.id !== id)
    if (users.length > usersToKeep.length) {
        console.log(chalk.green.inverse('User Removed'))
    } else {
        console.log(chalk.red.inverse('No matching user found'))
    }
    saveUser(usersToKeep);
}

const saveUser = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync('users.json', dataJSON)
}
const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('users.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

export default {
    create: create,
    read: read,
    remove: remove,

}