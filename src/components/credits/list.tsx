import type { Credit } from "@cap/sdk/graph"
import { ShowButton, getDefaultSortOrder } from "@refinedev/antd"
import { CrudSorting } from "@refinedev/core"
import { Table, TableProps } from "antd"
import dayjs from "dayjs"
import { useRouter } from "next/router"

export interface CreditListProps {
  tableProps: TableProps<Credit>
  sorters: CrudSorting
}

export const CreditList: React.FC<CreditListProps> = ({
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
      <Table.Column<Credit>
        title="Time Range"
        render={(_, record) =>
          [record.validFrom, record.validTo]
            .map(date => dayjs(parseInt(date)).format("LL"))
            .join(" – ")
        }
      />
      <Table.Column dataIndex="value" title="Value" />
      {!router.asPath.includes("claim") && (
        <Table.Column<Credit>
          dataIndex={["claim", "regenerator", "id"]}
          title="Regenerator"
          render={(value, record) => (
            <ShowButton
              recordItemId={record.claim.regenerator.id}
              resource="regenerator"
              size="small"
            >
              {value}
            </ShowButton>
          )}
        />
      )}
      {router.asPath.includes("methodology") ? (
        <Table.Column<Credit>
          dataIndex={["claim", "id"]}
          title="Claim"
          render={(value, record) => (
            <ShowButton
              recordItemId={record.claim.id}
              resource="claim"
              size="small"
            >
              {value}
            </ShowButton>
          )}
        />
      ) : (
        <Table.Column<Credit>
          dataIndex={["methodology", "id"]}
          title="Methodology"
          render={(value, record) => (
            <ShowButton
              recordItemId={record.methodology.id}
              resource="methodology"
              size="small"
            >
              {value}
            </ShowButton>
          )}
        />
      )}
      {/* <Table.Column<Credit>
        title="Actions"
        dataIndex="actions"
        render={(_, record) => (
          <Space>
            <EditButton
              hideText
              size="small"
              recordItemId={record.id}
              resource="credit"
            />
            <ShowButton
              hideText
              size="small"
              recordItemId={record.id}
              resource="credit"
            />
          </Space>
        )} */}
    </Table>
  )
}
