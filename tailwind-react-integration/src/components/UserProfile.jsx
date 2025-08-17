function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 sm:p-6 md:p-8 max-w-sx sm:max-w-sm mx-auto my-8 sm:my-12 md:my-16 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto"/>
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-800 mt-3 mb-2 sm:mt-4 sm:mb-3">John Doe</h1>
      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;