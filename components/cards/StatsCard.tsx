import { Card, CardDescription } from "@/components/ui/card";
import { Users, Target, Network, BadgeCheck } from "lucide-react";

const stats = [
  {
    icon: <Users className="text-blue-500 w-8 h-8" />,
    label: "Connect with peers for jobs, projects and much more",
  },
  {
    icon: <Target className="text-green-500 w-8 h-8" />,
    label: "Build connections that help you grow!",
  },
  {
    icon: <Network className="text-yellow-500 w-8 h-8" />,
    label: "Network with peers for projects, interview preparation",
  },
  {
    icon: <BadgeCheck className="text-indigo-500 w-8 h-8" />,
    label: "Expert advice a one click away for jobs, mock interviews",
  },
];

export default function StatsCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 mt-[-20px]">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="p-6 flex items-center gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-[10px]"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700">
            {stat.icon}
          </div>
          <CardDescription className="text-gray-700 dark:text-gray-300">
            {stat.label}
          </CardDescription>
        </Card>
      ))}
    </div>
  );
}
