const friendsImagesLinks = ((ctx) => ctx.keys().map(ctx))(
  require.context("../img/friends", true, /.*/)
);
const roomMembersImagesLinks = ((ctx) => ctx.keys().map(ctx))(
  require.context("../img/room/members", true, /.*/)
);

const populate = (optionsObj) => {
  const listClass = optionsObj.listClass;
  const itemClass = optionsObj.itemClass;
  const count = optionsObj.count;
  // const title = optionsObj.title;

  const list = document.querySelectorAll(`.${listClass}`)[0];
  const item = document.querySelectorAll(`.${itemClass}`)[0];
  for (let i = 0; i < count; i++) {
    const newItem = item.cloneNode(true);
    
    if (listClass === 'room__members-list') {
      const roomMemberAvatar = newItem.querySelectorAll(".room__member img")[0];
      let imgIndex = Math.floor(Math.random() * 37);
      roomMemberAvatar.src = `${roomMembersImagesLinks[imgIndex]}`;
      roomMembersImagesLinks;
    }

    if (listClass === 'center__slider-container') {
      const img = newItem.querySelectorAll(".frame img")[0];
      let imgIndex = Math.floor(Math.random() * 9999);
      img.src = `https://source.unsplash.com/random?sig=${imgIndex}`;
    }

    list.appendChild(newItem);
  }
};

populate({
  listClass: "room__members-list",
  itemClass: "room__member",
  count: 9,
});

populate({
  listClass: "center__slider-container",
  itemClass: "slider__item",
  count: 9,
});

const populateFriends = () => {
  const friendsList = document.querySelector(".friends__list");
  const friendsItem = document.querySelectorAll(".friends__item")[0];
  const friendSeparator = document.querySelectorAll(".friend__separator")[0];
  for (let i = 0; i < 30; i++) {
    const newFriend = friendsItem.cloneNode(true);
    const newSeparator = friendSeparator.cloneNode(true);
    const friendsName = newFriend.querySelector(".friend__name");
    const friendImg = newFriend.querySelectorAll(".friend__avatar img")[0];
    // console.log(friendImg);
    let imgIndex = Math.floor(Math.random() * 8);
    friendImg.src = `${friendsImagesLinks[imgIndex]}`;
    // console.log(friendImg);
    friendsName.textContent = `Spud ${i + 1}`;
    friendsList.appendChild(newSeparator);
    friendsList.appendChild(newFriend);
  }
};
populateFriends();

const populateRooms = () => {
  const gamesList = document.querySelector(".games__list");
  const room = document.querySelectorAll(".room")[0];
  const gamesSeparator = document.querySelectorAll(".games__separator")[0];
  for (let i = 0; i < 20; i++) {
    const newRoom = room.cloneNode(true);
    const newSeparator = gamesSeparator.cloneNode(true);
    const roomTitle = newRoom.querySelector(".room__title");
    roomTitle.textContent = `Тайтл ${i + 1}`;

    // const roomMembers = newRoom.querySelectorAll('.')
    const roomMemberAvatars = newRoom.querySelectorAll(".room__member img");
    roomMemberAvatars.forEach((roomMemberAvatar) => {
      let imgIndex = Math.floor(Math.random() * 37);
      roomMemberAvatar.src = `${roomMembersImagesLinks[imgIndex]}`;
      roomMembersImagesLinks;
    });  

    gamesList.appendChild(newRoom);
    gamesList.appendChild(newSeparator);
  }
};
populateRooms();

const populateEvents = () => {
  const eventsList = document.querySelector(".feed__list");
  const event = document.querySelectorAll(".event")[0];
  for (let i = 0; i < 20; i++) {
    const newEvent = event.cloneNode(true);
    eventsList.appendChild(newEvent);

    const emitter = newEvent.querySelector(".event__emitter");
    emitter.textContent = `Butterbean ${i + 1}`;

    const time = newEvent.querySelector(".event__time");
    let minutes = time.innerText.slice(3);
    let hours = time.innerText.slice(0, 2);
    console.log(hours)
    minutes = Number(minutes) - (i + 1);
    time.textContent = `${hours}:${minutes}`;
  }
};
populateEvents();

// const populateFirstRoomMembers = () => {
//   const roomMembers = document.querySelectorAll(".room__members-list")[0];
//   const member = document.querySelectorAll(".room__member")[0];
//   for (let i = 0; i < 10; i++) {
//     const newMember = member.cloneNode(true);
//     roomMembers.appendChild(newMember);
//   }
// };
// populateFirstRoomMembers();