import DashboardCard from "./DashboardCard";
import Objectives from "../Objectives";
import Observations from "../Observations";

const Profile = () => {
    return (
        <section className= "grid  grid-cols-2 gap-5 ">
           <DashboardCard title="Profile">
                <div className="flex flex-col space-y-6 items-center p-6">
                    {/* Profile Image */}
                    <div className="flex items-center justify-around w-full ">
                        <div className="relative">
                            <img 
                                alt="user-profile-picture" 
                                className="rounded-full h-40 w-40 object-cover border-4 border-white shadow-md" 
                                src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                            />
                        </div>

                        {/* User Info */}
                        <div className="text-center space-y-2">
                            <h2 className="text-3xl font-bold text-gray-800">John Doe</h2>
                            <a href="mailto:johndoe@email.com" className="text-blue-600 hover:underline">
                                johndoe@email.com
                            </a>
                            <p className="text-xs text-gray-500">25-06-2024</p>
                        </div>
                    </div>
                    {/* User Details */}
                    <div className="w-full  mx-auto space-y-4 px-4">
                        <div className="flex flex-col">
                            <span className="font-medium  mb-4 text-gray-700">Description:</span>
                            <span className="text-gray-600 text-sm">
                                A passionate web developer with a focus on frontend technologies, user experience, and performance.
                                A passionate web developer with a focus on frontend technologies, user experience, and performance.
                                A passionate web developer with a focus on frontend technologies, user experience, and performance.

                                A passionate web developer with a focus on frontend technologies, user experience, and performance.
                            </span>
                        </div>
                    </div>
                </div>
            </DashboardCard>

            <div className="grid grid-cols-1 gap-5">
            <DashboardCard title="Objectives">
                <Objectives/>
            </DashboardCard>
            <DashboardCard title="Observations">
                <Observations/>
            </DashboardCard>
            </div>
        </section>
    );
};

export default Profile;
