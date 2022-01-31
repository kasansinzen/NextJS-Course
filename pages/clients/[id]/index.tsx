import { NextPage } from "next";
import { useRouter } from "next/router";

const ClientProjectPage: NextPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push("/clients/kasansin/project-a");
  }

  return <div>
    <h1>The Projects of a Given Client</h1>
    <button onClick={loadProjectHandler}>Load Project A</button>
  </div>
}

export default ClientProjectPage;