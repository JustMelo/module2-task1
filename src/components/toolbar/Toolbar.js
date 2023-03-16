export default function Toolbar ( {filters, selected, onSelectFilter} ) {

  const filtersElement = [];

    filters.forEach(elem => {
      filtersElement.push(
        <button className="filters-button" key={elem} data-name={elem} disabled={selected === elem? true : false} onClick={onSelectFilter(elem)}>{elem}</button>
      )
    });
  
  return (
    <div>
      {filtersElement}
    </div>
  );
 
};