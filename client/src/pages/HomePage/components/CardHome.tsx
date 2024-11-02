import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const CardHome = ({ title, description, icon: Icon }: Props) => {
  return (
    <Card className="w-[350px] h-[200px] text-left">
      <CardHeader>
        <CardTitle>
          <div className="text-blue-400 ">
            <Icon />
          </div>
          <h4 className="mt-2 text-lg">{title}</h4>
        </CardTitle>
        <CardDescription className="">
          <p className="text-base">{description}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CardHome;
