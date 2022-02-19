import { GetServerSideProps, NextPage } from "next";

const UserIdPage: NextPage<any> = (props) => {
  return <h1>{props.id}</h1>
}

export default UserIdPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {params} = context;
  const userId = (params as any).id;

  return {
    props: {id: `userid-${userId}`}
  }
}