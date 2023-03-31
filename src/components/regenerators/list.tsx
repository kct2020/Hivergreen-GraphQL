import type { Regenerator } from "@cap/sdk/graph"
import {
  DateField,
  EditButton,
  ShowButton,
  getDefaultSortOrder,
  useTable,
} from "@refinedev/antd"
import {
  GetListResponse,
  HttpError,
  IResourceComponentsProps,
} from "@refinedev/core"
import { Space, Table } from "antd"
import dayjs from "dayjs"
import { useAccount } from "wagmi"

export const RegeneratorList: React.FC<
  IResourceComponentsProps<GetListResponse>
> = () => {
  const { address: account } = useAccount()
  const isOwner = (record: Regenerator) => account === record.owner.id

  const { tableProps, sorters } = useTable<Regenerator, HttpError>({
    resource: "regenerator",
    meta: {
      fields: ["id", "uri", "updatedAt", { owner: ["id"] }],
    },
    pagination: {
      pageSize: 50,
    },
    sorters: {
      initial: [{ field: "updatedAt", order: "desc" }],
    },
    queryOptions: {
      refetchInterval: 10 * 1000,
    },
  })

  return (
    <Table {...tableProps} rowKey="id">
      <Table.Column<Regenerator>
        dataIndex="updatedAt"
        defaultSortOrder={getDefaultSortOrder("updatedAt", sorters)}
        render={value => (
          <DateField format="LLL" value={dayjs(parseInt(value))} />
        )}
        sorter
        title="Updated At"
      />
      <Table.Column<Regenerator> dataIndex={["owner", "id"]} title="Owner" />
      <Table.Column<Regenerator>
        dataIndex="id"
        render={(id, record) => (
          <Space>
            <ShowButton resource="regenerator" recordItemId={id} size="small">
              View {id}
            </ShowButton>
            {isOwner(record) && (
              <EditButton
                resource="regenerator"
                recordItemId={id}
                size="small"
              />
            )}
          </Space>
        )}
        title="Actions"
      />
    </Table>
  )
}
