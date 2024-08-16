import { formatDate, formatDistance, parseISO } from "date-fns";
import { cn } from "@/lib/utils"; 
import React from 'react'; // 确保导入 React

type ChangelogItem = {
  date: string;
  changes: string[];
};
export function ChangelogSection({ items, className }: { items: ChangelogItem[], className?: string }) {
  return (
    <section id="更新日志" className={cn(className)}>
      <div className="w-full text-left">
        {items?.map((item, i) => (
          <div key={i}>
            {i > 0 && <hr className="my-4 border" />}
            <h3
              className="opacity-50"
              title={formatDate(parseISO(item.date), "yyyy-MM-dd")}
            >
              {formatDistance(parseISO(item.date), new Date(), {
                addSuffix: true,
              })}
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              {item.changes.map((change, j) => (
                <li key={j}>{change}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
