import styled from "styled-components";

export const AppContainer = styled.div`
    height: 100vh;
    display: grid;
    place-content: center;
    color: ${({theme}) => theme.colors.text};
    background: ${({theme}) => theme.colors.backgroundPage}`;