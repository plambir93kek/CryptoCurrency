export const headers = [
    {label: 'address', key: 'address'},
    {label: 'balance', key: 'balance'},
    {label: 'id', key: 'id'},
];
export const csvDataComp = (balances:any[]) => {
    let list:any[] =[]
    balances.forEach(bal => 
        list.push({
            address: bal?.address,
            balance: bal?.balance,
            id: bal?.id,
        })
        );
        return list
};