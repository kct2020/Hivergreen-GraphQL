import type { Account } from "@cap/sdk/graph"
import { getDefaultSortOrder } from "@refinedev/antd"
import { CrudSorting } from "@refinedev/core"
import { Table, TableProps } from "antd"
import dayjs from "dayjs"

export interface AccountListProps {
  tableProps: TableProps<Account>
  sorters: CrudSorting
}

export const AccountList: React.FC<AccountListProps> = ({
  tableProps,
  sorters,
}) => (
  <Table {...tableProps} rowKey="id">
    <Table.Column
      dataIndex="createdAt"
      title="Created At"
      render={value => dayjs(parseInt(value)).format("LLL")}
      sorter
      defaultSortOrder={getDefaultSortOrder("createdAt", sorters)}
    />
    <Table.Column<Account> dataIndex="id" title="ID" />
  </Table>
)
