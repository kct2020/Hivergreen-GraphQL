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

import { regeneratorFields } from "./index"

export const RegeneratorList: React.FC<
  IResourceComponentsProps<GetListResponse<{}>>
> = () => {
  const { tableProps, sorters } = useTable<Regenerator, HttpError>({
    meta: {
      fields: regeneratorFields,
    },
    pagination: {
      pageSize: 25,
    },
    sorters: {
      initial: [{ field: "createdAt", order: "desc" }],
    },
  })

  return (
    <Table {...tableProps} rowKey="id">
      <Table.Column dataIndex="id" title="ID" />
      <Table.Column dataIndex="owner" title="Owner" />
      <Table.Column
        dataIndex="createdAt"
        title="Created At"
        render={value => <DateField format="LLL" value={value} />}
        defaultSortOrder={getDefaultSortOrder("createdAt", sorters)}
      />
      <Table.Column<Regenerator>
        title="Actions"
        dataIndex="actions"
        render={(_, record) => (
          <Space>
            <EditButton hideText size="small" recordItemId={record.id} />
            <ShowButton hideText size="small" recordItemId={record.id} />
          </Space>
        )}
      />
    </Table>
  )
}