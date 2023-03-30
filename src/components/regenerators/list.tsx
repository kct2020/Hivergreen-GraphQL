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

export const RegeneratorList: React.FC<
  IResourceComponentsProps<GetListResponse<{}>>
> = () => {
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
        sorter
        defaultSortOrder={getDefaultSortOrder("updatedAt", sorters)}
        dataIndex="updatedAt"
        title="Updated At"
        render={value => (
          <DateField format="LLL" value={dayjs(parseInt(value))} />
        )}
      />
      <Table.Column<Regenerator> dataIndex={["owner", "id"]} title="Owner" />
      <Table.Column<Regenerator> dataIndex="id" title="ID" />
      <Table.Column<Regenerator>
        title="Actions"
        dataIndex="actions"
        render={(_, record) => (
          <Space>
            <ShowButton size="small" recordItemId={record.id}>
              View
            </ShowButton>
            <EditButton size="small" recordItemId={record.id} />
          </Space>
        )}
      />
    </Table>
  )
}
