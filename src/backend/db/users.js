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
  },
  {
    _id: uuid(),
    fullName: "Guest User",
    username: "guest",
    password: "guest11",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    fullName: "Shubham Soni",
    username: "shubhamsoni",
    password: "shubham456",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    fullName: "Kylie Jenner",
    username: "kylie",
    password: "kylie456",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }, 
  {
    _id: uuid(),
    fullName:"Adarsh Balika",
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },




];
