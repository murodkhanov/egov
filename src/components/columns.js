export const COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "ШАҲАР НОМИ",
    Footer: "ШАҲАР НОМИ",
    accessor: "city",
    sticky: "left",
  },
  {
    Header: "ТУМАН НОМИ",
    Footer: "ТУМАН НОМИ",
    accessor: "distnict",
    sticky: "left",
  },
  {
    Header: "МАНЗИЛИ",
    Footer: "МАНЗИЛИ",
    accessor: "address",
  },
  {
    Header: "БАЛАНСДА САҚЛОВЧИ",
    Footer: "БАЛАНСДА САҚЛОВЧИ",
    accessor: "balance",
  },
  {
    Header: "АВТОТУРАРГОҲ ЭГАСИ",
    Footer: "АВТОТУРАРГОҲ ЭГАСИ",
    accessor: "owner",
  },
  {
    Header: "ТЕЛЕФОН РАҚАМИ",
    Footer: "TELEFON RAQAMI",
    accessor: "phone",
  },
  // {
  //   Header: "ФОТОСУРАТИ",
  //   Footer: "ФОТОСУРАТИ",
  //   accessor: "image",
  // },
];

export const GROUPED_COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
  },
  {
    Header: "ШАҲАР НОМИ",
    Footer: "ШАҲАР НОМИ",
    columns: [
      {
        Header: "ШАҲАР НОМИ",
        Footer: "ШАҲАР НОМИ",
        accessor: "city",
        sticky: "left",
      },
      {
        Header: "ТУМАН НОМИ",
        Footer: "ТУМАН НОМИ",
        accessor: "distnict",
        sticky: "left",
      },
      {
        Header: "МАНЗИЛИ",
        Footer: "МАНЗИЛИ",
        accessor: "address",
      },
    ],
  },
];
