import * as React from "react";
import {
    Pagination
} from 'react-admin'

export const CustomUrlField = ({ record = {}, source }) =>
    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${record[source]}`} target="_blank" rel="noreferrer">
        {record[source]}
    </a>;

export const CustomPagination = props => <Pagination {...props} />
