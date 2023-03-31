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
  IResourceComponentsProps<GetListResponse>
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
        dataIndex="updatedAt"
        defaultSortOrder={getDefaultSortOrder("updatedAt", sorters)}
        render={value => (
          <DateField format="LLL" value={dayjs(parseInt(value))} />
        )}
        sorter
        title="Updated At"
      />
      <Table.Column<Regenerator> dataIndex={["owner", "id"]} title="Owner" />
      <Table.Column<Regenerator> dataIndex="id" title="ID" />
      <Table.Column<Regenerator>
        dataIndex="actions"
        render={(_, record) => (
          <Space>
            <ShowButton recordItemId={record.id} size="small">
              View
            </ShowButton>
            <EditButton recordItemId={record.id} size="small" />
          </Space>
        )}
        title="Actions"
      />
    </Table>
  )
}
