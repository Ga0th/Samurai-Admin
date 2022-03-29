import React from "react";
import { Skeleton } from "@mui/material";

export const SkeletonLoader = ({ rows, variant, animation }) => {
    return (
        <React.Fragment>
            {rows && [...Array(rows)].map((value, index) => {
                return (
                    <Skeleton key={`skeleton${index}`} variant={variant} animation={animation} />
                )
            })}
        </React.Fragment>
    )
}