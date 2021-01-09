import * as React from "react";

const CustomUrlField = ({ record = {}, source }) =>
    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${record[source]}`} target="_blank" rel="noreferrer">
        {record[source]}
    </a>;

export default CustomUrlField;