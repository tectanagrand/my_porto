import { FaReact, FaLaravel, FaAws, FaDocker, FaJava } from 'react-icons/fa';
import {
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiNginx,
  SiTypescript,
  SiJavascript,
} from 'react-icons/si';
import { RiTailwindCssFill, RiPhpFill } from 'react-icons/ri';
import { GrOracle } from 'react-icons/gr';
import { DiMysql } from 'react-icons/di';

const Icons = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  php: RiPhpFill,
  java: FaJava,
  react: FaReact,
  tailwind: RiTailwindCssFill,
  express: SiExpress,
  nestjs: SiNestjs,
  laravel: FaLaravel,
  postgres: SiPostgresql,
  oracle: GrOracle,
  mysql: DiMysql,
  aws: FaAws,
  docker: FaDocker,
  nginx: SiNginx,
};

export const IconLabels = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  php: 'PHP',
  java: 'Java',
  react: 'React',
  tailwind: 'Tailwind CSS',
  express: 'Express.js',
  nestjs: 'NestJS',
  laravel: 'Laravel',
  postgres: 'PostgreSQL',
  oracle: 'Oracle Database',
  mysql: 'MySQL',
  aws: 'AWS',
  docker: 'Docker',
  nginx: 'Nginx',
} satisfies Record<keyof typeof Icons, string>;

export default Icons;
