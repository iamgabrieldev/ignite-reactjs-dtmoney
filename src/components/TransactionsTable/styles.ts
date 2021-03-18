import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;

    border-spacing: 0 0.5rem;

    th {
      padding: 1rem 2rem;

      font-weight: 400;

      color: var(--text-body);

      text-align: left;

      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;

      color: var(--text-body);

      border: 0;
      border-radius: 0.25rem;

      background: var(--shape);

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
