function SearchBar({searchTerm,SetSearchTerm}){
const HandleSearch =(event)=>{
    SetSearchTerm(event.target.value)
}
return(
    <div>
        <input type="text"  placeholder="search"
        value={searchTerm} onChange={HandleSearch}/>
    
    </div>
)

}
export default SearchBar