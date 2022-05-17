export const UserAvatar = ({ user }) => {
const userAvatar = user?.profileImage;
  const alternateAvatar = user?.fullName
    ?.split(" ")
    ?.map((name) => name[0].toUpperCase());
  return (
    <span className="">
      {userAvatar ? (
        <img
          src={userAvatar}
          alt={user.username}
          className="h-12 w-12 rounded-full"
        />
      ) : (
        <span className="h-12 w-12 text-sm flex justify-center items-center rounded-full bg-primary text-terniarycolor  ">
          {alternateAvatar?.join("")}
        </span>
      )}
    </span>
  );
};
