function SearchInput({ onChange }) {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative flex items-center gap-2">
      <Search className="absolute left-4 text-slate-400" size={18} />
      <input
        type="text"
        placeholder="Search tasks"
        className="search-input pl-12"
        onChange={handleInputChange}
      />
    </div>
  );
}
