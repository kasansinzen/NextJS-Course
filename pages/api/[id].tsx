import { NextApiRequest, NextApiResponse } from "next";
import { buildFeedbackPath, extractFeedback } from "./feedback";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query?.id;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectFeedback = feedbackData.find((feedback: any) => feedback.id == id);

  res.status(200).json({feedback: selectFeedback});
}

export default handler;