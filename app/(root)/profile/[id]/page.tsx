import { getUserInfo } from "@/lib/actions/user.action";
import { URLProps } from "@/types";
import { auth } from "@clerk/nextjs";

const page = async ({ params, searchParams }: URLProps) => {
  const { userId: clerkId } = auth();
  const userInfo = await getUserInfo({ userId: params.id });
  return <div>page</div>;
};

export default page;
