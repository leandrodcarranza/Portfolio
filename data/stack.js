import { TbBrandCSharp, TbSql, TbApi } from "react-icons/tb";
import { SiDotnet, SiPostgresql, SiGithub, SiDocker, SiUml } from "react-icons/si";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { FaServer, FaLayerGroup, FaChartBar } from "react-icons/fa";

export const stack = [
  { name: "C#", icon: TbBrandCSharp },
  { name: "SQL", icon: TbSql },
  { name: ".NET", icon: SiDotnet },
  { name: "ASP.NET Core Web API", icon: FaServer },
  { name: "Entity Framework Core", icon: FaLayerGroup },
  { name: "REST API", icon: TbApi },
  { name: "SQL Server", icon: DiMsqlServer },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Power BI", icon: FaChartBar },
  { name: "GitHub", icon: SiGithub },
  { name: "Docker", icon: SiDocker },
  { name: "Visual Studio", icon: DiVisualstudio },
  { name: "UML", icon: SiUml },
];
