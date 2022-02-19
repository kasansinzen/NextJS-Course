import { GetServerSideProps, NextPage } from "next";

const UserProfilePage: NextPage<any> = (props) => {
  return <h1>I'm {props.username}</h1>
}

export default UserProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {params, req, res} = context;

  return {
    props: {
      username: "First"
    }
  }
}