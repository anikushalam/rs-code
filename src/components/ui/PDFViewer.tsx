import { fileShowUrl } from "@/lib/BaseUrl";
import { Button } from "./button";

const PDFViewer = ({ file, setActive }: { file: string; setActive?: any }) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col w-full">
      <div className="w-full h-screen">
        <Button
          onClick={() => setActive(false)}
          className="border-primary hover:border-primary hover:border-[2px]  hover:text-primary mb-2"
        >
          Back
        </Button>
        <iframe
          src={`${fileShowUrl}/${file}`}
          width="100%"
          height="100%"
          className="md:w-4/5 w-full"
        />
      </div>
    </div>
  );
};

export default PDFViewer;
