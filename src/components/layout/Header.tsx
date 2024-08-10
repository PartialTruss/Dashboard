import { CurrentUser } from "./current-user";
import { Layout, Space } from "antd";

// interface HeaderProps {
//   theme: "light" | "dark";
//   setTheme: (theme: "light" | "dark") => void;
// }

const Header = () => {
  const headerStyles: React.CSSProperties = {
    background: "#fff",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 24px",
    position: "sticky",
    top: 0,
    zIndex: 999,
  };

  return (
    <div>
      <Layout.Header style={headerStyles}>
        <Space align="center" size="middle">
          {/* <Button
            onClick={() => {
              props.setTheme(props.theme === "light" ? "dark" : "light");
            }}
            icon={props.theme === "light" ? <FaRegMoon /> : <FaRegSun />}
          /> */}
          <CurrentUser />
        </Space>
      </Layout.Header>
    </div>
  );
};

export default Header;
