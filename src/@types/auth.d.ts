export interface IsignInProps {
  email: string;
  password: string;
}

export interface IsignUpProps {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface Itech {
  title: string;
  status: string;
}

export interface Iwork {
  title: string;
  descripton: string;
  deploy_url: string;
}

export interface Iuser {
  id: string;
  name: string;
  email: string;
  bio: string;
  contact: string;
  course_module: string;
  techs: Itech[];
  works: Iwork[];
}
