"use client";

import React, { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { IUser } from "./fundsTable.type";
import { data } from "./funds.data";
import styles from "./funds.module.css";
import { themeColor } from "@/utils/constant";

const allColumns: TableColumn<IUser>[] = [
  {
    name: "Full Name",
    selector: (row) => row.fullName,
    sortable: true,
  },
  {
    name: "Email Address",
    selector: (row) => row.emailAddress,
    sortable: true,
  },
  {
    name: "Date Created",
    selector: (row) => row.dateCreated,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    cell: (row) => (
      <span
        className={
          row.status === "Active" ? styles.statusActive : styles.statusInactive
        }
      >
        {row.status}
      </span>
    ),
  },
  {
    name: "Role",
    selector: (row) => row.role,
    sortable: true,
  },
];

const customStyles = {
  headCells: {
    style: {
      fontWeight: "bold",
      backgroundColor: themeColor.tertiary,
    },
  },
  rows: {
    style: {
      minHeight: "48px",
      borderBottom: `1px solid ${themeColor.tertiary}`,
    },
  },
};

export const UserTable: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", update);
    update();
    return () => window.removeEventListener("resize", update);
  }, []);

  const columns = isMobile
    ? allColumns.filter((c) =>
        ["Full Name", "Email Address", "Status"].includes(c.name as string)
      )
    : allColumns;

  return (
    <div className={styles.tableWrapper}>
      <div className={styles["table-title"]}>Swap Funds</div>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
        paginationRowsPerPageOptions={[5, 10, 15]}
        defaultSortFieldId={1}
        responsive={true}
      />
    </div>
  );
};
