import { useLocation } from 'react-router-dom'

const SearchResults = () => {
    const location = useLocation()
    const query = new URLSearchParams(location.search).get('q')

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Search results for: {query}</h2>
            {/* Search your items, users, posts, etc. */}
        </div>
    )
}
export default SearchResults;