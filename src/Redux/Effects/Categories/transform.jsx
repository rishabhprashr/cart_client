export const transformCategory = (category) => ({
  id: category.id,
  name: category.name,
  createdAt: category.created_at,
  updatedAt: category.updated_at,
});