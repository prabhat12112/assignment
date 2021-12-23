const tabledata = () => {
    const searchData = [];
    const tableE1 = document.getElementById('table-data');
    Array.from(tableE1.children[1].children).forEach(_bodyRowE1 => {
        searchData.push(Array.from(_bodyRowE1.children).map(_cellE1 => {
            return _cellE1.innerHTML;
        }));
    });
    return searchData;

}
const createSearchElement = () => {
    const e1 = document.createElement('input');
    e1.classList.add('do-search-input');
    e1.id = 'do-search-input';
    return e1;
}
const search = (arr , searchTerm) => {
    if(!searchTerm) return arr;
    return arr.filter(_row => {
        return _row.find(_item => _item.toLowerCase().includes(searchTerm.toLowerCase()));
    });
}
const refreshTable = (data) => {
    const tableBody = document.getElementById('table-data').children[1];
    tableBody.innerHTML = '';

    data.forEach(_row => {
        const curRow = document.createElement('tr');
        _row.forEach(_dataItem => {
            const curCell = document.createElement('td');
            curCell.innerText = _dataItem;
            curRow.appendChild(curCell);
        });
        tableBody.appendChild(curRow);
    });
}
const init = () => {
    document.getElementById('search-tool').appendChild(createSearchElement());
    const initialtabledata = tabledata();
    const searchInput = document.getElementById('do-search-input');
    searchInput.addEventListener('keyup', (e) => {
        refreshTable(search(initialtabledata , e.target.value));
    });
}
init();
