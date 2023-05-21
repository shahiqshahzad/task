import avatarImg from "../../assets/images/user/avatar.jpeg";
import gamer from "../../assets/images/user/gamer.png";
import profilePic from "../../assets/images/user/profile.png";
const data = [
  {
    id: 1,
    name: "John Doe",
    Image: avatarImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 10,
    shares: 5,
    comments: [
      {
        id: 1,
        user: "Jane Smith",
        comment: "Great post!",
        userImage: profilePic,
      },
      { id: 2, user: "Mike Johnson", comment: "I agree!", userImage: gamer },
    ],
  },
  {
    id: 2,
    name: "Alice Smith",
    Image: avatarImg,
    text: "Sed ut perspiciatis unde omnis iste natus err.",
    likes: 5,
    shares: 2,
    comments: [
      { id: 1, user: "John Doe", comment: "Nice work!", userImage: profilePic },
      {
        id: 2,
        user: "Mike Johnson",
        comment: "Keep it up!",
        userImage: gamer,
      },
    ],
  },
];

export default data;
