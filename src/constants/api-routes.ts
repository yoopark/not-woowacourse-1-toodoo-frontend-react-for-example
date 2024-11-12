const API_ROUTES = {
  TODOS: 'todos',
  TODO: (id: number) => `todos/${id}`,
} as const;

export { API_ROUTES };
