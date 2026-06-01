import UserIconSVG from "../../../../ui/icons/UserIcon";

function UserDropdown() {
    
  return (
    <button className="cursor-pointer rounded-[47px] py-2 px-2.5 active:bg-secondary-2 hover:bg-hover-button">
      <UserIconSVG color="white" />
    </button>
  );
}

export default UserDropdown