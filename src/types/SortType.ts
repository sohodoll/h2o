export type SortType = {
  type: 'id' | 'count';
  order: 'asc' | 'desc';
  search?: number | boolean;
};
