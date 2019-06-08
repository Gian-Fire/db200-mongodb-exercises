/*
MONGODB EXCERCISES:

---------------------------
Query / Find Documents:
----------------------------
1) get all documents
    db.movies.find({})

2) get all documents with writer set to "Quentin Tarantino"
    db.movies.find({writer: 'Quentin Tarantino'})

3) get all documents where actors include "Brad Pitt"
db.movies.find({actors: 'Brad Pitt'})

4) get all documents with franchise set to "The Hobbit"
    db.movies.find({franchise: 'The Hobbit'})

5) get all movies released in the 90s
    db.movies.find({year: {$gte:1990, $lt:2000}})

6) get all movies released before the year 2000 or after 2010
    db.movies.find({year: {$not:{$gt:2000, $lt:2010}}})

----------------------------
Update Documents:
----------------------------
1) add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
    db.movies.update({'title': 'The Hobbit: An Unexpected Journey'},{$set: {'synopsis': 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'}})

2) add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
    db.movies.update({'title': 'The Hobbit: The Desolation of Smaug'},{$set: {'synopsis': 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.'}})

3) add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
    db.movies.update({title: 'Pulp Fiction'},{ $push: {'actors':'Samuel L. Jackson' }})


----------------------------
Text Search:
----------------------------
1) find all movies that have a synopsis that contains the word "Bilbo"
    db.movies.find({synopsis: /Bilbo/})

2) find all movies that have a synopsis that contains the word "Gandalf"
    db.movies.find({synopsis: /Gandalf/})

3) find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"
    db.movies.find( { "$text": { "$search": "\"Bilbo\" -Gandalf" } })

4) find all movies that have a synopsis that contains the word "dwarves" or "hobbit"
    db.movies.find( { "$text": { "$search": "\"dwarves\" '\'hobbit\'" } })

5) find all movies that have a synopsis that contains the word "gold" and "dragon"
    db.movies.find( { "$text": { "$search": "\"gold\" '\'dragon\'" } })


----------------------------
Delete Documents:
----------------------------
1) delete the movie "Pee Wee Herman's Big Adventure"
    db.movies.deleteOne({title: "Pee Wee Herman's Big Adventure"})

2) delete the movie "Avatar"
    db.movies.deleteOne({title: "Avatar"})


----------------------------
Relationships:
----------------------------
Insert the following documents into a users collection:

1)  username : SallySmith
    first_name : "Sally"
    last_name : "Smith"

    db.users.insert({username: 'SallySmith',first_name: 'Sally',last_name: 'Smith'})

2)  username : JimmyHagen
    full_name :
        first : "Jimmy"
        last : "Hagen"

    db.users.insert({username: 'JimmyHagen', full_name: [{first: 'Jimmy',last: 'Hagen'}]})


Insert the following documents into a posts collection:

3) username : SallySmith
    title : Passes out at party
    body : Wakes up early and cleans house

    db.posts.insert({username: 'SallySmith',title:'Passes out at party',body: 'Wakes up early and cleans house'})

4)  username : SallySmith
    title : Buys a House
    body : Living in a new neighborhood now



5)  username : SallySmith
    title : Reports a bug in your code
    body : Sends you a Pull Request

    db.posts.insert({username: 'SallySmith',title:'Reports a bug in your code',body: 'Sends you a pull request'})

6)  username : JimmyHagen
    title : Borrows something
    body : Returns it when he is done

    db.posts.insert({username: 'Jimmy Hagen',title:'Borrows something',body: 'Returns it when he is done'})

7) username : JimmyHagen
    title : Borrows everything
    body : The end

    db.posts.insert({username: 'Jimmy Hagen',title:'Borrows everything',body: 'The end'})

8)  username : JimmyHagen
    title : Forks your repo on github
    body : Sets to private

    db.posts.insert({username: 'Jimmy Hagen',title:'Forks your repo on github',body: 'Sets to Private'})


Insert the following documents into a comments collection:

9)  username : SallySmith
    comment : Hope you got a good deal!
    post : [post_obj_id]


(where [post_obj_id] is the ObjectId of the posts document: "Borrows something")

10)  username : SallySmith
    comment : What's mine is yours!
    post : [post_obj_id]

    db.comments.insert({username: 'SallySmith',comment: "What's mine is yours!',post: ObjectId("5cfb513038f2569d424bef59")})

(where [post_obj_id] is the ObjectId of the posts document: "Borrows everything")

11)  username : SallySmith
    comment : Don't violate the licensing agreement!
    post : [post_obj_id]

    db.comments.insert({username: 'SallySmith',comment: "Dont violate the licencing agreement!',post: ObjectId("5cfb516438f2569d424bef5a")})

(where [post_obj_id] is the ObjectId of the posts document: "Forks your repo on github)

13)  username : JimmyHagen
    comment : It still isn't clean
    post : [post_obj_id]

    db.comments.insert({username: 'Jimmy Hagen',comment: "It still isnt clean',post: ObjectId("5cfb504838f2569d424bef56")})

    (where [post_obj_id] is the ObjectId of the posts document: "Passes out at party")

14)  username : JimmyHagen
    comment : Denied your PR cause I found a hack
    post : [post_obj_id]

    db.comments.insert({username: 'Jimmy Hagen',comment: "Denied your PR cause i found a hack',post: ObjectId("5cfb50a138f2569d424bef57")})

    (where [post_obj_id] is the ObjectId of the posts document: "Reports a bug in your code")
*/