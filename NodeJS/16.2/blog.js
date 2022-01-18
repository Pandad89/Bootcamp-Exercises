const { MongoClient, ObjectId } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'blogs';

const id = new ObjectId()


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Error');
    }

    const db = client.db(databaseName);

    db.collection('users').insertMany([
        {
            "_id:": id,
            "name": "DeepSpaceKraken3k",
            "email": "NoFunForYou"
        },
        {
            "_id:": id,
            "name": "DopefishLives",
            "email": "UltraNightmare"
        }
    ])
    db.collection('posts').insertMany([
        {
            "Title": "My awesome lorem ipsum text",
            "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Tags": ["Latin", "Placeholder Text"],
            "Owner": id,
            "Comments": [
                {
                    "Text": "My lorem ipsum text is BETTER!",
                    "Owner": id
                },
            ],
        },
        {
            "Title": "My awesome lorem ipsum text",
            "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Tags": ["Latin", "Placeholder Text"],
            "Owner": id,
            "Comments": [
                {
                    "Text": "Awesome lorem ipsum text!",
                    "Owner": id 
                },
            ],
        },
    ])
})