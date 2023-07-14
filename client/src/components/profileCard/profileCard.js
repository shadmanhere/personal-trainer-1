const ProfileCard = ({ profilePicture, name, weight, height, location }) => {
  return (
    <div
      id="profile-pic-container"
      className="border border-slate-200 shadow-lg flex-1 rounded-lg overflow-hidden"
    >
      <img src={profilePicture} />
      <div className="flex flex-col items-start p-3">
        <h1 className="text-2xl">{name}</h1>
        <div className="flex">
          <h2 className="text-xl text-green-700 font-semibold">{weight}</h2>,
          <h2 className="text-xl text-green-700 font-semibold ml-1">{height}</h2>
        </div>
        <h3 className="font-light text-sm">{location}</h3>
      </div>
    </div>
  );
};

export default ProfileCard;