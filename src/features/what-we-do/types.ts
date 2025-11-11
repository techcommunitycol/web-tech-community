export type WhatWeDoItem = {
  icon: string;
  slug: string;
  title: string;
  desc: string;
  details: {
    problem: string;
    solution: string[];
    outcomes: string[];
    tech?: string[];
  };
};
