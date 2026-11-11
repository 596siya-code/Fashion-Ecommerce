function SortDropdown({ sortOption,setSortOption}){
    return(
        <div className="sort-dropdown">
            <label>Sort By :</label>
            <select value={sortOption}
            onChange={(e)=>e.target.value}>
            
            <option value="default">Default</option>
            <option value="lowToHigh"> Price : Low to High</option>
            <option value="hightolow">Price: High to Low</option>
          <option value=" name">Name : A to Z</option>


            </select>
            
             </div>
    )
}
export default SortDropdown