import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et st uptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Reecha Singh",
    username: "reecha_singh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        commentInput: "This App is Working Fine...Love It.",
        username: "shrinkhla",
        fullName: "Shrinkhla Rajpoot",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650928/Matrix%20images/h2utlwdasy45ppp6tm4r.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "At vero eos et st uptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Mahesh Deshmukh",
    username: "mahesh_deshmukh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        commentInput: "Hello Everyone..",
        username: "pritam_kmr",
        fullName: "Pritam Kumar",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "At vero eos et st uptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Shrinkhla Rajpoot",
    username: "shrinkhla",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content:
      "At  laborum et dolorum t officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Shubham Soni",
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "At vero eos et st uptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Himadri Shah",
    username: "himadri",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        commentInput: "Making App In React Is Fun",
        username: "pritam_kmr",
        fullName: "Pritam Kumar",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    content:
      "At vero eos et st uptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Reecha Singh",
    username: "reecha_singh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content:
      "At  laborum et dolorum t officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Shubham Soni",
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        commentInput: "Profile Pic is Awesome..",
        username: "shrinkhla",
        fullName: "Shrinkhla Rajpoot",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650928/Matrix%20images/h2utlwdasy45ppp6tm4r.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        commentInput: "Making App In React Is Fun",
        username: "pritam_kmr",
        fullName: "Pritam Kumar",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "At vero eos et st uptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Himadri Shah",
    username: "himadri",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        commentInput: "Welcome Back..",
        username: "pritam_kmr",
        fullName: "Pritam Kumar",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        commentInput: "Howz the Trip..",
        username: "pritam_kmr",
        fullName: "Pritam Kumar",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "At vero eos et st uptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Pritam Kumar",
    username: "pritam_kmr",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
];
