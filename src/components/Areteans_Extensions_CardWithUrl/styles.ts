import styled, { css } from 'styled-components';

export const StyledCardContent = styled.div(() => {
  return css`
    display: flex;
    & > article {
      border: 0.0625rem solid #ccc;
      padding: 0.5rem;
      white-space: normal;
      background-color: transparent !important;
      margin-bottom: 0.25rem;
      height: 100%;
    }
    & dl:last-child {
      grid-template-columns: 1fr;
      gap: 0;
      padding-block-end: 0;
    }
    & dl:last-child > div,
    & dl:last-child > dd {
      padding-bottom: 0.5rem;
    }
  `;
});

export const MainCard = styled.div(
  ({ rendering, minWidth }: { rendering: string; minWidth: string }) => {
    if (rendering === 'horizontal') {
      return css`
        display: flex;
        padding-left: 0;
        padding-right: 0;
        flex-direction: row;
        flex-wrap: wrap;
        @media screen and (min-width: 1200px) {
          min-width: 1100px;
        }
        @media screen and (min-width: 1400px) {
          min-width: 1200px;
        }
        @media screen and (min-width: 1600px) {
          min-width: 1300px;
        }

        /* grid-template-columns: repeat(auto-fit, minmax(${minWidth}, 1fr));
        grid-gap: 1rem;
        grid-template-rows: repeat(1, 1fr);*/

        & article {
          flex: 1 0 calc(33.33% - 16px);
          max-width: calc(33.33% - 16px);

          background-color: transparent !important;
          margin-right: 16px;
          margin-bottom: 16px;
          @media screen and (max-width: 1024px) {
            flex: 1 0 calc(100% - 8px);
            max-width: 100%;
          }
        }
      `;
    }
    return css`
      @media screen and (min-width: ${minWidth}) {
        column-count: 1;
      }
      @media screen and (min-width: ${`calc(2*${minWidth})`}) {
        column-count: 2;
      }
      @media screen and (min-width: ${`calc(3*${minWidth})`}) {
        column-count: 3;
      }
      @media screen and (min-width: ${`calc(4*${minWidth})`}) {
        column-count: 4;
      }
      @media screen and (min-width: ${`calc(5*${minWidth})`}) {
        column-count: 5;
      }
      column-gap: 1rem;
      padding: 0 1rem 1rem;
      & > div {
        margin: 0;
        display: inline-block;
        margin-bottom: 0.5rem;
        width: 100%;
      }
    `;
  }
);

export const StyledButton = styled.button`
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
  padding-top: 8px;
  background: #fff;
  border: none;
  min-height: 250px;
  @media screen and (min-width: 1200px) {
    min-height: 274px;
  }
  @media screen and (min-width: 1400px) {
    min-height: 250px;
  }
  @media screen and (max-width: 1024px) {
    min-height: unset;
  }
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;

  & .application-name {
    background-color: #e8f5f3;
    padding: 4px 8px;
    border-left: 3px solid #00a98e;
  }
  & > .content-area {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .application-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 12px;
    & img {
      max-width: 100%;
    }
  }
  & h2 {
    margin-bottom: 16px;
    color: #0e1b62;
    text-align: left;
  }
  p {
    text-align: left;
  }
`;
