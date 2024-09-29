import { FC } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import type { Router, Navigation } from "@toolpad/core";
import {
  MenuBook,
  SupervisedUserCircleOutlined,
  VerifiedUser,
} from "@mui/icons-material";
import { useRouter } from "next/router";

const NAVIGATION: Navigation = [
  {
    segment: "admin/orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "admin/menu",
    title: "Add Menu",
    icon: <MenuBook />,
  },
  {
    segment: "admin/roles",
    title: "Roles",
    icon: <VerifiedUser />,
  },

  {
    segment: "admin/users",
    title: "Users",
    icon: <SupervisedUserCircleOutlined />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const AdminNavbar = ({ children }: any) => {
  const { push } = useRouter();
  const [pathname, setPathname] = React.useState("/admin");
  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => {
        setPathname(String(path));
        push(path);
        console.log({ path });
      },
    };
  }, [pathname]);
  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: "MUI",
      }}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>{children}</DashboardLayout>
    </AppProvider>
  );
  return <>admin navbar</>;
};
