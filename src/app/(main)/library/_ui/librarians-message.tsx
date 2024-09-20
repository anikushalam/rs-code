import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import React from "react";

const LibrarianMessage = ({ message }: { message: string }) => {
  return (
    <div>
      <Heading>Librians Message</Heading>
      <Content>{message}</Content>
    </div>
  );
};

export default LibrarianMessage;
