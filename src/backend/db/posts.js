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
    "Most of those who have succeeded in life can trace their success back to the essential education they obtained from parents, teachers and/ or friends.",
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
"Started Leaning React...Hooks are amazing" ,     image:"https://res.cloudinary.com/ds6cgk1wy/image/upload/v1653243161/matrix%20images/lala_qzvnw3.webp",
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
        commentInput: "All the best..",
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
        commentInput: "Share your journey..",
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
      "A goal is a dream with a deadline. ...",
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
        commentInput: "Inspiratonal...",
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
      "You are never too old to set another goal or to dream a new dream. ...",
      image:null,
      imageAlt:"",
      likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          commentInput: "yeah..Age doesn't matter when you have great dreams.",
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
"Every day, think as you wake up, today I am fortunate to be alive, I have a precious human life, I am not going to waste it. I am going to use all my energies to develop myself, to expand my heart out to others; to achieve enlightenment for the benefit of all beings. I am going to have kind thoughts towards others, I am not going to get angry or think badly about others. I am going to benefit others as much as I can",
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
      "A friend and I were talking about the control that comes with thinking life is as it should be with us in it. But the truth is, life is exactly planned.",
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
        commentInput: "Just like the way how you told the reality of life in few lines.",
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
    content:"If you strive for perfect love, you will learn to see the face of God in your spouse, your children, and your fellow human. This should be our goal as humankind.",
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
      "If you learn to develop an abundant mentality you will not be envious of others, you will celebrate their successes, you will share in their joys and pains. Don't see life as a competition but as complementary. ",
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
        commentInput: "Thats really Inspiratinal..",
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
        commentInput: "Great lines about life..Love it.",
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
      "To get where we want to go in life, we have to keep at it. We have to create a vision, make choices based on what moves us most swiftly toward our goals, and go after them with determination and single-mindedness.",
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
