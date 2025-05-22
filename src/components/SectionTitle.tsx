
import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  highlight?: string;
  id?: string;
}

const SectionTitle = ({ children, highlight, id }: SectionTitleProps) => (
  <h2
    id={id}
    className="section-title"
  >
    {typeof children === "string" && highlight ? (
      <>
        {children.split(highlight)[0]}
        <span className="highlight">{highlight}</span>
        {children.split(highlight)[1]}
      </>
    ) : (
      children
    )}
  </h2>
);

export default SectionTitle;
