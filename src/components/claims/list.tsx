import type { Claim } from "@cap/sdk/graph"
import { ShowButton, getDefaultSortOrder } from "@refinedev/antd"
import { CrudSorting } from "@refinedev/core"
import { Table, TableProps } from "antd"
import dayjs from "dayjs"
import { useRouter } from "next/router"

export interface ClaimListProps {
  tableProps: TableProps<Claim>
  sorters: CrudSorting
}

export const ClaimList: React.FC<ClaimListProps> = ({
  tableProps,
  sorters,
}) => {
  const router = useRouter()

  return (
    <Table {...tableProps} rowKey="id">
      <Table.Column
        dataIndex="createdAt"
        title="Created At"
        render={value => dayjs(parseInt(value)).format("LLL")}
        sorter
        defaultSortOrder={getDefaultSortOrder("createdAt", sorters)}
      />
      <Table.Column dataIndex="id" title="ID" />
      <Table.Column<Claim>
        title="Time Range"
        render={(_, record) =>
          [record.validFrom, record.validTo]
            .map(date => dayjs(parseInt(date)).format("LL"))
            .join(" – ")
        }
      />
      <Table.Column dataIndex="value" title="Value" />
      {router.asPath.includes("claim") && (
        <Table.Column<Claim>
          dataIndex={["regenerator", "id"]}
          title="Regenerator"
          render={(value, record) => (
            <ShowButton
              recordItemId={record.id}
              resource="regenerator"
              size="small"
            >
              {value}
            </ShowButton>
          )}
        />
      )}
      <Table.Column<Claim>
        title="Actions"
        dataIndex="actions"
        render={(_, record) => (
          <ShowButton recordItemId={record.id} resource="claim" size="small">
            View
          </ShowButton>
        )}
      />
    </Table>
  )
}
