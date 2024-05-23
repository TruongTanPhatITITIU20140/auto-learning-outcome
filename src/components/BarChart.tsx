/** @format */
"use client";
import React from "react";
import { BarChart as BarGraph, ResponsiveContainer, XAxis, YAxis, Bar } from "recharts";

type Props = {};

const data = [
  {
    name: "IT064IU",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "IT064IU",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "IT017IU",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "IT091IU",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "PE018IU",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "IT082IU",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "IT024IU",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "MA026IU",
    total: Math.floor(Math.random() * 100),
  },
];

export default function BarChart({}: Props) {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis dataKey={"name"} tickLine={false} axisLine={false} stroke="#888888" fontSize={12} />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
}
