import styled from 'styled-components';
import { CardStyles } from '../../components';

const GAP = 20;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${GAP}px;
    width: 1200px;
    margin: 0 auto;
    padding-top: 40px;

    ${CardStyles.Wrapper} {
        width: calc(100% / 3 - ${GAP}px * 2)
    }
`;