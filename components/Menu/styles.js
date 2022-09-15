import styled from 'styled-components';

export const Container = styled.nav`
    width: 100vw;
    background-color: #fff;
    box-shadow: 0 0 5px 2px rgb(0 0 0 / 20%);

    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 12px 0 0;

`;

export const ImageWrapper = styled.div`
    max-height: 300px;
`;

export const MenuList = styled.ul`
    list-style: none;
    display: flex;

    & li {
        margin-left: 12px;
        cursor: pointer;
    }
`;