import React from "react";
import styles from "Paginator.module.css";
import classNames from "classnames";

const PaginatorButton = (props) => {

    const { active, updatePage, children } = props;

    return (
        <button
        onClick={updatePage}
            className={classNames(styles["paginator__button"], {
                [styles.active]: active
            })}
        ></button>
    );
};

export default PaginatorButton;