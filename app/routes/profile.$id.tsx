import { redirect, useLoaderData } from "@remix-run/react";
import { findUser, IUser } from "data/user";

export const loader = async ({ params }: { params: { id: string } }) => {
  const currentUser = findUser(params.id);
  if (!currentUser) {
    return redirect("/");
  }
  return new Response(JSON.stringify(currentUser), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const Profile = () => {
  const user = useLoaderData<IUser>();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-3xl text-white mb-4">
            {user.name.charAt(0)}
          </div>
          <h1 className="text-2xl font-bold text-gray-700 mb-4">{user.name}</h1>
          <div className="space-y-3 w-full">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="text-gray-700">{user.email}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm font-medium text-gray-500">Username</p>
              <p className="text-gray-700">{user.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
