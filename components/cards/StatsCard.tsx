import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle, Award, Users, DollarSign } from "lucide-react";

const stats = [
  {
    icon: <CheckCircle className="text-green-500 w-8 h-8" />,
    number: "1500+",
    label: "Students Placed",
  },
  {
    icon: <Award className="text-red-500 w-8 h-8" />,
    number: "41 LPA",
    label: "Highest Salary",
  },
  {
    icon: <Users className="text-yellow-500 w-8 h-8" />,
    number: "450+",
    label: "Partner Companies",
  },
  {
    icon: <DollarSign className="text-blue-500 w-8 h-8" />,
    number: "7.2 LPA",
    label: "Average Salary",
  },
];

export default function StatsCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="p-4 flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md transition-colors"
        >
          <CardHeader className="flex items-center justify-center">
            {stat.icon}
          </CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
            {stat.number}
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
            {stat.label}
          </CardDescription>
        </Card>
      ))}
    </div>
  );
}
