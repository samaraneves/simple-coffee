import React from "react";
import ReactPlaceholder from "react-placeholder"
import "react-placeholder/lib/reactPlaceholder.css";

type CardPlaceholderProps = {
    ready?: boolean;
    children?: React.ReactNode;
}

const CardPlaceholder = ({ ready = false, children }: CardPlaceholderProps) => {
  return (
    <ReactPlaceholder type='media' rows={7} ready={ready}>
        {children}
    </ReactPlaceholder>
  )
}

export default CardPlaceholder