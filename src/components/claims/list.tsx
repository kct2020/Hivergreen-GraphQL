import { Claim } from "@cap/sdk/graph"
import {
  DateField,
  EditButton,
  ShowButton,
  TextField,
  getDefaultSortOrder,
  useTable,
} from "@refinedev/antd"
import {
  CrudFilters,
  GetListResponse,
  HttpError,
  IResourceComponentsProps,
} from "@refinedev/core"
import { DatePicker, Space, Table } from "antd"

interface FilterVariables {
  valid: [string, string]
  regenerators: string[]
}

export const ClaimList: React.FC<
  IResourceComponentsProps<GetListResponse<Claim>>
> = () => {
  const { tableProps, sorters } = useTable<Claim, HttpError, FilterVariables>({
    pagination: {
      pageSize: 25,
    },
    sorters: {
      initial: [{ field: "createdAt", order: "desc" }],
    },
    onSearch(data) {
      const filters: CrudFilters = []

      if (data.regenerators.length) {
        filters.push({
          field: "regenerator",
          operator: "in",
          value: data.regenerators,
        })
      }

      return filters
    },
  })

  return (
    <Table {...tableProps} rowKey="id">
      <Table.Column dataIndex="id" title="ID" />
      <Table.Column dataIndex="value" title="Value" />
      <Table.Column
        dataIndex="createdAt"
        title="Created At"
        render={value => <DateField format="LLL" value={value} />}
        defaultSortOrder={getDefaultSortOrder("createdAt", sorters)}
      />
      <Table.Column dataIndex="signer" title="Signer" />
      <Table.Column<Claim>
        dataIndex="valid"
        title="Time Range"
        render={(_, record) => (
          <DatePicker.RangePicker value={[record.validFrom, record.validTo]} />
        )}
      />
      <Table.Column<Claim>
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
