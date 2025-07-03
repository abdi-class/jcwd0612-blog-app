import { apiCall } from "@/helper/apiCall";
import * as React from "react";

interface IArticleDetailPageProps {
  params: { title: string };
}

const getDetail = async (title: string) => {
  try {
    const res = await apiCall.get(
      `/articles?where=%60title%60%20%3D%20'${title}'`
    );
    console.log(res.data[0]);

    return res.data[0];
  } catch (error) {
    console.log(error);
  }
};

const ArticleDetailPage: React.FunctionComponent<
  IArticleDetailPageProps
> = async (props) => {
  const detailData = await getDetail(props.params.title);
  return (
    <div>
      <h1 className="text-5xl">{detailData?.title}</h1>
    </div>
  );
};

export default ArticleDetailPage;
