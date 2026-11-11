function filterSidebar({category,setCategory}){
    return(
        <div className="filter-sidebar">
            <h3>Filter Products</h3>
            <h4>Category</h4>

            <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Dresses">Dresses</option>
                <option value="Tops">Tops</option>
                <option value="shirts">shirts</option>
                <option value="Trousers">Trousers</option>
               <option value="Co-ord Sets">Co-ord Sets</option>

                

            </select>

            <h4>Maximum price</h4>
            <input type="number"  placeholder="Enter maximum price"
            value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
    )
}
export default filterSidebar