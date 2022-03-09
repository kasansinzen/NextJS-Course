import { GetStaticProps, NextPage } from "next";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";
import React from 'react'

const FeedbackPage: NextPage<{feedbackItems: any[]}> = (props) => {

  const [feedbackData, setFeedbackData] = React.useState<any>();

  const loadFeedbackHandler = (id: string) => {
    fetch(`/api/${id}`).then(response => response.json()).then(data => {
      setFeedbackData(data.feedback);
    });
  }

  return <React.Fragment>
    {feedbackData && <p>{feedbackData.email}</p>}
    <ul>
    {props.feedbackItems.map(item => <li key={item.id}>
      {item.text} <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Details</button>
    </li>)}
  </ul>
  </React.Fragment>
}

export const getStaticProps: GetStaticProps = () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data
    }
  }
}

export default FeedbackPage;