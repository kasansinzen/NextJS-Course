import { NextPage } from "next";
import { useRouter } from "next/router";

const SelectedClientProjectPage: NextPage = () => {
  const router = useRouter();

  return <div>
    <h1>The Proejct Page for a Specific Proejct for a Selected Client</h1>
  </div>
}

export default SelectedClientProjectPage;