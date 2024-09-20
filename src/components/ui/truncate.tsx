import { useEffect, useState } from "react";
import Content from "./content";
// import Content from "./Content";

const TruncateText = ({
  text,
  maxLength = 650,
}: {
  text: string;
  maxLength?: number;
}) => {
  const [truncate, setTruncate] = useState(false);
  const [fullText, setFullText] = useState("");
  useEffect(() => {
    setFullText(text);
    setTruncate(text.length > maxLength);
  }, [text, maxLength]);

  return (
    <>
      {truncate ? (
        <Content className="m-0">{`${text?.slice(0, maxLength)}...`}</Content>
      ) : (
        <Content className="m-0">{fullText}</Content>
      )}
    </>
  );
};
export default TruncateText;
