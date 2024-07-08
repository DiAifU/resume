import React from "react";

export function Section({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold mb-4 uppercase">{children}</h3>;
}

export function SectionCategory({ children }: { children: React.ReactNode }) {
  return <div className="mb-8">{children}</div>;
}
export function SectionCategoryTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h4 className="text-lg font-semibold whitespace-nowrap">{children}</h4>
  );
}

export function SectionCategorySubTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-gray-700">{children}</p>;
}

export function SectionCategoryContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="ml-8 mt-2">{children}</div>;
}
