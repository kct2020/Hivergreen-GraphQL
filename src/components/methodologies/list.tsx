import type { Methodology } from "@cap/sdk/graph"
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

export const MethodologyList: React.FC<
  IResourceComponentsProps<GetListResponse>
> = () => {
  const { tableProps, sorters } = useTable<Methodology, HttpError>({
    resource: "methodology",
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
      <Table.Column<Methodology>
        sorter
        defaultSortOrder={getDefaultSortOrder("updatedAt", sorters)}
        dataIndex="updatedAt"
        title="Updated At"
        render={value => (
          <DateField format="LLL" value={dayjs(parseInt(value))} />
        )}
      />
      <Table.Column<Methodology> dataIndex={["owner", "id"]} title="Owner" />
      <Table.Column<Methodology> dataIndex="id" title="ID" />
      <Table.Column<Methodology>
        title="Actions"
        dataIndex="actions"
        render={(_, record) => (
          <Space>
            <ShowButton
              recordItemId={record.id}
              resource="methodology"
              size="small"
            >
              View
            </ShowButton>
            <EditButton
              recordItemId={record.id}
              resource="methodology"
              size="small"
            />
          </Space>
        )}
      />
    </Table>
  )
}
