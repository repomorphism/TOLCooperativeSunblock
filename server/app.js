const express = require("express");
const app = express();

const server = app.listen(3001, function() {
  console.log("server is running on port 3001");
});

const io = require("socket.io")(server);

const nameList = [
  "Kitten",
  "Hedgehog",
  "Sloth",
  "Red Panda",
  "Sea Otter",
  "Anteater",
  "Fennec Fox",
  "Chinchilla",
  "Slow Loris",
  "Pufferfish",
  "Sugar Glider",
  "Prairie Dog",
  "Arctic Fox",
  "Baby Turtle",
  "Baby Crocodile",
  "Dolphin"
];
const nameAssignment = {};

let firstUser = null;
const pairedUsers = {};

// Idea: use a double-dictionary lookup to keep pairs
// emit to partner only, remove pair when disconnect

io.on("connection", function(socket) {
  const [thisUser, otherUser] = assignUserPairs(socket.id);
  const thisUserName = assignCuteName(thisUser);
  const otherUserName = nameAssignment[otherUser];

  console.log("Connected", thisUserName, firstUser, pairedUsers);

  // Notify user pairing
  console.log("emit to", thisUserName);
  io.to(thisUser).emit("USER_PAIR", {
    me: thisUserName,
    partner: otherUserName
  });
  if (otherUser) {
    console.log("emit to other user", otherUser);
    io.to(otherUser).emit("USER_PAIR", {
      me: otherUserName,
      partner: thisUserName
    });
  }

  socket.on("disconnect", function(reason) {
    removeCuteName(thisUser);
    removeCuteName(pairedUsers[thisUser]);
    removeUserPairs(thisUser);

    console.log("Disconnected", thisUserName, firstUser, pairedUsers);
  });
});

function assignUserPairs(id) {
  // First user
  if (!firstUser) {
    firstUser = id;
    return [firstUser];
  } else {
    // Already have first user, make pair
    const thisUser = id;
    pairedUsers[firstUser] = thisUser;
    pairedUsers[thisUser] = firstUser;
    firstUser = null;
    return [thisUser, pairedUsers[thisUser]];
  }
}

function removeUserPairs(thisUser) {
  const otherUser = pairedUsers[thisUser];
  delete pairedUsers[thisUser];
  delete pairedUsers[otherUser];
}

function randomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

function assignCuteName(thisUser) {
  const otherUser = pairedUsers[thisUser];
  const otherUserName = nameAssignment[otherUser];
  let name;

  do {
    name = randomName();
  } while (name == otherUserName);

  nameAssignment[thisUser] = name;
  return name;
}

function removeCuteName(thisUser) {
  delete nameAssignment[thisUser];
}

// Known bug: race condition
// when refreshing it's possible to get paired to the one just closed
