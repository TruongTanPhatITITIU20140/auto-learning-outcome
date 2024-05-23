/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Credits",
    amount: "120",
    discription: "+24 credits",
    icon: Users,
  },
  {
    label: "Total GPA",
    amount: "75",
    discription: "+30% from last semester",
    icon: Users,
  },
  {
    label: "Active Now",
    amount: "+3 courses",
    discription: "+19% from last semester",
    icon: CreditCard,
  },
  {
    label: "Estimated Earnings",
    amount: "CLO1",
    discription: "missing 20% to reach the goal",
    icon: CreditCard,
  },
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Probability, Statistic & Random Process",
    email: "Midterm",
    saleAmount: "86",
  },
  {
    name: "Philosophy Marx - Lenin",
    email: "Midterm",
    saleAmount: "60",
  },
  {
    name: "Algorithms and Data Structures",
    email: "Quiz",
    saleAmount: "39",
  },
  {
    name: "Computer Architecture",
    email: "Midterm",
    saleAmount: "56",
  },
  {
    name: " Object-Oriented Analysis and Design",
    email: "Quiz",
    saleAmount: "39",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p className="font-semibold">Recent Activity</p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard key={i} email={d.email} name={d.name} saleAmount={d.saleAmount} />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
