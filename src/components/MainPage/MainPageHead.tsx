import { EmptyContainer, TableHead, TableHeadText } from "./styled-components/styled-componets-mainpage"


const MainPageHead = () => {
    return (
        <TableHead>
            <EmptyContainer></EmptyContainer>
            <TableHeadText>Name</TableHeadText>
            <TableHeadText>Price</TableHeadText>
            <TableHeadText>Percent<br/>Change 24h</TableHeadText>
            <TableHeadText>Trading volume</TableHeadText>
            <TableHeadText>Find address</TableHeadText>
        </TableHead>
    )
};

export default MainPageHead;