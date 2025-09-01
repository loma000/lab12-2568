import { NavLink as RouterNavLink } from "react-router-dom";
 
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponentProps {
  userName: string;
  type?: "admin" | "student";
}
export type { SidebarComponentProps };
export default function Sidebar(sidebar: SidebarComponentProps) {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}

      <Group justify="center" pb="xs"  >
        <Indicator  inline size={16} offset={7} position="bottom-end" color="red" withBorder>
          <Avatar  size={40} src= "/loma.jpeg"   />
        </Indicator>
        <Text>
          User : {sidebar.userName} : {sidebar.type}
        </Text>
      </Group>
    </Stack>
  );
}
