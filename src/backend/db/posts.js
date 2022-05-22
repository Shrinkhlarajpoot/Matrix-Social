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
      image:null,
      imageAlt:"",
      likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),

          username: "pritam_kmr",
          fullName: "Pritam Kumar",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
          createdAt: "2022-5-15",
          updatedAt: formatDate(),
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        },

        {
          _id: uuid(),

          username: "shubhamsoni",
          fullName: "Shubham Soni",
          profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652651013/Matrix%20images/hza58otqkgg7peroimdj.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    fullName: "Reecha Singh",
    username: "reecha_singh",
    createdAt: "2022-5-10",
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
      "Coding in react is soo amazing",
      image:"https://res.cloudinary.com/ds6cgk1wy/image/upload/v1653243161/matrix%20images/lala_qzvnw3.webp",
      imageAlt:"UseMemo",
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Shubham Soni",
    username: "shubhamsoni",
    createdAt: "2022-5-16",
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
    image:null,
    imageAlt:"",
    content:
      "At vero eos et st uptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),

          username: "pritam_kmr",
          fullName: "Pritam Kumar",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
          createdAt: "2022-5-17",
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    fullName: "Mahesh Deshmukh",
    username: "mahesh_deshmukh",
    createdAt: "2021-5-16",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        commentInput: "Hello Everyone..",
        username: "pritam_kmr",
        fullName: "Pritam Kumar",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
        createdAt: "2022-5-17",
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
      image:null,
      imageAlt:"",
      likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          commentInput: "Hello Everyone..",
          username: "pritam_kmr",
          fullName: "Pritam Kumar",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
          createdAt: "2022-5-17",
          updatedAt: formatDate(),
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        },
        {
          _id: uuid(),
          username: "reecha_singh",
          fullName: "Reecha Singh",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650944/Matrix%20images/t8rsnkxpvlyqouypgs8k.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },

        {
          _id: uuid(),
          username: "himadri",
          fullName: "Himadri Shan",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650964/Matrix%20images/yoptotgqsaosmfderm91.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
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
      image:null,
      imageAlt:"",
      likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          username: "reecha_singh",
          fullName: "Reecha Singh",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650944/Matrix%20images/t8rsnkxpvlyqouypgs8k.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },

        {
          _id: uuid(),
          username: "himadri",
          fullName: "Himadri Shan",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650964/Matrix%20images/yoptotgqsaosmfderm91.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
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
      image:null,
      imageAlt:"",
      likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          username: "reecha_singh",
          fullName: "Reecha Singh",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650944/Matrix%20images/t8rsnkxpvlyqouypgs8k.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },

        {
          _id: uuid(),
          username: "himadri",
          fullName: "Himadri Shan",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650964/Matrix%20images/yoptotgqsaosmfderm91.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    fullName: "Himadri Shah",
    username: "himadri",
    createdAt: "2022-5-14",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        commentInput: "Making App In React Is Fun",
        username: "pritam_kmr",
        fullName: "Pritam Kumar",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
        createdAt: "2022-5-15",
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
      image:null,
      imageAlt:"",
      likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),

          username: "shubhamsoni",
          fullName: "Shubham Soni",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },

        {
          _id: uuid(),
          username: "himadri",
          fullName: "Himadri Shan",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650964/Matrix%20images/yoptotgqsaosmfderm91.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
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
      "At vero eos et st uptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      image:null,
      imageAlt:"",
      likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          username: "pritam_kmr",
          fullName: "Pritam Kumar",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },

        {
          _id: uuid(),
          username: "shubhamsoni",
          fullName: "Shubham Soni",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652651013/Matrix%20images/hza58otqkgg7peroimdj.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },

        {
          _id: uuid(),
          username: "himadri",
          fullName: "Himadri Shan",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650964/Matrix%20images/yoptotgqsaosmfderm91.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
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
      image:null,
      imageAlt:"",
      likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          username: "himadri",
          fullName: "Himari Shan",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650964/Matrix%20images/yoptotgqsaosmfderm91.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },

        {
          _id: uuid(),
          username: "shubhamsoni",
          fullName: "Shubham Soni",
          profileImage:
            "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652651013/Matrix%20images/hza58otqkgg7peroimdj.jpg",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    fullName: "Pritam Kumar",
    username: "pritam_kmr",
    createdAt: "2022-5-17",
    updatedAt: formatDate(),
    comments: [],
  },
];
