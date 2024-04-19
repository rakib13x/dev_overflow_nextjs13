import { getUserAnswers } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const AnswersTab = async ({ userId }: Props) => {
  const result = await getUserAnswers({
    userId,
  });

  console.log(result);
  return <div>AnswersTab</div>;
};

export default AnswersTab;
