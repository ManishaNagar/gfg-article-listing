function CategoryFilter({ category, setCategory }) {
  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="All">All</option>
      <option value="Web Development">Web Development</option>
      <option value="DSA">DSA</option>
      <option value="Core CS">Core CS</option>
    </select>
  );
}

export default CategoryFilter;
