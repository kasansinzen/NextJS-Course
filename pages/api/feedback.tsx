import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export const buildFeedbackPath = () => path.join(process.cwd(), 'data', 'feedback.json');
export const extractFeedback = (filePath: string) => {
  const fileData = fs.readFileSync(filePath);
  const data = fileData.toString() ? JSON.parse(fileData.toString()) : [{}];

  return data;
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    }
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({message: "Success!", feedback: newFeedback});
  }else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({feedback: data});
  }
}

export default handler;