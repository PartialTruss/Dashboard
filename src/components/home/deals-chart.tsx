import { DollarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React, { useMemo } from "react";
import { Text } from "../text";
import { Area, AreaConfig } from "@ant-design/plots";
import { useList } from "@refinedev/core";
import { DASHBOARD_DEALS_CHART_QUERY } from "@/graphql/queries";
import { mapDealsData } from "@/utilities/helpers";
import { GetFieldsFromList } from "@refinedev/nestjs-query";
import { DashboardDealsChartQuery } from "@/graphql/types";

const DealsChart = () => {
  const { data } = useList<GetFieldsFromList<DashboardDealsChartQuery>>({
    resource: "dealStages",
    meta: {
      gqlQuery: DASHBOARD_DEALS_CHART_QUERY,
    },
  });

  const dealData = useMemo(() => {
    return mapDealsData(data?.data);
  }, [data?.data]);

  const config: AreaConfig = {
    isStack: false,
    data: dealData,
    xField: "timeText",
    yField: "value",
    seriesField: "state",
    animation: true,
    startOnZero: false,
    smooth: true,
    legend: {
      offsetY: -6,
    },
    yAxis: {
      tickCount: 4,
      label: {
        formatter: (v) => {
          return `$${Number(v) / 1000}k`;
        },
      },
    },
    tooltip: {
      formatter: (data) => {
        return {
          name: data.state,
          value: `$${Number(data.value) / 1000}k`,
        };
      },
    },
  };
  return (
    <div>
      <Card
        style={{ height: "100%" }}
        headStyle={{ padding: "8px 16px" }}
        bodyStyle={{ padding: "24px 24px 16px 24px" }}
        title={
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <DollarOutlined />
            <Text size="sm" style={{ marginLeft: "o.5rem" }}>
              Deals
            </Text>
          </div>
        }
      >
        <Area {...config} height={325} />
      </Card>
    </div>
  );
};

export default DealsChart;
