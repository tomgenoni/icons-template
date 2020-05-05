import React from "react";

function ModalContent({ data }) {
    return (
        <div>
            <div>{data.title}</div>
            <div>{data.description.short}</div>
            <div>{data.author}</div>
            <div>{data.description.long}</div>
        </div>
    );
}

export default ModalContent;
