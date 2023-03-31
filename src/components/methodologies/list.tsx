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
import { useCallback } from "react"
import { useAccount } from "wagmi"

export const MethodologyList: React.FC<
  IResourceComponentsProps<GetListResponse>
> = () => {
  const { address: account } = useAccount()
  const isOwner = useCallback(
    (record: Methodology) => account === record.owner.id,
    [account],
  )

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
      <Table.Column<Methodology>
        title="Methodology"
        dataIndex="id"
        render={(id, record) => (
          <Space>
            <ShowButton recordItemId={id} resource="methodology" size="small">
              {id}
            </ShowButton>
            {isOwner(record) && (
              <EditButton
                recordItemId={id}
                resource="methodology"
                size="small"
              />
            )}
          </Space>
        )}
      />
    </Table>
  )
}
