
import type { NextPage } from "next";
import { getSession, signIn, useSession } from "next-auth/react";



const Home: NextPage = () => {
  const { data } = useSession();

  console.log("here is DATA", data);



  return (
    <div>
      <button onClick={()=>{
        signIn("google")
      }}>Sign in</button>
    </div>
  );
};

export default Home;
