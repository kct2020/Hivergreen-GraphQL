import { IResourceComponentsProps, GetListResponse } from "@refinedev/core";
import { AntdInferencer } from "@refinedev/inferencer/antd";

export const AccreditationList: React.FC<IResourceComponentsProps<GetListResponse<{}>>> = () => {
    return <AntdInferencer />;
};
