import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "Shrinkhla Rajpoot",
    username: "shrinkhla",
    password: "shrinkhla11",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "This is Shrinkhla,A web Developer from India",
    website: "https://shrinkhla-rajpoot99.netlify.app/",
    following: [
      {
        _id: uuid(),
        fullName: "Shubham Soni",
        username: "shubhamsoni",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652651013/Matrix%20images/hza58otqkgg7peroimdj.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Shubham Soni",
        username: "shubhamsoni",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652651013/Matrix%20images/hza58otqkgg7peroimdj.jpg",
      },
      {
        _id: uuid(),
        fullName: "Reecha Singh",
        username: "reecha_singh",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650944/Matrix%20images/t8rsnkxpvlyqouypgs8k.jpg",
      },
    ],
    profileImage:
      "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650928/Matrix%20images/h2utlwdasy45ppp6tm4r.jpg",
  },
  {
    _id: uuid(),
    fullName: "Shubham Soni",
    username: "shubhamsoni",
    password: "shubham456",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "This is Shubham Soni",
    website: "https://www.google.com",
    following: [
      {
        _id: uuid(),
        fullName: "Mahesh Deshmukh",
        username: "mahesh_deshmukh",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650981/Matrix%20images/syv3gu537rodxw5apj11.jpg",
      },
      {
        _id: uuid(),
        fullName: "Shrinkhla Rajpoot",
        username: "shrinkhla",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650928/Matrix%20images/h2utlwdasy45ppp6tm4r.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Shrinkhla Rajpoot",
        username: "shrinkhla",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650928/Matrix%20images/h2utlwdasy45ppp6tm4r.jpg",
      },
    ],
    profileImage:
      "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652651013/Matrix%20images/hza58otqkgg7peroimdj.jpg",
  },

  {
    _id: uuid(),
    fullName: "Reecha Singh",
    username: "reecha_singh",
    password: "reecha",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "This Reecha,Assistant System Enginner",
    website: "https://www.linkedin.com/in/reecha-singh-265905186/",
    following: [
      {
        _id: uuid(),
        fullName: "Himadri Shah",
        username: "Himadri",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650964/Matrix%20images/yoptotgqsaosmfderm91.jpg",
      },
      {
        _id: uuid(),
        fullName: "Pritam Kumar",
        username: "pritam_kmr",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
      },
      {
        _id: uuid(),
        fullName: "Shrinkhla Rajpoot",
        username: "shrinkhla",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650928/Matrix%20images/h2utlwdasy45ppp6tm4r.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Shubham Soni",
        username: "shubhamsoni",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652651013/Matrix%20images/hza58otqkgg7peroimdj.jpg",
      },
      {
        _id: uuid(),
        fullName: "Himadri Shah",
        username: "Himadri",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650964/Matrix%20images/yoptotgqsaosmfderm91.jpg",
      },
    ],
    profileImage:
      "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650944/Matrix%20images/t8rsnkxpvlyqouypgs8k.jpg",
  },
  {
    _id: uuid(),
    fullName: "Mahesh Deshmukh",
    username: "mahesh_deshmukh",
    password: "mahesh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "This is Mahesh,Web Developer",
    website: "https://www.linkedin.com/in/mahesh-deshmukh-413830185/",
    following: [
      {
        _id: uuid(),
        fullName: "Pritam Kumar",
        username: "pritam_kmr",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Shubham Soni",
        username: "shubhamsoni",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652651013/Matrix%20images/hza58otqkgg7peroimdj.jpg",
      },
    ],
    profileImage:
      "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650981/Matrix%20images/syv3gu537rodxw5apj11.jpg",
  },

  {
    _id: uuid(),
    fullName: "Himadri Shah",
    username: "himadri",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "This is Himadri,Web Developer",
    website: "https://www.linkedin.com/in/himadri2110/",

    following: [
      {
        _id: uuid(),
        fullName: "Reecha Singh",
        username: "reecha_singh",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650944/Matrix%20images/t8rsnkxpvlyqouypgs8k.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Reecha Singh",
        username: "reecha_singh",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650944/Matrix%20images/t8rsnkxpvlyqouypgs8k.jpg",
      },

      {
        _id: uuid(),
        fullName: "Pritam Kumar",
        username: "pritam_kmr",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
      },
    ],
    profileImage:
      "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650964/Matrix%20images/yoptotgqsaosmfderm91.jpg",
  },
  {
    _id: uuid(),
    fullName: "Pritam Kumar",
    username: "pritam_kmr",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "This is Pritam,A Web Developer",
    website: "https//www.linkedin.com/in/pritam-kumar-0ab3431bb/",
    following: [
      {
        _id: uuid(),
        fullName: "Reecha Singh",
        username: "reecha_singh",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650944/Matrix%20images/t8rsnkxpvlyqouypgs8k.jpg",
      },
      {
        _id: uuid(),
        fullName: "Himadri Shah",
        username: "Himadri",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650964/Matrix%20images/yoptotgqsaosmfderm91.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Reecha Singh",
        username: "reecha_singh",
        profileImage:
          "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650944/Matrix%20images/t8rsnkxpvlyqouypgs8k.jpg",
      },
    ],
    profileImage:
      "https://res.cloudinary.com/ds6cgk1wy/image/upload/v1652650995/Matrix%20images/ubmb2eqkuevjweoloww8.jpg",
  },
];
