import Single from "../../components/Single";
import { singleUser } from "../../utils/mockData";

const User = () => {
  //Fetch data and send to Single Component

  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
