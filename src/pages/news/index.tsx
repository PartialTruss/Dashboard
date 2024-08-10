import { Avatar, Button, Card, Col, Flex, Image, Row, Space } from "antd";
import React, { useState } from "react";
import useInfo from "@/hooks/useInfo";
import useImage from "@/hooks/useImage"; // Import the FetchImage component
import useAvatars from "@/hooks/useAvatars"; // Import the FetchImage component
import LoadingState from "@/components/loading/Loading";

interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

const NewsPage = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);

  const { isLoading, error, data } = useInfo({ page, pageSize });
  const imageLinks = useImage();
  const userAvatars = useAvatars();

  if (isLoading) return <LoadingState />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Row gutter={[12, 12]}>
        {data?.articles?.map((article: Article, index: number) => (
          <Col key={index} span={12} sm={24} xs={24} md={12} lg={12}>
            <Card style={{ height: "400px" }} hoverable={true}>
              {imageLinks[index] && (
                <Image
                  style={{ objectFit: "cover" }}
                  width={"100%"}
                  height={200}
                  src={imageLinks[index]}
                />
              )}
              <Flex gap={10} style={{ marginTop: "10px" }}>
                {userAvatars[index] && (
                  <Avatar size="small" src={userAvatars[index]} />
                )}
                <Space style={{ fontWeight: "bold" }}>
                  <p>{article.author}</p>
                  <p>{article.publishedAt}</p>
                </Space>
              </Flex>
              <p>{article.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "16px",
        }}
      >
        <Button
          size="large"
          style={{ width: "100px" }}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          type="primary"
        >
          Previous
        </Button>
        <Button
          style={{ width: "100px" }}
          size="large"
          onClick={() => setPage(page + 1)}
          type="primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default NewsPage;
