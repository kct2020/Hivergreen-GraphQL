import { IResourceComponentsProps, GetListResponse } from "@refinedev/core";
import { AntdInferencer } from "@refinedev/inferencer/antd";

export const CertificateList: React.FC<IResourceComponentsProps<GetListResponse<{}>>> = () => {
    return <AntdInferencer />;
};
