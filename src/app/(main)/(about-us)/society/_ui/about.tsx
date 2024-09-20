import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import React from "react";

const About = ({ name, content }: { name: string; content: string }) => {
  return (
    <Card className="shadow-none bg-background">
      <CardHeader>
        <CardTitle>
          <Heading>About {name}</Heading>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Content>{content}</Content>
      </CardContent>
    </Card>
  );
};

export default About;
