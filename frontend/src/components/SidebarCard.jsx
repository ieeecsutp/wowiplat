const SidebarCard = ({ icon, description }) => {
  return(
    <button className="w-64 h-32 bg-[#7bc74d] rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">{icon}</h3>
      <p className=" text-sm">{description}</p>
    </button>
  )
};
export default SidebarCard;