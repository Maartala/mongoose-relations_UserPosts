import mongoose, { Schema, SchemaTypes, model } from "mongoose";

await mongoose.connect("mongodb://localhost:27017/userPost");


// SCHEMA USER
const userSchema = new Schema
    ({
        name: String,
        age: Number
    });

const userModel = model("User", userSchema)


// SCHEMA POST
const postSchema = new Schema
    ({
        title: String,
        content: String,
        author: [{ type: SchemaTypes.ObjectId, ref: userModel }]
    })

const postModel = model("Post", postSchema)


// NEW DATA

// new Users

const user1 = await userModel.create({
    name: "Tom Waits",
    age: 70
})

// const user2 = await userModel.create({
//     name: "Nick Cave",
//     age: 60
// })

// const user3 = await userModel.create({
//     name: "Mark Lanegan",
//     age: 66
// })


// // new Posts Tom Waits

const post1 = new postModel({
    title: "The Piano Has Been Drinking (Not Me) ",
    content: "The piano has been drinking, my necktie is asleep, And the combo went back to new york, the jukebox has to take a leak, And the carpet needs a haircut, and the spotlight looks like a prison break"
});

post1.author.push(user1);
await post1.save()
// _____________________________

const post2 = new postModel({
    title: "Cold Cold Ground",
    content: "Crestfallen sidekick in an old cafe, Never slept with a dream before he had to go away"
});

post2.author.push(user1);
await post2.save()
// _____________________________

const post3 = new postModel({
    title: "Rain Dogs",
    content: "Inside a broken clock, Splashing the wine, With all the Rain Dogs"
});

post3.author.push(user1);
await post3.save()
// _____________________________



// // new Posts Nick Cave

// const post1 = new postModel({
//     title: "Push the Sky Away",
//     content: "You've got to just keep on pushing, Keep on pushing, Push the sky away"
// });

// post1.author.push(user2);
// await post1.save()
// // _____________________________

// const post2 = new postModel({
//     title: "Jubilee Street",
//     content: "On Jubilee Street there was a girl named Bee, She had a history, but she had no past"
// });

// post2.author.push(user2);
// await post2.save()
// // _____________________________

// const post3 = new postModel({
//     title: "The Mercy Seat",
//     content: "They came and took me from my home, And put me in Dead Row, Of which I am nearly wholly innocent of, you know, And I'll say it again I am not afraid to die"
// });

// post3.author.push(user2);
// await post3.save()
// // _____________________________


// // new Posts Mark Lanegan

// const post1 = new postModel({
//     title: "One Way Street",
//     content: "The stars and a moon aren't where they're supposed to be"
// });

// post1.author.push(user3);
// await post1.save()
// // _____________________________

// const post2 = new postModel({
//     title: "No Easy Action",
//     content: "When all is done and turned to dust and insects nest inside my bones..."
// });

// post2.author.push(user3);
// await post2.save()
// // _____________________________

// const post3 = new postModel({
//     title: "Field Song",
//     content: "Let's walk down to the water there's hyacinth in bloom"
// });

// post3.author.push(user3);
// await post3.save()
// // _____________________________










await mongoose.disconnect()