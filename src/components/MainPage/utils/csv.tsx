export const headers = [
    {label: 'ID', key: 'id'},
    {label: 'name', key: 'name'},
    {label: 'Current Price', key: 'current_price'},
    {label: 'Volume', key:'total_volume'}
];
export const csvDataComp = (currencies:any[]) => {
    let list:any[] =[]
    currencies.forEach(cur => 
        list.push({
            id: cur?.id,
            name: cur?.name,
            current_price: cur?.current_price,
            total_volume: cur?.total_volume
        })
        );
        return list
};