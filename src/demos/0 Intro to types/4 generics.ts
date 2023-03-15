interface User {
  id: number;
  name: string;
}

type ProjectStatus = "draft" | "launched" | "completed" | "cancelled";

interface Project {
  id: number;
  status: ProjectStatus;
}

interface ApiResponse<T> {
  data?: T;
  isError: boolean;
  isLoading: boolean;
}

const userApiResponse: ApiResponse<User> = {
  data: {
    id: 1,
    name: "Kyle",
  },
  isError: false,
  isLoading: false,
};

const projectApiResponse: ApiResponse<Project> = {
  data: {
    id: 1,
    status: "launched",
  },
  isError: false,
  isLoading: false,
};
