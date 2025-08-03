export default function SearchBar({ onSearch }) {
  return (
    <input 
      type="text" 
      placeholder="Enter GitHub username"
      onKeyDown={(e) => e.key === 'Enter' && onSearch(e.target.value)}
    />
  );
}