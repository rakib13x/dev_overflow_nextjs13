import Profile from "@/components/forms/Profile";
import { ParamsProps } from "@/types";

const Page = async ({ params }: ParamsProps) => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Profile</h1>

      <div className="mt-9">
        <Profile />
      </div>
    </>
  );
};

export default Page;
