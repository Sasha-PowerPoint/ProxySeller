import styled from 'styled-components';
import { CardStyles } from '../../components';

const GAP = 20;

export const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${GAP}px;


    ${CardStyles.Wrapper} {
        width: calc(100% / 3 - ${GAP}px * 2)
    }
`;