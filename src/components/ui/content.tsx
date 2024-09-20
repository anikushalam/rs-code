import React from "react";
import { twMerge } from "tailwind-merge";

function Content({
  className,
  children,
}: {
  className?: string;
  children: string;
}) {
  const replaceUrls = (text: string) => {
    if (typeof text !== "string") {
      return text;
    }

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        const url = part.trim();
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {url}
          </a>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  return (
    <div
      className={twMerge(
        "mx-2 text-justify leading-normal whitespace-break-spaces",
        className
      )}
    >
      {replaceUrls(children)}
    </div>
  );
}

export default Content;
