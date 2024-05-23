"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";

type Props = {};
type Payment = {
  name: string;
  subjectID: string;
  GPA: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "subjectID",
    header: "Subject ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "GPA",
    header: "GPA",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("GPA") === "Low",
            "bg-orange-200": row.getValue("GPA") === "Average",
            "bg-green-200": row.getValue("GPA") === "Good",
          })}
        >
          {row.getValue("GPA")}
        </div>
      );
    },
  },
];

const data: Payment[] = [
  {
    name: "Introduction to Computing",
    subjectID: "IT064IU",
    GPA: "Good",
  },
  {
    name: "Algorithms and Data Structures",
    subjectID: " IT013IU",
    GPA: "Average",
  },
  {
    name: " Principles of Database Management",
    subjectID: "IT079IU",
    GPA: "Good",
  },
  {
    name: "Software Engineering",
    subjectID: "IT076IU",
    GPA: "Low",
  },
];

export default function OrdersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Scores" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
