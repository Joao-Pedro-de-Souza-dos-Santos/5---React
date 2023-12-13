import styled from "styled-components";

export const ButtonContainer = styled.button`
    height: 56px;
    width: 120px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.backgroundButton};`;